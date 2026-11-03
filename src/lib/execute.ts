// Server-side code execution. Each language lists its backends in order;
// a backend that is down or times out falls through to the next one.
// A compile error is a real answer, so it is returned without trying the next.

import type { RunnerId } from "./runners";

type Backend =
  | { service: "godbolt"; compiler: string; lang: string }
  | { service: "wandbox"; compiler: string }
  | { service: "kotlin"; version: string };

export type RunResult = {
  stdout: string;
  stderr: string;
  exitCode: number;
  ranOn: string;
};

const gb = (compiler: string, lang: string): Backend => ({ service: "godbolt", compiler, lang });
const wb = (compiler: string): Backend => ({ service: "wandbox", compiler });

const BACKENDS: Partial<Record<RunnerId, Backend[]>> = {
  python: [gb("python314", "python"), wb("cpython-3.14.0")],
  c: [gb("cg162", "c"), wb("gcc-13.2.0-c")],
  cpp: [gb("g162", "c++"), wb("gcc-13.2.0")],
  rust: [gb("r1990", "rust"), wb("rust-1.82.0")],
  go: [gb("gl1260", "go"), wb("go-1.23.2")],
  java: [gb("java2700", "java"), wb("openjdk-jdk-22+36")],
  // Compiler Explorer's Kotlin overflows the stack loading the standard library,
  // so it only stands in when the official playground service is down.
  kotlin: [{ service: "kotlin", version: "2.4.21" }, gb("kotlinc2220", "kotlin")],
  csharp: [gb("dotnet100csharpcoreclr", "csharp"), wb("mono-6.12.0.199")],
  swift: [gb("swift641", "swift")],
  ruby: [gb("ruby405", "ruby"), wb("ruby-3.4.9")],
  php: [wb("php-8.3.12")],
  r: [wb("r-4.4.1")],
  typescript: [wb("typescript-5.6.2")],
  bash: [wb("bash")],
  node: [wb("nodejs-20.17.0")],
};

const BACKEND_TIMEOUT_MS = 28_000;

export function canExecute(language: string): language is RunnerId {
  return language in BACKENDS;
}

// Both services compile Java from a file not named Main.java, which javac
// rejects for a public class. Dropping the modifier keeps lessons idiomatic.
function prepare(language: RunnerId, code: string) {
  return language === "java" ? code.replace(/^(\s*)public\s+(final\s+)?class\b/gm, "$1$2class") : code;
}

async function runGodbolt(b: Extract<Backend, { service: "godbolt" }>, code: string, stdin: string): Promise<RunResult> {
  const res = await fetch(`https://godbolt.org/api/compiler/${encodeURIComponent(b.compiler)}/compile`, {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    signal: AbortSignal.timeout(BACKEND_TIMEOUT_MS),
    body: JSON.stringify({
      source: code,
      lang: b.lang,
      options: {
        userArguments: "",
        executeParameters: { args: [], stdin },
        compilerOptions: { executorRequest: true },
        filters: { execute: true },
        tools: [],
        libraries: [],
      },
    }),
  });
  if (!res.ok) throw new Error(`Compiler Explorer answered ${res.status}`);

  type Lines = { text: string }[];
  type Payload = {
    didExecute?: boolean;
    code?: number;
    stdout?: Lines;
    stderr?: Lines;
    buildResult?: { stderr?: Lines; stdout?: Lines };
    execResult?: Payload;
  };
  const body = (await res.json()) as Payload;
  const r = body.execResult ?? body;
  const text = (lines?: Lines) => (lines ?? []).map((l) => l.text).join("\n");

  if (r.didExecute === false) {
    const build = r.buildResult ?? {};
    return {
      stdout: "",
      stderr: text(build.stderr) || text(build.stdout) || text(r.stderr) || "The program could not be compiled.",
      exitCode: r.code ?? 1,
      ranOn: "Compiler Explorer",
    };
  }
  return { stdout: text(r.stdout), stderr: text(r.stderr), exitCode: r.code ?? 0, ranOn: "Compiler Explorer" };
}

// Wandbox allows about six runs in a burst, counted per server rather than per
// visitor, then answers 429 for several seconds.
const WANDBOX_RETRY_DELAYS_MS = [4_000, 8_000];

async function postWandbox(body: string) {
  for (const delay of [...WANDBOX_RETRY_DELAYS_MS, null]) {
    const res = await fetch("https://wandbox.org/api/compile.json", {
      method: "POST",
      headers: { "content-type": "application/json" },
      signal: AbortSignal.timeout(BACKEND_TIMEOUT_MS),
      body,
    });
    if (res.status !== 429 || delay === null) return res;
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
  throw new Error("unreachable");
}

async function runWandbox(b: Extract<Backend, { service: "wandbox" }>, code: string, stdin: string): Promise<RunResult> {
  const res = await postWandbox(JSON.stringify({ compiler: b.compiler, code, stdin }));
  if (!res.ok) throw new Error(`Wandbox answered ${res.status}`);

  const r = (await res.json()) as {
    status?: string;
    signal?: string;
    compiler_error?: string;
    program_output?: string;
    program_error?: string;
  };
  return {
    stdout: r.program_output ?? "",
    stderr: [r.compiler_error, r.program_error, r.signal].filter(Boolean).join("\n"),
    exitCode: Number(r.status ?? (r.signal ? 1 : 0)),
    ranOn: "Wandbox",
  };
}

async function runKotlin(b: Extract<Backend, { service: "kotlin" }>, code: string): Promise<RunResult> {
  const res = await fetch(`https://api.kotlinlang.org/api/${b.version}/compiler/run`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    signal: AbortSignal.timeout(BACKEND_TIMEOUT_MS),
    body: JSON.stringify({ args: "", files: [{ name: "Main.kt", text: code, publicId: "" }], confType: "java" }),
  });
  if (!res.ok) throw new Error(`Kotlin Playground answered ${res.status}`);

  const body = (await res.json()) as {
    errors?: Record<string, { message: string; severity: string; interval?: { start?: { line: number } } }[]>;
    exception?: { fullName?: string; message?: string } | null;
    text?: string;
  };
  const compileErrors = Object.values(body.errors ?? {})
    .flat()
    .filter((e) => e.severity === "ERROR")
    .map((e) => `Line ${(e.interval?.start?.line ?? 0) + 1}: ${e.message}`);
  const stream = (name: string) =>
    [...(body.text ?? "").matchAll(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`, "g"))].map((m) => m[1]).join("");
  const crash = body.exception ? `${body.exception.fullName ?? "Exception"}: ${body.exception.message ?? ""}` : "";
  return {
    stdout: stream("outStream"),
    stderr: [...compileErrors, stream("errStream"), crash].filter(Boolean).join("\n"),
    exitCode: compileErrors.length || crash ? 1 : 0,
    ranOn: "Kotlin Playground",
  };
}

// Compilers color their messages for terminals; the codes are noise on a web page.
function clean(result: RunResult): RunResult {
  const strip = (text: string) => text.replace(/\u001b\[[0-9;]*[A-Za-z]/g, "");
  return { ...result, stdout: strip(result.stdout), stderr: strip(result.stderr) };
}

export async function execute(language: RunnerId, source: string, stdin: string): Promise<RunResult> {
  const code = prepare(language, source);
  let lastError: unknown;
  for (const backend of BACKENDS[language] ?? []) {
    try {
      if (backend.service === "godbolt") return clean(await runGodbolt(backend, code, stdin));
      if (backend.service === "kotlin") return clean(await runKotlin(backend, code));
      return clean(await runWandbox(backend, code, stdin));
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError ?? new Error("No backend for this language");
}

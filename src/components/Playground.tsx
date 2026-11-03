"use client";

import type { SqlJsStatic } from "sql.js";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import { getRunner, RUNNERS, type RunnerId } from "@/lib/runners";
import { Icon } from "./Icon";
import { Bone, EditorLines } from "./Skeleton";

const Editor = dynamic(() => import("./Editor"), {
  ssr: false,
  loading: () => <div className="editor editor-loading"><EditorLines /></div>,
});

declare global {
  interface Window {
    initSqlJs?: (config: { locateFile: (file: string) => string }) => Promise<SqlJsStatic>;
    loadPyodide?: (config: { indexURL: string }) => Promise<Pyodide>;
  }
}

type Pyodide = {
  loadPackagesFromImports: (code: string, options: { messageCallback: (message: string) => void }) => Promise<unknown>;
  runPythonAsync: (code: string) => Promise<unknown>;
  setStdout: (options: { batched: (line: string) => void }) => void;
  setStderr: (options: { batched: (line: string) => void }) => void;
};

type LogLine = { kind: string; text: string };
type Table = { columns: string[]; rows: unknown[][] };
type Output = {
  stdout?: string;
  stderr?: string;
  tables?: Table[];
  note?: string;
  error?: string;
};

// Forwards console calls and errors out of the sandboxed preview frame.
const BRIDGE = `<script>(function(){
function send(kind,args){parent.postMessage({akademy:1,kind:kind,text:[].map.call(args,function(x){
if(typeof x==='string')return x;try{return JSON.stringify(x)}catch(e){return String(x)}}).join(' ')},'*')}
['log','info','warn','error'].forEach(function(m){var o=console[m];console[m]=function(){send(m,arguments);o.apply(console,arguments)}});
addEventListener('error',function(e){send('error',[e.message])});
addEventListener('unhandledrejection',function(e){send('error',[String(e.reason)])});
})();<\/script>`;

function buildDocument(language: RunnerId, code: string) {
  if (language === "javascript") {
    return `<!DOCTYPE html><html><head>${BRIDGE}</head><body><script>${code.replace(/<\/script/gi, "<\\/script")}<\/script></body></html>`;
  }
  return `<!DOCTYPE html><html><head><meta charset="utf-8">${BRIDGE}</head><body>${code}</body></html>`;
}

let sqlEngine: Promise<SqlJsStatic> | undefined;

function loadSql() {
  sqlEngine ??= new Promise<SqlJsStatic>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "/sql-wasm.js";
    script.onload = () => window.initSqlJs!({ locateFile: (f) => `/${f}` }).then(resolve, reject);
    script.onerror = () => reject(new Error("The SQL engine could not load."));
    document.head.appendChild(script);
  });
  return sqlEngine;
}

async function runSql(code: string): Promise<Output> {
  const SQL = await loadSql();
  const db = new SQL.Database();
  try {
    const results = db.exec(code);
    return {
      tables: results.map((r) => ({ columns: r.columns, rows: r.values })),
      note: results.length ? undefined : `Done. ${db.getRowsModified()} rows changed. No rows to show.`,
    };
  } catch (err) {
    return { error: err instanceof Error ? err.message : String(err) };
  } finally {
    db.close();
  }
}

const PYODIDE_URL = "https://cdn.jsdelivr.net/pyodide/v0.29.5/full/";
let pyodideEngine: Promise<Pyodide> | undefined;

function loadPython() {
  pyodideEngine ??= new Promise<Pyodide>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `${PYODIDE_URL}pyodide.js`;
    script.onload = () => window.loadPyodide!({ indexURL: PYODIDE_URL }).then(resolve, reject);
    script.onerror = () => reject(new Error("Python could not load. Check your connection."));
    document.head.appendChild(script);
  });
  return pyodideEngine;
}

async function runPyodide(code: string): Promise<Output> {
  const out: string[] = [];
  const err: string[] = [];
  try {
    const py = await loadPython();
    py.setStdout({ batched: (line) => out.push(line) });
    py.setStderr({ batched: (line) => err.push(line) });
    await py.loadPackagesFromImports(code, { messageCallback: () => {} });
    await py.runPythonAsync(code);
  } catch (e) {
    err.push(e instanceof Error ? e.message : String(e));
  }
  return { stdout: out.join("\n"), stderr: err.join("\n") };
}

async function runRemote(language: RunnerId, code: string, stdin: string): Promise<Output> {
  const res = await fetch("/api/run", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ language, code, stdin }),
  }).catch(() => null);
  if (!res) return { error: "Could not reach the server. Check your connection." };
  const body = await res.json().catch(() => null);
  if (!res.ok || !body) return { error: body?.error ?? "The run failed. Try again." };
  return {
    stdout: body.stdout,
    stderr: body.stderr,
    note: `Exit code ${body.exitCode} · ran on ${body.ranOn}`,
  };
}

export function Playground({ initialLanguage, initialCode, title }: { initialLanguage: RunnerId; initialCode?: string; title?: string }) {
  const [language, setLanguage] = useState<RunnerId>(initialLanguage);
  const [code, setCode] = useState(initialCode ?? getRunner(initialLanguage)!.hello);
  const [stdin, setStdin] = useState("");
  const [running, setRunning] = useState(false);
  const [output, setOutput] = useState<Output | null>(null);
  const [srcDoc, setSrcDoc] = useState<string | null>(null);
  const [frameKey, setFrameKey] = useState(0);
  const [logs, setLogs] = useState<LogLine[]>([]);
  const frame = useRef<HTMLIFrameElement>(null);

  const runner = getRunner(language)!;

  const run = useCallback(
    async (lang: RunnerId, source: string) => {
      const kind = getRunner(lang)!.kind;
      setOutput(null);
      setLogs([]);
      if (kind === "preview") {
        setSrcDoc(buildDocument(lang, source));
        setFrameKey((k) => k + 1);
        return;
      }
      setSrcDoc(null);
      setRunning(true);
      if (kind === "sqlite") setOutput(await runSql(source));
      else if (kind === "pyodide") setOutput(await runPyodide(source));
      else setOutput(await runRemote(lang, source, stdin));
      setRunning(false);
    },
    [stdin],
  );

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.source !== frame.current?.contentWindow || !e.data?.akademy) return;
      setLogs((l) => [...l, { kind: String(e.data.kind), text: String(e.data.text) }].slice(-200));
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  // Browser-side languages show their result as soon as the page opens.
  const started = useRef(false);
  useEffect(() => {
    if (started.current || (runner.kind !== "preview" && runner.kind !== "sqlite")) return;
    started.current = true;
    void run(language, code);
  }, [code, language, run, runner.kind]);

  const pickLanguage = (id: RunnerId) => {
    const next = getRunner(id)!;
    setLanguage(id);
    setCode(next.hello);
    setOutput(null);
    setLogs([]);
    setSrcDoc(null);
    if (next.kind === "preview" || next.kind === "sqlite") void run(id, next.hello);
  };

  return (
    <div className="pg">
      <div className="pg-bar">
        <label>
          <span className="sr-only">Language</span>
          <select value={language} onChange={(e) => pickLanguage(e.target.value as RunnerId)}>
            {RUNNERS.map((r) => (
              <option key={r.id} value={r.id}>
                {r.label}
              </option>
            ))}
          </select>
        </label>
        <span className="pg-file">{title ?? runner.filename}</span>
        <span className="pg-hint">Ctrl + Enter to run</span>
        <button className="btn btn-green" onClick={() => run(language, code)} disabled={running}>
          <Icon name="run" size={15} />{running ? "Running…" : "Run"}
        </button>
      </div>
      <div className="pg-panes">
        <Editor language={language} value={code} onChange={setCode} onRun={() => run(language, code)} />
        <div className="pg-result">
          <p className="pg-label">RESULT</p>
          {runner.kind === "remote" && (
            <details className="pg-stdin">
              <summary>Program input (stdin)</summary>
              <textarea value={stdin} onChange={(e) => setStdin(e.target.value)} rows={3} aria-label="Program input" placeholder="Text your program reads, one value per line" />
            </details>
          )}
          {srcDoc !== null && (
            <iframe key={frameKey} ref={frame} title="Result" sandbox="allow-scripts allow-forms allow-modals" srcDoc={srcDoc} className="pg-frame" />
          )}
          {logs.length > 0 && (
            <pre className="pg-out" aria-label="Console">
              {logs.map((l, i) => (
                <span key={i} className={l.kind === "error" ? "err" : undefined}>
                  {l.text}
                  {"\n"}
                </span>
              ))}
            </pre>
          )}
          {running && (
            <div className="pg-skeleton" aria-hidden="true"><Bone w="46%" /><Bone w="72%" /><Bone w="30%" /></div>
          )}
          {running && (
            <p className="pg-wait" role="status">
              {runner.kind === "pyodide"
                ? "Running in your browser. The first run downloads Python, which can take a minute."
                : "Compiling and running. Compiled languages can take up to 20 seconds."}
            </p>
          )}
          {output?.error && <p className="pg-error" role="alert">{output.error}</p>}
          {output?.tables?.map((table, i) => (
            <div className="table-wrap" key={i}>
              <table>
                <thead>
                  <tr>{table.columns.map((c) => <th key={c}>{c}</th>)}</tr>
                </thead>
                <tbody>
                  {table.rows.map((row, r) => (
                    <tr key={r}>{row.map((v, c) => <td key={c}>{v === null ? "NULL" : String(v)}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
          {output?.stdout && <pre className="pg-out">{output.stdout}</pre>}
          {output?.stderr && <pre className="pg-out err">{output.stderr}</pre>}
          {output?.note && <p className="pg-note">{output.note}</p>}
          {!running && !output && srcDoc === null && <p className="pg-wait">Press Run to see the output here.</p>}
        </div>
      </div>
    </div>
  );
}

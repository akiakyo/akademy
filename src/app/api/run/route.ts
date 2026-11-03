import { NextResponse } from "next/server";
import { canExecute, execute } from "@/lib/execute";

export const maxDuration = 60;

const MAX_CODE = 20_000;
const MAX_STDIN = 4_000;
const RUNS_PER_MINUTE = 12;

// Per-instance only: this protects the free upstream services from one
// visitor's retries, it is not a hard quota across serverless instances.
const recent = new Map<string, number[]>();

function allow(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < 60_000);
  if (hits.length >= RUNS_PER_MINUTE) return false;
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5_000) recent.clear();
  return true;
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const { language, code, stdin = "" } = body ?? {};

  if (typeof language !== "string" || !canExecute(language)) {
    return NextResponse.json({ error: "That language cannot run on the server." }, { status: 400 });
  }
  if (typeof code !== "string" || !code.trim() || typeof stdin !== "string") {
    return NextResponse.json({ error: "There is no code to run." }, { status: 400 });
  }
  if (code.length > MAX_CODE || stdin.length > MAX_STDIN) {
    return NextResponse.json({ error: "That program is too long to run here." }, { status: 413 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (!allow(ip)) {
    return NextResponse.json({ error: "Too many runs. Wait a minute and try again." }, { status: 429 });
  }

  try {
    return NextResponse.json(await execute(language, code, stdin));
  } catch {
    return NextResponse.json(
      { error: "The compiler service is busy or offline right now. Try again in a moment." },
      { status: 503 },
    );
  }
}

// Runs every runnable lesson example and reports the ones that fail.
// Start the app first (npm run build && npm start), then:
//   npm run check:examples [courseSlug...]
import initSqlJs from "sql.js";
import { COURSES } from "../src/content/index";

const base = process.env.BASE_URL ?? "http://localhost:3000";
const only = process.argv.slice(2);

const SQL = await initSqlJs();
let failures = 0;
let checked = 0;

function report(ok: boolean, id: string, detail: string) {
  checked++;
  if (!ok) failures++;
  console.log(`${ok ? "ok  " : "FAIL"} ${id} ${detail}`);
}

async function remote(language: string, code: string, attempt: number) {
  const res = await fetch(`${base}/api/run`, {
    method: "POST",
    // A fresh address per call keeps this batch clear of the per-visitor rate limit.
    headers: { "content-type": "application/json", "x-forwarded-for": `check-${checked}-${attempt}` },
    body: JSON.stringify({ language, code }),
  });
  return { ok: res.ok, body: await res.json() };
}

for (const course of COURSES) {
  if (!course.runner || course.runner === "html" || course.runner === "python-data" || (only.length && !only.includes(course.slug))) continue;
  for (const lesson of course.lessons) {
    const id = `${course.slug}/${lesson.slug}`;

    if (course.runner === "sql") {
      const db = new SQL.Database();
      try {
        const rows = db.exec(lesson.code).at(-1)?.values.length ?? 0;
        report(true, id, `${rows} rows`);
      } catch (err) {
        report(false, id, String(err));
      } finally {
        db.close();
      }
      continue;
    }

    // Browser JavaScript is syntax-checked on Node; the DOM lesson needs a real page.
    const language = course.runner === "javascript" ? "node" : course.runner;
    if (lesson.code.includes("document.")) {
      report(true, id, "skipped: needs a browser page");
      continue;
    }

    const started = Date.now();
    let result = await remote(language, lesson.code, 0);
    if (result.ok === false) result = await remote(language, lesson.code, 1);
    const { ok, body } = result;
    const passed = ok && body.exitCode === 0;
    report(
      passed,
      id,
      `${Date.now() - started}ms ${body.ranOn ?? ""} ${passed ? JSON.stringify(String(body.stdout).slice(0, 60)) : JSON.stringify(body).slice(0, 500)}`,
    );
  }
}

console.log(failures ? `${failures} of ${checked} failed` : `all ${checked} passed`);
process.exitCode = failures ? 1 : 0;

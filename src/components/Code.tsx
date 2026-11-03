import { createHighlighter, type ThemeRegistration } from "shiki";

const chalk: ThemeRegistration = {
  name: "chalk",
  type: "dark",
  colors: { "editor.background": "#2b2b2b", "editor.foreground": "#f6f1e7" },
  tokenColors: [
    { scope: ["comment", "punctuation.definition.comment"], settings: { foreground: "#9fb0a3", fontStyle: "italic" } },
    { scope: ["keyword", "storage", "entity.name.tag", "punctuation.definition.tag"], settings: { foreground: "#f2d06b" } },
    { scope: ["string", "string.quoted"], settings: { foreground: "#a8dcb5" } },
    { scope: ["constant.numeric", "constant.language"], settings: { foreground: "#f0a875" } },
    { scope: ["entity.name.function", "support.function", "entity.other.attribute-name"], settings: { foreground: "#9fd3e6" } },
    { scope: ["entity.name.type", "entity.name.class", "support.type"], settings: { foreground: "#e8c4f0" } },
  ],
};

const LANGS = ["html", "css", "scss", "javascript", "typescript", "python", "java", "c", "cpp", "csharp", "php", "go", "rust", "kotlin", "swift", "r", "bash", "sql", "xml", "ruby"];

let highlighter: ReturnType<typeof createHighlighter> | undefined;

export async function Code({ code, lang }: { code: string; lang: string }) {
  highlighter ??= createHighlighter({ themes: [chalk], langs: LANGS });
  const html = (await highlighter).codeToHtml(code, { lang, theme: "chalk" });
  return <div className="code" dangerouslySetInnerHTML={{ __html: html }} />;
}

"use client";

import { cpp } from "@codemirror/lang-cpp";
import { go } from "@codemirror/lang-go";
import { html } from "@codemirror/lang-html";
import { java } from "@codemirror/lang-java";
import { javascript } from "@codemirror/lang-javascript";
import { php } from "@codemirror/lang-php";
import { python } from "@codemirror/lang-python";
import { rust } from "@codemirror/lang-rust";
import { sql } from "@codemirror/lang-sql";
import { HighlightStyle, StreamLanguage, syntaxHighlighting } from "@codemirror/language";
import { csharp, kotlin } from "@codemirror/legacy-modes/mode/clike";
import { r } from "@codemirror/legacy-modes/mode/r";
import { ruby } from "@codemirror/legacy-modes/mode/ruby";
import { shell } from "@codemirror/legacy-modes/mode/shell";
import { swift } from "@codemirror/legacy-modes/mode/swift";
import { EditorView } from "@codemirror/view";
import { tags as t } from "@lezer/highlight";
import CodeMirror, { type Extension } from "@uiw/react-codemirror";
import { useMemo } from "react";
import type { RunnerId } from "@/lib/runners";

const LANGUAGE: Record<RunnerId, () => Extension[]> = {
  html: () => [html()],
  javascript: () => [javascript()],
  node: () => [javascript()],
  typescript: () => [javascript({ typescript: true })],
  sql: () => [sql()],
  python: () => [python()],
  "python-data": () => [python()],
  java: () => [java()],
  c: () => [cpp()],
  cpp: () => [cpp()],
  csharp: () => [StreamLanguage.define(csharp)],
  php: () => [php({ plain: false })],
  go: () => [go()],
  rust: () => [rust()],
  kotlin: () => [StreamLanguage.define(kotlin)],
  swift: () => [StreamLanguage.define(swift)],
  r: () => [StreamLanguage.define(r)],
  bash: () => [StreamLanguage.define(shell)],
  ruby: () => [StreamLanguage.define(ruby)],
};

const chalkTheme = EditorView.theme(
  {
    "&": { backgroundColor: "#2b2b2b", color: "#f6f1e7", height: "100%" },
    ".cm-content": { caretColor: "#f2d06b", fontFamily: "var(--font-mono)" },
    ".cm-cursor": { borderLeftColor: "#f2d06b" },
    ".cm-gutters": { backgroundColor: "#2b2b2b", color: "#8a8a80", border: "none" },
    ".cm-activeLine, .cm-activeLineGutter": { backgroundColor: "#ffffff0d" },
    "&.cm-focused .cm-selectionBackground, .cm-selectionBackground": { backgroundColor: "#f2d06b33 !important" },
    ".cm-scroller": { fontFamily: "var(--font-mono)", lineHeight: "1.6" },
  },
  { dark: true },
);

const chalkColors = syntaxHighlighting(
  HighlightStyle.define([
    { tag: [t.keyword, t.tagName, t.angleBracket, t.modifier], color: "#f2d06b" },
    { tag: [t.string, t.special(t.string)], color: "#a8dcb5" },
    { tag: [t.number, t.bool, t.null], color: "#f0a875" },
    { tag: [t.comment], color: "#9fb0a3", fontStyle: "italic" },
    { tag: [t.function(t.variableName), t.attributeName, t.propertyName], color: "#9fd3e6" },
    { tag: [t.typeName, t.className], color: "#e8c4f0" },
  ]),
);

export default function Editor({ language, value, onChange, onRun }: { language: RunnerId; value: string; onChange: (v: string) => void; onRun: () => void }) {
  const extensions = useMemo(() => [...LANGUAGE[language](), chalkTheme, chalkColors, EditorView.lineWrapping], [language]);

  return (
    <div
      className="editor"
      onKeyDown={(e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
          e.preventDefault();
          onRun();
        }
      }}
    >
      <CodeMirror value={value} onChange={onChange} theme="none" extensions={extensions} height="100%" aria-label="Code editor" />
    </div>
  );
}

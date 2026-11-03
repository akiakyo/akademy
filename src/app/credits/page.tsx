import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta("/credits", "Credits and Licenses", "The open-source projects and services behind Akademy, and notices about trademarks.");

export default function Credits() {
  return (
    <LegalPage path="/credits" title="Credits and Licenses" intro="Akademy is made possible by these open-source projects and free services. Thank you.">
      <h2>Trademarks</h2>
      <p>All programming language, framework, and product names and logos are trademarks of their respective owners. On Akademy they are shown only to identify the subject of a course, and some are recolored to suit the site&apos;s theme. Their use does not imply any affiliation with, or endorsement by, those owners.</p>
      <p>Akademy is an independent project. It is not affiliated with W3Schools or Refsnes Data.</p>

      <h2>Artwork and fonts</h2>
      <ul>
        <li><a href="https://github.com/devicons/devicon">Devicon</a>: source of the subject logos (MIT License)</li>
        <li><a href="https://www.figma.com/community/file/1166831539721848736">Solar icons</a> by 480 Design: interface icons (CC BY 4.0)</li>
        <li>Bitter, Inter, and JetBrains Mono: typefaces (SIL Open Font License)</li>
      </ul>

      <h2>Open-source software</h2>
      <ul>
        <li><a href="https://nextjs.org">Next.js</a> and <a href="https://react.dev">React</a>: the website (MIT License)</li>
        <li><a href="https://codemirror.net">CodeMirror</a>: the code editor (MIT License)</li>
        <li><a href="https://shiki.style">Shiki</a>: code highlighting (MIT License)</li>
        <li><a href="https://sql.js.org">sql.js</a>: SQL in the browser (MIT License)</li>
        <li><a href="https://pyodide.org">Pyodide</a>: Python in the browser (Mozilla Public License 2.0)</li>
      </ul>

      <h2>Compiler services</h2>
      <ul>
        <li><a href="https://godbolt.org">Compiler Explorer</a></li>
        <li><a href="https://wandbox.org">Wandbox</a></li>
        <li><a href="https://play.kotlinlang.org">Kotlin Playground</a></li>
      </ul>
    </LegalPage>
  );
}

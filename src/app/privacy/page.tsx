import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { OPERATOR } from "@/lib/legal";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta("/privacy", "Privacy Policy", "What data Akademy handles, where your code goes when you run it, and your rights.");

export default function Privacy() {
  return (
    <LegalPage path="/privacy" title="Privacy Policy" intro="Akademy is built to collect as little as possible. There are no accounts, ads, or analytics. This policy explains what does happen to your data.">
      <h2>Who is responsible</h2>
      <p>Akademy is operated by {OPERATOR} in the Philippines, who is responsible for personal data handled through this site. We aim to follow the Philippine Data Privacy Act of 2012 (Republic Act No. 10173).</p>

      <h2>Data kept in your browser</h2>
      <p>This data stays on your device, and we never receive it:</p>
      <ul>
        <li>the name you enter for certificates;</li>
        <li>your finished lessons;</li>
        <li>your certificates, scores, and dates.</li>
      </ul>
      <p>You can erase it at any time with Clear my data on your <Link href="/account">profile page</Link>.</p>

      <h2>Code you run</h2>
      <p>HTML, CSS, JavaScript, SQL, and the NumPy and pandas lessons run in your browser. Code in other languages, with any program input you type, passes through our server to one of these services to be compiled and run:</p>
      <ul>
        <li><a href="https://godbolt.org">Compiler Explorer</a> (godbolt.org);</li>
        <li><a href="https://wandbox.org">Wandbox</a> (wandbox.org);</li>
        <li>the <a href="https://play.kotlinlang.org">Kotlin Playground</a> (kotlinlang.org).</li>
      </ul>
      <p>We do not store this code, but those services handle it under their own policies, and they may be located outside the Philippines. Do not put passwords, personal information, or confidential material in code you run here.</p>

      <h2>Technical data</h2>
      <p>Like any website, Akademy receives your IP address and browser details when you connect. We hold IP addresses briefly in memory to limit how often code can be run, and do not save them. Our hosting provider may keep standard server logs for security and reliability.</p>

      <h2>Content from other services</h2>
      <p>Some features load files from other providers, which then receive your IP address. They include:</p>
      <ul>
        <li>jsDelivr, esm.sh, and code.jquery.com, for the libraries used in lessons and for Python in the browser;</li>
        <li>picsum.photos, for the sample image in the HTML images lesson.</li>
      </ul>

      <h2>What we do not do</h2>
      <ul>
        <li>We do not sell personal data.</li>
        <li>We do not use advertising or third-party analytics.</li>
        <li>We do not build profiles or make automated decisions about you.</li>
      </ul>

      <h2>Your rights</h2>
      <p>Under the Data Privacy Act, you have rights including to be informed, to access, correct, and erase your data, to object to its processing, and to complain to the National Privacy Commission of the Philippines. Since your learning data is in your own browser, you can view and erase it yourself. For anything else, reach us through the <Link href="/contact">Contact</Link> page.</p>

      <h2>Children</h2>
      <p>Akademy welcomes young learners and asks them for no information beyond an optional name kept on their own device. Parents and teachers can remove it from the profile page.</p>

      <h2>Changes</h2>
      <p>We will update this page if our practices change, and revise the date above.</p>
    </LegalPage>
  );
}

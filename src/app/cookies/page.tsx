import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta("/cookies", "Cookies and Storage", "Akademy sets no cookies. Learn how browser storage keeps your progress on your device.");

export default function Cookies() {
  return (
    <LegalPage path="/cookies" title="Cookies and Storage" intro="Akademy sets no cookies of its own, and uses no tracking, advertising, or analytics cookies.">
      <h2>What we use instead</h2>
      <p>Akademy saves your progress with your browser&apos;s local storage. It is kept on your device, is not sent to us, and is used only to make the site work.</p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Name</th><th>Type</th><th>Purpose</th><th>Lasts</th></tr>
          </thead>
          <tbody>
            <tr><td><code>akademy:v1</code></td><td>Local storage</td><td>Your name, finished lessons, and certificates</td><td>Until you clear it</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Your choices</h2>
      <p>You can erase this data with Clear my data on your <Link href="/account">profile page</Link>, or through your browser settings. The lessons will keep working, but your progress will not be saved.</p>

      <h2>Other services</h2>
      <p>Some lesson examples load files from other providers, listed in the <Link href="/privacy">Privacy Policy</Link>. Those providers may use their own technologies, under their own policies.</p>
    </LegalPage>
  );
}

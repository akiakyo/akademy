import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { OPERATOR } from "@/lib/legal";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta("/terms", "Terms of Service", "The rules for using Akademy's free lessons, live code editor, and certificates.");

export default function Terms() {
  return (
    <LegalPage path="/terms" title="Terms of Service" intro="These terms apply when you use Akademy. By using the site, you agree to them. If you do not agree, please do not use the site.">
      <h2>1. About Akademy</h2>
      <p>Akademy is a free website for learning to code, operated by {OPERATOR} in the Philippines (&quot;we&quot;, &quot;us&quot;). It offers lessons, a live code editor, flashcards, quizzes, exams, and certificates of completion.</p>

      <h2>2. Who can use Akademy</h2>
      <p>Anyone may use Akademy to learn. If you are under 18, please use the site with the knowledge of a parent, guardian, or teacher.</p>

      <h2>3. No accounts</h2>
      <p>Akademy has no sign-in. Your name, progress, and certificates are stored in your own browser. You are responsible for that data. Clearing your browser data, or changing device, will remove it, and we cannot restore it.</p>

      <h2>4. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use the live code editor to attack, scan, or disrupt any system or person;</li>
        <li>run malicious code, cryptocurrency miners, or spam;</li>
        <li>overload the site or the compiler services, or get around the limits placed on them;</li>
        <li>break the law or the rights of others;</li>
        <li>copy the site&apos;s content in bulk, or republish it as your own;</li>
        <li>misrepresent a certificate, including by altering one or claiming one you did not earn.</li>
      </ul>
      <p>We may block access for anyone who breaks these rules.</p>

      <h2>5. The live code editor</h2>
      <p>Some code runs in your browser. Other code is sent to third-party compiler services, as the <Link href="/privacy">Privacy Policy</Link> explains. You are responsible for the code you run. Do not put passwords, personal data, or confidential material in it. These services are free, may have limits, and may be unavailable at times.</p>

      <h2>6. Certificates</h2>
      <p>Akademy certificates show that a person completed a course and passed its online final exam. Exams are not supervised, and certificates cannot currently be verified by a third party. They are not degrees, professional licenses, or accredited qualifications, and Akademy is not an accredited educational institution. A certificate does not guarantee employment or any other result.</p>

      <h2>7. Our content</h2>
      <p>Unless stated otherwise, the lessons, text, design, and the Aky mascot belong to Akademy. You may read them and use them to learn, including quoting short parts with credit. Code examples in lessons may be freely reused in your own projects.</p>

      <h2>8. Third-party names and logos</h2>
      <p>Programming language and product names and logos belong to their owners. They appear only to identify each subject. Akademy is independent, and is not affiliated with, endorsed by, or sponsored by those owners, or by W3Schools. See <Link href="/credits">Credits and Licenses</Link>.</p>

      <h2>9. No warranty</h2>
      <p>Akademy is free and provided &quot;as is&quot;. We work to keep lessons accurate, but we do not promise that the site will be error-free, uninterrupted, or suitable for any purpose. See the <Link href="/disclaimer">Disclaimer</Link>.</p>

      <h2>10. Limit of liability</h2>
      <p>To the extent the law allows, we are not liable for indirect or consequential loss, or for loss of data, profits, or opportunity, arising from your use of Akademy or from code you run on it. Nothing in these terms limits any rights you have that cannot be limited by law.</p>

      <h2>11. Changes</h2>
      <p>We may change the site or these terms. The date at the top shows the latest version. If you keep using Akademy after a change, you accept the updated terms.</p>

      <h2>12. Governing law</h2>
      <p>These terms are governed by the laws of the Republic of the Philippines.</p>

      <h2>13. Contact</h2>
      <p>Questions about these terms are welcome on our <Link href="/contact">Contact</Link> page.</p>
    </LegalPage>
  );
}

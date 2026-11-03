import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta("/disclaimer", "Disclaimer", "Akademy is for education. Read about accuracy, certificates, and code examples.");

export default function Disclaimer() {
  return (
    <LegalPage path="/disclaimer" title="Disclaimer" intro="Akademy is for learning. Please keep these limits in mind when using what you find here.">
      <h2>Educational content</h2>
      <p>Lessons are simplified so that beginners can follow them. They may leave out details, and may not reflect the latest version of a language or tool. Check the official documentation before relying on something in real work.</p>

      <h2>Code examples</h2>
      <p>Examples are written to teach, and are not hardened for production. Review and test any code before you use it. You use code from Akademy at your own risk.</p>

      <h2>Certificates</h2>
      <p>Certificates are a free record of personal learning. They are not accredited, are not awarded under exam supervision, and do not certify professional competence.</p>

      <h2>Compiler results</h2>
      <p>Code is run by third-party services, whose versions, limits, and availability can change. Results may differ from those on your own computer.</p>

      <h2>External links</h2>
      <p>We are not responsible for the content or policies of the websites and services we link to.</p>
    </LegalPage>
  );
}

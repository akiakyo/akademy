import type { Metadata } from "next";
import { Aky } from "@/components/Aky";
import { SiteHeader } from "@/components/Header";
import { Icon } from "@/components/Icon";
import { GITHUB_URL, OPERATOR, WEBSITE_URL } from "@/lib/legal";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta("/contact", "Contact", "Get in touch with Akademy through akiakyo.dev or GitHub.");

export default function Contact() {
  return (
    <>
      <SiteHeader />
      <main className="wrap page prose">
        <div className="mascot-note">
          <Aky mood="wave" size={92} className="float-aky" />
          <div>
            <h1>Contact</h1>
            <p className="page-lede">Found a mistake in a lesson, or have an idea for a course? Aky would love to hear it.</p>
          </div>
        </div>
        <div className="contact-grid">
          <a className="card" href={WEBSITE_URL} rel="me noopener" target="_blank">
            <Icon name="website" size={28} className="contact-icon" />
            <h2>akiakyo.dev</h2>
            <p>Visit {OPERATOR}&apos;s website.</p>
          </a>
          <a className="card" href={GITHUB_URL} rel="me noopener" target="_blank">
            <Icon name="code" size={28} className="contact-icon" />
            <h2>GitHub</h2>
            <p>Find @akiakyo on GitHub.</p>
          </a>
        </div>
      </main>
    </>
  );
}

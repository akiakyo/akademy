import Link from "next/link";
import { Aky } from "./Aky";
import { GITHUB_URL, LEGAL_PAGES, WEBSITE_URL } from "@/lib/legal";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-in">
        <div className="footer-brand">
          <Aky size={58} className="footer-aky" />
          <div>
            <div className="logo footer-logo">
              akademy<span>.</span>
            </div>
            <p>Free coding lessons for everyone. Made in the Philippines.</p>
            <p className="credit">
              Built with <b className="heart">&lt;3</b> by <a href={WEBSITE_URL}>@akiakyo</a>
            </p>
          </div>
        </div>
        <div className="footer-cols">
          <div>
            <h3>Learn</h3>
            <Link href="/courses">Tutorials</Link>
            <Link href="/references">References</Link>
            <Link href="/exercises">Exercises</Link>
          </div>
          <div>
            <h3>Akademy</h3>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <a href={WEBSITE_URL}>akiakyo.dev</a>
            <a href={GITHUB_URL}>GitHub</a>
          </div>
          <div>
            <h3>Legal</h3>
            {LEGAL_PAGES.map((p) => (
              <Link key={p.href} href={p.href}>{p.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

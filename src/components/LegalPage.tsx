import Link from "next/link";
import type { ReactNode } from "react";
import { LAST_UPDATED, LEGAL_PAGES } from "@/lib/legal";
import { SiteHeader } from "./Header";

export function LegalPage({ path, title, intro, children }: { path: string; title: string; intro: string; children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="wrap page legal">
        <nav className="legal-nav" aria-label="Legal">
          {LEGAL_PAGES.map((p) => (
            <Link key={p.href} href={p.href} aria-current={p.href === path ? "page" : undefined}>
              {p.label}
            </Link>
          ))}
        </nav>
        <article>
          <h1>{title}</h1>
          <p className="legal-date">Last updated: {LAST_UPDATED}</p>
          <p className="page-lede">{intro}</p>
          {children}
        </article>
      </main>
    </>
  );
}

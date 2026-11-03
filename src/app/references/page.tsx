import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { CourseLogo } from "@/components/CourseLogo";
import { SiteHeader } from "@/components/Header";
import { COURSES } from "@/content";

export const metadata: Metadata = pageMeta("/references", "References", "One-page references of keywords, basics, and tips for every programming course.");

export default function References() {
  return (
    <>
      <SiteHeader />
      <main className="wrap page">
        <h1>References</h1>
        <p className="page-lede">The keywords, basics, and tips from each course, on one page.</p>
        <ul className="link-grid">
          {COURSES.map((c) => <li key={c.slug}><Link href={`/learn/${c.slug}/reference`}><CourseLogo slug={c.slug} icon={c.icon} size={20} />{c.name} reference</Link></li>)}
        </ul>
      </main>
    </>
  );
}

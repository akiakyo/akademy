import type { Metadata } from "next";
import { NO_INDEX } from "@/lib/seo";
import Link from "next/link";
import { SiteHeader } from "@/components/Header";
import { Icon } from "@/components/Icon";
import { COURSES } from "@/content";

export const metadata: Metadata = { title: "Search", robots: NO_INDEX };

function find(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return COURSES.flatMap((course) =>
    course.lessons
      .filter((lesson) =>
        [course.name, lesson.title, lesson.intro, ...lesson.keywords.map(([term]) => term)].some((text) => text.toLowerCase().includes(q)),
      )
      .map((lesson) => ({ course, lesson })),
  ).slice(0, 50);
}

export default async function Search({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  const results = find(q);

  return (
    <>
      <SiteHeader />
      <main className="wrap page">
        <h1>Search tutorials</h1>
        <form action="/search" className="search outlined">
          <input name="q" type="search" defaultValue={q} placeholder="Search tutorials: HTML, CSS, Python..." aria-label="Search tutorials" />
          <button className="btn btn-green"><Icon name="search" size={16} />Search</button>
        </form>
        {q.trim() && <p className="page-lede">{results.length ? `${results.length} ${results.length === 1 ? "result" : "results"} for "${q}"` : `Nothing found for "${q}". Try a language or a keyword.`}</p>}
        <ul className="results">
          {results.map(({ course, lesson }) => (
            <li key={`${course.slug}/${lesson.slug}`}>
              <Link href={`/learn/${course.slug}/${lesson.slug}`}>{course.name}: {lesson.title}</Link>
              <p>{lesson.intro.replaceAll("`", "")}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

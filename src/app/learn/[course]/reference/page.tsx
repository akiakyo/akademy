import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/Header";
import { Icon } from "@/components/Icon";
import { COURSES, getCourse } from "@/content";
import { pageMeta } from "@/lib/seo";

type Params = { params: Promise<{ course: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return COURSES.map((c) => ({ course: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { course: slug } = await params;
  const course = getCourse(slug);
  return course ? pageMeta(`/learn/${course.slug}/reference`, `${course.name} reference`, `${course.name} keywords, basics to memorize, and tips on one page.`) : {};
}

export default async function Reference({ params }: Params) {
  const { course: c } = await params;
  const course = getCourse(c);
  if (!course) notFound();

  const keywords = new Map(course.lessons.flatMap((l) => l.keywords));
  const sorted = [...keywords].sort(([a], [b]) => a.localeCompare(b));

  return (
    <>
      <SiteHeader active={course.slug} />
      <main className="wrap page reference">
        <p className="crumbs"><Link href={`/learn/${course.slug}`}>{course.name} tutorial</Link> › <b>Reference</b></p>
        <h1>{course.name} reference</h1>
        <p className="page-lede">Everything to remember from this course, on one page.</p>
        <p className="ref-jump"><a href="#keywords">Keywords</a> <a href="#basics">Basics</a> <a href="#tips">Tips</a></p>

        <section id="keywords" className="keywords">
          <h2><Icon name="keywords" size={20} />Keywords</h2>
          <dl className="ref-terms">
            {sorted.map(([term, meaning]) => <div key={term}><dt>{term}</dt><dd>{meaning}</dd></div>)}
          </dl>
        </section>

        <section id="basics">
          <h2><Icon name="basics" size={20} />Basics to memorize</h2>
          {course.lessons.map((l) => (
            <div key={l.slug} className="ref-block">
              <h3><Link href={`/learn/${course.slug}/${l.slug}`}>{l.title}</Link></h3>
              <ul>{l.basics.map((b) => <li key={b}>{b}</li>)}</ul>
            </div>
          ))}
        </section>

        <section id="tips" className="tips">
          <h2><Icon name="tips" size={20} />Tips and common mistakes</h2>
          <ul>{course.lessons.flatMap((l) => l.tips).map((t) => <li key={t}>{t}</li>)}</ul>
        </section>
      </main>
    </>
  );
}

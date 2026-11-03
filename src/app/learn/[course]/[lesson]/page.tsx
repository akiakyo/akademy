import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Code } from "@/components/Code";
import { Icon } from "@/components/Icon";
import { Aky } from "@/components/Aky";
import { SiteHeader } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { LessonSidebar, NextLink } from "@/components/LessonSidebar";
import { Rich } from "@/components/Rich";
import { COURSES, deckFor, getCourse, getLesson } from "@/content";
import { pageMeta, SITE_NAME, SITE_URL } from "@/lib/seo";

type Params = { params: Promise<{ course: string; lesson: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return COURSES.flatMap((c) => c.lessons.map((l) => ({ course: c.slug, lesson: l.slug })));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { course: c, lesson: l } = await params;
  const course = getCourse(c);
  const lesson = course && getLesson(course, l);
  return lesson ? pageMeta(`/learn/${course.slug}/${lesson.slug}`, `${course.name}: ${lesson.title}`, lesson.intro.replaceAll("`", "")) : {};
}

export default async function LessonPage({ params }: Params) {
  const { course: c, lesson: l } = await params;
  const course = getCourse(c);
  const lesson = course && getLesson(course, l);
  if (!course || !lesson) notFound();

  const index = course.lessons.indexOf(lesson);
  const prev = course.lessons[index - 1];
  const next = course.lessons[index + 1];
  const base = `/learn/${course.slug}`;
  const nextHref = next ? `${base}/${next.slug}` : `${base}/exam`;
  const deckSize = deckFor([lesson]).length;
  const heading = lesson.title.includes(course.name) ? lesson.title : `${course.name} ${lesson.title.replace(/^[A-Z](?=[a-z])/, (ch) => ch.toLowerCase())}`;

  return (
    <>
      <SiteHeader active={course.slug} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LearningResource",
              name: heading,
              description: lesson.intro.replaceAll("`", ""),
              url: `${SITE_URL}${base}/${lesson.slug}`,
              learningResourceType: "Tutorial",
              isAccessibleForFree: true,
              inLanguage: "en",
              publisher: { "@type": "Organization", name: SITE_NAME },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: `${course.name} tutorial`, item: `${SITE_URL}${base}` },
                { "@type": "ListItem", position: 2, name: lesson.title, item: `${SITE_URL}${base}/${lesson.slug}` },
              ],
            },
          ],
        }}
      />
      <div className="lesson-layout">
        <LessonSidebar
          courseSlug={course.slug}
          courseName={course.name}
          lessons={course.lessons.map(({ slug, title, chapter }) => ({ slug, title, chapter }))}
          current={lesson.slug}
        />
        <main className="lesson">
          <p className="crumbs">
            <Link href={base}>{course.name} tutorial</Link> › {lesson.chapter} › <b>{lesson.title}</b>
          </p>
          <div className="lesson-title">
            <h1>{heading}</h1>
            <div className="lesson-nav">
              <Link href={prev ? `${base}/${prev.slug}` : base} className="btn btn-line"><Icon name="prev" size={15} />{prev ? "Previous" : "Home"}</Link>
              <NextLink courseSlug={course.slug} lessonSlug={lesson.slug} href={nextHref} label={next ? "Next" : "Final exam"} />
            </div>
          </div>
          <p className="lesson-intro"><Rich text={lesson.intro} /></p>

          <section className="example">
            <div className="example-head">
              <h2><Icon name="example" size={18} />Example</h2>
              {course.runner ? (
                <Link href={`/playground?course=${course.slug}&lesson=${lesson.slug}`} className="btn btn-chalk"><Icon name="run" size={15} />Try it yourself</Link>
              ) : (
                <span className="example-note">{course.noRunReason}</span>
              )}
            </div>
            <Code code={lesson.code} lang={course.shiki} />
          </section>
          {lesson.note && <p className="lesson-note">{lesson.note}</p>}

          <div className="lesson-pair">
            <section className="basics">
              <h2><Icon name="basics" size={20} />Basics to memorize</h2>
              <ol>{lesson.basics.map((b) => <li key={b}>{b}</li>)}</ol>
            </section>
            <section className="keywords">
              <h2><Icon name="keywords" size={20} />Keywords</h2>
              <dl>
                {lesson.keywords.map(([term, meaning]) => (
                  <div key={term}><dt>{term}</dt><dd>{meaning}</dd></div>
                ))}
              </dl>
            </section>
          </div>

          <section className="tips reveal">
            <h2><Icon name="tips" size={20} />Tips</h2>
            <ul>{lesson.tips.map((t) => <li key={t}>{t}</li>)}</ul>
          </section>

          <section className="lockin">
            <Aky mood="think" size={54} />
            <div>
              <h2>Lock it in</h2>
              <p>Review this lesson&apos;s {deckSize} flashcards, then take the {lesson.quiz.length}-question quiz.</p>
            </div>
            <div className="lockin-actions">
              <Link href={`${base}/${lesson.slug}/flashcards`} className="btn btn-line"><Icon name="deck" size={15} />Study flashcards</Link>
              <Link href={`${base}/${lesson.slug}/quiz`} className="btn btn-green"><Icon name="quiz" size={15} />Take the quiz</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

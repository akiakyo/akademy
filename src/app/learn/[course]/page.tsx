import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Aky } from "@/components/Aky";
import { CourseLogo } from "@/components/CourseLogo";
import { Icon } from "@/components/Icon";
import { SiteHeader } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { CourseProgress, LessonSidebar } from "@/components/LessonSidebar";
import { COURSES, getCourse } from "@/content";
import { pageMeta, SITE_NAME, SITE_URL } from "@/lib/seo";

type Params = { params: Promise<{ course: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return COURSES.map((c) => ({ course: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { course: slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return pageMeta(`/learn/${course.slug}`, `${course.name} tutorial: learn ${course.name} for free`, `${course.blurb} ${course.lessons.length} free lessons with flashcards, quizzes, and a certificate.`);
}

export default async function CourseHome({ params }: Params) {
  const { course: slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const base = `/learn/${course.slug}`;
  const first = course.lessons[0];
  const chapters = [...new Set(course.lessons.map((l) => l.chapter))];

  return (
    <>
      <SiteHeader active={course.slug} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: `${course.name} tutorial`,
          description: course.blurb,
          url: `${SITE_URL}${base}`,
          isAccessibleForFree: true,
          inLanguage: "en",
          provider: { "@type": "Organization", name: SITE_NAME, sameAs: SITE_URL },
          offers: { "@type": "Offer", category: "Free", price: 0, priceCurrency: "PHP" },
          hasCourseInstance: { "@type": "CourseInstance", courseMode: "online", courseWorkload: `PT${course.lessons.length * 10}M` },
        }}
      />
      <div className="lesson-layout">
        <LessonSidebar
          courseSlug={course.slug}
          courseName={course.name}
          lessons={course.lessons.map(({ slug: s, title, chapter }) => ({ slug: s, title, chapter }))}
        />
        <main className="lesson">
          <div className="lesson-title">
            <h1>{course.name} tutorial</h1>
            <div className="lesson-nav">
              <Link href="/courses" className="btn btn-line"><Icon name="prev" size={15} />All courses</Link>
              <Link href={`${base}/${first.slug}`} className="btn btn-green">Next<Icon name="next" size={15} /></Link>
            </div>
          </div>

          <div className="course-hero">
            <section>
              <div className="card-head">
                <CourseLogo slug={course.slug} icon={course.icon} size={44} />
                <h2>Learn {course.name}</h2>
              </div>
              <p>{course.blurb}</p>
              <p>{course.lessons.length} short lessons, every one with basics, keywords, tips, flashcards, and a quiz.</p>
              <Link href={`${base}/${first.slug}`} className="btn btn-green">Learn {course.name} now<Icon name="next" size={15} /></Link>
            </section>
            <section className="course-hero-cert">
              <h2><Icon name="medal" size={24} className="gold-icon" />Get {course.name} certified</h2>
              <p>Pass the final exam to earn a free certificate with your name on it.</p>
              <div className="course-hero-foot">
                <Link href={`${base}/exam`} className="btn btn-line"><Icon name="certificate" size={15} />Take the exam</Link>
                <Link href={`/certificate/${course.slug}`} className="mini-cert" aria-label={`See a sample ${course.name} certificate`}>
                  <b>CERTIFICATE</b>
                  <span>{course.certificateName}</span>
                  <i>A.</i>
                </Link>
              </div>
            </section>
          </div>

          <CourseProgress courseSlug={course.slug} total={course.lessons.length} />

          <section>
            <h2 className="course-outline-title">What you will learn</h2>
            {chapters.map((chapter) => (
              <div key={chapter} className="course-chapter">
                <h3>{chapter}</h3>
                <ol>
                  {course.lessons.filter((l) => l.chapter === chapter).map((l) => (
                    <li key={l.slug}>
                      <Link href={`${base}/${l.slug}`}>{l.title}</Link>
                      <span>{l.intro.replaceAll("`", "")}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </section>

          <section className="lockin">
            <Aky mood="think" size={58} />
            <div>
              <h2>Study smarter with Aky</h2>
              <p>Review the whole {course.name} deck, or keep the one-page reference open.</p>
            </div>
            <div className="lockin-actions">
              <Link href={`${base}/reference`} className="btn btn-line"><Icon name="references" size={15} />Reference</Link>
              <Link href={`${base}/flashcards`} className="btn btn-green"><Icon name="deck" size={15} />Flashcards</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

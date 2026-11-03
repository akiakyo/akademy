import type { Metadata } from "next";
import { NO_INDEX } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FocusHeader } from "@/components/Header";
import { Quiz } from "@/components/Quiz";
import { COURSES, examQuestions, getCourse, PASS_PERCENT } from "@/content";
import { shuffled } from "@/lib/shuffle";

type Params = { params: Promise<{ course: string }> };

export const metadata: Metadata = { title: "Final exam", robots: NO_INDEX };
export const dynamicParams = false;

const MAX_QUESTIONS = 20;

export function generateStaticParams() {
  return COURSES.map((c) => ({ course: c.slug }));
}

export default async function Exam({ params }: Params) {
  const { course: c } = await params;
  const course = getCourse(c);
  if (!course) notFound();

  const back = `/learn/${course.slug}`;
  const questions = shuffled(examQuestions(course), course.slug).slice(0, MAX_QUESTIONS);

  return (
    <>
      <FocusHeader back={back} label="Back to course" />
      <main className="quiz-page">
        <div className="tabs">
          <Link href={`${back}/${course.lessons[0].slug}/quiz`}>Chapter quiz</Link>
          <span className="on">Final exam</span>
        </div>
        <p className="eyebrow gold">{course.name.toUpperCase()} · FINAL EXAM</p>
        <h1>{course.certificateName}</h1>
        <p className="quiz-lede">{questions.length} questions. Score {PASS_PERCENT}% or higher to earn your certificate.</p>
        <Quiz questions={questions} courseSlug={course.slug} backHref={back} />
      </main>
    </>
  );
}

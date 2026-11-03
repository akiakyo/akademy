import type { Metadata } from "next";
import { NO_INDEX } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FocusHeader } from "@/components/Header";
import { Quiz } from "@/components/Quiz";
import { COURSES, getCourse, getLesson } from "@/content";

type Params = { params: Promise<{ course: string; lesson: string }> };

export const metadata: Metadata = { title: "Chapter quiz", robots: NO_INDEX };
export const dynamicParams = false;

export function generateStaticParams() {
  return COURSES.flatMap((c) => c.lessons.map((l) => ({ course: c.slug, lesson: l.slug })));
}

export default async function LessonQuiz({ params }: Params) {
  const { course: c, lesson: l } = await params;
  const course = getCourse(c);
  const lesson = course && getLesson(course, l);
  if (!course || !lesson) notFound();

  const back = `/learn/${course.slug}/${lesson.slug}`;
  const chapter = [...new Set(course.lessons.map((x) => x.chapter))].indexOf(lesson.chapter) + 1;

  return (
    <>
      <FocusHeader back={back} />
      <main className="quiz-page">
        <div className="tabs">
          <span className="on">Chapter quiz</span>
          <Link href={`/learn/${course.slug}/exam`}>Final exam</Link>
        </div>
        <p className="eyebrow gold">CHAPTER {chapter} · {lesson.chapter.toUpperCase()}</p>
        <h1>{lesson.title} quiz</h1>
        <p className="quiz-lede">{lesson.quiz.length} quick questions. Check each answer as you go.</p>
        <Quiz questions={lesson.quiz} courseSlug={course.slug} lessonSlug={lesson.slug} backHref={back} />
      </main>
    </>
  );
}

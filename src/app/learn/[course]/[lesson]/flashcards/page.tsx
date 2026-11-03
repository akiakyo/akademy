import type { Metadata } from "next";
import { NO_INDEX } from "@/lib/seo";
import { notFound } from "next/navigation";
import { Flashcards } from "@/components/Flashcards";
import { FocusHeader } from "@/components/Header";
import { COURSES, deckFor, getCourse, getLesson } from "@/content";

type Params = { params: Promise<{ course: string; lesson: string }> };

export const metadata: Metadata = { title: "Flashcards", robots: NO_INDEX };
export const dynamicParams = false;

export function generateStaticParams() {
  return COURSES.flatMap((c) => c.lessons.map((l) => ({ course: c.slug, lesson: l.slug })));
}

export default async function LessonDeck({ params }: Params) {
  const { course: c, lesson: l } = await params;
  const course = getCourse(c);
  const lesson = course && getLesson(course, l);
  if (!course || !lesson) notFound();

  return (
    <div className="green-page">
      <FocusHeader back={`/learn/${course.slug}/${lesson.slug}`} />
      <main>
        <Flashcards title={`${lesson.title} deck`} cards={deckFor([lesson])} />
      </main>
    </div>
  );
}

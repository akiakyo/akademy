import type { Metadata } from "next";
import { NO_INDEX } from "@/lib/seo";
import { notFound } from "next/navigation";
import { Flashcards } from "@/components/Flashcards";
import { FocusHeader } from "@/components/Header";
import { COURSES, deckFor, getCourse } from "@/content";

type Params = { params: Promise<{ course: string }> };

export const metadata: Metadata = { title: "Flashcards", robots: NO_INDEX };
export const dynamicParams = false;

export function generateStaticParams() {
  return COURSES.map((c) => ({ course: c.slug }));
}

export default async function CourseDeck({ params }: Params) {
  const { course: c } = await params;
  const course = getCourse(c);
  if (!course) notFound();

  return (
    <div className="green-page">
      <FocusHeader back={`/learn/${course.slug}`} label="Back to course" />
      <main>
        <Flashcards title={`${course.name} basics deck`} cards={deckFor(course.lessons)} />
      </main>
    </div>
  );
}

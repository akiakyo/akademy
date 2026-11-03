import type { Metadata } from "next";
import { SiteHeader } from "@/components/Header";
import { Playground } from "@/components/Playground";
import { getCourse, getLesson } from "@/content";
import { getRunner } from "@/lib/runners";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta("/playground", "Online compiler and live code editor", "Run Python, C, C++, Java, JavaScript, SQL, and more in your browser. Free, with nothing to install.");

type Props = { searchParams: Promise<{ course?: string; lesson?: string; lang?: string }> };

export default async function PlaygroundPage({ searchParams }: Props) {
  const { course: c, lesson: l, lang } = await searchParams;
  const course = c ? getCourse(c) : undefined;
  const lesson = course && l ? getLesson(course, l) : undefined;
  const language = course?.runner ?? getRunner(lang)?.id ?? "html";

  return (
    <>
      <SiteHeader />
      <main className="pg-page">
        <Playground
          key={`${course?.slug}/${lesson?.slug}/${language}`}
          initialLanguage={language}
          initialCode={lesson?.code}
          title={lesson ? `${course!.name}: ${lesson.title}` : undefined}
        />
      </main>
    </>
  );
}

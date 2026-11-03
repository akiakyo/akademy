import type { Metadata } from "next";
import { NO_INDEX } from "@/lib/seo";
import { SiteHeader } from "@/components/Header";
import { ProgressList } from "@/components/ProgressList";
import { COURSES } from "@/content";

export const metadata: Metadata = { title: "My progress", robots: NO_INDEX };

export default function ProgressPage() {
  const courses = COURSES.map((c) => ({ slug: c.slug, name: c.name, total: c.lessons.length }));
  return (
    <>
      <SiteHeader />
      <main className="wrap page">
        <h1>My progress</h1>
        <ProgressList courses={courses} />
      </main>
    </>
  );
}

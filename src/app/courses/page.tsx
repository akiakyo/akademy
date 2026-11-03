import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { CourseCard } from "@/components/CourseCard";
import { SiteHeader } from "@/components/Header";
import { COURSES, GROUPS } from "@/content";

export const metadata: Metadata = pageMeta("/courses", "All courses", "Free coding courses: web, programming languages, frameworks, databases, and data tools.");

export default function Courses() {
  return (
    <>
      <SiteHeader />
      <main className="wrap page">
        <h1>All courses</h1>
        <p className="page-lede">Every course starts from zero. No setup needed.</p>
        {GROUPS.map((group) => (
          <section key={group}>
            <h2>{group}</h2>
            <div className="grid">
              {COURSES.filter((c) => c.group === group).map((c) => <CourseCard key={c.slug} course={c} />)}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

import Link from "next/link";
import type { Course } from "@/content/types";
import { CourseLogo } from "./CourseLogo";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="card">
      <div className="card-head">
        <CourseLogo slug={course.slug} icon={course.icon} />
        <h3>{course.name}</h3>
      </div>
      <div className="card-actions">
        <Link href={`/learn/${course.slug}`} className="btn btn-green btn-sm">
          Learn {course.name}
        </Link>
        <Link href={`/learn/${course.slug}/reference`} className="btn btn-line btn-sm">
          Reference
        </Link>
      </div>
      <p>{course.blurb}</p>
    </article>
  );
}

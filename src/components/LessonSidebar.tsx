"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { markDone, useProgress } from "@/lib/store";
import { Icon } from "./Icon";
import type { IconName } from "./solar-icons";

export type SidebarLesson = { slug: string; title: string; chapter: string };

function NavLink({ href, on, done, icon, children }: { href: string; on?: boolean; done?: boolean; icon?: IconName; children: React.ReactNode }) {
  return (
    <Link href={href} className={on ? "on" : undefined} aria-current={on ? "page" : undefined}>
      <span className="nav-label">{icon && <Icon name={icon} size={16} />}{children}</span>
      {done && <span className="nav-done" aria-label="done"><Icon name="check" size={16} /></span>}
    </Link>
  );
}

export function LessonSidebar({
  courseSlug,
  courseName,
  lessons,
  current,
}: {
  courseSlug: string;
  courseName: string;
  lessons: SidebarLesson[];
  /** Unset on the course home page. */
  current?: string;
}) {
  const { done } = useProgress();
  const finished = new Set(done[courseSlug] ?? []);
  const base = `/learn/${courseSlug}`;
  const chapters = [...new Set(lessons.map((l) => l.chapter))];
  const rail = useRef<HTMLElement>(null);

  // Keep the active lesson in view when a long list scrolls.
  useEffect(() => {
    const el = rail.current;
    const active = el?.querySelector<HTMLElement>("a.on");
    if (el && active) el.scrollTop = active.offsetTop - el.clientHeight / 2;
  }, [current]);

  return (
    <aside className="sidebar" ref={rail} aria-label={`${courseName} lessons`}>
      <h2>{courseName} tutorial</h2>
      <nav>
        <NavLink href={base} on={!current} icon="home">{courseName} home</NavLink>
      </nav>
      {chapters.map((chapter, i) => (
        <div key={chapter}>
          {i > 0 || chapters.length > 1 ? <h3>{chapter}</h3> : null}
          <nav>
            {lessons
              .filter((l) => l.chapter === chapter)
              .map((l) => (
                <NavLink key={l.slug} href={`${base}/${l.slug}`} on={l.slug === current} done={finished.has(l.slug)}>
                  {l.title}
                </NavLink>
              ))}
          </nav>
        </div>
      ))}
      <h3>Practice</h3>
      <nav>
        <NavLink href={`${base}/flashcards`} icon="deck">Flashcards</NavLink>
        <NavLink href={`${base}/${current ?? lessons[0].slug}/quiz`} icon="quiz">Chapter quiz</NavLink>
        <NavLink href={`${base}/exam`} icon="certificate">Final exam</NavLink>
        <NavLink href={`${base}/reference`} icon="references">Reference</NavLink>
      </nav>
    </aside>
  );
}

export function NextLink({ courseSlug, lessonSlug, href, label }: { courseSlug: string; lessonSlug: string; href: string; label: string }) {
  return (
    <Link href={href} className="btn btn-green" onClick={() => markDone(courseSlug, lessonSlug)}>
      {label}
      <Icon name="next" size={15} />
    </Link>
  );
}

export function CourseProgress({ courseSlug, total }: { courseSlug: string; total: number }) {
  const { done, name } = useProgress();
  const count = done[courseSlug]?.length ?? 0;
  return (
    <div className="course-progress">
      <div className="meter" role="progressbar" aria-valuenow={count} aria-valuemin={0} aria-valuemax={total} aria-label="Lessons done">
        <span style={{ width: `${(count / total) * 100}%` }} />
      </div>
      <p>
        {count} of {total} lessons done{!name && <> · <Link href="/account">Add your name</Link> to track your progress</>}
      </p>
    </div>
  );
}

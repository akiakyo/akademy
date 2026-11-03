"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { CourseLogo } from "./CourseLogo";
import { Icon } from "./Icon";

export type Subject = { slug: string; name: string; icon: string };

export function SubjectBar({ subjects, active }: { subjects: Subject[]; active?: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ left: false, right: true });

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdges({ left: el.scrollLeft > 4, right: el.scrollLeft + el.clientWidth < el.scrollWidth - 4 });
  }, []);

  useEffect(() => {
    const el = track.current;
    const current = el?.querySelector<HTMLElement>("[aria-current]");
    if (el && current) el.scrollLeft = current.offsetLeft - el.clientWidth / 2 + current.offsetWidth / 2;
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active, measure]);

  const scrollBy = (direction: number) => {
    const el = track.current;
    el?.scrollBy({ left: direction * el.clientWidth * 0.7, behavior: "smooth" });
  };

  return (
    <nav className="subjectbar" aria-label="All subjects">
      {edges.left && (
        <button className="subject-arrow left" onClick={() => scrollBy(-1)} aria-label="Scroll subjects left">
          <Icon name="prev" size={18} />
        </button>
      )}
      <div className="subject-track" ref={track} onScroll={measure}>
        {subjects.map((s) => (
          <Link key={s.slug} href={`/learn/${s.slug}`} aria-current={s.slug === active ? "page" : undefined}>
            <CourseLogo slug={s.slug} icon={s.icon} size={18} surface={s.slug === active ? "light" : "dark"} />
            {s.name}
          </Link>
        ))}
      </div>
      {edges.right && (
        <button className="subject-arrow right" onClick={() => scrollBy(1)} aria-label="Scroll subjects right">
          <Icon name="next" size={18} />
        </button>
      )}
    </nav>
  );
}

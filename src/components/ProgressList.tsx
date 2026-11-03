"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { useProgress } from "@/lib/store";
import { Aky } from "./Aky";
import { Bone } from "./Skeleton";

type Row = { slug: string; name: string; total: number };

export function ProgressList({ courses }: { courses: Row[] }) {
  const { done, certificates, name } = useProgress();
  const started = courses.filter((c) => done[c.slug]?.length || certificates[c.slug]);
  const hydrated = useSyncExternalStore(() => () => {}, () => true, () => false);

  if (!hydrated) {
    return <div className="skeleton-gap skeleton-panel"><Bone w="40%" h={18} /><Bone /><Bone w="70%" /></div>;
  }

  return (
    <>
      <p className="page-lede">
        {name ? `Welcome back, ${name}. ` : ""}
        <Link href="/account">{name ? "Edit your profile" : "Add your name"}</Link>
      </p>
      {started.length === 0 ? (
        <div className="mascot-note skeleton-gap">
          <Aky mood="wave" size={84} />
          <p>Nothing here yet. <Link href="/courses">Pick a course</Link> and press Next at the end of a lesson to record it.</p>
        </div>
      ) : (
        <ul className="progress-list">
          {started.map((c) => {
            const count = done[c.slug]?.length ?? 0;
            return (
              <li key={c.slug}>
                <Link href={`/learn/${c.slug}`}>{c.name}</Link>
                <div className="meter"><span style={{ width: `${(count / c.total) * 100}%` }} /></div>
                <span>{count} of {c.total} lessons</span>
                {certificates[c.slug] && <Link href={`/certificate/${c.slug}`}>Certificate ({certificates[c.slug].score}%)</Link>}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

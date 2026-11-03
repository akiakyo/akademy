import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { CourseLogo } from "@/components/CourseLogo";
import { SiteHeader } from "@/components/Header";
import { COURSES } from "@/content";

export const metadata: Metadata = pageMeta("/exercises", "Exercises", "Practice coding with flashcards and final exams for every course.");

export default function Exercises() {
  return (
    <>
      <SiteHeader />
      <main className="wrap page">
        <h1>Exercises</h1>
        <p className="page-lede">Practice with flashcards, or go straight to a final exam.</p>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Course</th><th>Flashcards</th><th>Final exam</th></tr></thead>
            <tbody>
              {COURSES.map((c) => (
                <tr key={c.slug}>
                  <td className="logo-cell"><CourseLogo slug={c.slug} icon={c.icon} size={20} />{c.name}</td>
                  <td><Link href={`/learn/${c.slug}/flashcards`}>Study deck</Link></td>
                  <td><Link href={`/learn/${c.slug}/exam`}>Take exam</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

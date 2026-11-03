import { bash, c, cpp, csharp, go, java, kotlin, php, python, r, rust, swift } from "./languages";
import { dsa, django, git, mongodb, mysql, nodejs, numpy, pandas, postgresql, sql } from "./data";
import { html } from "./html";
import type { Course, CourseGroup, Lesson, Question } from "./types";
import { angular, bootstrap, css, javascript, jquery, react, sass, tailwind, typescript, vue, xml } from "./web";

export const COURSES: Course[] = [
  html, css, javascript, python, sql, java, cpp, c, csharp, php, typescript, go, rust, kotlin, swift, r, bash, xml,
  react, vue, angular, jquery, nodejs, django, bootstrap, tailwind, sass,
  mysql, postgresql, mongodb,
  numpy, pandas, git, dsa,
];

export const GROUPS: CourseGroup[] = ["Web", "Languages", "Frameworks", "Databases", "Data and tools"];

export const FEATURED = ["html", "css", "javascript", "python", "sql", "cpp"];

export function getCourse(slug: string) {
  return COURSES.find((c) => c.slug === slug);
}

export function getLesson(course: Course, slug: string) {
  return course.lessons.find((l) => l.slug === slug);
}

/** A lesson's deck: its own cards, then each keyword as a definition card. */
export function deckFor(lessons: Lesson[]) {
  return lessons.flatMap((l) => [
    ...l.cards,
    ...l.keywords.map(([term, meaning]): [string, string] => [`What does "${term}" mean?`, meaning]),
  ]);
}

export function examQuestions(course: Course): Question[] {
  return course.lessons.flatMap((l) => l.quiz);
}

export { PASS_PERCENT } from "./constants";

import type { RunnerId } from "@/lib/runners";

/** [term, one-line definition] */
export type Keyword = [string, string];
/** [question, answer] */
export type Card = [string, string];
/** [question, correct option, ...wrong options]. Options are shuffled for display. */
export type Question = [string, string, ...string[]];

export type LessonInput = {
  /** One or two plain sentences. `backticks` render as inline code. */
  intro: string;
  code: string;
  /** Set when the expected result needs saying, e.g. for examples that cannot run. */
  note?: string;
  basics: string[];
  keywords: Keyword[];
  tips: string[];
  cards: Card[];
  quiz: Question[];
};

export type Lesson = LessonInput & {
  slug: string;
  title: string;
  chapter: string;
};

export type CourseGroup = "Web" | "Languages" | "Databases" | "Frameworks" | "Data and tools";

export type Course = {
  slug: string;
  name: string;
  /** Icon text shown on the green tile. */
  icon: string;
  group: CourseGroup;
  blurb: string;
  /** Static highlighter grammar for the examples. */
  shiki: string;
  /** Playground language. Unset means the examples are read-only. */
  runner?: RunnerId;
  /** Shown beside read-only examples. */
  noRunReason?: string;
  certificateName: string;
  lessons: Lesson[];
};

type CourseInput = Omit<Course, "lessons" | "certificateName"> & { certificateName?: string };

export function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/\+/g, "p")
    .replace(/#/g, "sharp")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Builds a course from `{ chapter: { lessonTitle: lesson } }`. */
export function course(input: CourseInput, chapters: Record<string, Record<string, LessonInput>>): Course {
  const lessons = Object.entries(chapters).flatMap(([chapter, list]) =>
    Object.entries(list).map(([title, lesson]) => ({ ...lesson, title, chapter, slug: slugify(title) })),
  );
  return { certificateName: `${input.name} Fundamentals`, ...input, lessons };
}

import type { MetadataRoute } from "next";
import { COURSES } from "@/content";
import { LEGAL_PAGES } from "@/lib/legal";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${SITE_URL}${path}`;
  return [
    { url: url("/"), changeFrequency: "weekly", priority: 1 },
    { url: url("/courses"), changeFrequency: "weekly", priority: 0.9 },
    ...["/playground", "/references", "/exercises", "/about", "/contact", ...LEGAL_PAGES.map((p) => p.href)].map((path) => ({ url: url(path), priority: 0.5 })),
    ...COURSES.flatMap((course) => [
      { url: url(`/learn/${course.slug}`), changeFrequency: "monthly" as const, priority: 0.9 },
      { url: url(`/learn/${course.slug}/reference`), changeFrequency: "monthly" as const, priority: 0.6 },
      ...course.lessons.map((lesson) => ({
        url: url(`/learn/${course.slug}/${lesson.slug}`),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
    ]),
  ];
}

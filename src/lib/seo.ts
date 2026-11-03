import type { Metadata } from "next";

// Set NEXT_PUBLIC_SITE_URL to the live domain. Sitemaps and canonical links are
// built from it, so Google Search Console needs it to be the real address.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")
).replace(/\/$/, "");

export const SITE_NAME = "akademy.";

/** Metadata with a canonical URL and matching Open Graph tags. */
export function pageMeta(path: string, title: string, description?: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website", siteName: SITE_NAME, images: ["/opengraph-image"] },
  };
}

/** For practice and personal pages that should not appear in search results. */
export const NO_INDEX: Metadata["robots"] = { index: false, follow: true };

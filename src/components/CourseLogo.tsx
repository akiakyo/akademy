import Image from "next/image";

// aky: sql is a standard and dsa a topic, so neither has a logo of its own.
const NO_LOGO = new Set(["sql", "dsa"]);

/** The subject's theme-colored logo, or its text tile when it has none. */
export function CourseLogo({ slug, icon, size = 40 }: { slug: string; icon: string; size?: number }) {
  if (NO_LOGO.has(slug)) {
    return size < 30 ? null : <span className="tile" style={{ minWidth: size, height: size }}>{icon}</span>;
  }
  return <Image src={`/logos/${slug}.png`} alt="" width={size} height={size} unoptimized className="course-logo" />;
}

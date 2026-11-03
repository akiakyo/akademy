import Image from "next/image";

// aky: sql is a standard and dsa a topic, so neither has a logo of its own.
const NO_LOGO = new Set(["sql", "dsa"]);

type Props = {
  slug: string;
  icon: string;
  size?: number;
  /** aky: pick the chalk set on dark surfaces. */
  surface?: "light" | "dark";
};

/** The subject's theme-colored logo, or its text tile when it has none. */
export function CourseLogo({ slug, icon, size = 40, surface = "light" }: Props) {
  if (NO_LOGO.has(slug)) {
    return size < 30 ? null : <span className="tile" style={{ minWidth: size, height: size }}>{icon}</span>;
  }
  const src = surface === "dark" ? `/logos/chalk/${slug}.png` : `/logos/${slug}.png`;
  return <Image src={src} alt="" width={size} height={size} unoptimized className="course-logo" />;
}

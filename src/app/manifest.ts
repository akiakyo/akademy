import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "akademy.",
    short_name: "akademy",
    description: "Free coding tutorials with live compilers, flashcards, quizzes, and certificates.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f1e7",
    theme_color: "#162e20",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}

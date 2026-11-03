import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Aky } from "@/components/Aky";
import { SiteHeader } from "@/components/Header";

export const metadata: Metadata = pageMeta("/about", "About", "Akademy is a free place to learn to code, made in the Philippines.");

export default function About() {
  return (
    <>
      <SiteHeader />
      <main className="wrap page prose">
        <h1>About Akademy</h1>
        <p>Akademy is a free place to learn to code, made in the Philippines. Lessons are short and written in plain language, with one idea per page.</p>
        <p>Every lesson follows the same path: read the idea, change a live example, then lock it in with basics, keywords, tips, flashcards, and a quiz.</p>
        <div className="mascot-note">
          <Aky mood="wave" size={92} className="float-aky" />
          <p>Say hello to Aky, our mascot: a small piece of chalk who has just graduated and loves a clean board. Aky cheers when you pass a quiz and is there to help you try again when you do not.</p>
        </div>
      </main>
    </>
  );
}

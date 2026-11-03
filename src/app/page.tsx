import Link from "next/link";
import { Aky } from "@/components/Aky";
import { CourseCard } from "@/components/CourseCard";
import { CourseLogo } from "@/components/CourseLogo";
import { SiteHeader } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { COURSES, FEATURED } from "@/content";
import { RUNNERS } from "@/lib/runners";
import { pageMeta, SITE_NAME, SITE_URL } from "@/lib/seo";
import { Icon } from "@/components/Icon";
import type { IconName } from "@/components/solar-icons";

export const metadata = pageMeta("/", "akademy. Learn to code, one lesson at a time", "Learn HTML, CSS, JavaScript, Python, SQL, Java, C++, and more for free. Short lessons, live online compilers, flashcards, quizzes, and certificates.");

const TOOLS: [IconName, string, string, string, string, string][] = [
  ["deck", "FLASHCARDS", "Flip to remember", "Tags, properties, and syntax on cards. Flip, then mark Got it or Again.", "Study a deck", "/learn/html/flashcards"],
  ["basics", "BASICS", "Must-know basics", "A one-page list of the essentials to memorize for each topic.", "See the basics", "/learn/html/reference#basics"],
  ["keywords", "KEYWORDS", "Keyword glossary", "Every new term, defined in one line, right beside the lesson.", "Browse keywords", "/learn/html/reference#keywords"],
  ["tips", "TIPS", "Tips and common mistakes", "Shortcuts and the errors beginners hit most, flagged in each lesson.", "Read the tips", "/learn/html/reference#tips"],
  ["quiz", "QUIZZES", "Chapter quizzes", "Short multiple-choice checks at the end of every chapter.", "Take a quiz", "/learn/html/headings/quiz"],
  ["certificate", "CERTIFICATE", "Final exam and certificate", "Pass the course exam to earn a certificate with your name on it.", "See a certificate", "/certificate/html"],
];

const STEPS: [IconName, string, string][] = [
  ["tutorials", "Read", "Bite-sized lessons in plain language, with one idea per page."],
  ["editor", "Try", "Open any example in the live editor and break it, fix it, make it yours."],
  ["medal", "Test and get certified", "Quizzes after each chapter, a final exam per course, and a certificate when you pass."],
];

export default function Home() {
  const featured = FEATURED.map((slug) => COURSES.find((c) => c.slug === slug)!);
  const lessonCount = COURSES.reduce((total, c) => total + c.lessons.length, 0);

  return (
    <>
      <SiteHeader />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
          potentialAction: {
            "@type": "SearchAction",
            target: `${SITE_URL}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <main>
      <section className="hero">
        <div className="wrap hero-in">
          <div>
            <p className="eyebrow">FREE CODING TUTORIALS</p>
            <h1>Learn to code, <span className="chalk-underline">one lesson</span> at a time.</h1>
            <p className="lede">Short lessons, real examples, and an editor right in your browser. Read it, try it, then test yourself.</p>
            <form action="/search" className="search">
              <input name="q" type="search" placeholder="Search tutorials: HTML, CSS, Python..." aria-label="Search tutorials" />
              <button className="btn btn-green"><Icon name="search" size={16} />Search</button>
            </form>
            <div className="hero-actions">
              <Link href="/learn/html" className="btn btn-chalk"><Icon name="run" size={16} />Start with HTML</Link>
              <Link href="/courses" className="btn btn-ghost">Browse all courses</Link>
            </div>
            <div className="stats">
              <div><Icon name="cap" size={22} /><b>{COURSES.length}</b><span>free courses</span></div>
              <div><Icon name="tutorials" size={22} /><b>{lessonCount}</b><span>short lessons</span></div>
              <div><Icon name="editor" size={22} /><b>{RUNNERS.length}</b><span>languages to run</span></div>
            </div>
          </div>
          <div className="hero-stage">
            <div className="board hero-board">
              <pre>
                <span className="line c">{"<!-- today's lesson -->"}</span>
                <span className="line"><span className="k">{"<h1>"}</span>Hello, Akademy!<span className="k">{"</h1>"}</span></span>
                <span className="line"><span className="k">{"<p>"}</span>I wrote my first web page.<span className="k">{"</p>"}</span></span>
              </pre>
              <hr />
              <h2>Hello, Akademy!</h2>
              <p>I wrote my first web page.</p>
            </div>
            <Aky size={132} className="hero-aky" />
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <div>
            <h2>Pick a subject</h2>
            <p>Every course starts from zero. No setup needed.</p>
          </div>
          <Link href="/courses" className="icon-link">See all {COURSES.length} courses <Icon name="forward" size={15} /></Link>
        </div>
        <div className="grid">
          {featured.map((c) => <CourseCard key={c.slug} course={c} />)}
        </div>
        <div className="language-cloud reveal">
          {COURSES.filter((c) => !FEATURED.includes(c.slug)).map((c) => <Link key={c.slug} href={`/learn/${c.slug}`}><CourseLogo slug={c.slug} icon={c.icon} size={18} />{c.name}</Link>)}
        </div>
      </section>

      <section className="wrap">
        <div className="promo reveal">
          <div>
            <h2>Edit the code. See it change.</h2>
            <p>Every example has a Try it yourself button. It opens the code in a live editor, so you learn by changing things, not just reading.</p>
            <Link href="/playground" className="btn btn-chalk"><Icon name="editor" size={16} />Open the editor</Link>
          </div>
          <div className="promo-demo">
            <div className="promo-bar"><span>index.html</span><Link href="/playground" className="btn btn-green btn-sm"><Icon name="run" size={14} />Run</Link></div>
            <div className="promo-panes">
              <pre>
                <span className="k">{"<style>"}</span>{"\n  h2 { color: tomato; }\n"}<span className="k">{"</style>"}</span>{"\n"}
                <span className="k">{"<h2>"}</span>Chalk it up<span className="k">{"</h2>"}</span>{"\n"}
                <span className="k">{"<button>"}</span>Click me<span className="k">{"</button>"}</span>
              </pre>
              <div className="promo-result">
                <small>RESULT</small>
                <h3>Chalk it up</h3>
                <button tabIndex={-1} type="button">Click me</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <h2 className="center">How Akademy works</h2>
        <div className="steps">
          {STEPS.map(([icon, title, text], i) => (
            <div className="step reveal" key={title}>
              <div className="step-top"><b>{i + 1}</b><Icon name={icon} size={28} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="tools">
        <div className="wrap">
          <h2 className="center">Study tools that make it stick</h2>
          <p className="center">Every course comes with these, free.</p>
          <div className="grid">
            {TOOLS.map(([icon, tag, title, text, cta, href]) => (
              <article className="card reveal" key={tag}>
                <span className="tag"><Icon name={icon} size={14} />{tag}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link href={href} className="card-link">{cta} <Icon name="forward" size={15} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      </main>
    </>
  );
}

import Link from "next/link";
import { COURSES } from "@/content";
import { AccountLinks } from "./AccountLinks";
import { Aky } from "./Aky";
import { Icon } from "./Icon";
import { SubjectBar } from "./SubjectBar";

const SUBJECTS = COURSES.map(({ slug, name }) => ({ slug, name }));

export function Logo() {
  return (
    <Link href="/" className="logo">
      <Aky size={26} className="logo-aky" />
      <span className="logo-word">akademy<span>.</span></span>
    </Link>
  );
}

export function SiteHeader({ active }: { active?: string }) {
  return (
    <header>
      <div className="topbar">
        <div className="topbar-in">
          <Logo />
          <nav className="topnav" aria-label="Main">
            <Link href="/courses"><Icon name="tutorials" size={17} />Tutorials</Link>
            <Link href="/references"><Icon name="references" size={17} />References</Link>
            <Link href="/exercises"><Icon name="exercises" size={17} />Exercises</Link>
            <Link href="/playground"><Icon name="editor" size={17} />Live editor</Link>
          </nav>
          <form action="/search" className="top-search" role="search">
            <Icon name="search" size={16} />
            <input name="q" type="search" placeholder="Search tutorials" aria-label="Search tutorials" />
          </form>
          <AccountLinks />
        </div>
      </div>
      <SubjectBar subjects={SUBJECTS} active={active} />
    </header>
  );
}

export function FocusHeader({ back, label = "Back to lesson" }: { back: string; label?: string }) {
  return (
    <header className="topbar">
      <div className="topbar-in narrow">
        <Logo />
        <Link href={back} className="backlink">
          <Icon name="back" size={16} />
          {label}
        </Link>
      </div>
    </header>
  );
}

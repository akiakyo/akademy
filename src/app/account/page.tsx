"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteHeader } from "@/components/Header";
import { resetProgress, setName, useProgress } from "@/lib/store";

export default function Account() {
  const { name } = useProgress();
  const [draft, setDraft] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const value = draft ?? name;

  return (
    <>
      <SiteHeader />
      <main className="wrap page narrow-page">
        <h1>Your profile</h1>
        <p className="page-lede">No account or password needed. Your name and progress stay in this browser, so they will not follow you to another device.</p>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            setName(value.trim());
            setSaved(true);
          }}
        >
          <label htmlFor="name">Name for your certificates</label>
          <input
            id="name"
            value={value}
            required
            maxLength={60}
            autoComplete="name"
            onChange={(e) => {
              setDraft(e.target.value);
              setSaved(false);
            }}
          />
          <button className="btn btn-green">Save</button>
          {saved && <p role="status">Saved. <Link href="/progress">See your progress</Link></p>}
        </form>
        <button
          className="btn btn-line danger"
          onClick={() => {
            if (window.confirm("Clear your name, lesson progress, and certificates from this browser?")) {
              resetProgress();
              setDraft("");
            }
          }}
        >
          Clear my data
        </button>
      </main>
    </>
  );
}

"use client";

// Progress lives in this browser's localStorage. There is no account server.

import { useSyncExternalStore } from "react";

export type Certificate = { score: number; date: string; id: string; name: string };

export type Progress = {
  name: string;
  done: Record<string, string[]>;
  certificates: Record<string, Certificate>;
};

const KEY = "akademy:v1";
const EMPTY: Progress = { name: "", done: {}, certificates: {} };

let cached: Progress | null = null;
const listeners = new Set<() => void>();

function read(): Progress {
  if (cached) return cached;
  try {
    cached = { ...EMPTY, ...JSON.parse(localStorage.getItem(KEY) ?? "{}") };
  } catch {
    cached = EMPTY;
  }
  return cached as Progress;
}

function write(next: Progress) {
  cached = next;
  localStorage.setItem(KEY, JSON.stringify(next));
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      cached = null;
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function useProgress() {
  return useSyncExternalStore(subscribe, read, () => EMPTY);
}

export function setName(name: string) {
  write({ ...read(), name });
}

export function markDone(course: string, lesson: string) {
  const p = read();
  const list = p.done[course] ?? [];
  if (!list.includes(lesson)) write({ ...p, done: { ...p.done, [course]: [...list, lesson] } });
}

export function saveCertificate(course: string, score: number) {
  const p = read();
  const existing = p.certificates[course];
  if (existing && existing.score >= score) return;
  const part = () => Math.random().toString(36).slice(2, 6).toUpperCase().padEnd(4, "0");
  const certificate: Certificate = {
    score,
    name: p.name,
    date: new Date().toLocaleDateString("en-PH", { year: "numeric", month: "long", day: "numeric" }),
    id: existing?.id ?? `AKD-${part()}-${part()}`,
  };
  write({ ...p, certificates: { ...p.certificates, [course]: certificate } });
}

export function resetProgress() {
  write(EMPTY);
}

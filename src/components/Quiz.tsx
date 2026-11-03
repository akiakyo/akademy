"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { PASS_PERCENT } from "@/content/constants";
import type { Question } from "@/content/types";
import { shuffled } from "@/lib/shuffle";
import { markDone, saveCertificate, useProgress } from "@/lib/store";
import { Aky } from "./Aky";
import { Icon } from "./Icon";

type Props = {
  questions: Question[];
  courseSlug: string;
  /** Set for a chapter quiz; unset means this is the final exam. */
  lessonSlug?: string;
  backHref: string;
};

export function Quiz({ questions, courseSlug, lessonSlug, backHref }: Props) {
  const isExam = !lessonSlug;
  const { name } = useProgress();
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[index];
  const options = useMemo(() => (q ? shuffled(q.slice(1), q[0]) : []), [q]);
  const correct = q?.[1];

  const check = () => {
    if (picked === null) return;
    setChecked(true);
    if (picked === correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setPicked(null);
      setChecked(false);
      return;
    }
    const percent = Math.round((score / questions.length) * 100);
    if (percent >= PASS_PERCENT) {
      if (lessonSlug) markDone(courseSlug, lessonSlug);
      else saveCertificate(courseSlug, percent);
    }
    setFinished(true);
  };

  const restart = () => {
    setIndex(0);
    setPicked(null);
    setChecked(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const percent = Math.round((score / questions.length) * 100);
    const passed = percent >= PASS_PERCENT;
    return (
      <div className="quiz-card quiz-step">
        <div className="quiz-done">
          <Aky mood={passed ? "cheer" : "sad"} size={92} />
          <div>
            <h2>{passed ? "Well done!" : "Not quite yet"}</h2>
            <p className="quiz-result">
              You scored {score} of {questions.length} ({percent}%). {passed ? "" : `You need ${PASS_PERCENT}% to pass.`}
            </p>
          </div>
        </div>
        {isExam && passed && !name && (
          <p className="quiz-result">
            <Link href="/account">Add your name</Link> so it appears on your certificate.
          </p>
        )}
        <div className="quiz-foot">
          <button className="btn btn-line" onClick={restart}>
            <Icon name="again" size={16} />
            Try again
          </button>
          {isExam && passed ? (
            <Link href={`/certificate/${courseSlug}`} className="btn btn-green">
              <Icon name="certificate" size={16} />
              View certificate
            </Link>
          ) : (
            <Link href={backHref} className="btn btn-green">
              Back to lesson
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-card quiz-step" key={index}>
      <div className="quiz-meta">
        <span>
          Question {index + 1} of {questions.length}
        </span>
        <span>Score {score}</span>
      </div>
      <h2>{q[0]}</h2>
      <div className="quiz-options" role="radiogroup" aria-label={q[0]}>
        {options.map((option) => {
          const state = checked ? (option === correct ? "right" : option === picked ? "wrong" : "") : option === picked ? "picked" : "";
          return (
            <button key={option} role="radio" aria-checked={option === picked} disabled={checked} className={`quiz-option ${state}`} onClick={() => setPicked(option)}>
              {option}
            </button>
          );
        })}
      </div>
      {checked && (
        <p className="quiz-feedback" role="status">
          <Icon name={picked === correct ? "check" : "wrong"} size={17} className={picked === correct ? "ok-icon" : "bad-icon"} />
          {picked === correct ? "Correct!" : `The answer is ${correct}.`}
        </p>
      )}
      <div className="quiz-foot">
        {checked ? (
          <button className="btn btn-green" onClick={next}>
            {index + 1 < questions.length ? "Next question" : "See results"}
          </button>
        ) : (
          <button className="btn btn-green" onClick={check} disabled={picked === null}>
            <Icon name="check" size={16} />
            Check answer
          </button>
        )}
      </div>
    </div>
  );
}

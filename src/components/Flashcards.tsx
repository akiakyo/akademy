"use client";

import { useCallback, useEffect, useState } from "react";
import type { Card } from "@/content/types";
import { Aky } from "./Aky";
import { Icon } from "./Icon";

export function Flashcards({ title, cards }: { title: string; cards: Card[] }) {
  const [queue, setQueue] = useState(cards);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [gotIt, setGotIt] = useState(0);
  const [missed, setMissed] = useState<Card[]>([]);

  const finished = index >= queue.length;
  const card = queue[index];

  const answer = useCallback(
    (known: boolean) => {
      if (finished) return;
      if (known) setGotIt((n) => n + 1);
      else setMissed((m) => [...m, card]);
      setFlipped(false);
      setIndex((i) => i + 1);
    },
    [card, finished],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLButtonElement) return;
      if (e.key === " ") {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (e.key === "ArrowRight") answer(true);
      else if (e.key === "ArrowLeft") answer(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [answer]);

  const restart = (next: Card[]) => {
    setQueue(next);
    setIndex(0);
    setGotIt(0);
    setMissed([]);
    setFlipped(false);
  };

  return (
    <div className="deck">
      <div className="deck-head">
        <div>
          <p className="eyebrow">FLASHCARDS</p>
          <h1>{title}</h1>
        </div>
        <p className="deck-score">
          <span>Got it: {gotIt}</span> <span>Again: {missed.length}</span>
        </p>
      </div>
      <div className="meter dark">
        <span style={{ width: `${(Math.min(index, queue.length) / queue.length) * 100}%` }} />
      </div>

      {finished ? (
        <>
          <p className="deck-count">Deck finished</p>
          <div className="board deck-card">
            <div className="deck-done">
              <Aky mood={missed.length ? "think" : "cheer"} size={96} />
              <p className="deck-face">{missed.length ? `${gotIt} known, ${missed.length} to review` : "You got them all!"}</p>
            </div>
          </div>
          <div className="deck-actions">
            {missed.length > 0 && (
              <button className="btn btn-chalk" onClick={() => restart(missed)}>
                Review {missed.length} again
              </button>
            )}
            <button className="btn btn-ghost" onClick={() => restart(cards)}>
              Restart deck
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="deck-count">
            Card {index + 1} of {queue.length}
          </p>
          <button key={index} className={`flip deck-swap${flipped ? " on" : ""}`} onClick={() => setFlipped((f) => !f)} aria-label={flipped ? `Answer: ${card[1]}` : `Question: ${card[0]}`}>
            <span className="flip-in">
              <span className="flip-side board deck-card" aria-hidden="true">
                <span>
                  <span className="deck-label">QUESTION</span>
                  <span className="deck-face">{card[0]}</span>
                  <span className="deck-hint">Click the card to flip</span>
                </span>
              </span>
              <span className="flip-side back board deck-card" aria-hidden="true">
                <span>
                  <span className="deck-label">ANSWER</span>
                  <span className="deck-face">{card[1]}</span>
                </span>
              </span>
            </span>
          </button>
          <div className="deck-actions">
            <button className="btn btn-again" onClick={() => answer(false)}>
              <Icon name="again" size={16} />
              Again
            </button>
            <button className="btn btn-ghost" onClick={() => setFlipped((f) => !f)}>
              <Icon name="flip" size={16} />
              Flip
            </button>
            <button className="btn btn-chalk" onClick={() => answer(true)}>
              <Icon name="check" size={16} />
              Got it
            </button>
          </div>
        </>
      )}
    </div>
  );
}

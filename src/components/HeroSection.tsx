"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type { Dictionary } from "@/i18n/getDictionary";

const WORDS = ["Daily", "Dot", "Diary", "Design"];
const TYPING_SPEED = 80;
const DELETING_SPEED = 50;
const HOLD_DURATION = 1500;
const INITIAL_DELAY = 800;
const PAUSE_BETWEEN = 300;

export default function HeroSection({ dict }: { dict: Dictionary }) {
  const [displayText, setDisplayText] = useState("");
  const [reducedMotion, setReducedMotion] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    if (mq.matches) {
      setDisplayText("d");
    }
  }, []);

  const sleep = useCallback(
    (ms: number) =>
      new Promise<void>((resolve) => {
        timeoutRef.current = setTimeout(resolve, ms);
      }),
    []
  );

  const typeWord = useCallback(
    async (word: string) => {
      for (let i = 0; i <= word.length; i++) {
        setDisplayText(word.slice(0, i));
        await sleep(TYPING_SPEED);
      }
    },
    [sleep]
  );

  const deleteWord = useCallback(
    async (word: string) => {
      for (let i = word.length; i >= 0; i--) {
        setDisplayText(word.slice(0, i));
        await sleep(DELETING_SPEED);
      }
    },
    [sleep]
  );

  useEffect(() => {
    if (reducedMotion) return;

    let cancelled = false;

    const runLoop = async () => {
      await sleep(INITIAL_DELAY);

      while (!cancelled) {
        for (const word of WORDS) {
          if (cancelled) return;
          await typeWord(word);
          await sleep(HOLD_DURATION);
          await deleteWord(word);
          await sleep(PAUSE_BETWEEN);
        }
      }
    };

    runLoop();

    return () => {
      cancelled = true;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [reducedMotion, sleep, typeWord, deleteWord]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-cream-white px-5 pt-16">
      <div className="flex flex-col items-center text-center">
        {/* Typing animation area */}
        <div className="mb-8 flex items-baseline justify-center">
          <span
            className="text-[36px] leading-[1.3] tracking-[-0.02em] md:text-[56px]"
            style={{ fontFamily: "var(--font-zilla-slab)" }}
          >
            <span className="text-primary">{displayText}</span>
            <span
              className="ml-[1px] mr-[6px] inline-block h-[36px] w-[3.5px] translate-y-[2px] rounded-full bg-accent md:mr-[10px] md:h-[56px] md:w-[4.5px]"
              style={{ animation: "blink 1.06s infinite" }}
            />
            <span className="text-text-muted">studio.</span>
          </span>
        </div>

        {reducedMotion && (
          <p className="mb-4 text-xs tracking-[0.04em] text-text-muted">
            {dict.hero.reducedMotionHint}
          </p>
        )}

        {/* Main headline */}
        <h1 className="mb-6 text-[30px] font-bold leading-[1.3] tracking-[-0.02em] text-text-primary md:text-[40px]">
          {dict.hero.headline.split("\n").map((line, i, arr) => (
            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
          ))}
        </h1>

        {/* Subcopy */}
        <p className="mb-8 max-w-md text-lg leading-[1.7] text-text-secondary md:text-xl">
          {dict.hero.subcopy.split("\n").map((line, i, arr) => (
            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
          ))}
        </p>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <svg
          className="h-6 w-6 text-text-muted"
          style={{ animation: "bounce-gentle 2s ease-in-out infinite" }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}

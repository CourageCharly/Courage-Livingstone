"use client";

import { useEffect, useRef, useState } from "react";

const text =
  "I work across product design and frontend engineering, connecting user needs, visual systems and production-ready interfaces.";

const emphasis = new Set([
  "product",
  "design",
  "frontend",
  "engineering,",
  "visual",
  "systems",
  "production-ready",
  "interfaces.",
]);

const ProfileStatement = () => {
  const root = useRef<HTMLParagraphElement>(null);
  const [ready, setReady] = useState(false);
  const [count, setCount] = useState(0);
  const words = text.split(" ");

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setReady(true);
    const update = () => {
      const rect = node.getBoundingClientRect();
      const start = window.innerHeight * 0.85;
      const end = window.innerHeight * 0.35;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      setCount(Math.round(progress * words.length));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [words.length]);

  return (
    <p
      ref={root}
      className="max-w-5xl text-[clamp(1.8rem,4vw,3.4rem)] leading-[1.15] font-medium tracking-[-0.035em]"
    >
      {words.map((word, index) => {
        const live = !ready || index < count;
        return (
          <span
            key={`${word}-${index}`}
            className={
              live
                ? emphasis.has(word)
                  ? "text-foreground"
                  : "text-foreground/90"
                : "text-foreground/25"
            }
          >
            {word}{" "}
          </span>
        );
      })}
    </p>
  );
};

export default ProfileStatement;

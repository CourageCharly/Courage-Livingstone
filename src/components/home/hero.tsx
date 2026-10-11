"use client";

import { useLayoutEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib";

const lines = [
  { text: "I design products", accent: "" },
  { text: "and build them", accent: "build them" },
  { text: "for the web.", accent: "" },
];

const total = lines.reduce((sum, line) => sum + line.text.length, 0);

function revealed(lineIndex: number, count: number) {
  let before = 0;
  for (let index = 0; index < lineIndex; index += 1) before += lines[index].text.length;
  return Math.min(lines[lineIndex].text.length, Math.max(0, count - before));
}

function Line({
  text,
  accent,
  count,
  caret,
}: {
  text: string;
  accent: string;
  count: number;
  caret: number | null;
}) {
  const at = accent ? text.indexOf(accent) : -1;
  return (
    <span className="relative block whitespace-nowrap">
      {caret === 0 ? <span className="caret absolute top-[0.12em] left-0" /> : null}
      {text.split("").map((character, index) => {
        const lime = at >= 0 && index >= at && index < at + accent.length;
        return (
          <span
            key={`${character}-${index}`}
            className={`hero-char relative${index < count ? " is-on" : ""}${lime ? " text-lime" : ""}`}
          >
            {character === " " ? "\u00A0" : character}
            {caret === index + 1 ? <span className="caret absolute top-[0.12em] -right-1" /> : null}
          </span>
        );
      })}
    </span>
  );
}

const Hero = () => {
  const [mode, setMode] = useState<"rest" | "type">("rest");
  const [count, setCount] = useState(total);

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let interval = 0;
    let safety = 0;
    if (!reduce) {
      setMode("type");
      setCount(0);
      let written = 0;
      interval = window.setInterval(() => {
        written += 1;
        setCount(written);
        if (written >= total) {
          window.clearInterval(interval);
          setMode("rest");
        }
      }, 62);
      safety = window.setTimeout(() => {
        setCount(total);
        setMode("rest");
      }, 8000);
    }

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(safety);
    };
  }, []);

  const typed = mode === "rest" ? total : count;
  let caretLine = lines.length - 1;
  let caretAt: number | null = lines[lines.length - 1].text.length;
  if (mode === "type") {
    let before = 0;
    caretLine = lines.length - 1;
    caretAt = null;
    for (let index = 0; index < lines.length; index += 1) {
      const length = lines[index].text.length;
      const local = typed - before;
      if (local >= 0 && local < length) {
        caretLine = index;
        caretAt = local;
        break;
      }
      if (index === lines.length - 1) {
        caretLine = index;
        caretAt = length;
      }
      before += length;
    }
  }

  return (
    <section className="relative overflow-x-clip px-5 pt-20 pb-8 md:pt-24 md:pb-12">
      <div className="hero-wash hero-wash-a" />
      <div className="hero-wash hero-wash-b" />
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0 opacity-40" />
      <div aria-hidden className="hero-scan pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-lime/10 to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <div
          aria-hidden
          data-hero-circle
          className="pointer-events-none absolute top-1/2 left-1/2 h-[min(88vw,32rem)] w-[min(88vw,32rem)] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute inset-0 rounded-full border border-white/15" />
          <div className="orbit absolute inset-[7%] rounded-full border border-dashed border-lime/45">
            <span className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime shadow-[0_0_14px_#c6f135]" />
          </div>
          <div className="orbit-rev absolute inset-[16%] rounded-full border border-white/10">
            <span className="absolute top-1/2 left-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/70" />
          </div>
        </div>

        <div data-hero-copy className="relative w-full">
          <p className="kicker text-lime">{site.role}</p>
          <h1
            className={`display mt-3 text-[clamp(1.55rem,6.4vw,4.15rem)] text-foreground${mode === "type" ? " hero-write" : ""}`}
            data-typing={mode}
          >
            {lines.map((line, index) => (
              <Line
                key={line.text}
                text={line.text}
                accent={line.accent}
                count={mode === "type" ? revealed(index, typed) : line.text.length}
                caret={caretLine === index ? caretAt : null}
              />
            ))}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground sm:text-base">{site.statement}</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/work"
              className="inline-flex rounded-full bg-lime px-5 py-2.5 text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              View my work
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-white/15 px-5 py-2.5 text-sm transition-colors hover:border-lime/40 hover:text-lime"
            >
              Let&apos;s work together
            </Link>
          </div>
          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="status-dot h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_12px_#c6f135]" />
            {site.availabilityNote}
          </p>
        </div>
        <a href="#about" className="scroll-cue relative z-10 mt-8 font-mono text-[10px] tracking-[0.22em] text-foreground/70 uppercase">
          Scroll to explore ↓
        </a>
      </div>
    </section>
  );
};

export default Hero;

"use client";

import { useEffect, useState, type PointerEvent } from "react";
import PageWrapper from "@/components/layout/page-wrapper";
import Magnetic from "@/components/shared/magnetic";

const words = ["Design", "System", "Code", "Product"];
const modes = ["Browse", "Detail", "Play"] as const;

const Playground = () => {
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState<(typeof modes)[number]>("Browse");
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % words.length);
    }, 1600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      className="border-t border-border py-24 sm:py-32"
      onPointerMove={(event: PointerEvent<HTMLElement>) => {
        if (!window.matchMedia("(pointer: fine)").matches) return;
        const rect = event.currentTarget.getBoundingClientRect();
        setOffset((event.clientX - rect.left) / rect.width - 0.5);
      }}
    >
      <PageWrapper>
        <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">09 — Playground</p>
        <h2 className="mt-4 text-4xl font-medium tracking-tight uppercase sm:text-6xl">Playground</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Small interface studies. The work stays in the case studies.
        </p>

        <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2">
          <div className="flex min-h-48 flex-col justify-between bg-background p-6">
            <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">Magnetic button</p>
            <Magnetic href="/contact" cursor="OPEN">
              Start a conversation →
            </Magnetic>
          </div>

          <div className="flex min-h-48 flex-col justify-between bg-background p-6" data-cursor="VIEW →">
            <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">Cursor</p>
            <p className="text-2xl font-medium">Move here. The cursor changes state.</p>
          </div>

          <div className="flex min-h-48 flex-col justify-between bg-background p-6">
            <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">Animated type</p>
            <p className="text-4xl font-medium tracking-tight">{words[index]}</p>
          </div>

          <div className="flex min-h-48 items-center justify-between bg-background p-6">
            <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">Object</p>
            <div className="iso-scene">
              <div className="iso-cube">
                <span className="iso-face front" />
                <span className="iso-face back" />
                <span className="iso-face right" />
                <span className="iso-face left" />
                <span className="iso-face top" />
                <span className="iso-face bottom" />
              </div>
            </div>
          </div>

          <div className="flex min-h-48 flex-col justify-between overflow-hidden bg-background p-6">
            <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">Scroll response</p>
            <p
              className="text-3xl font-medium tracking-tight whitespace-nowrap"
              style={{ transform: `translateX(${offset * -24}px)` }}
            >
              The line follows the pointer.
            </p>
          </div>

          <div className="min-h-48 bg-background p-6">
            <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">Component</p>
            <div className="mt-6 flex border border-white/15" role="tablist" aria-label="Preview mode">
              {modes.map((item) => (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={mode === item}
                  onClick={() => setMode(item)}
                  className={`flex-1 px-3 py-2 font-mono text-[10px] tracking-[0.14em] uppercase outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-foreground ${mode === item ? "bg-foreground text-background" : "text-muted-foreground"}`}
                >
                  {item}
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {mode === "Browse" && "A row of titles, with the next one already in view."}
              {mode === "Detail" && "One title, the decision, and nothing else."}
              {mode === "Play" && "The player is the last step, not a new product."}
            </p>
          </div>
        </div>
      </PageWrapper>
    </section>
  );
};

export default Playground;

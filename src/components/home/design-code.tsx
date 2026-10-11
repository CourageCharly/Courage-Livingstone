"use client";

import { useEffect, useRef, useState } from "react";
import PageWrapper from "@/components/layout/page-wrapper";

const stages = [
  {
    index: "01",
    title: "Design",
    note: "Figma",
    detail: "The screen is decided before the code exists.",
  },
  {
    index: "02",
    title: "System",
    note: "Components · Tokens · Responsive states",
    detail: "Type, color, spacing, and states become one set of rules.",
  },
  {
    index: "03",
    title: "Code",
    note: "React · Next.js · TypeScript",
    detail: "The same structure is written as an interface, not redrawn.",
  },
  {
    index: "04",
    title: "Product",
    note: "A working interface",
    detail: "What ships is the design, running.",
  },
];

const Frame = ({ stage }: { stage: number }) => {
  if (stage === 0) {
    return (
      <div className="grid h-full grid-cols-[0.7fr_1.3fr] bg-[#101010]">
        <div className="border-r border-white/10 p-4 font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
          {["Cover", "Title", "Row", "Action"].map((item, index) => (
            <p key={item} className={index === 1 ? "mt-3 text-foreground" : "mt-3"}>
              {item}
            </p>
          ))}
        </div>
        <div className="flex flex-col justify-between p-6">
          <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground">FRAME 01</p>
          <p className="max-w-xs text-3xl leading-none font-medium tracking-tight">A title, then the next action.</p>
          <div className="h-8 w-28 border border-foreground/40" />
        </div>
      </div>
    );
  }

  if (stage === 1) {
    return (
      <div className="grid h-full content-center gap-6 p-6 sm:p-8">
        <div className="flex gap-3">
          {["#090909", "#f4f1ea", "#d8d2c6"].map((color) => (
            <div key={color} className="space-y-2">
              <div className="h-12 w-12 border border-white/15" style={{ background: color }} />
              <p className="font-mono text-[10px] text-muted-foreground">{color}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          {["Button", "Field", "Card"].map((item) => (
            <div key={item} className="border border-white/12 px-3 py-4 font-mono text-[10px] tracking-[0.14em] uppercase">
              {item}
            </div>
          ))}
        </div>
        <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground">390 · 768 · 1440</p>
      </div>
    );
  }

  if (stage === 2) {
    return (
      <pre className="h-full overflow-auto p-6 font-mono text-[12px] leading-relaxed text-foreground/90 sm:p-8">
        <span className="text-muted-foreground">{"// interface, not a picture"}</span>
        {"\n"}export function Screen() {"{"}
        {"\n"}  return (
        {"\n"}    {"<section>"}
        {"\n"}      {"<Title />"}
        {"\n"}      {"<Action />"}
        {"\n"}    {"</section>"}
        {"\n"}  )
        {"\n"}{"}"}
      </pre>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 font-mono text-[10px] tracking-[0.16em]">
        <span>CL</span>
        <span className="text-muted-foreground">WORK</span>
      </div>
      <div className="flex flex-1 flex-col justify-end p-6">
        <p className="text-3xl font-medium tracking-tight">The interface is live.</p>
        <div className="mt-6 grid grid-cols-3 gap-2">
          {["01", "02", "03"].map((item) => (
            <div key={item} className="aspect-[4/3] border border-white/10 bg-[#141414]" />
          ))}
        </div>
      </div>
    </div>
  );
};

const DesignCode = () => {
  const root = useRef<HTMLElement>(null);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const update = () => {
      const node = root.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const passed = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      const progress = total > 0 ? passed / total : 0;
      setStage(Math.min(stages.length - 1, Math.floor(progress * stages.length)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section ref={root} className="border-t border-border">
      <div className="dxc-stack py-24 sm:py-32">
        <PageWrapper>
          <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">03 — Signature</p>
          <h2 className="mt-4 text-4xl font-medium tracking-tight uppercase sm:text-6xl">Design × code</h2>
          <p className="mt-6 max-w-3xl text-2xl font-medium tracking-tight text-muted-foreground sm:text-4xl">
            I don&apos;t stop at the design file. I build the interface.
          </p>
          <div className="mt-12 grid gap-6">
              {stages.map((item, index) => (
                <article key={item.index} className="grid gap-4 border border-white/10 lg:grid-cols-[0.7fr_1.3fr]">
                  <div className="p-6">
                    <p className="font-mono text-[11px] text-muted-foreground">{item.index}</p>
                    <h3 className="mt-3 text-3xl font-medium">{item.title}</h3>
                    <p className="mt-3 font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">{item.note}</p>
                    <p className="mt-4 text-muted-foreground">{item.detail}</p>
                  </div>
                  <div className="min-h-56 border-t border-white/10 lg:border-t-0 lg:border-l">
                    <Frame stage={index} />
                  </div>
                </article>
              ))}
            </div>
        </PageWrapper>
      </div>
      <div className="dxc-pin relative h-[320vh]">
        <div className="sticky top-16 flex min-h-[calc(100vh-4rem)] items-center py-10">
          <PageWrapper className="w-full">
            <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">03 — Signature</p>
            <h2 className="mt-4 text-4xl font-medium tracking-tight uppercase sm:text-6xl">Design × code</h2>
            <p className="mt-6 max-w-3xl text-2xl font-medium tracking-tight text-muted-foreground sm:text-4xl">
              I don&apos;t stop at the design file. I build the interface.
            </p>
            <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-[0.75fr_1.25fr]">
              <ol className="flex flex-col justify-center gap-2">
                {stages.map((item, index) => {
                  const on = index === stage;
                  return (
                    <li key={item.index}>
                      <button
                        type="button"
                        onClick={() => setStage(index)}
                        className="w-full border border-transparent px-3 py-3 text-left outline-none transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                        aria-current={on}
                      >
                        <span className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground">{item.index}</span>
                        <span className={`mt-1 block text-2xl font-medium tracking-tight sm:text-3xl ${on ? "text-foreground" : "text-foreground/35"}`}>
                          {item.title}
                        </span>
                        <span className={`mt-1 block font-mono text-[10px] tracking-[0.14em] uppercase ${on ? "text-muted-foreground" : "text-transparent"}`}>
                          {item.note}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
              <div className="min-h-[420px] border border-white/12 bg-card">
                <Frame stage={stage} />
              </div>
            </div>
          </PageWrapper>
        </div>
      </div>
    </section>
  );
};

export default DesignCode;

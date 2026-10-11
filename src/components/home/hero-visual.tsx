"use client";

import { useRef, type PointerEvent } from "react";

const steps = ["Research", "Design", "System", "Code", "Product"];

const HeroVisual = () => {
  const root = useRef<HTMLDivElement>(null);

  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const node = root.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    node.style.setProperty("--px", x.toFixed(3));
    node.style.setProperty("--py", y.toFixed(3));
  };

  const reset = () => {
    const node = root.current;
    if (!node) return;
    node.style.setProperty("--px", "0");
    node.style.setProperty("--py", "0");
  };

  return (
    <div
      ref={root}
      onPointerMove={move}
      onPointerLeave={reset}
      className="relative min-h-[280px] border border-white/10 bg-card/60"
      style={{ ["--px" as string]: 0, ["--py" as string]: 0 }}
    >
      <div className="tech-grid tech-grid-fade pointer-events-none absolute inset-0 opacity-70" />
      <ol className="relative flex h-full flex-col justify-between px-6 py-8 sm:px-8">
        {steps.map((step, index) => (
          <li
            key={step}
            className="flex items-center gap-4"
            style={{
              transform: `translate3d(calc(var(--px) * ${8 + index * 6}px), calc(var(--py) * ${6 + index * 3}px), 0)`,
              transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
              0{index + 1}
            </span>
            <span className="h-px w-8 bg-foreground/30" />
            <span className="text-sm tracking-[0.16em] uppercase">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default HeroVisual;

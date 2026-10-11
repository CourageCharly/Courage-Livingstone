"use client";

import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const label = useRef("");
  const [text, setText] = useState("");
  const [on, setOn] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduce.matches) return;

    document.documentElement.dataset.customCursor = "on";
    setOn(true);

    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;
    let frame = 0;
    let visible = false;

    const loop = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);

    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      const target = event.target as Element | null;
      const typing = target?.closest("input, textarea, select, [contenteditable='true']");
      const labeled = target?.closest("[data-cursor]")?.getAttribute("data-cursor") ?? "";
      const clickable = Boolean(target?.closest("a, button, summary, [role='button']"));
      const next = typing ? "" : labeled || (clickable ? "open" : "");
      if (!visible) {
        visible = true;
        if (dot.current) dot.current.style.opacity = "1";
        if (ring.current) ring.current.style.opacity = "1";
      }
      if (dot.current) dot.current.style.opacity = typing || next ? "0" : "1";
      if (ring.current) ring.current.style.opacity = typing ? "0" : "1";
      if (next !== label.current) {
        label.current = next;
        setText(next);
      }
    };

    const hide = () => {
      if (dot.current) dot.current.style.opacity = "0";
      if (ring.current) ring.current.style.opacity = "0";
      visible = false;
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", hide);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", hide);
      delete document.documentElement.dataset.customCursor;
    };
  }, []);

  if (!on) return null;

  return (
    <>
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[80] h-1 w-1 rounded-full bg-white opacity-0 mix-blend-difference"
      />
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[80] opacity-0 mix-blend-difference"
      >
        <div
          className={
            text
              ? "grid h-16 min-w-16 place-items-center rounded-full border border-white px-3 text-white transition-[width,height] duration-300"
              : "grid h-8 w-8 place-items-center rounded-full border border-white/80 transition-[width,height] duration-300"
          }
        >
          {text ? (
            <span className="font-mono text-[9px] tracking-[0.16em] uppercase">{text}</span>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CustomCursor;

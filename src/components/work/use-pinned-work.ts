"use client";

import { useLayoutEffect, useState, type RefObject } from "react";

export function indexFromProgress(value: number, count: number) {
  if (count <= 1) return 0;
  const clamped = Math.min(1, Math.max(0, value));
  if (clamped >= 1) return count - 1;
  return Math.min(count - 1, Math.floor(clamped * count));
}

/** Sticky viewport plus one 78vh slice of travel for each project. */
export function pinTrackHeight(count: number) {
  return `calc(100svh + ${Math.max(count, 1)} * 78vh)`;
}

export function usePinnedWork(
  sectionRef: RefObject<HTMLElement | null>,
  count: number,
  reduce: boolean | null,
) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (reduce) return;
    const el = sectionRef.current;
    if (!el) return;

    let frame = 0;

    const apply = (fromScroll: boolean) => {
      if (el.offsetHeight < 8) return;
      const rect = el.getBoundingClientRect();
      const start = window.scrollY + rect.top;
      const end = start + el.offsetHeight - window.innerHeight;
      const value = (window.scrollY - start) / Math.max(1, end - start);
      const next = indexFromProgress(value, count);
      if (fromScroll) setHovered((current) => (current == null ? current : null));
      setActive((current) => (current === next ? current : next));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        apply(true);
      });
    };

    apply(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    const observer = new ResizeObserver(onScroll);
    observer.observe(el);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [count, reduce, sectionRef]);

  return { active, hovered, setHovered, shown: hovered ?? active };
}

"use client";

import type { PointerEvent, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib";

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
  cursor?: string;
};

const Magnetic = ({ href, className, children, cursor }: Props) => {
  const shift = (event: PointerEvent<HTMLAnchorElement>) => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    event.currentTarget.style.transform = `translate3d(${x * 0.18}px, ${y * 0.28}px, 0)`;
  };

  const reset = (event: PointerEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.transform = "";
  };

  return (
    <Link
      href={href}
      data-cursor={cursor}
      onPointerMove={shift}
      onPointerLeave={reset}
      className={cn(
        "inline-flex items-center gap-3 border border-foreground/30 px-5 py-3 font-mono text-[11px] tracking-[0.16em] uppercase transition-[background-color,border-color,color] duration-300 hover:border-foreground hover:bg-foreground hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground",
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default Magnetic;

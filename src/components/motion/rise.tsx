"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const Rise = ({ children, className, delay = 0 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const reduce = useReducedMotion();
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) return;
    setArmed(true);
  }, [reduce]);

  const shown = Boolean(reduce) || !armed || inView;

  return (
    <div
      ref={ref}
      className={cn("rise-node", shown && "is-shown", className)}
      style={shown && delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
};

export default Rise;

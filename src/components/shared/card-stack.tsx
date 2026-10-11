"use client";

import { Children, cloneElement, isValidElement, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { cn } from "@/lib";
import { ease } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
};

const CardStack = ({ children, className }: Props) => {
  const items = Children.toArray(children);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(items.length - 1, Math.max(0, Math.floor(value * items.length + 0.001)));
    setActive((current) => (current === next ? current : next));
  });

  if (reduce || items.length < 2) {
    return <div className={cn("space-y-3", className)}>{items}</div>;
  }

  return (
    <div ref={ref} className={cn("relative", className)} style={{ height: `${items.length * 70}vh` }}>
      <div className="sticky top-[5.75rem] flex min-h-[calc(100svh-7.5rem)] items-start pt-2">
        <div className="relative w-full">
          <div className="grid" aria-hidden>
            {items.map((item, index) => (
              <div key={`size-${index}`} className="invisible col-start-1 row-start-1">
                {isValidElement(item) ? cloneElement(item) : item}
              </div>
            ))}
          </div>
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{
                y: index > active ? 28 : 0,
                opacity: index > active ? 0 : 1,
              }}
              transition={{ duration: 0.45, ease }}
              className="absolute inset-0 [&>*]:h-full"
              style={{ zIndex: index + 1, pointerEvents: index === active ? "auto" : "none" }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardStack;

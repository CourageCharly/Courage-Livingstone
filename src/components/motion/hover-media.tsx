"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";
import { cn } from "@/lib";

type Props = {
  children: ReactNode;
  className?: string;
};

const HoverMedia = ({ children, className }: Props) => {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("h-full w-full", className)}
      initial={false}
      whileHover={{ scale: 1.035 }}
      transition={{ duration: 0.75, ease }}
    >
      {children}
    </motion.div>
  );
};

export default HoverMedia;

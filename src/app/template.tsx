"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Template({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div initial={false} animate={{ opacity: 1 }} className={reduce ? undefined : "page-enter"}>
      {children}
    </motion.div>
  );
}

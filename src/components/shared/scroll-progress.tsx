"use client";

import { motion, useReducedMotion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  if (reduce) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-px">
      <motion.div className="h-full origin-left bg-lime shadow-[0_0_12px_#c6f135]" style={{ scaleX: scrollYProgress }} />
    </div>
  );
};

export default ScrollProgress;

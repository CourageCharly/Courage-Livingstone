"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";
import { cn, projects } from "@/lib";
import { Arrow } from "@/components/shared/text-link";
import { TechCorners } from "@/components/layout/tech-marks";
import ProjectMedia from "@/components/work/project-media";

const Archive = () => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const current = projects[active];

  const choose = (index: number) => {
    setHasMoved(true);
    setActive(index);
  };

  useEffect(() => {
    const nodes = itemsRef.current.filter(Boolean) as HTMLLIElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = nodes.indexOf(visible.target as HTMLLIElement);
        if (index >= 0) choose(index);
      },
      { rootMargin: "-28% 0px -48% 0px", threshold: [0.2, 0.45, 0.7] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-10">
      <ul className="lg:col-span-5">
        {projects.map((project, index) => {
          const selected = index === active;
          return (
            <li
              key={project.slug}
              ref={(node) => {
                itemsRef.current[index] = node;
              }}
              onMouseEnter={() => choose(index)}
              onFocus={() => choose(index)}
              className="border-b border-border"
            >
              <Link
                href={`/work/${project.slug}`}
                data-cursor="Open"
                className={cn(
                  "group flex items-center justify-between gap-4 py-6 outline-none transition-colors",
                  selected ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span className="min-w-0">
                  <span className="block text-[clamp(2rem,4vw,3.2rem)] leading-[0.95] font-medium tracking-[-0.05em]">
                    {project.title}
                  </span>
                  <span className="mt-2 block font-mono text-[11px] tracking-[0.14em] text-lime/80 uppercase">
                    {project.label}
                  </span>
                </span>
                <Arrow />
              </Link>
              <div className="pb-6 lg:hidden">
                <div className="overflow-hidden rounded-[22px]">
                  <ProjectMedia cover={project.cover} title={project.title} className="rounded-[22px]" />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{project.summary}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="relative hidden lg:col-span-7 lg:block">
        <div className="sticky top-28 pb-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.slug}
              initial={reduce || !hasMoved ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease }}
            >
              <Link href={`/work/${current.slug}`} data-cursor="Open" className="group block outline-none">
                <div className="relative overflow-hidden rounded-[24px] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
                  <TechCorners />
                  <ProjectMedia
                    cover={current.cover}
                    title={current.title}
                    priority
                    className="rounded-none border-0"
                    imageClassName="object-contain object-center"
                  />
                  <div className="hero-scan pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-lime/10 to-transparent" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <p className="max-w-md text-muted-foreground">{current.summary}</p>
                  <span className="inline-flex shrink-0 items-center gap-2 text-sm text-lime">
                    Open
                    <Arrow />
                  </span>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Archive;

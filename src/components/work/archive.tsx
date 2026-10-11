"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { cn, projects } from "@/lib";
import { Arrow } from "@/components/shared/text-link";
import { TechCorners } from "@/components/layout/tech-marks";
import PageWrapper from "@/components/layout/page-wrapper";
import ProjectMedia from "@/components/work/project-media";

const Archive = () => {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("hide-scrollbar");
    return () => root.classList.remove("hide-scrollbar");
  }, []);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (reduce) return;
    const last = projects.length - 1;
    const next = Math.min(last, Math.max(0, Math.round(value * last)));
    setActive((current) => (current === next ? current : next));
  });

  const current = projects[hovered ?? active];
  const shown = hovered ?? active;

  if (reduce) {
    return (
      <PageWrapper className="pb-20 md:pb-28">
        <div className="lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-10" onMouseLeave={() => setHovered(null)}>
          <div className="lg:col-span-5">
            <ProjectList active={shown} onHover={setHovered} mobileImages />
          </div>
          <div className="relative hidden lg:col-span-7 lg:block">
            <Preview project={current} />
          </div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <div className="pb-20 md:pb-28">
      <section className="lg:hidden">
        <PageWrapper>
          <ProjectList active={shown} onHover={setHovered} mobileImages />
        </PageWrapper>
      </section>
      <section
        ref={sectionRef}
        className="relative hidden lg:block"
        style={{ height: `${(projects.length + 0.5) * 78}vh` }}
      >
        <div className="sticky top-[4.5rem] overflow-hidden pt-4 pb-16" style={{ height: "calc(100svh - 4.5rem)" }}>
          <PageWrapper className="h-full">
            <div
              className="grid h-full content-start items-stretch gap-10 pt-6 lg:grid-cols-12 lg:content-center lg:pt-0"
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex h-full min-h-0 flex-col justify-center overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:col-span-5">
                <ProjectList active={shown} onHover={setHovered} />
              </div>
              <div className="relative hidden min-h-[16rem] lg:col-span-7 lg:block">
                <Preview project={current} />
              </div>
            </div>
          </PageWrapper>
        </div>
      </section>
    </div>
  );
};

function ProjectList({
  active,
  onHover,
  mobileImages = false,
}: {
  active: number;
  onHover: (index: number) => void;
  mobileImages?: boolean;
}) {
  return (
    <ul className="pb-2">
      {projects.map((project, index) => {
        const selected = index === active;
        return (
          <li key={project.slug} className="border-b border-border last:border-b-0">
            <Link
              href={`/work/${project.slug}`}
              data-cursor="Open"
              onMouseEnter={() => onHover(index)}
              onFocus={() => onHover(index)}
              className={cn(
                "group flex items-center justify-between gap-4 py-4 outline-none transition-colors lg:py-5",
                selected ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span className="min-w-0">
                <span className="block text-[clamp(2rem,4vw,3.2rem)] leading-[0.95] font-medium tracking-[-0.05em]">
                  {project.title}
                </span>
                <span className="mt-2 block font-mono text-[11px] tracking-[0.14em] text-lime/80 uppercase">
                  {project.label} · {project.year}
                </span>
              </span>
              <Arrow />
            </Link>
            {mobileImages ? (
              <div className="pb-6 lg:hidden">
                <div className="overflow-hidden rounded-[22px]">
                  <ProjectMedia
                    cover={project.cover}
                    title={project.title}
                    className="rounded-[22px]"
                    imageClassName={
                      project.slug === "stanbic" ? "object-cover object-center" : "object-contain object-center"
                    }
                  />
                </div>
                <p className="mt-4 text-lg text-muted-foreground">{project.summary}</p>
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

function Preview({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link href={`/work/${project.slug}`} data-cursor="Open" className="group flex h-full flex-col justify-center outline-none">
      <div className="relative overflow-hidden rounded-[24px] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
        <TechCorners />
        <ProjectMedia
          cover={project.cover}
          title={project.title}
          priority
          className="rounded-none border-0"
          imageClassName={
            project.slug === "stanbic" ? "object-cover object-center" : "object-contain object-center"
          }
        />
        <div className="hero-scan pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-lime/10 to-transparent" />
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <p className="max-w-md text-lg text-muted-foreground">{project.summary}</p>
        <span className="inline-flex shrink-0 items-center gap-2 text-sm text-lime">
          Open
          <Arrow />
        </span>
      </div>
    </Link>
  );
}

export default Archive;

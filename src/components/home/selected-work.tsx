"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { projects } from "@/lib";
import PageWrapper from "@/components/layout/page-wrapper";
import { TechCorners } from "@/components/layout/tech-marks";
import ProjectMedia from "@/components/work/project-media";

const SelectedWork = () => {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (reduce) return;
    const next = Math.min(projects.length - 1, Math.max(0, Math.floor(value * projects.length)));
    setActive((current) => (current === next ? current : next));
  });

  if (reduce) {
    return (
      <section id="work" className="border-t border-border py-20">
        <PageWrapper className="space-y-6">
          <h2 className="display text-5xl">Selected work</h2>
          {projects.map((project) => (
            <Link key={project.slug} href={`/work/${project.slug}`} className="panel block overflow-hidden">
              <ProjectMedia
                cover={project.cover}
                title={project.title}
                className="aspect-[16/10] rounded-none border-0"
                imageClassName="!object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-3xl">{project.title}</h3>
                <p className="mt-2 text-muted-foreground">{project.summary}</p>
              </div>
            </Link>
          ))}
        </PageWrapper>
      </section>
    );
  }

  const project = projects[hovered ?? active];

  return (
    <div id="work">
    <section className="border-t border-border py-16 lg:hidden">
      <PageWrapper>
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="display text-4xl">Selected work</h2>
          <Link href="/work" className="shrink-0 text-sm text-lime">
            All work →
          </Link>
        </div>
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {projects.map((item) => (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="panel w-[82%] shrink-0 snap-start overflow-hidden sm:w-[70%]"
            >
              <ProjectMedia
                cover={item.cover}
                title={item.title}
                className="aspect-[16/10] rounded-none border-0"
                imageClassName="!object-cover object-center"
              />
              <div className="p-5">
                <p className="kicker text-lime">{item.label}</p>
                <h3 className="mt-2 text-2xl">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </PageWrapper>
    </section>
    <section
      ref={sectionRef}
      data-work-stage={project.slug}
      className="relative hidden border-t border-border lg:block"
      style={{ height: `${projects.length * 78}vh` }}
    >
      <div className="sticky top-[4.5rem] overflow-hidden pt-4" style={{ height: "calc(100svh - 4.5rem)" }}>
        <PageWrapper className="h-full">
        <div className="grid h-full content-center gap-5 lg:grid-cols-12" onMouseLeave={() => setHovered(null)}>
          <div className="lg:col-span-5">
            <p className="kicker text-lime">Selected work</p>
            <ul className="mt-5">
              {projects.map((item, index) => {
                const on = index === (hovered ?? active);
                return (
                  <li key={item.slug} className="border-b border-white/10">
                    <Link
                      href={`/work/${item.slug}`}
                      onMouseEnter={() => setHovered(index)}
                      onFocus={() => setHovered(index)}
                      className={`flex w-full items-baseline justify-between gap-4 py-2.5 text-left transition-colors ${on ? "text-foreground" : "text-foreground/35 hover:text-foreground/70"}`}
                    >
                      <span className={`display text-[clamp(1.35rem,2.4vw,2.6rem)] ${on ? "text-lime" : ""}`}>{item.title}</span>
                      <span className="font-mono text-[10px] tracking-[0.16em] uppercase">{item.year}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <Link href={`/work/${project.slug}`} data-cursor="Open" className="panel relative block overflow-hidden">
              <TechCorners />
              <ProjectMedia
                cover={project.cover}
                title={project.title}
                priority={active === 0}
                className="aspect-[16/10] w-full rounded-none border-0"
                imageClassName="!object-cover object-center"
              />
              <div className="hero-scan pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-lime/10 to-transparent" />
            </Link>
            <div className="mt-4 flex items-end justify-between gap-6">
              <div>
                <p className="kicker text-lime">{project.label}</p>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">{project.summary}</p>
              </div>
              <Link href={`/work/${project.slug}`} className="shrink-0 text-sm text-lime">
                Open case study →
              </Link>
            </div>
          </div>
        </div>
        </PageWrapper>
      </div>
    </section>
    </div>
  );
};

export default SelectedWork;

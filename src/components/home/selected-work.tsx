"use client";

import { useRef } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { cn, featuredProjects, fillsFrame } from "@/lib";
import PageWrapper from "@/components/layout/page-wrapper";
import { Arrow } from "@/components/shared/text-link";
import { TechCorners } from "@/components/layout/tech-marks";
import ProjectMedia from "@/components/work/project-media";
import { usePinnedWork } from "@/components/work/use-pinned-work";

const selected = featuredProjects.slice(0, 3);

const SelectedWork = () => {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { setHovered, shown } = usePinnedWork(sectionRef, selected.length, reduce);
  const project = selected[shown];

  if (reduce) {
    return (
      <section id="work" className="border-t border-border py-20">
        <PageWrapper className="space-y-6">
          <div className="flex w-full flex-wrap items-end justify-between gap-6">
            <h2 className="display text-5xl">Selected work</h2>
            <Link href="/work" className="text-sm text-lime underline-offset-4 hover:underline">
              Full work →
            </Link>
          </div>
          <div className="lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-10" onMouseLeave={() => setHovered(null)}>
            <div className="lg:col-span-5">
              <ProjectList items={selected} active={shown} onHover={setHovered} mobileImages />
            </div>
            <div className="relative hidden lg:col-span-7 lg:block">
              <Preview items={selected} shown={shown} project={project} />
            </div>
          </div>
        </PageWrapper>
      </section>
    );
  }

  return (
    <div id="work" className="pb-20 md:pb-28">
      <section className="border-t border-border py-20 lg:hidden">
        <PageWrapper>
          <div className="mb-6 flex w-full items-end justify-between gap-4">
            <h2 className="display min-w-0 text-[1.85rem] sm:text-4xl">Selected work</h2>
            <Link href="/work" className="shrink-0 text-sm text-lime underline-offset-4 hover:underline">
              Full work →
            </Link>
          </div>
          <div className="-mx-[5%] flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-[5%] pb-2 touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0">
            {selected.map((item) => (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                className="panel w-[min(82%,20.5rem)] shrink-0 snap-start overflow-hidden sm:w-[70%]"
              >
                <ProjectMedia
                  cover={item.cover}
                  title={item.title}
                  className="aspect-[16/10] rounded-none border-0"
                  imageClassName="!object-cover object-center"
                />
                <div className="p-4 sm:p-5">
                  <p className="kicker text-lime">
                    {item.label}
                    <span className="whitespace-nowrap"> · {item.year}</span>
                  </p>
                  <h3 className="mt-2 text-xl break-words sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground sm:text-lg">{item.summary}</p>
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
        data-work-pin
        style={{ height: `${(selected.length + 0.5) * 78}vh` }}
      >
        <div className="sticky top-[4.5rem] overflow-hidden pt-8 pb-8" style={{ height: "calc(100svh - 4.5rem)" }}>
          <PageWrapper className="flex h-full flex-col">
            <div className="flex w-full shrink-0 items-end justify-between gap-6 pb-5">
              <p className="kicker text-lime">Selected work</p>
              <Link href="/work" className="shrink-0 text-sm text-lime underline-offset-4 hover:underline">
                Full work →
              </Link>
            </div>
            <div
              className="grid min-h-0 flex-1 grid-cols-12 content-start items-stretch gap-10"
              onMouseLeave={() => setHovered(null)}
            >
              <div className="col-span-5 min-h-0">
                <ProjectList items={selected} active={shown} onHover={setHovered} />
              </div>
              <div className="relative col-span-7 min-h-0 pt-4">
                <Preview items={selected} shown={shown} project={project} />
              </div>
            </div>
          </PageWrapper>
        </div>
      </section>
    </div>
  );
};

function ProjectList({
  items,
  active,
  onHover,
  mobileImages = false,
}: {
  items: typeof selected;
  active: number;
  onHover: (index: number) => void;
  mobileImages?: boolean;
}) {
  return (
    <ul>
      {items.map((project, index) => {
        const on = index === active;
        return (
          <li key={project.slug} className="border-b border-border last:border-b-0">
            <Link
              href={`/work/${project.slug}`}
              data-cursor="Open"
              data-active={on ? "true" : "false"}
              onMouseEnter={() => onHover(index)}
              onFocus={() => onHover(index)}
              className={cn(
                "group flex items-center justify-between gap-4 py-3.5 outline-none lg:py-4",
                on ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span className="min-w-0">
                <span className="block text-[clamp(1.7rem,4vw,3.2rem)] leading-[0.95] font-medium tracking-[-0.05em] break-words">
                  {project.title}
                </span>
                <span className="mt-2 block font-mono text-[11px] tracking-[0.14em] text-lime/80 uppercase">
                  {project.label}
                  <span className="whitespace-nowrap"> · {project.year}</span>
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
                      fillsFrame(project.slug) ? "!object-cover object-center" : "object-contain object-center"
                    }
                  />
                </div>
                <p className="mt-4 text-base text-muted-foreground sm:text-lg">{project.summary}</p>
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

function Preview({
  items,
  shown,
  project,
}: {
  items: typeof selected;
  shown: number;
  project: (typeof selected)[number];
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="Open"
      className="group flex h-full flex-col justify-start outline-none"
    >
      <div className="relative overflow-hidden rounded-[24px] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
        <TechCorners />
        {items.map((item, index) => (
          <div
            key={item.slug}
            className={cn(
              index === 0 ? "relative" : "absolute inset-0",
              shown === index ? "z-[1] opacity-100" : "z-0 opacity-0",
            )}
            aria-hidden={shown !== index}
          >
            <ProjectMedia
              cover={item.cover}
              title={item.title}
              priority={index < 3}
              loading="eager"
              className="rounded-none border-0"
              imageClassName={
                fillsFrame(item.slug) ? "!object-cover object-center" : "object-contain object-center"
              }
            />
          </div>
        ))}
        <div className="hero-scan pointer-events-none absolute inset-x-0 top-0 z-[2] h-16 bg-gradient-to-b from-transparent via-lime/10 to-transparent" />
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

export default SelectedWork;

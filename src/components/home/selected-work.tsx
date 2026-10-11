"use client";

import { useRef } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { cn, featuredProjects } from "@/lib";
import PageWrapper from "@/components/layout/page-wrapper";
import { TechCorners } from "@/components/layout/tech-marks";
import ProjectMedia from "@/components/work/project-media";
import { usePinnedWork } from "@/components/work/use-pinned-work";

const SelectedWork = () => {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { setHovered, shown } = usePinnedWork(sectionRef, featuredProjects.length, reduce);
  const project = featuredProjects[shown];

  if (reduce) {
    return (
      <section id="work" className="border-t border-border py-20">
        <PageWrapper className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="display text-5xl">Selected work</h2>
            <Link href="/work" className="text-sm text-lime underline-offset-4 hover:underline">
              Full work →
            </Link>
          </div>
          {featuredProjects.map((item) => (
            <Link key={item.slug} href={`/work/${item.slug}`} className="panel block overflow-hidden">
              <ProjectMedia
                cover={item.cover}
                title={item.title}
                className="aspect-[16/10] rounded-none border-0"
                imageClassName="!object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-3xl">{item.title}</h3>
                <p className="mt-2 text-lg text-muted-foreground">{item.summary}</p>
              </div>
            </Link>
          ))}
        </PageWrapper>
      </section>
    );
  }

  return (
    <div id="work">
    <section className="border-t border-border py-12 lg:hidden">
      <PageWrapper>
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="display min-w-0 text-[1.85rem] sm:text-4xl">Selected work</h2>
          <Link href="/work" className="shrink-0 text-sm text-lime underline-offset-4 hover:underline">
            Full work →
          </Link>
        </div>
        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pb-2 touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0">
          {featuredProjects.map((item) => (
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
      style={{ height: `${(featuredProjects.length + 0.5) * 78}vh` }}
    >
      <div className="sticky top-[4.5rem] overflow-hidden pt-4" style={{ height: "calc(100svh - 4.5rem)" }}>
        <PageWrapper className="h-full">
        <div className="grid h-full content-center items-stretch gap-5 lg:grid-cols-12" onMouseLeave={() => setHovered(null)}>
          <div className="lg:col-span-5">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <p className="kicker text-lime">Selected work</p>
              <Link href="/work" className="text-sm text-lime underline-offset-4 hover:underline">
                Full work →
              </Link>
            </div>
            <ul className="mt-5">
              {featuredProjects.map((item, index) => {
                const on = index === shown;
                return (
                  <li key={item.slug} className="border-b border-white/10">
                    <Link
                      href={`/work/${item.slug}`}
                      data-active={on ? "true" : "false"}
                      onMouseEnter={() => setHovered(index)}
                      onFocus={() => setHovered(index)}
                      className={cn(
                        "flex w-full items-baseline justify-between gap-4 py-2.5 text-left",
                        on ? "text-foreground" : "text-foreground/35 hover:text-foreground/70",
                      )}
                    >
                      <span className={cn("display text-[clamp(1.35rem,2.4vw,2.6rem)]", on && "text-lime")}>{item.title}</span>
                      <span className="font-mono text-[10px] tracking-[0.16em] uppercase">{item.year}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative min-h-[16rem] lg:col-span-7">
            <Link
              href={`/work/${project.slug}`}
              data-cursor="Open"
              className="panel absolute inset-0 overflow-hidden"
            >
              <TechCorners />
              {featuredProjects.map((item, index) => (
                <div
                  key={item.slug}
                  className={cn("absolute inset-0", shown === index ? "opacity-100" : "opacity-0")}
                  aria-hidden={shown !== index}
                >
                  <ProjectMedia
                    cover={item.cover}
                    title={item.title}
                    priority={index < 3}
                    loading="eager"
                    className="!aspect-auto h-full w-full rounded-none border-0"
                    imageClassName="!object-cover object-center"
                    sizes="(min-width: 1024px) 55vw, 100vw"
                  />
                </div>
              ))}
              <div className="hero-scan pointer-events-none absolute inset-x-0 top-0 z-[2] h-16 bg-gradient-to-b from-transparent via-lime/10 to-transparent" />
            </Link>
          </div>

          <div className="flex items-start justify-between gap-6 lg:col-span-7 lg:col-start-6">
            <div>
              <p className="kicker text-lime">{project.label}</p>
              <p className="mt-2 max-w-md text-lg text-muted-foreground">{project.summary}</p>
            </div>
            <Link href={`/work/${project.slug}`} className="shrink-0 text-sm text-lime">
              Open case study →
            </Link>
          </div>
        </div>
        </PageWrapper>
      </div>
    </section>
    </div>
  );
};

export default SelectedWork;

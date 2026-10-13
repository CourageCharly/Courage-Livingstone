import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getOtherProjects, getProject, projects, site } from "@/lib";
import PageWrapper from "@/components/layout/page-wrapper";
import TechMarks, { TechCorners } from "@/components/layout/tech-marks";
import Rise from "@/components/motion/rise";
import Parallax from "@/components/motion/parallax";
import MaskLines from "@/components/shared/mask-lines";
import TextLink, { Arrow } from "@/components/shared/text-link";
import ProjectMedia from "@/components/work/project-media";
import ScreenSlide from "@/components/work/screen-slide";
import WorkCardsSlide from "@/components/work/work-cards-slide";
import TokenBoard from "@/components/work/token-board";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Work" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = getOtherProjects(project.slug, 3);
  const imageFit = "!object-cover object-center";

  return (
    <article>
      <div className="relative overflow-hidden pt-28 pb-4 md:pt-36">
        <TechMarks />
      <PageWrapper className="relative">
        <TextLink href="/work" direction="back" className="text-sm">
          Back
        </TextLink>
        <p className="kicker mt-10">
          {project.label} — {project.year}
        </p>
        <h1 className="display mt-5 text-[clamp(2.4rem,11vw,8rem)] break-words">
          <MaskLines lines={[project.title]} />
        </h1>
        <p className="load-rise load-d2 mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="load-rise load-d3 mt-6 inline-flex text-sm text-lime"
          >
            Open live site →
          </a>
        ) : null}
        <dl className="load-rise load-d3 mt-12 grid border-t border-border sm:grid-cols-3">
          {[
            ["Role", project.role],
            ["Services", project.services.join(", ")],
            ["Year", project.year],
          ].map(([label, value]) => (
            <div key={label} className="border-b border-border py-5 sm:border-b-0 sm:py-6 sm:pr-8">
              <dt className="kicker">{label}</dt>
              <dd className="mt-2 text-sm leading-relaxed">{value}</dd>
            </div>
          ))}
        </dl>
      </PageWrapper>
      </div>

      <PageWrapper className="mt-16">
        <div className="clip-rise overflow-hidden rounded-[22px] border border-border">
          <Parallax amount={18}>
            <ProjectMedia
              cover={project.cover}
              title={project.title}
              priority
              alt={`${project.title} — ${project.screens[0]?.label ?? "interface"}`}
              sizes="(min-width: 1024px) 1280px, 100vw"
              className="aspect-[16/10]"
              imageClassName={imageFit}
            />
          </Parallax>
        </div>
      </PageWrapper>

      <PageWrapper className="mt-20 grid gap-12 border-t border-border py-20 md:mt-28 md:grid-cols-12 md:py-24">
        <Rise className="md:col-span-4">
          <p className="kicker">Challenge</p>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.045em]">The problem</h2>
        </Rise>
        <Rise delay={0.06} className="md:col-span-7 md:col-start-6">
          <p className="text-lg leading-relaxed text-muted-foreground">{project.challenge}</p>
        </Rise>
      </PageWrapper>

      <PageWrapper className="grid gap-12 border-t border-border py-20 md:grid-cols-12 md:py-24">
        <Rise className="md:col-span-4">
          <p className="kicker">Approach</p>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.045em]">How it was shaped</h2>
        </Rise>
        <Rise delay={0.06} className="md:col-span-7 md:col-start-6">
          <p className="text-lg leading-relaxed text-muted-foreground">{project.approach}</p>
        </Rise>
      </PageWrapper>

      <section className="border-t border-border py-20 md:py-24">
        <PageWrapper>
          <Rise>
            <p className="kicker">Process</p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.045em]">Decisions</h2>
          </Rise>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {project.highlights.map((item, index) => (
              <Rise key={item} delay={index * 0.05} className="border-t border-border pt-6">
                <p className="font-serif text-3xl tracking-[-0.04em] text-foreground/35">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 max-w-md text-lg leading-relaxed">{item}</p>
              </Rise>
            ))}
          </div>
        </PageWrapper>
      </section>

      <section className="border-t border-border py-20 md:py-24">
        <PageWrapper>
          <Rise>
            <p className="kicker">Interface</p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.045em]">Key screens</h2>
          </Rise>
          <div className="mt-12 space-y-6">
            {project.screens[0] ? (
              <Rise>
                <figure>
                  <div className="overflow-hidden rounded-[22px] border border-border">
                    <ProjectMedia
                      cover={project.screens[0].cover}
                      title={project.title}
                      alt={`${project.title} — ${project.screens[0].label}`}
                      className="aspect-[16/10]"
                      imageClassName={imageFit}
                    />
                  </div>
                  <figcaption className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <p className="kicker text-foreground/80">{project.screens[0].label}</p>
                    <p className="max-w-md text-sm text-muted-foreground sm:text-right">{project.screens[0].caption}</p>
                  </figcaption>
                </figure>
              </Rise>
            ) : null}
            <ScreenSlide
              screens={project.screens.slice(1)}
              title={project.title}
              className="md:hidden"
            />
            <div className="hidden gap-6 md:grid md:grid-cols-2">
              {project.screens.slice(1).map((screen) => (
                <Rise key={screen.label}>
                  <figure>
                    <div className="overflow-hidden rounded-[22px] border border-border">
                      <ProjectMedia
                        cover={screen.cover}
                        title={project.title}
                        alt={`${project.title} — ${screen.label}`}
                        className="aspect-[16/10]"
                        imageClassName={imageFit}
                      />
                    </div>
                    <figcaption className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                      <p className="kicker text-foreground/80">{screen.label}</p>
                      <p className="max-w-md text-sm text-muted-foreground sm:text-right">{screen.caption}</p>
                    </figcaption>
                  </figure>
                </Rise>
              ))}
            </div>
          </div>
          {project.system ? (
            <Rise className="mt-16">
              <p className="kicker">Tokens</p>
              <h3 className="mt-4 font-serif text-3xl tracking-[-0.04em]">The system {project.title} ships with</h3>
              <div className="mt-8">
                <TokenBoard typeface={project.system.typeface} colors={project.system.colors} />
              </div>
            </Rise>
          ) : null}
        </PageWrapper>
      </section>

      <section className="border-t border-border py-20 md:py-24">
        <PageWrapper className="grid gap-10 md:grid-cols-12">
          <Rise className="md:col-span-4">
            <p className="kicker">Frontend</p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.045em]">Implementation</h2>
          </Rise>
          <div className="md:col-span-7 md:col-start-6">
            <Rise>
              <p className="text-lg leading-relaxed text-muted-foreground">{project.build}</p>
            </Rise>
            {project.stack?.length ? (
              <Rise delay={0.06}>
                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6">
                  {project.stack.map((item) => (
                    <li key={item} className="font-mono text-[11px] tracking-[0.16em] uppercase">
                      {item}
                    </li>
                  ))}
                </ul>
              </Rise>
            ) : null}
            <Rise delay={0.08}>
              <p className="mt-8 text-muted-foreground">{project.outcome}</p>
            </Rise>
          </div>
        </PageWrapper>
      </section>

      <section className="border-t border-border" data-other-projects>
        <PageWrapper className="py-20 md:py-24">
          <p className="kicker text-lime">Other projects</p>
          <h2 className="display mt-3 text-2xl break-words sm:text-3xl">Three more from the archive.</h2>
          <WorkCardsSlide projects={others} label="Three more from the archive" className="mt-10 md:hidden" />
          <div className="mt-10 hidden gap-4 md:grid md:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                data-cursor="Open"
                className="panel group relative flex w-full flex-col overflow-hidden outline-none transition-colors hover:border-lime/40"
              >
                <TechCorners />
                <ProjectMedia
                  cover={item.cover}
                  title={item.title}
                  className="w-full rounded-none border-0"
                  imageClassName="!object-cover object-center"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="p-5">
                  <p className="kicker text-lime">
                    {item.label} — {item.year}
                  </p>
                  <p className="mt-3 flex items-end justify-between gap-3 text-2xl tracking-[-0.04em]">
                    {item.title}
                    <Arrow />
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted-foreground">
            A project with {site.name}?{" "}
            <Link href="/contact" className="text-foreground underline underline-offset-4">
              Start here
            </Link>
            .
          </p>
        </PageWrapper>
      </section>
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib";
import { about, experience, notes, skills } from "@/lib/profile";
import PageWrapper from "@/components/layout/page-wrapper";
import TechMarks from "@/components/layout/tech-marks";
import ContactBanner from "@/components/shared/contact-banner";
import Portrait from "@/components/about/portrait";
import Study from "@/components/about/study";
import Rise from "@/components/motion/rise";
import MaskLines from "@/components/shared/mask-lines";

export const metadata: Metadata = {
  title: "About",
  description:
    "Courage Livingstone is a product designer and frontend developer in Lagos. He designs digital products and builds the interfaces behind them.",
};

const bands = [
  { group: "Design", tone: "text-lime" },
  { group: "Frontend", tone: "text-lime" },
  { group: "Practice", tone: "text-lime" },
];

export default function AboutPage() {
  return (
    <article>
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        <TechMarks />
        <PageWrapper className="relative grid items-end gap-14 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <p className="kicker text-lime">About — {site.location}</p>
            <h1 className="display mt-6 text-[clamp(3.2rem,7vw,6.2rem)]">
              <MaskLines lines={["I’m Courage."]} />
            </h1>
            <p className="load-rise load-d2 mt-8 max-w-xl text-2xl leading-tight tracking-[-0.04em] text-lime">
              {about.heading[0]} {about.heading[1]}
            </p>
            <div className="load-rise load-d3 mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-muted-foreground">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="load-rise load-d4 mt-8 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              {site.location} · {site.availability}
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Portrait priority />
          </div>
        </PageWrapper>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 py-20 md:py-28">
        <PageWrapper className="relative">
          <Rise>
            <p className="kicker text-lime">Marks</p>
            <h2 className="display mt-4 max-w-3xl text-4xl sm:text-6xl">What the work has added up to.</h2>
          </Rise>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {about.marks.map((mark, index) => (
              <Rise key={mark} delay={index * 0.06}>
                <p className="panel h-full p-8 text-2xl leading-snug tracking-[-0.04em] sm:text-3xl">
                  {mark}
                </p>
              </Rise>
            ))}
          </div>
        </PageWrapper>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 py-20 md:py-28">
        <PageWrapper className="relative">
          <Rise className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="kicker text-lime">Experience</p>
              <h2 className="display mt-4 text-4xl sm:text-6xl">Roles, in order.</h2>
            </div>
            <Link href="/experience" className="text-sm text-lime underline-offset-4 hover:underline">
              Full experience →
            </Link>
          </Rise>
          <div className="mt-12 grid gap-4">
            {experience.map((item, index) => (
              <Rise key={`${item.org}-${item.dates}`} delay={index * 0.05}>
                <article className="panel grid gap-2 px-5 py-4 sm:grid-cols-12 sm:px-6 sm:py-5">
                  <p className="font-mono text-[11px] tracking-[0.16em] text-lime uppercase sm:col-span-3">
                    {item.dates}
                  </p>
                  <div className="min-w-0 sm:col-span-9">
                    <h3 className="text-lg tracking-[-0.03em]">
                      {item.title}
                      <span className="text-muted-foreground"> · {item.org}</span>
                    </h3>
                    <p className="mt-0.5 text-lg text-muted-foreground">{item.place}</p>
                    <p className="mt-2 max-w-2xl text-lg text-muted-foreground">{item.body}</p>
                  </div>
                </article>
              </Rise>
            ))}
          </div>
        </PageWrapper>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 py-20 md:py-28">
        <PageWrapper className="relative">
          <Rise>
            <p className="kicker text-lime">Toolkit</p>
            <h2 className="display mt-4 text-4xl sm:text-6xl">Design and the build.</h2>
          </Rise>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {skills.map((group) => {
              const tone = bands.find((band) => band.group === group.group);
              return (
                <Rise key={group.group}>
                  <article className="panel h-full p-6 sm:p-8">
                    <p className={`kicker ${tone?.tone ?? "text-lime"}`}>{group.group}</p>
                    <ul className="mt-6 space-y-3">
                      {group.items.map((item) => (
                        <li key={item} className="border-t border-white/10 pt-3 text-lg">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Rise>
              );
            })}
          </div>
        </PageWrapper>
      </section>

      <Study />

      <section className="border-t border-white/10 py-20 md:py-28">
        <PageWrapper>
          <Rise>
            <p className="kicker text-lime">Also</p>
            <h2 className="display mt-4 text-4xl sm:text-6xl">In public.</h2>
          </Rise>
          <div className="mt-12 grid grid-cols-2 gap-4">
            {notes.map((note, index) => (
              <Rise key={note.title} delay={index * 0.06} className="h-full min-w-0">
                <article className="panel flex h-full flex-col p-6 sm:p-8">
                  <h3 className="text-2xl tracking-[-0.04em]">{note.title}</h3>
                  <p className="mt-3 text-lg text-muted-foreground">{note.body}</p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    {note.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-lime"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                </article>
              </Rise>
            ))}
          </div>
        </PageWrapper>
      </section>

      <ContactBanner />
    </article>
  );
}

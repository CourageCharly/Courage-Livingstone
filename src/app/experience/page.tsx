import type { Metadata } from "next";
import { site } from "@/lib";
import { certifications, education, experience, training } from "@/lib/profile";
import PageWrapper from "@/components/layout/page-wrapper";
import TechMarks from "@/components/layout/tech-marks";
import Rise from "@/components/motion/rise";
import MaskLines from "@/components/shared/mask-lines";
import ContactBanner from "@/components/shared/contact-banner";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Product design and frontend work by Courage Livingstone, from Tobams and freelance frontend to Hertechtrail, Tricode, ConnectTech, Synergy Book Club, and TechAscend.",
};

export default function ExperiencePage() {
  return (
    <article>
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <TechMarks />
        <PageWrapper className="relative">
          <p className="kicker text-lime">Experience — {site.location}</p>
          <h1 className="display mt-6 max-w-5xl text-[clamp(3.2rem,7.4vw,6.6rem)]">
            <MaskLines lines={["The work", "so far."]} />
          </h1>
          <p className="load-rise load-d2 mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Three years of product design, plus frontend training and shipped interfaces. The roles below are the practice.
          </p>
        </PageWrapper>
      </section>

      <section className="py-12 md:py-16">
        <PageWrapper className="space-y-3">
          {experience.map((item, index) => (
            <Rise key={`${item.org}-${item.dates}`} delay={index * 0.04}>
              <article className="panel grid gap-2 px-5 py-4 sm:grid-cols-12 sm:px-6 sm:py-5">
                <div className="sm:col-span-4">
                  <p className="font-mono text-[11px] tracking-[0.16em] text-lime uppercase">{item.dates}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.place}</p>
                </div>
                <div className="min-w-0 sm:col-span-8">
                  <h2 className="text-lg tracking-[-0.03em] sm:text-xl">{item.title}</h2>
                  <p className="mt-0.5 text-sm text-lime">{item.org}</p>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{item.body}</p>
                </div>
              </article>
            </Rise>
          ))}
        </PageWrapper>
      </section>

      <section className="border-t border-white/10 py-20 md:py-28">
        <PageWrapper>
          <Rise>
            <p className="kicker text-lime">Training</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">Frontend, practiced.</h2>
          </Rise>
          <div className="mt-10 grid items-stretch gap-4 md:grid-cols-2">
            {training.map((item) => (
              <Rise key={item.org} className="h-full">
                <article className="panel flex h-full min-h-[14.5rem] flex-col p-6 sm:p-8">
                  <p className="font-mono text-[11px] tracking-[0.16em] text-lime uppercase">{item.dates}</p>
                  <h3 className="mt-4 text-2xl tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                  <p className="mt-4 text-sm text-muted-foreground">{item.body}</p>
                </article>
              </Rise>
            ))}
          </div>
        </PageWrapper>
      </section>

      <section className="border-t border-white/10 py-20 md:py-28">
        <PageWrapper className="grid gap-12 lg:grid-cols-2">
          <Rise>
            <p className="kicker text-lime">Education</p>
            <ul className="mt-8 grid auto-rows-fr gap-4">
              {education.map((item) => (
                <li key={item.title} className="panel flex h-full min-h-[9.5rem] flex-col justify-between p-6 sm:p-8">
                  <div>
                    <p className="text-lg tracking-[-0.03em]">{item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                  </div>
                  <p className="mt-3 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">{item.dates}</p>
                </li>
              ))}
            </ul>
          </Rise>
          <Rise>
            <p className="kicker text-lime">Certificates</p>
            <ul className="mt-8 space-y-3">
              {certifications.map((item) => (
                <li key={item} className="border-t border-white/10 pt-3 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </Rise>
        </PageWrapper>
      </section>

      <ContactBanner />
    </article>
  );
}

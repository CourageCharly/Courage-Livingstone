import type { Metadata } from "next";
import { Compass, Code2, ArrowLeftRight, Layers, ListChecks } from "lucide-react";
import { pipeline, services } from "@/lib/profile";
import PageWrapper from "@/components/layout/page-wrapper";
import TechMarks from "@/components/layout/tech-marks";
import Rise from "@/components/motion/rise";
import MaskLines from "@/components/shared/mask-lines";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Product design, frontend development, design to code, and product development with Courage Livingstone.",
};

const icons = [Compass, Code2, ArrowLeftRight, Layers, ListChecks];

const where = [
  "StreamVibe, Tobams Group, Exyra, StyleLoom, Fraktia, and Stanbic.",
  "StreamVibe, Exyra, StyleLoom, and Fraktia.",
  "StreamVibe and Exyra, taken from design into a working interface.",
  "StreamVibe, from research and interface design through a production frontend.",
  "Hertechtrail, the FadaQa Tech Scholarship Program, and Mentormesh.",
];

export default function ServicesPage() {
  return (
    <article>
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        <TechMarks />
        <PageWrapper className="relative">
          <p className="kicker text-lime">Services</p>
          <h1 className="display mt-6 max-w-5xl text-[clamp(3.2rem,7.4vw,6.6rem)]">
            <MaskLines lines={["What I do."]} />
          </h1>
          <p className="load-rise load-d2 mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Frontend development is part of the practice, not an extra skill. I design the product and build the interface.
          </p>
        </PageWrapper>
      </section>

      <section className="pb-20 md:pb-28">
        <PageWrapper className="grid gap-4">
          {services.map((item, index) => {
            const Icon = icons[index] ?? Compass;
            return (
              <Rise key={item.index} delay={index * 0.04}>
                <article className="panel grid gap-6 p-6 transition-colors duration-300 hover:border-lime/40 sm:p-8 lg:grid-cols-12">
                  <div className="flex items-start justify-between lg:col-span-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 text-lime">
                      <Icon size={18} />
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.16em] text-foreground/40">{item.index}</span>
                  </div>
                  <div className="lg:col-span-8">
                    <h2 className="text-2xl tracking-[-0.04em] sm:text-3xl">{item.title}</h2>
                    <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{item.body}</p>
                    <p className="mt-6 text-sm text-foreground/80">
                      <span className="kicker mr-3 text-lime">Seen in</span>
                      {where[index]}
                    </p>
                  </div>
                </article>
              </Rise>
            );
          })}
        </PageWrapper>
      </section>

      <section className="border-t border-white/10 py-20 md:py-28">
        <PageWrapper>
          <Rise>
            <p className="kicker text-lime">Pipeline</p>
            <h2 className="display mt-4 text-4xl sm:text-6xl">From pixels to production.</h2>
          </Rise>
          <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {pipeline.map((step, index) => (
              <li key={step} className="panel flex items-center justify-between px-5 py-4">
                <span className="font-mono text-[11px] tracking-[0.16em] text-lime">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm tracking-[-0.02em]">{step}</span>
              </li>
            ))}
          </ol>
        </PageWrapper>
      </section>
    </article>
  );
}

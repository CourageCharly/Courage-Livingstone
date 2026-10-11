import { site } from "@/lib";
import PageWrapper from "@/components/layout/page-wrapper";

const facts = [
  { label: "Location", value: site.location },
  { label: "Availability", value: site.availability },
  { label: "Focus", value: "Product design and frontend engineering" },
  { label: "Stack", value: "Figma, React, Next.js, TypeScript" },
];

const AboutBand = () => {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <PageWrapper className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">07 — About</p>
          <h2 className="mt-6 text-[clamp(2.6rem,6vw,5rem)] leading-[0.92] font-medium tracking-[-0.045em]">
            Designer.
            <br />
            Builder.
            <br />
            Problem solver.
          </h2>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            I&apos;m a Product Designer and Frontend Engineer interested in the space between design and technology. I enjoy taking complex requirements, simplifying them into clear experiences, and turning those experiences into polished interfaces.
          </p>
        </div>
        <div className="border-t border-border">
          {facts.map((fact) => (
            <div key={fact.label} className="grid grid-cols-[0.7fr_1.3fr] gap-4 border-b border-border py-4">
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">{fact.label}</p>
              <p className="text-sm">{fact.value}</p>
            </div>
          ))}
          <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6">
            <a href={`mailto:${site.email}`} className="nav-link font-mono text-[11px] tracking-[0.16em] uppercase outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground">
              Email
            </a>
            {site.socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="nav-link font-mono text-[11px] tracking-[0.16em] uppercase outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </PageWrapper>
    </section>
  );
};

export default AboutBand;

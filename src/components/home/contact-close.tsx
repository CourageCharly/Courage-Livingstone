import { site } from "@/lib";
import PageWrapper from "@/components/layout/page-wrapper";
import Magnetic from "@/components/shared/magnetic";

const ContactClose = () => {
  return (
    <section className="relative overflow-hidden border-t border-border py-28 sm:py-36">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-40" />
      <PageWrapper className="relative">
        <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
          Let&apos;s build something
        </p>
        <h2 className="mt-6 max-w-4xl text-[clamp(2.8rem,7vw,6rem)] leading-[0.9] font-medium tracking-[-0.045em]">
          Have a product
          <br />
          worth building?
        </h2>
        <div className="mt-10">
          <Magnetic href="/contact" cursor="OPEN">
            Start a conversation →
          </Magnetic>
        </div>
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] tracking-[0.16em] uppercase">
          <a
            href={`mailto:${site.email}`}
            className="nav-link outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            Email
          </a>
          {site.socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="nav-link outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
      </PageWrapper>
    </section>
  );
};

export default ContactClose;

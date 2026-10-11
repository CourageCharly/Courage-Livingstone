import type { Metadata } from "next";
import { site } from "@/lib";
import PageWrapper from "@/components/layout/page-wrapper";
import TechMarks from "@/components/layout/tech-marks";
import ContactForm from "@/components/contact/contact-form";
import MaskLines from "@/components/shared/mask-lines";
import TextLink from "@/components/shared/text-link";

export const metadata: Metadata = {
  title: "Contact",
  description: `Start a project with ${site.name}.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        <TechMarks />
        <PageWrapper className="relative">
          <p className="kicker text-lime">Contact — {site.availability}</p>
          <h1 className="display mt-6 max-w-5xl text-[clamp(3.2rem,7.4vw,6.6rem)]">
            <MaskLines lines={["Tell me what", "you are building."]} />
          </h1>
          <div className="mt-16 grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <aside className="lg:col-span-4 lg:col-start-9">
              <p className="kicker">Direct</p>
              <a href={`mailto:${site.email}`} className="mt-4 block font-serif text-base tracking-[-0.03em] break-all sm:text-lg">
                {site.email}
              </a>
              <div className="mt-10 flex flex-col items-start gap-4">
                {site.socials.map((item) => (
                  <TextLink key={item.label} href={item.href}>
                    {item.label}
                  </TextLink>
                ))}
              </div>
              <p className="mt-10 max-w-xs text-muted-foreground">{site.availabilityNote}</p>
            </aside>
          </div>
        </PageWrapper>
      </section>
    </>
  );
}

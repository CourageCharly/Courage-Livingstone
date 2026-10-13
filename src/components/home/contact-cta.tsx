import Link from "next/link";
import { site } from "@/lib";
import PageWrapper from "@/components/layout/page-wrapper";
import { TechCorners } from "@/components/layout/tech-marks";
import Rise from "@/components/motion/rise";

const ContactCta = () => {
  return (
    <section className="border-t border-border py-20 md:py-16">
      <PageWrapper>
        <div className="panel relative overflow-hidden px-6 py-8 sm:px-10 sm:py-10 md:hidden">
          <div className="pointer-events-none absolute -top-16 right-0 h-48 w-48 rounded-full bg-lime/15 blur-3xl" />
          <div className="relative">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="kicker text-lime">Contact</p>
                <h2 className="display mt-4 text-4xl">Let&apos;s build the product.</h2>
              </div>
              <Link href="/contact" className="text-sm text-lime underline-offset-4 hover:underline">
                Let&apos;s connect →
              </Link>
            </div>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">{site.availabilityNote}</p>
          </div>
        </div>
        <Rise className="panel relative hidden overflow-hidden px-6 py-8 sm:px-10 sm:py-10 md:block">
          <TechCorners />
          <div className="pointer-events-none absolute -top-16 right-0 h-48 w-48 rounded-full bg-lime/15 blur-3xl" />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="min-w-0 flex-1">
              <p className="kicker text-lime">Contact</p>
              <h2 className="display mt-3 max-w-3xl text-[clamp(1.85rem,6vw,3.6rem)]">
                Let&apos;s build the product.
              </h2>
              <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">{site.availabilityNote}</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit shrink-0 rounded-full bg-lime px-6 py-3 text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              Let&apos;s connect
            </Link>
          </div>
        </Rise>
      </PageWrapper>
    </section>
  );
};

export default ContactCta;

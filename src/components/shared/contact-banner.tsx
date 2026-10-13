import Link from "next/link";
import { site } from "@/lib";
import PageWrapper from "@/components/layout/page-wrapper";
import { TechCorners } from "@/components/layout/tech-marks";
import Rise from "@/components/motion/rise";

const ContactBanner = () => {
  return (
    <section className="border-t border-white/10 py-20 md:py-16">
      <PageWrapper>
        <Rise className="panel relative overflow-hidden px-6 py-8 sm:px-10 sm:py-10">
          <TechCorners />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="min-w-0 flex-1">
              <p className="kicker text-lime">Next</p>
              <h2 className="display mt-3 text-[clamp(1.85rem,6vw,3.6rem)]">Let’s work together.</h2>
              <p className="mt-4 max-w-md text-sm text-muted-foreground sm:text-base">{site.availabilityNote}</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit shrink-0 rounded-full bg-lime px-6 py-3 text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              Let’s connect
            </Link>
          </div>
        </Rise>
      </PageWrapper>
    </section>
  );
};

export default ContactBanner;

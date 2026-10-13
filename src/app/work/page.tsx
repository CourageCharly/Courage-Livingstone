import type { Metadata } from "next";
import { site } from "@/lib";
import PageWrapper from "@/components/layout/page-wrapper";
import TechMarks from "@/components/layout/tech-marks";
import Archive from "@/components/work/archive";
import ContactBanner from "@/components/shared/contact-banner";
import MaskLines from "@/components/shared/mask-lines";

export const metadata: Metadata = {
  title: "Work",
  description: `Selected product design and frontend work by ${site.name}.`,
};

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-x-clip pt-28 pb-20 md:pt-36 md:pb-12">
        <TechMarks />
        <PageWrapper className="relative">
          <p className="kicker text-lime">Work</p>
          <h1 className="display mt-6 max-w-5xl text-[clamp(2.4rem,8vw,7rem)] leading-[1.08] sm:leading-[0.92]">
            <MaskLines lines={["Selected work,", "held in one place."]} />
          </h1>
          <p className="load-rise load-d2 mt-8 max-w-xl text-base text-muted-foreground sm:text-lg">
            Hover a project and the image changes. StreamVibe is shipped. Tobams Group is the company
            site. RLkids is a team EdTech product. StyleLoom is fashion ecommerce. Stanbic is an
            independent homepage concept. Uncle Tobi is a team project. Farm Rush and the
            Portfolio Management App sit in the archive from Behance.
          </p>
        </PageWrapper>
      </section>
      <Archive />
      <ContactBanner />
    </>
  );
}

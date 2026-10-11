import Link from "next/link";
import { about } from "@/lib/profile";
import PageWrapper from "@/components/layout/page-wrapper";
import Rise from "@/components/motion/rise";

const AboutPreview = () => {
  return (
    <section id="about" className="border-t border-white/10 py-20 md:py-28">
      <PageWrapper className="grid items-start gap-12 lg:grid-cols-12">
        <Rise className="lg:col-span-5">
          <p className="kicker text-lime">About</p>
          <h2 className="display mt-4 text-[clamp(2.8rem,5vw,4.6rem)]">
            {about.heading[0]}
            <br />
            <span className="text-lime">{about.heading[1]}</span>
          </h2>
        </Rise>
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7">
          <Rise>
            <p>{about.paragraphs[0]}</p>
          </Rise>
          <Rise>
            <ul className="grid gap-3 pt-2 sm:grid-cols-2">
              {about.marks.map((mark) => (
                <li key={mark} className="panel px-4 py-4 text-sm text-foreground">
                  {mark}
                </li>
              ))}
            </ul>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm text-lime">
              More about me
              <span aria-hidden>→</span>
            </Link>
          </Rise>
        </div>
      </PageWrapper>
    </section>
  );
};

export default AboutPreview;

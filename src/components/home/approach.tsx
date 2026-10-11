import Link from "next/link";
import { Compass, Code2, ArrowLeftRight, Layers, ArrowUpRight } from "lucide-react";
import { services } from "@/lib/profile";
import PageWrapper from "@/components/layout/page-wrapper";
import Rise from "@/components/motion/rise";

const icons = [Compass, Code2, ArrowLeftRight, Layers];

const ServicesGrid = () => {
  return (
    <section id="services" className="border-t border-border py-20 md:py-28">
      <PageWrapper>
        <Rise>
          <p className="kicker text-lime">Services</p>
          <h2 className="display mt-4 text-5xl sm:text-6xl">What I do</h2>
        </Rise>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.filter((item) => item.title !== "Review and programme design").map((item, index) => {
            const Icon = icons[index] ?? Compass;
            return (
              <Rise key={item.index} delay={index * 0.05} className="h-full">
                <Link
                  href="/services"
                  className="panel sheen group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime/40 hover:shadow-[0_18px_50px_rgba(198,241,53,0.08)] sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 text-lime transition-transform duration-300 group-hover:rotate-6 group-hover:bg-lime group-hover:text-ink">
                      <Icon size={18} />
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.16em] text-foreground/40">{item.index}</span>
                  </div>
                  <h3 className="mt-8 text-2xl tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-3 max-w-md flex-1 text-sm text-muted-foreground">{item.body}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm text-lime">
                    Explore
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Rise>
            );
          })}
        </div>
      </PageWrapper>
    </section>
  );
};

export default ServicesGrid;

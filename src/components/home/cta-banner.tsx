"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "@/components/layout/page-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib";

const setSpot = (node: HTMLDivElement, x: number, y: number) => {
  node.style.setProperty("--spot-x", `${x}%`);
  node.style.setProperty("--spot-y", `${y}%`);
};

const CtaBanner = () => {
  const frame = useRef<HTMLDivElement>(null);

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const node = frame.current;
    if (!node) return;
    const bounds = node.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    setSpot(node, x, y);
  };

  const onLeave = () => {
    const node = frame.current;
    if (!node) return;
    setSpot(node, 68, 42);
  };

  return (
    <section className="bg-background pb-[100px]">
      <PageWrapper>
        <div
          ref={frame}
          data-cta-banner
          className="cta-banner group relative overflow-hidden rounded-3xl"
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          <script
            dangerouslySetInnerHTML={{
              __html: `document.querySelectorAll("[data-cta-banner]").forEach((node)=>{if(node.dataset.bound)return;node.dataset.bound="1";const spot=(x,y)=>{node.style.setProperty("--spot-x",x+"%");node.style.setProperty("--spot-y",y+"%");};node.addEventListener("pointermove",(event)=>{const bounds=node.getBoundingClientRect();spot(((event.clientX-bounds.left)/bounds.width)*100,((event.clientY-bounds.top)/bounds.height)*100);});node.addEventListener("pointerleave",()=>spot(68,42));});`,
            }}
          />
          <div className="absolute inset-0">
            <Image
              src="/images/banner.jpg"
              alt=""
              fill
              quality={90}
              className="cta-banner-image object-cover"
              sizes="(min-width: 1450px) 1450px, 100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/35" />
          <div className="cta-banner-spot pointer-events-none absolute inset-0" />

          <div className="relative flex min-h-[340px] flex-col justify-end gap-8 px-8 py-12 sm:min-h-[420px] sm:flex-row sm:items-center sm:justify-between sm:gap-12 sm:px-12 lg:px-16">
            <div className="max-w-xl space-y-4">
              <h2 className="text-4xl font-semibold sm:text-6xl">
                Let’s work together.
              </h2>
              <p className="max-w-xl text-base text-foreground/80 sm:text-lg">
                Have a project in mind? Let’s create something meaningful,
                functional, and built to make an impact.
              </p>
            </div>
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "shrink-0 self-start sm:self-center")}
            >
              Let’s Work Together
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </div>
        </div>
      </PageWrapper>
    </section>
  );
};

export default CtaBanner;

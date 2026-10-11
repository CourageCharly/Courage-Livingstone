"use client";

import { useState } from "react";
import PageWrapper from "@/components/layout/page-wrapper";

const groups: { title: string; items: [string, string][] }[] = [
  {
    title: "Product design",
    items: [
      ["Product Strategy", "Decide what the product is for before drawing screens."],
      ["UX Research", "Learn the constraint from the people who use it."],
      ["User Flows", "Make the path from start to done obvious."],
      ["Wireframing", "Test structure before visual decisions."],
      ["Interaction Design", "Decide how the interface responds."],
      ["UI Design", "Give the product a precise visual voice."],
      ["Design Systems", "Turn repeated decisions into shared rules."],
      ["Prototyping", "Make the idea something people can try."],
      ["Usability Testing", "Watch where the interface fails, then fix that."],
    ],
  },
  {
    title: "Frontend engineering",
    items: [
      ["JavaScript", "The behavior of the interface."],
      ["TypeScript", "Types that keep the interface honest."],
      ["React", "Components that match the design system."],
      ["Next.js", "The product framework, from route to render."],
      ["Tailwind CSS", "A systematic way to apply the visual rules."],
      ["Responsive Web Design", "A composition for each size, not a shrink."],
      ["REST API Integration", "Real data inside the interface."],
      ["Git / GitHub", "How the work is reviewed and shipped."],
    ],
  },
  {
    title: "Tools",
    items: [
      ["Figma", "Where the interface is designed."],
      ["FigJam", "Where the flow is mapped with other people."],
      ["Jira", "Where the work is tracked."],
      ["Trello", "A light board for a small scope."],
      ["Notion", "Notes, specs, and decisions in one place."],
      ["Slack", "The working conversation."],
      ["Asana", "Tasks when the work spans people."],
      ["Canva", "Fast visual drafts outside the product file."],
    ],
  },
];

const Capabilities = () => {
  const [active, setActive] = useState("Product Strategy");
  const note =
    groups.flatMap((group) => group.items).find((item) => item[0] === active)?.[1] ?? "";

  return (
    <section className="border-t border-border py-24 sm:py-32">
      <PageWrapper>
        <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">05 — Capabilities</p>
        <h2 className="mt-4 text-4xl font-medium tracking-tight uppercase sm:text-6xl">Capabilities</h2>
        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">{group.title}</h3>
              <ul className="mt-5 border-t border-border">
                {group.items.map(([label]) => {
                  const on = label === active;
                  return (
                    <li key={label} className="border-b border-border">
                      <button
                        type="button"
                        aria-pressed={on}
                        onClick={() => setActive(label)}
                        className={`flex w-full items-center justify-between py-3 text-left text-sm outline-none transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${on ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                      >
                        <span>{label}</span>
                        <span className="font-mono text-[10px]">{on ? "●" : "○"}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 border border-white/10 px-4 py-4 font-mono text-[12px] tracking-wide text-muted-foreground" aria-live="polite">
          {active} — {note}
        </p>
      </PageWrapper>
    </section>
  );
};

export default Capabilities;

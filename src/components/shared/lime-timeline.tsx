import { cn } from "@/lib";

type Item = {
  title: string;
  body: string;
};

type Props = {
  items: Item[];
};

const LimeTimeline = ({ items }: Props) => {
  return (
    <>
    <ol data-timeline className="relative">
      <span
        aria-hidden
        className="pointer-events-none absolute top-2 bottom-2 left-[7px] w-px sm:left-1/2 sm:-translate-x-1/2"
      >
        <span className="lime-line block h-full w-full origin-top bg-accent" />
      </span>

      {items.map((item, index) => {
        const onLeft = index % 2 === 0;

        return (
          <li
            key={item.title}
            className="group/item relative pb-14 last:pb-0 sm:grid sm:grid-cols-2 sm:gap-x-20"
          >
            <span
              aria-hidden
              className="lime-dot absolute top-1.5 left-[7px] z-10 h-3 w-3 rounded-full bg-accent ring-4 ring-background sm:left-1/2"
            />
            <div
              className={cn(
                "timeline-card max-w-md pl-8 sm:pl-0",
                onLeft
                  ? "timeline-from-left sm:col-start-1 sm:justify-self-end sm:pr-8 sm:text-right"
                  : "timeline-from-right sm:col-start-2 sm:pl-8 sm:text-left",
              )}
            >
              <h3 className="text-xl font-semibold transition-colors duration-300 group-hover/item:text-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
    <script
      dangerouslySetInnerHTML={{
        __html: `document.querySelectorAll("[data-timeline]").forEach((root)=>{if(root.dataset.bound)return;root.dataset.bound="1";if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;root.classList.add("timeline-ready");const items=[...root.children].filter((node)=>node.tagName==="LI");const draw=()=>{const rect=root.getBoundingClientRect();const view=window.innerHeight;const traveled=view*0.82-rect.top;const progress=Math.min(1,Math.max(0,traveled/(rect.height*0.9)));root.style.setProperty("--line",String(progress));items.forEach((item)=>{if(item.getBoundingClientRect().top<view*0.88)item.classList.add("is-shown");});};draw();window.addEventListener("scroll",draw,{passive:true});window.addEventListener("resize",draw);});`,
      }}
    />
    </>
  );
};

export default LimeTimeline;

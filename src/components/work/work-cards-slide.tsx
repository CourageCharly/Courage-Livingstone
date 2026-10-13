import Link from "next/link";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib";
import ProjectMedia from "@/components/work/project-media";

type Props = {
  projects: Project[];
  label: string;
  className?: string;
};

const WorkCardsSlide = ({ projects, label, className }: Props) => {
  return (
    <div className={cn("-mx-[5%] w-[calc(100%+10%)]", className)} data-work-slide data-work-count={projects.length}>
      <div
        aria-label={label}
        className="flex snap-x snap-mandatory touch-pan-x gap-4 overflow-x-auto overscroll-x-contain px-[5%] pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [scroll-padding-inline:5%] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((item) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            data-slide
            className="panel w-[min(82%,20.5rem)] shrink-0 snap-start snap-always overflow-hidden"
          >
            <ProjectMedia
              cover={item.cover}
              title={item.title}
              className="aspect-[16/10] rounded-none border-0"
              imageClassName="!object-cover object-center"
              sizes="82vw"
            />
            <div className="p-4 sm:p-5">
              <p className="kicker text-lime">
                {item.label}
                <span className="whitespace-nowrap"> · {item.year}</span>
              </p>
              <h3 className="mt-2 text-xl break-words sm:text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground sm:text-lg">{item.summary}</p>
            </div>
          </Link>
        ))}
        <div aria-hidden className="w-[8%] shrink-0" />
      </div>
    </div>
  );
};

export default WorkCardsSlide;

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import ProjectMedia from "@/components/work/project-media";

type Props = {
  projects: Project[];
};

const arrowClass =
  "inline-flex h-11 w-11 items-center justify-center border border-white/15 text-foreground outline-none transition-colors hover:border-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

const WorkSlider = ({ projects }: Props) => {
  return (
    <div className="space-y-6" data-work-slider>
      <div className="flex justify-end gap-2">
        <button
          type="button"
          data-work-prev
          aria-label="Previous projects"
          className={arrowClass}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          data-work-next
          aria-label="Next projects"
          className={arrowClass}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="overflow-hidden">
        <div
          data-work-track
          className="flex cursor-grab touch-pan-y gap-6 active:cursor-grabbing"
        >
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              data-slide
              draggable={false}
              className="group relative block w-[85%] shrink-0 cursor-pointer outline-none sm:w-[70%] lg:w-[62%] focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="relative overflow-hidden bg-card">
                <ProjectMedia
                  cover={project.cover}
                  title={project.title}
                  priority={index === 0}
                  className="border-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
                  <div className="translate-y-1 transition-transform duration-500 group-hover:translate-y-0">
                    <p className="text-sm text-white/70">{project.year}</p>
                    <h3 className="mt-1 text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-white/75">
                      {project.role}
                    </p>
                  </div>
                  <span className="hidden h-10 w-10 translate-y-2 items-center justify-center border border-white/30 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:flex">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <script src="/slider.js" defer />
    </div>
  );
};

export default WorkSlider;

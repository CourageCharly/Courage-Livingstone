import type { Project } from "@/lib/projects";
import ProjectCard from "@/components/work/project-card";

type Props = {
  projects: Project[];
};

const ProjectGrid = ({ projects }: Props) => {
  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-14">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          priority={index < 2}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;

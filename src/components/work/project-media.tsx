import Image from "next/image";
import ProjectFrame from "@/components/work/project-frame";
import { cn } from "@/lib";

type Props = {
  cover: string;
  title: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  alt?: string;
  sizes?: string;
  loading?: "eager" | "lazy";
};

const ProjectMedia = ({
  cover,
  title,
  priority = false,
  className,
  imageClassName,
  alt,
  sizes = "(min-width: 1024px) 960px, 100vw",
  loading,
}: Props) => {
  const frame = cover.startsWith("frame:") ? cover.slice("frame:".length) : null;

  return (
    <div className={cn("relative aspect-[16/10] w-full overflow-hidden bg-[#0c0c0b]", className)}>
      {frame ? (
        <ProjectFrame kind={frame} className="absolute inset-0" />
      ) : (
        <Image
          src={cover}
          alt={alt ?? `${title} interface`}
          fill
          priority={priority}
          quality={90}
          loading={priority ? undefined : loading}
          className={cn("object-cover object-center", imageClassName)}
          sizes={sizes}
        />
      )}
    </div>
  );
};

export default ProjectMedia;

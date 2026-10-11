import PageWrapper from "@/components/layout/page-wrapper";
import TechMarks from "@/components/layout/tech-marks";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectSkeleton = () => {
  return (
    <article>
      <div className="relative overflow-hidden pt-28 pb-4 md:pt-32">
        <TechMarks />
        <PageWrapper className="relative">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="mt-10 h-3 w-40" />
          <Skeleton className="mt-5 h-20 w-full max-w-3xl" />
          <Skeleton className="mt-8 h-16 w-full max-w-2xl" />
          <div className="mt-12 grid border-t border-white/10 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="space-y-2 py-6">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-4 w-32" />
              </div>
            ))}
          </div>
        </PageWrapper>
      </div>
      <PageWrapper className="mt-12">
        <Skeleton className="aspect-[16/10] w-full rounded-[22px] md:aspect-[16/9]" />
      </PageWrapper>
    </article>
  );
};

export default ProjectSkeleton;

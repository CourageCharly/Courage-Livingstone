import PageWrapper from "@/components/layout/page-wrapper";
import TechMarks from "@/components/layout/tech-marks";
import { Skeleton } from "@/components/ui/skeleton";

const WorkSkeleton = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-32">
      <TechMarks />
      <PageWrapper className="relative">
        <Skeleton className="h-3 w-14" />
        <Skeleton className="mt-6 h-16 w-full max-w-3xl" />
        <Skeleton className="mt-3 h-16 w-4/5 max-w-2xl" />
        <Skeleton className="mt-8 h-12 w-full max-w-xl" />
        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} className="h-16 w-full" />
            ))}
          </div>
          <Skeleton className="hidden aspect-[16/10] w-full rounded-[24px] lg:col-span-7 lg:block" />
        </div>
      </PageWrapper>
    </section>
  );
};

export default WorkSkeleton;

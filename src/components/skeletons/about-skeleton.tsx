import PageWrapper from "@/components/layout/page-wrapper";
import TechMarks from "@/components/layout/tech-marks";
import { Skeleton } from "@/components/ui/skeleton";

const AboutSkeleton = () => {
  return (
    <article>
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-32">
        <TechMarks />
        <PageWrapper className="relative grid items-end gap-14 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            <Skeleton className="h-3 w-40" />
            <Skeleton className="h-20 w-full max-w-xl" />
            <Skeleton className="h-8 w-80" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-4/5" />
          </div>
          <Skeleton className="aspect-[4/5] w-full rounded-[22px] lg:col-span-4 lg:col-start-9" />
        </PageWrapper>
      </section>
      <section className="border-t border-white/10 py-16">
        <PageWrapper className="space-y-4">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-12 w-72" />
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className="h-28 w-full rounded-[22px]" />
          ))}
        </PageWrapper>
      </section>
    </article>
  );
};

export default AboutSkeleton;

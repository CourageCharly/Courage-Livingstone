import PageWrapper from "@/components/layout/page-wrapper";
import TechMarks from "@/components/layout/tech-marks";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <article>
      <section className="relative overflow-hidden pt-28 pb-12 md:pt-32">
        <TechMarks />
        <PageWrapper className="relative">
          <Skeleton className="h-3 w-48" />
          <Skeleton className="mt-6 h-16 w-full max-w-xl" />
          <Skeleton className="mt-3 h-16 w-64" />
          <Skeleton className="mt-8 h-12 w-full max-w-2xl" />
        </PageWrapper>
      </section>
      <PageWrapper className="space-y-4 py-12">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className="h-32 w-full rounded-[22px]" />
        ))}
      </PageWrapper>
    </article>
  );
}

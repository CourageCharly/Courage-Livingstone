import PageWrapper from "@/components/layout/page-wrapper";
import TechMarks from "@/components/layout/tech-marks";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-36">
      <TechMarks />
      <PageWrapper className="relative max-w-3xl space-y-5">
        <Skeleton className="h-3 w-12" />
        <Skeleton className="h-16 w-full max-w-xl" />
        <Skeleton className="h-12 w-full max-w-lg" />
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-4 w-24" />
      </PageWrapper>
    </section>
  );
}

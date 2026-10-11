import PageWrapper from "@/components/layout/page-wrapper";
import TechMarks from "@/components/layout/tech-marks";
import { Skeleton } from "@/components/ui/skeleton";

const ContactSkeleton = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-32">
      <TechMarks />
      <PageWrapper className="relative">
        <Skeleton className="h-3 w-48" />
        <Skeleton className="mt-6 h-16 w-full max-w-3xl" />
        <Skeleton className="mt-3 h-16 w-4/5 max-w-2xl" />
        <div className="mt-16 grid gap-16 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-11 w-40 rounded-full" />
          </div>
          <div className="space-y-4 lg:col-span-4 lg:col-start-9">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      </PageWrapper>
    </section>
  );
};

export default ContactSkeleton;

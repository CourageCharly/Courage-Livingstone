import PageWrapper from "@/components/layout/page-wrapper";
import { Skeleton } from "@/components/ui/skeleton";

const HomeSkeleton = () => {
  return (
    <div>
      <section className="relative overflow-hidden pt-32 pb-56 md:pt-40 md:pb-72">
        <div className="width-layout relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <div aria-hidden className="pointer-events-none absolute top-[calc(50%+2.75rem)] left-1/2 h-[min(96vw,38rem)] w-[min(96vw,38rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <Skeleton className="h-3 w-56" />
          <Skeleton className="mt-4 h-14 w-[min(92vw,36rem)]" />
          <Skeleton className="mt-2 h-14 w-[min(70vw,24rem)]" />
          <Skeleton className="mt-2 h-14 w-[min(52vw,16rem)]" />
          <Skeleton className="mt-5 h-4 w-80 max-w-full" />
          <div className="mt-5 flex gap-3">
            <Skeleton className="h-10 w-32 rounded-full" />
            <Skeleton className="h-10 w-40 rounded-full" />
          </div>
        </div>
        </div>
      </section>
      <section className="border-t border-white/10 py-16">
        <PageWrapper className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-4/5" />
          </div>
          <div className="space-y-4 lg:col-span-6 lg:col-start-7">
            <Skeleton className="h-20 w-full" />
            <div className="grid gap-3 sm:grid-cols-2">
              <Skeleton className="h-16 rounded-[22px]" />
              <Skeleton className="h-16 rounded-[22px]" />
            </div>
          </div>
        </PageWrapper>
      </section>
    </div>
  );
};

export default HomeSkeleton;

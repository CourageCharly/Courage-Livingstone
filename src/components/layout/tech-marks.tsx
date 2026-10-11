import { cn } from "@/lib";

const TechMarks = ({ className }: { className?: string }) => {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="hero-grid absolute inset-0 opacity-30" />
      <span className="absolute top-24 left-4 h-3.5 w-3.5 border-t border-l border-lime/80 sm:left-8" />
      <span className="absolute top-24 right-4 h-3.5 w-3.5 border-t border-r border-lime/80 sm:right-8" />
      <span className="absolute bottom-6 left-4 h-3.5 w-3.5 border-b border-l border-lime/50 sm:left-8" />
      <span className="absolute right-4 bottom-6 h-3.5 w-3.5 border-r border-b border-lime/50 sm:right-8" />
    </div>
  );
};

export const TechCorners = ({ className }: { className?: string }) => {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 z-10", className)}>
      <span className="absolute top-2.5 left-2.5 h-2.5 w-2.5 border-t border-l border-lime/80" />
      <span className="absolute top-2.5 right-2.5 h-2.5 w-2.5 border-t border-r border-lime/80" />
      <span className="absolute bottom-2.5 left-2.5 h-2.5 w-2.5 border-b border-l border-lime/70" />
      <span className="absolute right-2.5 bottom-2.5 h-2.5 w-2.5 border-r border-b border-lime/70" />
    </div>
  );
};

export default TechMarks;

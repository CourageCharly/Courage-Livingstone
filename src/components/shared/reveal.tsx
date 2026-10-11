import type { ReactNode } from "react";
import { cn } from "@/lib";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const Reveal = ({ children, className, delay = 0 }: Props) => {
  return (
    <div
      className={cn("reveal", className)}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default Reveal;

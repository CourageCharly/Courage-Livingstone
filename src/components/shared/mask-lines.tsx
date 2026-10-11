import type { ReactNode } from "react";
import { cn } from "@/lib";

type Props = {
  lines: ReactNode[];
  className?: string;
};

const delays = ["line-d0", "line-d1", "line-d2", "line-d3", "line-d4", "line-d5"];

const MaskLines = ({ lines, className }: Props) => {
  return (
    <span className={cn("block", className)}>
      {lines.map((line, index) => (
        <span key={index} className={cn("line-mask", delays[index] ?? "line-d5")}>
          <span>{line}</span>
        </span>
      ))}
    </span>
  );
};

export default MaskLines;

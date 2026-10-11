import { LabelHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib";

const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "text-sm font-medium leading-none text-foreground",
          className,
        )}
        {...props}
      />
    );
  },
);

Label.displayName = "Label";

export { Label };

import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib";

type ArrowProps = {
  direction?: "forward" | "back";
  className?: string;
};

export function Arrow({ direction = "forward", className }: ArrowProps) {
  if (direction === "back") {
    return (
      <span className={cn("inline-flex overflow-hidden", className)} aria-hidden>
        <svg
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-1"
          fill="none"
        >
          <path d="M13 8H3M7 4 3 8l4 4" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </span>
    );
  }

  return (
    <span className={cn("relative inline-grid h-3.5 w-3.5 overflow-hidden", className)} aria-hidden>
      <svg
        viewBox="0 0 16 16"
        className="col-start-1 row-start-1 h-3.5 w-3.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3.5 group-hover:-translate-y-3.5"
        fill="none"
      >
        <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <svg
        viewBox="0 0 16 16"
        className="col-start-1 row-start-1 h-3.5 w-3.5 -translate-x-3.5 translate-y-3.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0"
        fill="none"
      >
        <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    </span>
  );
}

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  direction?: "forward" | "back";
  cursor?: string;
};

const TextLink = ({ href, children, className, direction = "forward", cursor }: Props) => {
  const external = href.startsWith("http");
  const classes = cn(
    "group inline-flex items-center gap-3 text-[0.95rem] text-foreground outline-none",
    className,
  );
  const inner = (
    <>
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100" />
      </span>
      <Arrow direction={direction} />
    </>
  );

  if (external || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        data-cursor={cursor}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} data-cursor={cursor}>
      {inner}
    </Link>
  );
};

export default TextLink;

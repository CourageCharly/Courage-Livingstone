import { cn } from "@/lib";

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden
      className={cn("h-9 w-9 text-foreground", className)}
    >
      <rect x="0.5" y="0.5" width="39" height="39" fill="none" stroke="currentColor" />
      <path
        d="M17.5 12.5a6 6 0 0 0-6 6.2c0 3.6 2.5 6.3 6 6.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M22 12.5V27h8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default Logo;

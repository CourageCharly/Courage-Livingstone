"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast:
            "group toast font-sans border-border bg-card text-foreground shadow-lg",
          title: "text-foreground font-medium",
          description: "text-muted-foreground",
          success: "border-accent/30",
          error: "border-destructive/40",
          warning: "border-accent/20",
          info: "border-border",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

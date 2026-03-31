import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "secondary";
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        variant === "default"
          ? "border-blue-100/30 bg-blue-100/10 text-slate-100 shadow-[0_0_18px_rgba(125,211,252,0.14)]"
          : "border-blue-300/22 bg-blue-950/65 text-slate-200 shadow-[0_0_18px_rgba(37,99,235,0.12)]",
        className,
      )}
      {...props}
    />
  );
}

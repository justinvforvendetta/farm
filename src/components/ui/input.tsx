import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-2xl border border-blue-100/18 bg-[linear-gradient(180deg,rgba(2,6,23,0.18),rgba(30,64,175,0.22))] px-4 py-2 text-sm text-slate-100 placeholder:text-slate-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_18px_rgba(37,99,235,0.08)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200/70 focus-visible:border-blue-100/30",
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = "Input";

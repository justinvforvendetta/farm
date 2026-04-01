import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative rounded-[28px] border border-blue-100/18 bg-[linear-gradient(180deg,rgba(12,42,144,0.78),rgba(3,18,70,0.78))] text-slate-100 shadow-[0_28px_90px_rgba(2,6,23,0.38),0_0_0_1px_rgba(191,219,254,0.03)] backdrop-blur-xl before:pointer-events-none before:absolute before:right-0 before:top-0 before:h-28 before:w-32 before:rounded-bl-[2.75rem] before:rounded-tr-[28px] before:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.26),rgba(191,219,254,0.1)_42%,transparent_72%)] before:content-['']",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-2 p-6", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-xl font-semibold tracking-tight", className)} {...props} />;
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0", className)} {...props} />;
}

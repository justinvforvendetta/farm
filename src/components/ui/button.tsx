import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary" | "outline";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  default:
    "bg-[linear-gradient(180deg,rgba(191,219,254,1),rgba(96,165,250,0.95))] text-slate-950 hover:brightness-105 disabled:bg-blue-950/60 disabled:text-slate-400",
  secondary:
    "bg-[linear-gradient(180deg,rgba(17,24,39,0.14),rgba(30,64,175,0.5))] text-slate-100 hover:bg-blue-900/80 disabled:bg-blue-950/50 disabled:text-slate-500",
  outline:
    "border border-blue-200/30 bg-blue-950/15 text-slate-100 hover:bg-blue-900/35 disabled:border-blue-950/60 disabled:text-slate-500",
};

export function buttonVariants(variant: ButtonVariant = "default", className?: string) {
  return cn(
    "inline-flex h-11 items-center justify-center whitespace-nowrap rounded-2xl px-4 text-sm font-medium shadow-[0_12px_30px_rgba(2,6,23,0.22),0_0_24px_rgba(96,165,250,0.08)] transition-all duration-200 hover:-translate-y-0.5",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200/70",
    "disabled:cursor-not-allowed disabled:shadow-none",
    variants[variant],
    className,
  );
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <button ref={ref} className={buttonVariants(variant, className)} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

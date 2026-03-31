import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary" | "outline";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  default:
    "bg-blue-300 text-slate-950 hover:bg-blue-200 disabled:bg-blue-950/60 disabled:text-slate-400",
  secondary:
    "bg-blue-950/70 text-slate-100 hover:bg-blue-900/80 disabled:bg-blue-950/50 disabled:text-slate-500",
  outline:
    "border border-blue-300/25 bg-transparent text-slate-100 hover:bg-blue-900/35 disabled:border-blue-950/60 disabled:text-slate-500",
};

export function buttonVariants(variant: ButtonVariant = "default", className?: string) {
  return cn(
    "inline-flex h-11 items-center justify-center whitespace-nowrap rounded-2xl px-4 text-sm font-medium shadow-[0_12px_30px_rgba(2,6,23,0.22)] transition-all duration-200",
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

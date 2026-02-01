'use client';

import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", asChild = false, ...props }, ref) => {
    const Comp: any = asChild ? "span" : "button";

    const baseStyles =
      "inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-brand-500/40 disabled:opacity-50 disabled:pointer-events-none";

    const variants: Record<ButtonVariant, string> = {
      primary:
        "bg-slate-900 text-white hover:bg-brand-600 shadow-lg hover:shadow-brand-500/25",
      secondary:
        "bg-white border border-slate-200 text-slate-700 hover:border-brand-300 hover:text-brand-600 hover:bg-brand-50",
      outline:
        "border border-slate-300 text-slate-800 hover:bg-slate-100",
    };

    return (
      <Comp
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export default Button;
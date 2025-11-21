import * as React from "react";
import { Slot } from "@radix-ui/react-slot";   //for polymorphic components
import { cva, type VariantProps } from "class-variance-authority"; //a separate utility for managing variant-based class names

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0" +
    " hover-elevate active-elevate-2 transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border border-primary-border",
        destructive:
          "bg-destructive text-destructive-foreground border border-destructive-border",
        outline:
          "border [border-color:var(--button-outline)] shadow-xs active:shadow-none",
        secondary:
          "border bg-secondary text-secondary-foreground border border-secondary-border",
        ghost: "border border-transparent",
        hire:
          "hire-me-btn flex items-center gap-3 px-6 py-3 rounded-xl shadow-md",
      },
      size: {
        default: "min-h-9 px-4 py-2",
        sm: "min-h-8 rounded-md px-3 text-xs",
        lg: "min-h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  hireArrow?: boolean; // new prop to add arrow circle
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, hireArrow = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {variant === "hire" && hireArrow && (
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-blue-600 dark:bg-blue-600 dark:text-white transition-colors">
            ↗
          </span>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

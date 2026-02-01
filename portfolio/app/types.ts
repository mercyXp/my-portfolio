import { ReactNode } from "react";

export type BadgeVariant = "success" | "info" | "warning";

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

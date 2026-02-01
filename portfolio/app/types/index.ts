export type BadgeVariant = 'success' | 'info' | 'warning';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}
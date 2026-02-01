'use client';

import { BadgeProps } from '@/app/types';
import { cn } from '@/lib/utils';

const variantStyles = {
  success: 'bg-brand-100/50 border-brand-200 text-brand-700',
  info: 'bg-blue-100/50 border-blue-200 text-blue-700',
  warning: 'bg-yellow-100/50 border-yellow-200 text-yellow-700'
} as const;

const dotStyles = {
  success: 'bg-brand-500',
  info: 'bg-blue-500',
  warning: 'bg-yellow-500'
} as const;

export const Badge = ({ 
  children, 
  variant = 'success', 
  className 
}: BadgeProps) => {
  return (
    <div 
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium animate-slide-up-fade",
        variantStyles[variant],
        className
      )}
      style={{ animationDelay: '0.1s' }}
    >
      <span 
        className={cn(
          "w-2 h-2 rounded-full animate-pulse",
          dotStyles[variant]
        )}
      />
      {children}
    </div>
  );
};
import { cn } from '@/lib/util';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

interface IconProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonVariants> {
  className?: string;
  icon: React.ReactNode;
}

const buttonVariants = cva('rounded-full flex-center', {
  variants: {
    variant: {
      default: 'bg-white border border-[#cccccc]',
      primary: 'bg-black border border-black',
    },
    size: {
      default: 'h-7 w-7',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

const Icon = ({ className, variant, size, icon, ...props }: IconProps) => {
  return (
    <div
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {icon}
    </div>
  );
};

export default Icon;

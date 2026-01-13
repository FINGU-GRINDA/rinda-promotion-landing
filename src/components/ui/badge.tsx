import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary-light text-primary",
        purple: "bg-primary text-white",
        outline: "border border-primary text-primary bg-transparent",
        success: "bg-rd-green-03 text-rd-green-01",
        warning: "bg-rd-red-03 text-rd-red-01",
        urgent: "bg-rd-red-01 text-white animate-pulse",
        white: "bg-white/20 text-white border border-white/30",
        dark: "bg-rd-n-01 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

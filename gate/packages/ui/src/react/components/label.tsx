import { ComponentProps, forwardRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const label = cva(
  "flex gap-2 leading-none select-none text-black dark:text-white",
  {
    variants: {
      variant: {
        primary: ["py-2"],
        secondary: ["py-2"],
      },
      size: {
        small: ["text-sm"],
        medium: ["text-base"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

export type LabelProps = ComponentProps<"label"> &
  VariantProps<typeof label>;

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <label
        className={cn(label({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </label>
    );
  },
);

Label.displayName = "Label";

export default Label;

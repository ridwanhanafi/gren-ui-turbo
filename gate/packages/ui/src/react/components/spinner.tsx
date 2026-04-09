import { ComponentProps, forwardRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const spinner = cva(
  "flex text-black dark:text-white",
  {
    variants: {
      variant: {
        primary: ["py-2"],
        secondary: ["py-2"],
      },
      size: {
        small: ["w-10 h-10"],
        medium: ["w-15 h-15"],
        large: ["w-20 h-20"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

export type SpinnerProps = ComponentProps<"div"> &
  VariantProps<typeof spinner>;

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        className={cn(spinner({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        <svg className="w-full h-full"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200">
          <circle fill="#288052" stroke="#288052" strokeWidth="15" r="15" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#288052" stroke="#288052" strokeWidth="15" r="15" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#288052" stroke="#288052" strokeWidth="15" r="15" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle>
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  },
);

Spinner.displayName = "Spinner";

export default Spinner;

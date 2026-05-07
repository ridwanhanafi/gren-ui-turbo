import { ComponentProps, forwardRef, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const inputGroupVariants = cva(
  [
    "flex items-center w-full min-w-0 border transition-all gap-2",
    "duration-300 ease-in-out",
    "focus-within:ring-2 focus-within:ring-brand-primary",
    "bg-white border-gray-300 text-black dark:bg-zinc-900 dark:border-zinc-700 dark:text-white",
  ],
  {
    variants: {
      variant: {
        primary: ["rounded-md"],
        secondary: ["rounded-sm"],
      },
      size: {
        small: ["px-2", "py-2", "text-sm"],
        medium: ["px-3", "py-2", "text-base"],
      },
      disabled: {
        true: ["opacity-50", "pointer-events-none", "bg-zinc-100 dark:bg-zinc-800"],
        false: null,
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      disabled: false,
    },
  }
);

type BaseInputProps = Omit<ComponentProps<"input">, "size" | "disabled">;

export interface InputGroupProps
  extends BaseInputProps,
  VariantProps<typeof inputGroupVariants> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  containerClassName?: string;
}

const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(
  ({ className, variant, size, disabled, leftIcon, rightIcon, containerClassName, ...props }, ref) => {
    return (
      <div
        className={cn(inputGroupVariants({ variant, size, disabled }), containerClassName)}
        aria-disabled={disabled ?? undefined}
      >
        {leftIcon && (
          <div className="text-gray-400 shrink-0">{leftIcon}</div>
        )}

        <input
          {...props}
          ref={ref}
          disabled={disabled || undefined}
          className={cn(
            "w-full bg-transparent outline-none border-none p-0 focus:ring-0",
            className
          )}
        />

        {rightIcon && (
          <div className="text-gray-400 shrink-0">{rightIcon}</div>
        )}
      </div>
    );
  }
);

InputGroup.displayName = "InputGroup";

export default InputGroup;
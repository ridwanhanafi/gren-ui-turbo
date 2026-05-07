import { ComponentProps, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const inputVariants = cva(
  [
    "w-full min-w-0 border transition-colors focus:outline-none focus:ring-2",
    "bg-white text-black border-gray-300 placeholder:text-gray-400 focus:ring-brand-primary",
    "dark:bg-zinc-900 dark:text-white dark:border-zinc-700 dark:placeholder:text-zinc-400 dark:focus:ring-brand-primary",
    "aria-invalid:ring-destructive/40 dark:aria-invalid:ring-destructive/60",
  ],
  {
    variants: {
      variant: {
        primary: "rounded-md",
        secondary: "rounded-sm",
      },
      size: {
        small: "text-sm py-2 px-2",
        medium: "text-base py-2 px-3",
      },
      // Gunakan nama yang berbeda atau manfaatkan state native
      isDisabled: {
        true: "opacity-50 pointer-events-none bg-gray-200 border-gray-300",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      isDisabled: false,
    },
  }
);

// Kita hapus 'size' dan 'disabled' dari ComponentProps agar tidak konflik dengan VariantProps
type BaseInputProps = Omit<ComponentProps<"input">, "size" | "disabled">;

export interface InputProps extends BaseInputProps, VariantProps<typeof inputVariants> {
  // Kita definisikan ulang disabled agar masuk ke variant CVA
  disabled?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, disabled, ...props }, ref) => {
    return (
      <input
        // Kirim disabled ke isDisabled (variant) DAN ke props native input
        className={cn(inputVariants({ variant, size, isDisabled: disabled }), className)}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
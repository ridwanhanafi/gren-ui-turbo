import { ComponentProps, forwardRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const select = cva(
  [
    "w-full min-w-0 rounded-md border transition-colors",
    "focus:outline-none focus:ring-2",

    // LIGHT MODE
    "bg-white text-black border-gray-300 placeholder:text-gray-400",
    "focus:ring-brand-primary",

    // DARK MODE
    "dark:bg-zinc-900 dark:text-white dark:border-zinc-700",
    "dark:placeholder:text-zinc-400",
    "dark:focus:ring-brand-primary",

    // INVALID
    "aria-invalid:ring-destructive/40 dark:aria-invalid:ring-destructive/60",
  ],
  {
    variants: {
      variant: {
        primary: ["rounded-md"],
        secondary: ["rounded-sm"],
      },
      size: {
        small: ["text-sm", "py-2", "px-2"],
        medium: ["text-base", "py-2.5", "px-3"],
      },
      // `boolean` variants are also supported!
      disabled: {
        false: null,
        true: ["opacity-50", "pointer-events-none"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      disabled: false,
    },
  },
);

/* ================= SUB COMPONENT ================= */

export type OptionProps = ComponentProps<"option"> &
  VariantProps<typeof select>

const SelectOption = ({ className, ...props }: ComponentProps<"option">) => (
  <option className={cn(className)}
    {...props}
  />
)

/* ================= MAIN COMPONENT ================= */

export type SelectProps = ComponentProps<"select"> &
  VariantProps<typeof select>;

type SelectComponent = typeof SelectMain & {
  Option: typeof SelectOption;
};

const SelectMain = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant, size, disabled, ...props }, ref) => {
    return (
      <select
        defaultValue=""
        className={cn(select({ variant, size, disabled }), className)}
        ref={ref}
        {...props} />
    );
  }
);

SelectMain.displayName = "Select";

const Select: SelectComponent = Object.assign(SelectMain, {
  Option: SelectOption,
});

export default Select;

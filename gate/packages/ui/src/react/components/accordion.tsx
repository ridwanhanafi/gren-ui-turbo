import { ComponentProps, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const accordion = cva(
  "group border border-slate-200 open:shadow-md dark:bg-slate-900",
  {
    variants: {
      variant: {
        primary:
          "bg-white shadow-sm open:shadow-md",
      },
      size: {
        small: ["text-sm", "rounded-lg"],
        medium: ["text-base", "rounded-xl"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

/* ================= SUB COMPONENT ================= */

export type AccordionProps = ComponentProps<"details"> &
  VariantProps<typeof accordion>;

const Summary = ({ className, children, ...props }: ComponentProps<"summary">) => (
  <summary
    className={cn("flex cursor-pointer list-none items-center justify-between p-4 font-semibold text-slate-700 dark:text-slate-200", className)}
    {...props}
  >
    {children}
    <svg className="h-5 w-5 transition-transform group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  </summary>
);

const Description = ({ className, ...props }: ComponentProps<"p">) => (
  <p
    className={cn("border-t border-slate-100 p-4 text-slate-600 dark:text-slate-400", className)}
    {...props}
  />
);

/* ================= MAIN COMPONENT ================= */

type AccordionType = typeof AccordionMain & {
  Summary: typeof Summary;
  Description: typeof Description;
};

const AccordionMain = forwardRef<HTMLDetailsElement, AccordionProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <details
        ref={ref}
        className={cn(accordion({ variant, size }), className)}
        {...props}
      />
    );
  }
);

AccordionMain.displayName = "Accordion";

const Accordion: AccordionType = Object.assign(AccordionMain, {
  Summary,
  Description,
});

export default Accordion;
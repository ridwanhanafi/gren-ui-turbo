import { ComponentProps, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const pagination = cva(
  [
    "flex items-center gap-1",
  ],
  {
    variants: {
      size: {
        small: "text-sm",
        medium: "text-base",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

const item = cva(
  [
    "flex items-center justify-center",
    "border rounded-md transition-colors",
    "cursor-pointer select-none",
    
    // LIGHT
    "bg-white text-black border-gray-300 hover:bg-gray-100",
    
    // DARK
    "dark:bg-zinc-900 dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-800",

    // ACTIVE
    "data-[active=true]:bg-brand-primary data-[active=true]:text-white data-[active=true]:border-brand-primary",

    // DISABLED
    "data-[disabled=true]:opacity-50 data-[disabled=true]:pointer-events-none",
  ],
  {
    variants: {
      size: {
        small: "h-8 min-w-8 px-2",
        medium: "h-9 min-w-9 px-3",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

export type PaginationProps = ComponentProps<"nav"> &
  VariantProps<typeof pagination> & {
    page: number;
    total: number;
    onChange?: (page: number) => void;
  };

const Pagination = forwardRef<HTMLElement, PaginationProps>(
  ({ className, size, page, total, onChange, ...props }, ref) => {
    
    const pages = Array.from({ length: total }, (_, i) => i + 1);

    return (
      <nav
        ref={ref}
        className={cn(pagination({ size }), className)}
        {...props}
      >
        {/* PREVIOUS */}
        <button
          className={item({ size })}
          data-disabled={page === 1}
          onClick={() => page > 1 && onChange?.(page - 1)}
        >
          <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5">
            <path d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" fillRule="evenodd" />
          </svg>
        </button>

        {/* PAGE NUMBERS */}
        {pages.map((p) => (
          <button
            key={p}
            className={item({ size })}
            data-active={p === page}
            onClick={() => onChange?.(p)}
          >
            {p}
          </button>
        ))}

        {/* NEXT */}
        <button
          className={item({ size })}
          data-disabled={page === total}
          onClick={() => page < total && onChange?.(page + 1)}
        >
          <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5">
            <path d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
          </svg>
        </button>
      </nav>
    );
  }
);

Pagination.displayName = "Pagination";

export default Pagination;
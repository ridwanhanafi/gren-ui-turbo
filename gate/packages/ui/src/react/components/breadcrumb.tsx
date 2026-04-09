import { ComponentProps, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const breadcrumb = cva(
  "flex",
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


/* ================= TYPE ================= */

type BreadcrumbItemType = {
  label: string;
  href: string;
}

type BreadcrumbProps = ComponentProps<"nav"> &
  VariantProps<typeof breadcrumb> & {
    items: BreadcrumbItemType[];
  }

type BreadcrumbItemProps = ComponentProps<"li"> & {
  item: BreadcrumbItemType;
  isFirst: boolean;
  isLast: boolean;
};

/* ================= SUB COMPONENT ================= */

const IconHome = () => (
  <svg className="mr-2 size-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
  </svg>
);

// icon ">"
const IconChevron = () => (
  <svg className="size-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

const BreadcrumbItem = ({ className, item, isFirst, isLast, ...props }: BreadcrumbItemProps) => {
  const mainClassText = 'items-center text-sm font-medium text-primary transition-colors hover:text-secondary dark:text-primary dark:hover:text-secondary'
  return (
    <li
      className={cn(isFirst ? "inline-flex items-center" : "flex items-center", className)}
      aria-current={isLast ? "page" : undefined}
      {...props}
    >
      {/* 1. Render Chevron: Muncul di semua item KECUALI item pertama */}
      {!isFirst && <IconChevron />}

      {/* 2. Render Konten: Pilih salah satu antara Home, Link biasa, atau Span terakhir */}
      {isLast ? (
        /* JIKA ITEM TERAKHIR: Render Span saja */
        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
          {item.label}
        </span>
      ) : isFirst ? (
        /* JIKA ITEM PERTAMA: Render Link + Icon Home */
        <a href={item.href} className={cn("inline-flex items-center", mainClassText)}>
          <IconHome />
          <span className="ml-2">{item.label}</span>
        </a>
      ) : (
        /* JIKA ITEM DI TENAH (Bukan pertama, bukan terakhir): Render Link biasa */
        <a href={item.href} className={cn("ml-1 md:ml-2", mainClassText)}>
          {item.label}
        </a>
      )}
    </li>
  );
}

/* ================= MAIN COMPONENT ================= */

const BreadcrumbMain = forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, variant, size, items, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(breadcrumb({ variant, size }), className)}
        aria-label="Breadcrumb"
        {...props}
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          {/* list item */}
          {items.map((item, index) => (
            <BreadcrumbItem
              key={index}
              item={item}
              isFirst={index === 0}
              isLast={index === items.length - 1}
            />
          ))}
        </ol>
      </nav>
    );
  }
);

BreadcrumbMain.displayName = "Breadcrumb";

export default BreadcrumbMain;
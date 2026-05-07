import React, { ComponentProps, forwardRef, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const navbarVariants = cva(
  ["w-full bg-white p-2 transition-colors duration-300 dark:bg-black dark:text-white"],
  {
    variants: {
      variant: {
        primary: [],
        secondary: [],
      },
      size: {
        small: ["h-12", "text-sm"],
        medium: ["h-16", "text-base"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

/* ================= SUB COMPONENT ================= */

const NavbarMenu = ({ className, ...props }: ComponentProps<"a">) => (
  <a
    className={cn(
      "hidden rounded px-3 py-2 hover:bg-gray-100 lg:block dark:hover:bg-gray-800",
      className
    )}
    {...props}
  />
);

/* ================= MAIN COMPONENT ================= */

export type NavbarProps = ComponentProps<"nav"> &
  VariantProps<typeof navbarVariants> & {
    onToggle?: () => void;
    leftContent?: ReactNode;
    rightContent?: ReactNode;
  };

const NavbarMain = forwardRef<HTMLElement, NavbarProps>(
  ({ className, variant, size, children, leftContent, rightContent, onToggle, ...props }, ref) => {
    return (
      <nav
        className={cn(navbarVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        <div className="flex h-full items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-2">
            {/* hamburger icon */}
            {onToggle && (
              <button
                onClick={onToggle}
                type="button"
                className="rounded px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle Sidebar"
              >
                <i className="bi bi-list text-lg"></i>
              </button>
            )}
            {leftContent}
            {children}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {rightContent}
          </div>
        </div>
      </nav>
    );
  }
);

NavbarMain.displayName = "Navbar";

/* ================= COMPOUND EXPORT ================= */

const Navbar = Object.assign(NavbarMain, {
  Menu: NavbarMenu,
});

export default Navbar;
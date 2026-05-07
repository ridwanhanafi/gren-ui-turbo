import React, { ComponentProps, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const appShellVariants = cva(
  ["flex min-h-screen flex-col bg-white dark:bg-black"],
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
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

/* ================= SUB COMPONENTS ================= */

const AppShellSidebar = ({ children }: { children: React.ReactNode }) => {
  return <aside className="w-64 border-r">{children}</aside>;
};

const AppShellMain = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-1 flex-col">{children}</div>;
};

const AppShellContent = ({ children }: { children: React.ReactNode }) => {
  return <main className="flex-1 overflow-auto p-6">{children}</main>;
};

/* ================= TYPES ================= */

export type BaseAppShellProps = ComponentProps<"div"> &
  VariantProps<typeof appShellVariants>;

type AppShellComponent = typeof AppShellRoot & {
  Sidebar: typeof AppShellSidebar;
  Main: typeof AppShellMain;
  Content: typeof AppShellContent;
};

/* ================= MAIN COMPONENT ================= */

const AppShellRoot = forwardRef<HTMLDivElement, BaseAppShellProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(appShellVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AppShellRoot.displayName = "AppShell";

const AppShell: AppShellComponent = Object.assign(AppShellRoot, {
  Sidebar: AppShellSidebar,
  Main: AppShellMain,
  Content: AppShellContent,
});

export default AppShell;
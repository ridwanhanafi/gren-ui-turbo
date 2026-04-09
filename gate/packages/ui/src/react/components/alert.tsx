import { ComponentProps, forwardRef, useEffect, useState } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const alertBase = cva(
  "flex items-center leading-none lg:inline-flex lg:rounded-full",
  {
    variants: {
      variant: {
        gray: ["bg-gray-800", "text-gray-100"],
        red: ["bg-red-800", "text-red-100"],
        yellow: ["bg-yellow-800", "text-yellow-100"],
        green: ["bg-green-800", "text-indigo-100"],
        blue: ["bg-blue-800", "text-blue-100"],
        indigo: ["bg-indigo-800", "text-indigo-100"],
        purple: ["bg-purple-800", "text-purple-100"],
        pink: ["bg-pink-800", "text-pink-100"],
      },
      size: {
        small: ["text-sm", "px-2", "py-1"],
        medium: ["text-base", "px-2", "py-2"],
      },
    },
    defaultVariants: {
      variant: "green",
      size: "small",
    },
  },
);

const badge = cva(
  "mr-3 inline-flex items-center whitespace-nowrap rounded-full px-2 py-1 uppercase",
  {
    variants: {
      variant: {
        gray: ["bg-gray-500", "text-gray-100"],
        red: ["bg-red-500", "text-red-100"],
        yellow: ["bg-yellow-500", "text-yellow-100"],
        green: ["bg-green-500", "text-indigo-100"],
        blue: ["bg-blue-500", "text-blue-100"],
        indigo: ["bg-indigo-500", "text-indigo-100"],
        purple: ["bg-purple-500", "text-purple-100"],
        pink: ["bg-pink-500", "text-pink-100"],
      },
      size: {
        small: ["text-xs", "font-bold"],
        medium: ["text-base", "font-bold"],
      },
    },
    defaultVariants: {
      variant: "green",
      size: "small",
    },
  }
)

const messageCn = cva(
  "mr-2 flex-auto text-left font-semibold",
)

export type AlertProps = ComponentProps<"div"> &
  VariantProps<typeof alertBase> &
  VariantProps<typeof badge> &
  VariantProps<typeof messageCn> & {
    title?: React.ReactNode;
    message?: React.ReactNode;
    onClose?: () => void;
    duration?: number; // auto close (ms)
  };
const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({
    className,
    variant = "green",
    size = "small",
    title = "yey",
    message = "Alert notifikasi",
    duration,
    onClose,
    ...props
  }, ref) => {

    const [open, setOpen] = useState(true);

    useEffect(() => {
      if (duration) {
        const timer = setTimeout(() => {
          setOpen(false);
          onClose?.();
        }, duration);

        return () => clearTimeout(timer);
      }
    }, [duration, onClose]);

    if (!open) return null;

    return (
      <div
        className={cn(
          alertBase({ variant, size }),
          "animate-in fade-in slide-in-from-top-2",
          className
        )}
        role="alert"
        ref={ref}
        {...props}>
        <span className={cn(badge({ variant, size }))}>{title}</span>
        <span className={cn(messageCn())}>{message}</span>
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            onClose?.();
          }}
          className="ml-2 p-1 hover:opacity-70 cursor-pointer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    );
  },
);

Alert.displayName = "Alert";

export default Alert;

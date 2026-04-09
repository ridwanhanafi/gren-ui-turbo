import { ComponentProps, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const modal = cva("fixed inset-0 flex z-50", {
  variants: {
    position: {
      topLeft: "items-start justify-start",
      topCenter: "items-start justify-center",
      topRight: "items-start justify-end",
      centerLeft: "items-center justify-start",
      center: "items-center justify-center",
      centerRight: "items-center justify-end",
      bottomLeft: "items-end justify-start",
      bottomCenter: "items-end justify-center",
      bottomRight: "items-end justify-end",
    },
    disabled: {
      false: null,
      true: "opacity-50 pointer-events-none",
    },
  },
  defaultVariants: {
    position: "center",
    disabled: false,
  },
});

const contentVariants = cva(
  "relative m-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 z-10 flex flex-col max-h-[90vh] text-gray-800 dark:text-white",
  {
    variants: {
      size: {
        small: "w-64",
        medium: "w-96",
        large: "w-full max-w-5xl",
        full: "w-[calc(100vw-2rem)]",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

/* ================= SUB COMPONENT ================= */

export type ContentProps = ComponentProps<"div"> &
  VariantProps<typeof contentVariants>;

// Content Wrapper
const ModalContent = ({ className, size, ...props }: ContentProps) => (
  <div className={cn(contentVariants({ size }), className)} {...props} />
);

// Sub-components (Header, Body, Footer)
const ModalHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("text-xl font-semibold mb-4 flex-shrink-0", className)} {...props} />
);

const ModalBody = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("overflow-y-auto flex-1 mb-4", className)} {...props} />
);

const ModalFooter = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("flex justify-end gap-2 flex-shrink-0", className)} {...props} />
);

/* ================= MAIN COMPONENT ================= */

type ModalComponent = typeof ModalMain & {
  Content: typeof ModalContent;
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
};

export type ModalProps = {
  open: boolean;
  onClose: () => void;
} & ComponentProps<"div"> & VariantProps<typeof modal>;

const ModalMain = forwardRef<HTMLDivElement, ModalProps>(
  ({ className, position, disabled, children, open, onClose, ...props }, ref) => {
    if (!open) return null;

    return (
      <div
        ref={ref}
        className={cn(modal({ position, disabled }), className)}
        {...props}
      >
        <div className="absolute inset-0 bg-black/50" onClick={onClose} />
        {children}
      </div>
    );
  }
);

ModalMain.displayName = "Modal";

const Modal: ModalComponent = Object.assign(ModalMain, {
  Content: ModalContent,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});

export default Modal;
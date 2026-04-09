import { ComponentProps, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const card = cva(
  "overflow-hidden rounded-xl border shadow-sm",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-gray-700 border-gray-200 dark:bg-gray-950 dark:text-gray-300 dark:border-gray-800",
      },
      size: {
        small: "max-w-sm",
        medium: "max-w-lg",
        large: "max-w-xl",
        full: "max-w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

/* ================= SUB COMPONENT ================= */

export type CardProps = ComponentProps<"div"> &
  VariantProps<typeof card>;

const Image = ({ className, ...props }: ComponentProps<"img">) => (
  <img
    className={cn("h-48 w-full object-cover", className)}
    {...props}
  />
);

const Body = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("p-4 space-y-4", className)} {...props} />
);

const Title = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("text-base font-semibold", className)}
    {...props}
  />
);

const Description = ({ className, ...props }: ComponentProps<"p">) => (
  <p
    className={cn("text-sm leading-relaxed", className)}
    {...props}
  />
);

const Footer = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("p-4 pt-0", className)} {...props} />
);

/* ================= MAIN COMPONENT ================= */

type CardComponent = React.ForwardRefExoticComponent<
  CardProps & React.RefAttributes<HTMLDivElement>
> & {
  Image: typeof Image;
  Body: typeof Body;
  Title: typeof Title;
  Description: typeof Description;
  Footer: typeof Footer;
};

const CardMain = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(card({ variant, size }), className)}
        {...props}
      />
    );
  }
)

CardMain.displayName = "Card";

const Card: CardComponent = Object.assign(CardMain, {
  Image: Image,
  Body: Body,
  Title: Title,
  Description: Description,
  Footer: Footer,
})

export default Card;
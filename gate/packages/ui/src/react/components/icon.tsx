import { forwardRef } from "react";
import { cn } from "../lib/utils";

export type IconProps = React.ComponentProps<"i"> & {
  name: string;
};

const Icon = forwardRef<HTMLElement, IconProps>(
  ({ className, name, ...props }, ref) => {
    return (
      <i
        ref={ref}
        className={cn(`bi bi-${name}`, className)}
        {...props}
      />
    );
  }
);

Icon.displayName = "Icon";

export default Icon;
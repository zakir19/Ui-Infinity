
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const neoButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-purple/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 neo-ripple",
  {
    variants: {
      variant: {
        default: "neo-button bg-gradient-to-br from-neon-purple/20 to-neon-cyan/10 hover:from-neon-purple/30 hover:to-neon-cyan/20 text-white border border-white/10",
        solid: "neo-button bg-gradient-to-br from-neon-purple to-neon-cyan hover:from-neon-purple/90 hover:to-neon-cyan/90 text-white",
        outline: "neo-button bg-transparent border border-neon-purple/50 hover:border-neon-purple text-white hover:bg-neon-purple/10",
        ghost: "neo-button bg-transparent hover:bg-neon-purple/10 text-white",
        link: "bg-transparent underline-offset-4 hover:underline text-neon-purple hover:text-neon-purple/90",
        subtle: "neo-button bg-white/5 hover:bg-white/10 text-white border border-white/5",
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-7 rounded-md px-2 text-xs",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10 rounded-md",
      },
      glow: {
        none: "",
        subtle: "hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]",
        strong: "shadow-[0_0_10px_rgba(155,135,245,0.2)] hover:shadow-[0_0_20px_rgba(155,135,245,0.4)]",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      glow: "none",
    },
  }
);

export interface NeoButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof neoButtonVariants> {
  asChild?: boolean;
}

const NeoButton = React.forwardRef<HTMLButtonElement, NeoButtonProps>(
  ({ className, variant, size, glow, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(neoButtonVariants({ variant, size, glow, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

NeoButton.displayName = "NeoButton";

export { NeoButton, neoButtonVariants };

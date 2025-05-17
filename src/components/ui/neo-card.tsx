
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const neoCardVariants = cva(
  "neo-card overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-[rgba(20,20,25,0.7)] to-[rgba(30,30,40,0.9)] border border-white/10",
        glass: "backdrop-blur-xl bg-white/5 border border-white/10",
        gradient: "bg-gradient-to-br from-neon-purple/20 to-neon-cyan/10 border border-white/10",
        dark: "bg-gradient-to-br from-black/80 to-black/70 border border-white/5",
      },
      glow: {
        none: "",
        subtle: "hover:shadow-[0_0_15px_rgba(155,135,245,0.15)]",
        strong: "shadow-[0_0_15px_rgba(155,135,245,0.1)] hover:shadow-[0_0_30px_rgba(155,135,245,0.2)]",
      }
    },
    defaultVariants: {
      variant: "default",
      glow: "none",
    },
  }
);

export interface NeoCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof neoCardVariants> {}

const NeoCard = React.forwardRef<HTMLDivElement, NeoCardProps>(
  ({ className, variant, glow, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(neoCardVariants({ variant, glow, className }))}
      {...props}
    />
  )
);

NeoCard.displayName = "NeoCard";

const NeoCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 flex flex-col space-y-1.5", className)}
    {...props}
  />
));
NeoCardHeader.displayName = "NeoCardHeader";

const NeoCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight text-white", className)}
    {...props}
  />
));
NeoCardTitle.displayName = "NeoCardTitle";

const NeoCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-400", className)}
    {...props}
  />
));
NeoCardDescription.displayName = "NeoCardDescription";

const NeoCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
NeoCardContent.displayName = "NeoCardContent";

const NeoCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("bg-black/20 px-6 py-4 flex items-center", className)}
    {...props}
  />
));
NeoCardFooter.displayName = "NeoCardFooter";

export {
  NeoCard,
  NeoCardHeader,
  NeoCardFooter,
  NeoCardTitle,
  NeoCardDescription,
  NeoCardContent,
};

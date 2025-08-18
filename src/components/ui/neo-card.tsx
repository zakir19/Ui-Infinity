
import * as React from "react"
import { cn } from "@/lib/utils"

interface NeoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "raised" | "inset" | "default" | "glass" | "gradient" | "dark"
  intensity?: "subtle" | "medium" | "strong"
}

const NeoCard = React.forwardRef<HTMLDivElement, NeoCardProps>(
  ({ className, variant = "raised", intensity = "medium", ...props }, ref) => {
    const shadowClasses = {
      raised: {
        subtle: "shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.05)]",
        medium: "shadow-[8px_8px_16px_rgba(0,0,0,0.15),-8px_-8px_16px_rgba(255,255,255,0.08)]",
        strong: "shadow-[12px_12px_24px_rgba(0,0,0,0.2),-12px_-12px_24px_rgba(255,255,255,0.1)]"
      },
      inset: {
        subtle: "shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]",
        medium: "shadow-[inset_8px_8px_16px_rgba(0,0,0,0.15),inset_-8px_-8px_16px_rgba(255,255,255,0.08)]",
        strong: "shadow-[inset_12px_12px_24px_rgba(0,0,0,0.2),inset_-12px_-12px_24px_rgba(255,255,255,0.1)]"
      },
      default: {
        subtle: "shadow-lg",
        medium: "shadow-xl", 
        strong: "shadow-2xl"
      },
      glass: {
        subtle: "shadow-lg backdrop-blur-sm bg-white/10",
        medium: "shadow-xl backdrop-blur-md bg-white/15",
        strong: "shadow-2xl backdrop-blur-lg bg-white/20"
      },
      gradient: {
        subtle: "shadow-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10",
        medium: "shadow-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20",
        strong: "shadow-2xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30"
      },
      dark: {
        subtle: "shadow-lg bg-gray-900/80",
        medium: "shadow-xl bg-gray-900/90",
        strong: "shadow-2xl bg-gray-900"
      }
    }

    const baseClasses = variant === "glass" 
      ? "rounded-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300"
      : variant === "gradient"
      ? "rounded-xl border border-purple-500/20 transition-all duration-300"
      : variant === "dark"
      ? "rounded-xl border border-gray-700/50 transition-all duration-300"
      : "rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300"

    return (
      <div
        ref={ref}
        className={cn(
          baseClasses,
          shadowClasses[variant]?.[intensity] || shadowClasses.default[intensity],
          className
        )}
        {...props}
      />
    )
  }
)
NeoCard.displayName = "NeoCard"

const NeoCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
NeoCardHeader.displayName = "NeoCardHeader"

const NeoCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
NeoCardTitle.displayName = "NeoCardTitle"

const NeoCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
NeoCardDescription.displayName = "NeoCardDescription"

const NeoCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
NeoCardContent.displayName = "NeoCardContent"

const NeoCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
NeoCardFooter.displayName = "NeoCardFooter"

export { NeoCard, NeoCardHeader, NeoCardTitle, NeoCardDescription, NeoCardContent, NeoCardFooter }

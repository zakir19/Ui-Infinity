
import * as React from "react"
import { cn } from "@/lib/utils"

interface NeoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "raised" | "inset"
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
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300",
          shadowClasses[variant][intensity],
          className
        )}
        {...props}
      />
    )
  }
)
NeoCard.displayName = "NeoCard"

export { NeoCard }

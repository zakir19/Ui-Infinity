
import * as React from "react"
import { cn } from "@/lib/utils"

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: "purple" | "cyan" | "pink" | "green" | "yellow" | "red"
  glowIntensity?: "subtle" | "medium" | "strong"
  animated?: boolean
}

const GlowCard = React.forwardRef<HTMLDivElement, GlowCardProps>(
  ({ className, glowColor = "purple", glowIntensity = "medium", animated = false, ...props }, ref) => {
    const glowColors = {
      purple: "shadow-neon-purple/50",
      cyan: "shadow-neon-cyan/50", 
      pink: "shadow-neon-pink/50",
      green: "shadow-green-500/50",
      yellow: "shadow-yellow-500/50",
      red: "shadow-red-500/50"
    }

    const glowIntensities = {
      subtle: "shadow-lg",
      medium: "shadow-xl",
      strong: "shadow-2xl"
    }

    const borderColors = {
      purple: "border-neon-purple/30",
      cyan: "border-neon-cyan/30",
      pink: "border-neon-pink/30", 
      green: "border-green-500/30",
      yellow: "border-yellow-500/30",
      red: "border-red-500/30"
    }

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl bg-black/40 border backdrop-blur-sm transition-all duration-300",
          glowColors[glowColor],
          glowIntensities[glowIntensity],
          borderColors[glowColor],
          animated && "hover:shadow-2xl hover:scale-[1.02]",
          className
        )}
        {...props}
      />
    )
  }
)
GlowCard.displayName = "GlowCard"

export { GlowCard }

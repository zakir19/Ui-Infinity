
import * as React from "react"
import { cn } from "@/lib/utils"

interface AuroraCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "northern" | "solar" | "cosmic"
  intensity?: "subtle" | "medium" | "strong"
}

const AuroraCard = React.forwardRef<HTMLDivElement, AuroraCardProps>(
  ({ className, variant = "default", intensity = "medium", ...props }, ref) => {
    const gradients = {
      default: "from-purple-400 via-pink-500 to-cyan-400",
      northern: "from-green-400 via-blue-500 to-purple-600",
      solar: "from-orange-400 via-red-500 to-pink-500",
      cosmic: "from-indigo-400 via-purple-500 to-pink-500"
    }

    const intensityClasses = {
      subtle: "opacity-30",
      medium: "opacity-50",
      strong: "opacity-70"
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-xl bg-black/40 border border-white/10",
          className
        )}
        {...props}
      >
        {/* Aurora Background */}
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-r animate-gradient-x bg-[length:200%_200%]",
            gradients[variant],
            intensityClasses[intensity]
          )}
        />
        
        {/* Content */}
        <div className="relative z-10 backdrop-blur-sm">
          {props.children}
        </div>
      </div>
    )
  }
)
AuroraCard.displayName = "AuroraCard"

export { AuroraCard }

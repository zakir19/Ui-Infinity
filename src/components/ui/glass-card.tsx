
import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  blur?: number
  opacity?: number
  borderOpacity?: number
  shadowOpacity?: number
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ 
    className, 
    blur = 8, 
    opacity = 0.15, 
    borderOpacity = 0.2, 
    shadowOpacity = 0.15,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border border-white/[var(--border-opacity)] bg-white/[var(--bg-opacity)] shadow-lg",
          className
        )}
        style={{
          "--border-opacity": borderOpacity,
          "--bg-opacity": opacity,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          boxShadow: `0 4px 30px rgba(0, 0, 0, ${shadowOpacity})`,
        } as React.CSSProperties}
        {...props}
      />
    )
  }
)
GlassCard.displayName = "GlassCard"

export { GlassCard }


"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
  opacity?: number
  color?: string
  centered?: boolean
}

const Spotlight = React.forwardRef<HTMLDivElement, SpotlightProps>(
  ({ className, size = 400, opacity = 0.12, color = "#8B5CF6", centered = false, ...props }, ref) => {
    const divRef = React.useRef<HTMLDivElement>(null)
    const [position, setPosition] = React.useState({ x: 0, y: 0 })
    const [opacity_, setOpacity_] = React.useState(centered ? opacity : 0)
    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!divRef.current) return
      
      const rect = divRef.current.getBoundingClientRect()
      
      setPosition({ 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      })
      setOpacity_(opacity)
    }
    
    const handleMouseLeave = () => {
      if (centered) return
      setOpacity_(0)
    }
    
    return (
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn("relative overflow-hidden", className)}
        style={{ 
          background: centered ? `radial-gradient(${size}px circle at center, ${color} 0%, transparent 80%)` : undefined,
        }}
        {...props}
      >
        {!centered && (
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, ${color} 0%, transparent 80%)`,
              opacity: opacity_,
            }}
          />
        )}
        {props.children}
      </div>
    )
  }
)
Spotlight.displayName = "Spotlight"

export { Spotlight }

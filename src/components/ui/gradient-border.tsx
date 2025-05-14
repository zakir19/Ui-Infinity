
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface GradientBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientWidth?: number
  borderRadius?: number
  duration?: number
  colors?: string[]
  animateGradient?: boolean
}

const GradientBorder = React.forwardRef<HTMLDivElement, GradientBorderProps>(
  ({ 
    className, 
    gradientWidth = 2, 
    borderRadius = 16,
    duration = 10,
    colors = ["#FF5F6D", "#FFC371", "#3B41C5", "#00C9FF", "#FF1493"],
    animateGradient = true,
    children,
    ...props 
  }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn(
          "relative flex p-[2px] overflow-hidden",
          className
        )}
        style={{ borderRadius }}
        {...props}
      >
        {/* Animated gradient border */}
        <div 
          className="absolute inset-0 -z-10"
          style={{
            borderRadius,
            background: `linear-gradient(var(--gradient-angle, 0deg), ${colors.join(', ')})`,
            backgroundSize: animateGradient ? "300% 300%" : "100% 100%",
            animation: animateGradient ? `gradient-rotate ${duration}s linear infinite` : undefined,
          }}
        />
        
        {/* Inner content area */}
        <div 
          className="flex-1 flex h-full w-full bg-black"
          style={{ borderRadius: borderRadius - gradientWidth }}
        >
          {children}
        </div>
        
        {/* CSS for the animation */}
        <style jsx>{`
          @property --gradient-angle {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
          }
          
          @keyframes gradient-rotate {
            0% {
              --gradient-angle: 0deg;
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              --gradient-angle: 360deg;
              background-position: 0% 50%;
            }
          }
        `}</style>
      </div>
    )
  }
)
GradientBorder.displayName = "GradientBorder"

export { GradientBorder }

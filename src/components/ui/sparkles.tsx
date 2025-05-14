
"use client"

import * as React from "react"
import { motion, MotionValue, useAnimationFrame, useMotionValue, useTransform, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface SparklesProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string
  variance?: number
  size?: number
  density?: number
  speed?: number
}

// Random number generator within a range
const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

// Generate an array of random positions
const generateSparkles = (count: number) => {
  return Array.from({ length: count }).map(() => ({
    x: random(-100, 100),
    y: random(-100, 100),
    size: random(10, 20) / 10,
    delay: random(0, 30) / 10,
  }))
}

const Sparkles = React.forwardRef<HTMLDivElement, SparklesProps>(
  ({ 
    className, 
    color = "#FFF", 
    variance = 20,
    size = 8,
    density = 20, 
    speed = 1,
    ...props 
  }, ref) => {
    const sparkles = React.useMemo(() => generateSparkles(density), [density])
    
    // Create a pulsating value that we'll use for scaling and opacity
    const t = useMotionValue(0)
    useAnimationFrame((time) => {
      t.set((time * speed * 0.001) % 1)
    })
    
    return (
      <div ref={ref} className={cn("relative inline-block", className)} {...props}>
        {/* Sparkles container - absolute positioned over content */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {sparkles.map((sparkle, i) => {
            // Create transforms for this specific sparkle
            const scaleTransform = useTransform(
              t, 
              [0, 0.5, 1], 
              [0, sparkle.size, 0]
            )
            
            const opacityTransform = useTransform(
              t,
              [0, 0.2, 0.8, 1],
              [0, 1, 1, 0]
            )
            
            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  x: `${sparkle.x}%`,
                  y: `${sparkle.y}%`,
                  scale: scaleTransform,
                  opacity: opacityTransform,
                  backgroundColor: color,
                  width: size,
                  height: size,
                }}
              />
            )
          })}
        </div>
        {/* The actual content */}
        {props.children}
      </div>
    )
  }
)
Sparkles.displayName = "Sparkles"

export { Sparkles }

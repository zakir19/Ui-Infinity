
"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FlipCardProps {
  className?: string
  frontContent: React.ReactNode
  backContent: React.ReactNode
  trigger?: "hover" | "click"
  direction?: "horizontal" | "vertical"
}

const FlipCard = React.forwardRef<HTMLDivElement, FlipCardProps>(
  ({ className, frontContent, backContent, trigger = "hover", direction = "horizontal" }, ref) => {
    const [isFlipped, setIsFlipped] = React.useState(false)

    const handleFlip = () => {
      if (trigger === "click") {
        setIsFlipped(!isFlipped)
      }
    }

    const handleMouseEnter = () => {
      if (trigger === "hover") {
        setIsFlipped(true)
      }
    }

    const handleMouseLeave = () => {
      if (trigger === "hover") {
        setIsFlipped(false)
      }
    }

    const rotateAxis = direction === "horizontal" ? "rotateY" : "rotateX"

    return (
      <div
        ref={ref}
        className={cn("relative w-full h-64 perspective-1000", className)}
        onClick={handleFlip}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="absolute inset-0 w-full h-full preserve-3d cursor-pointer"
          animate={{ [rotateAxis]: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", damping: 15 }}
        >
          {/* Front */}
          <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden">
            {frontContent}
          </div>
          
          {/* Back */}
          <div 
            className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden"
            style={{ transform: direction === "horizontal" ? "rotateY(180deg)" : "rotateX(180deg)" }}
          >
            {backContent}
          </div>
        </motion.div>
      </div>
    )
  }
)
FlipCard.displayName = "FlipCard"

export { FlipCard }

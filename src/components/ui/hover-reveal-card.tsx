
"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HoverRevealCardProps {
  className?: string
  children: React.ReactNode
  revealContent: React.ReactNode
  revealDirection?: "up" | "down" | "left" | "right"
}

const HoverRevealCard = React.forwardRef<HTMLDivElement, HoverRevealCardProps>(
  ({ className, children, revealContent, revealDirection = "up" }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false)

    const getRevealVariants = () => {
      switch (revealDirection) {
        case "up":
          return {
            hidden: { y: "100%", opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }
        case "down":
          return {
            hidden: { y: "-100%", opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }
        case "left":
          return {
            hidden: { x: "100%", opacity: 0 },
            visible: { x: 0, opacity: 1 }
          }
        case "right":
          return {
            hidden: { x: "-100%", opacity: 0 },
            visible: { x: 0, opacity: 1 }
          }
        default:
          return {
            hidden: { y: "100%", opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }
      }
    }

    const variants = getRevealVariants()

    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden rounded-xl", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative z-10">
          {children}
        </div>
        
        <motion.div
          className="absolute inset-0 z-20 bg-gradient-to-br from-neon-purple/90 to-neon-cyan/90 backdrop-blur-sm flex items-center justify-center p-6"
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {revealContent}
        </motion.div>
      </div>
    )
  }
)
HoverRevealCard.displayName = "HoverRevealCard"

export { HoverRevealCard }

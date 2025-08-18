
"use client"

import * as React from "react"
import { motion, PanInfo, useMotionValue, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface SwipeableCardProps {
  className?: string
  children: React.ReactNode
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  swipeThreshold?: number
}

const SwipeableCard = React.forwardRef<HTMLDivElement, SwipeableCardProps>(
  ({ 
    className, 
    children, 
    onSwipeLeft, 
    onSwipeRight, 
    onSwipeUp, 
    onSwipeDown,
    swipeThreshold = 100 
  }, ref) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotate = useTransform(x, [-200, 200], [-25, 25])
    const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0])

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const { offset } = info
      
      if (Math.abs(offset.x) > swipeThreshold) {
        if (offset.x > 0 && onSwipeRight) {
          onSwipeRight()
        } else if (offset.x < 0 && onSwipeLeft) {
          onSwipeLeft()
        }
      }
      
      if (Math.abs(offset.y) > swipeThreshold) {
        if (offset.y > 0 && onSwipeDown) {
          onSwipeDown()
        } else if (offset.y < 0 && onSwipeUp) {
          onSwipeUp()
        }
      }
      
      // Reset position
      x.set(0)
      y.set(0)
    }

    return (
      <motion.div
        ref={ref}
        className={cn("touch-pan-y select-none", className)}
        style={{ x, y, rotate, opacity }}
        drag
        dragElastic={0.2}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        onDragEnd={handleDragEnd}
        whileDrag={{ scale: 1.05 }}
      >
        {children}
      </motion.div>
    )
  }
)
SwipeableCard.displayName = "SwipeableCard"

export { SwipeableCard }

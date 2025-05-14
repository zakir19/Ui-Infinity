
"use client"

import * as React from "react"
import { motion, useAnimationControls, useMotionValue, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface MagneticProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  strength?: number
  children: React.ReactNode
}

const Magnetic = React.forwardRef<HTMLDivElement, MagneticProps>(
  ({ className, strength = 20, children, ...props }, ref) => {
    const mRef = React.useRef<HTMLDivElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const controls = useAnimationControls()

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!mRef.current) return
      
      const { left, top, width, height } = mRef.current.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2
      
      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY
      
      // Use motion controls for smoother animation
      x.set(distanceX / strength)
      y.set(distanceY / strength)
    }
    
    const handleMouseLeave = () => {
      controls.start({ x: 0, y: 0, transition: { type: "spring", damping: 15 } })
    }

    return (
      <motion.div
        ref={mRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={controls}
        style={{ x, y }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)
Magnetic.displayName = "Magnetic"

export { Magnetic }

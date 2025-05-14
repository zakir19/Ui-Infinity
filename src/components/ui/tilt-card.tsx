
"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps } from "framer-motion"

import { cn } from "@/lib/utils"

interface TiltCardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  as?: React.ElementType
  tiltAmount?: number
  glareAmount?: number
  borderRadius?: number
  glareColor?: string
  scale?: number
}

const TiltCard = React.forwardRef<HTMLDivElement, TiltCardProps>(
  ({ 
    children, 
    className, 
    tiltAmount = 10, 
    glareAmount = 0.25, 
    borderRadius = 20, 
    glareColor = "white",
    scale = 1.04,
    as: Component = "div", 
    ...props 
  }, ref) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const glareX = useMotionValue(100)
    const glareY = useMotionValue(100)
    const rotate = useMotionValue(0)
    
    const springConfig = { damping: 20, stiffness: 300 }
    const rotateX = useSpring(useTransform(y, [-100, 100], [tiltAmount, -tiltAmount]), springConfig)
    const rotateY = useSpring(useTransform(x, [-100, 100], [-tiltAmount, tiltAmount]), springConfig)
    const glareXSpring = useSpring(glareX, springConfig)
    const glareYSpring = useSpring(glareY, springConfig)
    
    function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
      const rect = e.currentTarget.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      const centerX = width / 2
      const centerY = height / 2
      
      const newX = mouseX - centerX
      const newY = mouseY - centerY
      
      x.set(newX)
      y.set(newY)
      
      // Update glare position (inverted)
      glareX.set((mouseX / width) * 100)
      glareY.set((mouseY / height) * 100)
    }
    
    function onMouseLeave() {
      x.set(0)
      y.set(0)
      glareX.set(100)
      glareY.set(100)
    }
    
    // Create string values for background gradient to avoid using MotionValues directly in the JSX
    const [gradientPosition, setGradientPosition] = React.useState<string>(`100% 100%`)
    
    // Update the gradient position string whenever the spring values change
    React.useEffect(() => {
      const unsubscribeX = glareXSpring.on("change", (latestX) => {
        const latestY = glareYSpring.get()
        setGradientPosition(`${latestX}% ${latestY}%`)
      })
      
      const unsubscribeY = glareYSpring.on("change", (latestY) => {
        const latestX = glareXSpring.get()
        setGradientPosition(`${latestX}% ${latestY}%`)
      })
      
      return () => {
        unsubscribeX()
        unsubscribeY()
      }
    }, [glareXSpring, glareYSpring])
    
    return (
      <motion.div 
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          rotateX: rotateX,
          rotateY: rotateY,
          borderRadius: `${borderRadius}px`,
        }}
        whileHover={{ scale }}
        {...props}
      >
        {glareAmount > 0 && (
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background: `radial-gradient(circle at ${gradientPosition}, ${glareColor} 0%, transparent 80%)`,
              opacity: glareAmount,
            }}
          />
        )}
        {children}
      </motion.div>
    )
  }
)

TiltCard.displayName = "TiltCard"

export { TiltCard }

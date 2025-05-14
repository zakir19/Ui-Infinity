
"use client"

import * as React from "react"
import { motion, useScroll, useSpring, useTransform, HTMLMotionProps } from "framer-motion"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { cn } from "@/lib/utils"

interface RevealImageProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  src: string
  alt: string
  aspectRatio?: number
  parallaxStrength?: number
  revealDelay?: number
}

const RevealImage = React.forwardRef<HTMLDivElement, RevealImageProps>(
  ({ 
    className, 
    src, 
    alt, 
    aspectRatio = 16 / 9, 
    parallaxStrength = 0.1,
    revealDelay = 0.2,
    ...props 
  }, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    
    const { scrollYProgress } = useScroll({ 
      target: containerRef,
      offset: ["start end", "end start"] 
    })
    
    // Create a spring animation for the scroll progress
    const smoothProgress = useSpring(scrollYProgress, { damping: 15, stiffness: 100 })
    
    // Use the scrollYProgress to drive parallax effect
    const y = useTransform(smoothProgress, [0, 1], ["0%", `${parallaxStrength * 100}%`])
    
    return (
      <motion.div
        ref={containerRef}
        className={cn("relative overflow-hidden rounded-lg", className)}
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 0.8, delay: revealDelay, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        {...props}
      >
        <AspectRatio ratio={aspectRatio} className="bg-muted">
          <motion.img
            ref={ref as React.Ref<HTMLImageElement>}
            src={src} 
            alt={alt}
            style={{ y }} 
            className="object-cover w-full h-full scale-110"
          />
        </AspectRatio>
      </motion.div>
    )
  }
)
RevealImage.displayName = "RevealImage"

export { RevealImage }


"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const liquidButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden text-white",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-blue-500 to-purple-600 before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-400 before:to-blue-500 before:rounded-full before:scale-0 hover:before:scale-110 before:transition-transform before:duration-700 before:ease-out",
        pink: "bg-gradient-to-r from-pink-500 to-rose-600 before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-300 before:to-pink-500 before:rounded-full before:scale-0 hover:before:scale-110 before:transition-transform before:duration-700 before:ease-out",
        green: "bg-gradient-to-r from-green-500 to-emerald-600 before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-300 before:to-green-500 before:rounded-full before:scale-0 hover:before:scale-110 before:transition-transform before:duration-700 before:ease-out",
        purple: "bg-gradient-to-r from-purple-500 to-indigo-600 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-300 before:to-purple-500 before:rounded-full before:scale-0 hover:before:scale-110 before:transition-transform before:duration-700 before:ease-out",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        default: "h-10 px-6 py-2",
        lg: "h-11 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface LiquidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof liquidButtonVariants> {
  asChild?: boolean
}

const LiquidButton = React.forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        className={cn(liquidButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </Comp>
    )
  }
)
LiquidButton.displayName = "LiquidButton"

export { LiquidButton, liquidButtonVariants }

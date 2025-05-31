
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const morphingButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl rounded-md hover:rounded-full",
        pink: "bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg hover:shadow-xl rounded-md hover:rounded-full",
        green: "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl rounded-md hover:rounded-full",
        amber: "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg hover:shadow-xl rounded-md hover:rounded-full",
      },
      size: {
        sm: "h-9 px-3 text-xs hover:px-6",
        default: "h-10 px-4 py-2 hover:px-8",
        lg: "h-11 px-6 text-base hover:px-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface MorphingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof morphingButtonVariants> {
  asChild?: boolean
}

const MorphingButton = React.forwardRef<HTMLButtonElement, MorphingButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(morphingButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
MorphingButton.displayName = "MorphingButton"

export { MorphingButton, morphingButtonVariants }

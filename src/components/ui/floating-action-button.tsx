
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const fabVariants = cva(
  "fixed inline-flex items-center justify-center rounded-full text-white font-medium shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:shadow-xl hover:scale-110 active:scale-95 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary hover:bg-primary/90",
        purple: "bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-purple/90 hover:to-neon-pink/90",
        blue: "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
        green: "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
      },
      size: {
        default: "h-14 w-14 [&_svg]:size-6",
        sm: "h-12 w-12 [&_svg]:size-5",
        lg: "h-16 w-16 [&_svg]:size-7",
      },
      position: {
        "bottom-right": "bottom-6 right-6",
        "bottom-left": "bottom-6 left-6",
        "bottom-center": "bottom-6 left-1/2 -translate-x-1/2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      position: "bottom-right",
    },
  }
)

export interface FloatingActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof fabVariants> {}

const FloatingActionButton = React.forwardRef<HTMLButtonElement, FloatingActionButtonProps>(
  ({ className, variant, size, position, ...props }, ref) => {
    return (
      <button
        className={cn(fabVariants({ variant, size, position, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
FloatingActionButton.displayName = "FloatingActionButton"

export { FloatingActionButton, fabVariants }

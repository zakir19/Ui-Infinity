
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glossyButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-b from-white/20 to-white/5 text-white shadow-lg before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/30 before:via-transparent before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
        pink: "bg-gradient-to-b from-pink-400 to-pink-600 text-white shadow-lg shadow-pink-500/25 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/30 before:via-transparent before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
        purple: "bg-gradient-to-b from-purple-400 to-purple-600 text-white shadow-lg shadow-purple-500/25 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/30 before:via-transparent before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
        blue: "bg-gradient-to-b from-blue-400 to-blue-600 text-white shadow-lg shadow-blue-500/25 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/30 before:via-transparent before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
        green: "bg-gradient-to-b from-green-400 to-green-600 text-white shadow-lg shadow-green-500/25 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/30 before:via-transparent before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        default: "h-10 px-4 py-2",
        lg: "h-11 px-8 text-base",
      },
      shape: {
        default: "rounded-md",
        pill: "rounded-full",
        square: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default",
    },
  }
)

export interface GlossyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glossyButtonVariants> {
  asChild?: boolean
}

const GlossyButton = React.forwardRef<HTMLButtonElement, GlossyButtonProps>(
  ({ className, variant, size, shape, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(glossyButtonVariants({ variant, size, shape, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
GlossyButton.displayName = "GlossyButton"

export { GlossyButton, glossyButtonVariants }

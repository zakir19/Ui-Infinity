
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const clayButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-orange-200 to-orange-300 text-orange-900 shadow-[0_8px_16px_rgba(251,146,60,0.3),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:shadow-[0_12px_20px_rgba(251,146,60,0.4),inset_0_1px_0_rgba(255,255,255,0.7)] rounded-2xl",
        purple: "bg-gradient-to-br from-purple-200 to-purple-300 text-purple-900 shadow-[0_8px_16px_rgba(168,85,247,0.3),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:shadow-[0_12px_20px_rgba(168,85,247,0.4),inset_0_1px_0_rgba(255,255,255,0.7)] rounded-2xl",
        pink: "bg-gradient-to-br from-pink-200 to-pink-300 text-pink-900 shadow-[0_8px_16px_rgba(236,72,153,0.3),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:shadow-[0_12px_20px_rgba(236,72,153,0.4),inset_0_1px_0_rgba(255,255,255,0.7)] rounded-2xl",
        blue: "bg-gradient-to-br from-blue-200 to-blue-300 text-blue-900 shadow-[0_8px_16px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:shadow-[0_12px_20px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.7)] rounded-2xl",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        default: "h-10 px-4 py-2",
        lg: "h-11 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ClayButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof clayButtonVariants> {
  asChild?: boolean
}

const ClayButton = React.forwardRef<HTMLButtonElement, ClayButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(clayButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
ClayButton.displayName = "ClayButton"

export { ClayButton, clayButtonVariants }

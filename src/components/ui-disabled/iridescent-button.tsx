
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const iridescentButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden text-white",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500 before:via-red-500 before:to-yellow-500 before:opacity-0 hover:before:opacity-70 before:transition-opacity before:duration-300",
        holographic: "bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 before:absolute before:inset-0 before:bg-gradient-to-45deg before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        rainbow: "bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-cyan-500 via-blue-500 to-purple-500 bg-[length:300%_100%] animate-gradient-x",
        oil: "bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 before:absolute before:inset-0 before:bg-gradient-to-br before:from-pink-400/30 before:via-purple-400/30 before:to-cyan-400/30 before:animate-pulse",
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

export interface IridescentButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iridescentButtonVariants> {
  asChild?: boolean
}

const IridescentButton = React.forwardRef<HTMLButtonElement, IridescentButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(iridescentButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
IridescentButton.displayName = "IridescentButton"

export { IridescentButton, iridescentButtonVariants }


import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const auroraButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden text-white",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-gradient-x bg-[length:200%_200%]",
        northern: "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-gradient-x bg-[length:200%_200%]",
        solar: "bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 animate-gradient-x bg-[length:200%_200%]",
        cosmic: "bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 animate-gradient-x bg-[length:200%_200%]",
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

export interface AuroraButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof auroraButtonVariants> {
  asChild?: boolean
}

const AuroraButton = React.forwardRef<HTMLButtonElement, AuroraButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(auroraButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
AuroraButton.displayName = "AuroraButton"

export { AuroraButton, auroraButtonVariants }

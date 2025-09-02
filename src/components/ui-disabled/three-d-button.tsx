
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const threeDButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative transform-gpu",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-b from-blue-400 to-blue-600 text-white shadow-[0_6px_0_#1e40af,0_8px_12px_rgba(0,0,0,0.3)] hover:translate-y-1 hover:shadow-[0_4px_0_#1e40af,0_6px_8px_rgba(0,0,0,0.3)] active:translate-y-2 active:shadow-[0_2px_0_#1e40af,0_4px_4px_rgba(0,0,0,0.3)]",
        purple: "bg-gradient-to-b from-purple-400 to-purple-600 text-white shadow-[0_6px_0_#7c3aed,0_8px_12px_rgba(0,0,0,0.3)] hover:translate-y-1 hover:shadow-[0_4px_0_#7c3aed,0_6px_8px_rgba(0,0,0,0.3)] active:translate-y-2 active:shadow-[0_2px_0_#7c3aed,0_4px_4px_rgba(0,0,0,0.3)]",
        green: "bg-gradient-to-b from-green-400 to-green-600 text-white shadow-[0_6px_0_#16a34a,0_8px_12px_rgba(0,0,0,0.3)] hover:translate-y-1 hover:shadow-[0_4px_0_#16a34a,0_6px_8px_rgba(0,0,0,0.3)] active:translate-y-2 active:shadow-[0_2px_0_#16a34a,0_4px_4px_rgba(0,0,0,0.3)]",
        red: "bg-gradient-to-b from-red-400 to-red-600 text-white shadow-[0_6px_0_#dc2626,0_8px_12px_rgba(0,0,0,0.3)] hover:translate-y-1 hover:shadow-[0_4px_0_#dc2626,0_6px_8px_rgba(0,0,0,0.3)] active:translate-y-2 active:shadow-[0_2px_0_#dc2626,0_4px_4px_rgba(0,0,0,0.3)]",
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

export interface ThreeDButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof threeDButtonVariants> {
  asChild?: boolean
}

const ThreeDButton = React.forwardRef<HTMLButtonElement, ThreeDButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(threeDButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
ThreeDButton.displayName = "ThreeDButton"

export { ThreeDButton, threeDButtonVariants }

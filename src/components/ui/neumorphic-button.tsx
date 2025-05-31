
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const neumorphicButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        raised: "bg-gray-200 text-gray-800 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]",
        inset: "bg-gray-200 text-gray-800 shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]",
        dark: "bg-gray-800 text-gray-200 shadow-[8px_8px_16px_#1a1a1a,-8px_-8px_16px_#2e2e2e] hover:shadow-[4px_4px_8px_#1a1a1a,-4px_-4px_8px_#2e2e2e] active:shadow-[inset_4px_4px_8px_#1a1a1a,inset_-4px_-4px_8px_#2e2e2e]",
      },
      size: {
        sm: "h-9 px-3 text-xs rounded-lg",
        default: "h-10 px-4 py-2 rounded-xl",
        lg: "h-11 px-8 text-base rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "raised",
      size: "default",
    },
  }
)

export interface NeumorphicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof neumorphicButtonVariants> {
  asChild?: boolean
}

const NeumorphicButton = React.forwardRef<HTMLButtonElement, NeumorphicButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(neumorphicButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
NeumorphicButton.displayName = "NeumorphicButton"

export { NeumorphicButton, neumorphicButtonVariants }

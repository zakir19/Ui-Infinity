import * as React from "react"

import { cn } from "@/lib/utils"

const Slot = React.forwardRef<
  any,
  React.HTMLAttributes<any> & {
    asChild?: boolean
  }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? React.Fragment : "div"
  return (
    <Comp
      ref={ref}
      className={cn(className)}
      {...props}
    />
  )
})
Slot.displayName = "Slot"

export { Slot }

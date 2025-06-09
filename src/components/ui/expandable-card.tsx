
"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ExpandableCardProps {
  className?: string
  title: string
  preview: React.ReactNode
  expandedContent: React.ReactNode
  defaultExpanded?: boolean
}

const ExpandableCard = React.forwardRef<HTMLDivElement, ExpandableCardProps>(
  ({ className, title, preview, expandedContent, defaultExpanded = false }, ref) => {
    const [isExpanded, setIsExpanded] = React.useState(defaultExpanded)

    return (
      <div
        ref={ref}
        className={cn(
          "glass-morphism rounded-xl border border-white/10 overflow-hidden",
          className
        )}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-white hover:bg-white/10"
            >
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </Button>
          </div>
          
          <div className="mb-4">
            {preview}
          </div>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-white/10">
                  {expandedContent}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    )
  }
)
ExpandableCard.displayName = "ExpandableCard"

export { ExpandableCard }

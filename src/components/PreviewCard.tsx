import React from "react";
import { motion } from "framer-motion";
import TiltCard from "@/components/ui/tilt-card";
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface PreviewCardProps {
  name: string;
  description: string;
  isNew?: boolean;
  className?: string;
  onClick?: () => void;
}

const overlayVariants = {
  initial: { opacity: 0, y: 8 },
  hover: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 320, damping: 22 } },
};

const PreviewCard: React.FC<PreviewCardProps> = ({ name, description, isNew, className, onClick }) => {
  return (
    <motion.div className={cn("relative group h-full", className)} initial={false}>
      {isNew && (
        <div className="absolute z-10 top-3 right-3 bg-neon-purple/80 py-1 px-2 rounded-full text-xs font-medium">
          New
        </div>
      )}

      <TiltCard className="h-48 bg-gradient-to-br from-neon-purple/10 to-neon-cyan/10 border border-white/10 rounded-xl overflow-hidden">
        <div className="relative h-full w-full p-5">
          {/* Default content */}
          <div className="flex h-full flex-col justify-between">
            <div>
              <h3 className="text-white font-medium mb-1">{name}</h3>
              <p className="text-gray-400 text-sm line-clamp-2">{description}</p>
            </div>
            <div className="text-xs text-gray-500">Hover to preview</div>
          </div>

          {/* Micro-demo shimmer on hover */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 100%" }}
          />

          {/* Quick Look overlay */}
          <motion.div
            variants={overlayVariants}
            initial="initial"
            whileHover="hover"
            className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-between rounded-lg bg-black/30 px-3 py-2 backdrop-blur-md border border-white/10"
          >
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-neon-purple" />
              <span className="text-sm text-white/90">Quick Look</span>
            </div>
            <span className="text-xs text-gray-400">{name}</span>
          </motion.div>

          {/* Click overlay */}
          {onClick && (
            <button
              onClick={onClick}
              className="absolute inset-0 z-10"
              aria-label={`Open ${name}`}
            />
          )}
        </div>
      </TiltCard>
    </motion.div>
  );
};

export default PreviewCard;

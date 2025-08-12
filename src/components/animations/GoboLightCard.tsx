import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GoboLightCardProps {
  className?: string;
  children?: React.ReactNode;
}

// Hover sweep that mimics film gobo lighting with patterned shadows
const GoboLightCard: React.FC<GoboLightCardProps> = ({ className, children }) => {
  return (
    <div className={cn("relative overflow-hidden rounded-xl border border-white/10 bg-card text-card-foreground", className)}>
      <div className="p-6 min-h-36 flex items-center justify-center">
        {children ?? <span className="text-sm text-muted-foreground">Hover to see gobo sweep</span>}
      </div>

      {/* Base vignette to amplify contrast */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_120%,_hsl(var(--background))_0%,_transparent_60%)]" />

      {/* Patterned light sweep */}
      <motion.div
        initial={{ x: "-140%", rotate: -12, opacity: 0.9 }}
        whileHover={{ x: "140%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute -inset-[20%]"
        style={{
          background:
            // Sharp beam with soft edges
            "linear-gradient(100deg, transparent 20%, hsl(var(--foreground) / 0.8) 45%, hsl(var(--foreground) / 0.1) 60%, transparent 80%)",
          mixBlendMode: "soft-light",
          // Create patterned shadow via CSS mask (gobo)
          WebkitMaskImage:
            // Window-slat pattern angled a bit
            "repeating-linear-gradient(120deg, black 0 14px, transparent 14px 28px)",
          maskImage: "repeating-linear-gradient(120deg, black 0 14px, transparent 14px 28px)",
        }}
      />

      {/* Secondary organic leaf-like breakups */}
      <motion.div
        initial={{ x: "-160%", rotate: -18, opacity: 0.7 }}
        whileHover={{ x: "160%" }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute -inset-[30%]"
        style={{
          background:
            "radial-gradient(200px 120px at 30% 40%, hsl(var(--foreground) / 0.65) 0%, transparent 70%), radial-gradient(280px 180px at 70% 60%, hsl(var(--foreground) / 0.5) 0%, transparent 70%)",
          mixBlendMode: "soft-light",
          WebkitMaskImage: "radial-gradient(120px_90px_at_40%_50%, black 0%, transparent 60%)",
          maskImage: "radial-gradient(120px_90px_at_40%_50%, black 0%, transparent 60%)",
        }}
      />
    </div>
  );
};

export default GoboLightCard;

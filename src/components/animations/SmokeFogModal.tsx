import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// A modal that emerges from swirling fog layers, revealing the clean window
const SmokeFogModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
          Open Smoke & Fog Modal
        </button>
      </DialogTrigger>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/70 backdrop-blur-sm"
          >
            {/* Swirling fog layers */}
            <div className="absolute inset-0 overflow-hidden">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{
                    opacity: [0.12, 0.2, 0.14],
                    x: ["-10%", "10%", "-6%"],
                    y: ["-6%", "8%", "-4%"],
                    rotate: [0, i % 2 ? 6 : -6, 0],
                  }}
                  transition={{ duration: 2.2 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-1 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(1200px 800px at 30% 40%, hsl(var(--foreground) / 0.06) 0%, transparent 60%), radial-gradient(900px 700px at 70% 60%, hsl(var(--foreground) / 0.06) 0%, transparent 60%)",
                  }}
                />
              ))}
            </div>

            {/* Crisper near-field wisps */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.18 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(600px 400px at 50% 50%, hsl(var(--foreground) / 0.08) 0%, transparent 70%)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <DialogContent className="relative z-[65] border border-white/10 bg-background/90 backdrop-blur-md">
        <motion.div
          initial={{ clipPath: "polygon(50% 50%,50% 50%,50% 50%,50% 50%)" }}
          animate={{ clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="p-6"
        >
          <h3 className="text-lg font-semibold">Smoke & Fog Modal</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Swirling, semi-transparent fog parts to reveal a crisp modal window.
          </p>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default SmokeFogModal;

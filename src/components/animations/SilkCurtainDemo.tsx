import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Demo overlay simulating a silk curtain sweep with soft folds
const SilkCurtainDemo: React.FC = () => {
  const [on, setOn] = useState(false);

  const play = () => {
    setOn(true);
    window.setTimeout(() => setOn(false), 1100);
  };

  return (
    <div className="relative flex flex-col items-center gap-4">
      <button onClick={play} className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:opacity-90 transition">
        Play Silk Curtain
      </button>

      <AnimatePresence>
        {on && (
          <motion.div
            className="fixed inset-0 z-[70] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Sweep container */}
            <motion.div
              initial={{ x: "-110%" }}
              animate={{ x: ["-110%", "0%", "110%"], transition: { duration: 1.1, times: [0, 0.55, 1], ease: [0.16, 1, 0.3, 1] } }}
              className="absolute inset-0"
            >
              {/* Silk body with subtle sheen */}
              <div className="absolute inset-0 bg-[linear-gradient(100deg,hsl(var(--background))_0%,hsl(var(--background)/0.85)_40%,hsl(var(--background))_100%)]" />

              {/* Vertical fold highlights */}
              {[...Array(12)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute top-0 bottom-0"
                  style={{
                    left: `${(i / 12) * 100}%`,
                    width: "10%",
                    background:
                      "linear-gradient(90deg, transparent 0%, hsl(var(--foreground)/0.08) 40%, hsl(var(--foreground)/0.02) 60%, transparent 100%)",
                    filter: "blur(6px)",
                  }}
                  initial={{ y: 10, opacity: 0.6 }}
                  animate={{ y: [10, -8, 10] }}
                  transition={{ duration: 1.1, ease: "easeInOut", delay: i * 0.015 }}
                />
              ))}

              {/* Top ripple edge */}
              <motion.div
                className="absolute left-0 right-0 -top-8 h-16"
                style={{
                  background:
                    "radial-gradient(100%_60%_at_50%_100%, hsl(var(--foreground)/0.1) 0%, transparent 70%)",
                }}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SilkCurtainDemo;

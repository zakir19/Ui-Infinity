import React, { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface AqueousRippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

// Button that emits water-like ripples from the click point
const AqueousRippleButton: React.FC<AqueousRippleButtonProps> = ({ className, children, onClick, ...props }) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [distort, setDistort] = useState(false);
  const idRef = useRef(0);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = btnRef.current?.getBoundingClientRect();
      const x = rect ? e.clientX - rect.left : 0;
      const y = rect ? e.clientY - rect.top : 0;
      const id = idRef.current++;

      setRipples((prev) => [...prev, { id, x, y }]);
      setDistort(true);
      window.setTimeout(() => setDistort(false), 260);
      window.setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 700);

      onClick?.(e);
    },
    [onClick]
  );

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className={cn(
        "relative overflow-hidden rounded-md px-5 py-2 bg-primary text-primary-foreground transition will-change-transform",
        distort ? "[letter-spacing:0.4px]" : "",
        className
      )}
      {...props}
    >
      {/* Content */}
      <span className="relative z-10">{children ?? "Aqueous Ripple"}</span>

      {/* Subtle glassy surface */}
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(150%_100%_at_50%_-20%,_hsl(var(--primary-foreground)/0.12)_0%,_transparent_60%)]" />

      {/* Ripples */}
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          initial={{ scale: 0, opacity: 0.4 }}
          animate={{ scale: 10, opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="pointer-events-none absolute rounded-full"
          style={{
            left: r.x,
            top: r.y,
            width: 8,
            height: 8,
            translateX: -4,
            translateY: -4,
            background:
              "radial-gradient(closest-side, hsl(var(--primary-foreground)/0.65) 0%, hsl(var(--primary-foreground)/0.25) 30%, transparent 100%)",
            mixBlendMode: "soft-light",
          }}
        />
      ))}
    </button>
  );
};

export default AqueousRippleButton;

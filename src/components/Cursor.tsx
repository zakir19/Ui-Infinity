import React, { useEffect, useRef, useState } from 'react';

// Accessible custom cursor: disabled for touch and when prefers-reduced-motion
const Cursor: React.FC = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReduced) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${x - 12}px, ${y - 12}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x - 2}px, ${y - 2}px, 0)`;
      }
    };

    const down = () => ringRef.current?.classList.add('scale-75');
    const up = () => ringRef.current?.classList.remove('scale-75');

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);

    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="fixed inset-0 z-[9997] pointer-events-none">
      <div
        ref={ringRef}
        className="w-6 h-6 rounded-full border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-transform duration-100 will-change-transform"
      />
      <div
        ref={dotRef}
        className="w-1 h-1 rounded-full bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.6)] will-change-transform"
      />
    </div>
  );
};

export default Cursor;

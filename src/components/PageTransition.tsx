import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Global page transition overlay triggered on route change
const PageTransition: React.FC = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const timerRef = useRef<number | null>(null);
  const firstRender = useRef(true);

  // Debounced show to avoid flashes on very fast transitions
  const trigger = useMemo(() => {
    return () => {
      setShow(true);
      window.clearTimeout(timerRef.current ?? undefined);
      timerRef.current = window.setTimeout(() => setShow(false), 500);
    };
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    trigger();
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [location.key, trigger]);

  if (!show) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden">
      {/* Signature gradient sweep */}
      <div className="absolute inset-y-0 -left-1/3 w-2/3 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-400/30 blur-3xl animate-[slide-in-right_0.5s_ease-out]" />
      <div className="absolute inset-0 bg-background/30 backdrop-blur-sm" />
    </div>
  );
};

export default PageTransition;

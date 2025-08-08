
import React, { useRef, useEffect, useState } from 'react';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mountElement = mountRef.current;
    if (!mountElement) return;

    // Intersection observer to only animate when in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.1
    });
    
    observer.observe(mountElement);
    
    return () => {
      if (mountElement) observer.unobserve(mountElement);
    };
  }, []);

  // Subtle parallax tilt with mouse, disabled on touch and when out of view
  useEffect(() => {
    const el = sceneRef.current;
    const container = mountRef.current;
    if (!el || !container) return;

    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReduced) return;

    const onMove = (e: MouseEvent) => {
      if (!isInView) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotateX = y * -10; // degrees
      const rotateY = x * 10;
      el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const onLeave = () => {
      el.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', onLeave);

    return () => {
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseleave', onLeave);
    };
  }, [isInView]);

  return (
    <div ref={mountRef} className="relative">
      {/* CSS-based placeholder for the 3D scene - optimized animation */}
      <div ref={sceneRef} className="relative w-72 h-72 md:w-96 md:h-96 mx-auto preserve-3d will-change-transform">
        {/* Only animate when in view */}
        {isInView && (
          <>
            {/* Outer ring - reduced animation complexity */}
            <div className="absolute inset-0 rounded-full border-4 border-neon-purple opacity-20 animate-spin-slow"></div>
            
            {/* Middle ring - reduced animation complexity */}
            <div className="absolute inset-4 rounded-full border-2 border-neon-cyan opacity-40" 
                 style={{ animationName: "spin-slow", animationDuration: "15s", animationDirection: "reverse", animationIterationCount: "infinite", animationTimingFunction: "linear" }}></div>
            
            {/* Inner globe - simpler animation */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-neon-purple/30 to-neon-cyan/30 backdrop-blur-sm animate-float">
              {/* Reduced number of points */}
              {Array.from({ length: 10 }).map((_, i) => (
                <div 
                  key={i} 
                  className="absolute w-1.5 h-1.5 bg-white rounded-full" 
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.5 + 0.25,
                  }}
                ></div>
              ))}
            </div>
          </>
        )}
        
        {/* Center point */}
        <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-neon-purple rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        
        {/* Simplified light glow effect */}
        <div className="absolute inset-0 rounded-full bg-neon-purple/5 blur-3xl"></div>
      </div>
    </div>
  );
};

export default ThreeScene;


import { useEffect } from 'react';
import gsap from 'gsap';

export const useScrollAnimation = (containerRef: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.animate-on-scroll');
      
      if (elements.length > 0) {
        // Set initial state
        gsap.set(elements, { y: 30, opacity: 0 });
        
        // Create a simple intersection observer
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Animate the element when it comes into view
              gsap.to(entry.target, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                onComplete: () => {
                  // Clean up observer after animation completes
                  observer.unobserve(entry.target);
                }
              });
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '-100px 0px'
        });
        
        // Start observing each element
        elements.forEach(element => {
          observer.observe(element);
        });
        
        // Cleanup function
        return () => {
          elements.forEach(element => {
            observer.unobserve(element);
          });
        };
      }
    }
  }, [containerRef]);
};

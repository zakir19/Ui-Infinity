
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { CopyButton } from '@/components/ui/copy-button';

const CTASection = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize animation for CTA section using IntersectionObserver
    const ctx = gsap.context(() => {
      if (ctaRef.current) {
        const elements = ctaRef.current.querySelectorAll('.animate-on-scroll');
        
        if (elements.length) {
          // Set initial state
          gsap.set(elements, { y: 30, opacity: 0 });
          
          // Use IntersectionObserver for more reliable trigger
          const observer = new IntersectionObserver(
            (entries) => {
              if (entries[0].isIntersecting) {
                // Create a timeline for sequential animation
                const timeline = gsap.timeline();
                
                // Animate elements with stagger
                timeline.to(elements, {
                  y: 0,
                  opacity: 1,
                  duration: 0.8,
                  stagger: 0.1,
                  ease: "power3.out"
                });
                
                // Unobserve once animation has started
                observer.unobserve(ctaRef.current!);
              }
            },
            {
              threshold: 0.2,
              rootMargin: "-50px 0px"
            }
          );
          
          // Start observing
          observer.observe(ctaRef.current);
        }
      }
    }, ctaRef);
    
    return () => ctx.revert(); // Clean up
  }, []);

  const ctaCode = `// Import CTA component
import CTASection from '@/components/sections/CTASection';

// Include the component in your page
const Page = () => (
  <div>
    <CTASection />
  </div>
);`;

  return (
    <section className="py-20 bg-gradient-to-b from-black/0 to-black/40 relative group" ref={ctaRef}>
      {/* Add Copy Code Button */}
      <div className="container mx-auto px-4">
        <CopyButton code={ctaCode} className="absolute top-4 right-4" />
        
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Get started with UIinfinity today and transform your projects.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/components"
              className="px-8 py-3 bg-neon-purple hover:bg-neon-purple/80 text-white font-medium rounded-md transition-all"
            >
              Browse Components
            </a>
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent border border-white/20 hover:border-white/40 text-white font-medium rounded-md transition-all"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;


import React, { useEffect, useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ComponentsShowcase from '@/components/sections/ComponentsShowcase';
import CTASection from '@/components/sections/CTASection';
import AnimatedComponentsLoader from '@/components/sections/AnimatedComponentsLoader';
import gsap from 'gsap';

const Index = () => {
  // References for main page sections
  const componentsRef = useRef<HTMLDivElement>(null);
  
  // Initialize animations with IntersectionObserver for better performance and stability
  useEffect(() => {
    // Ensure DOM is ready before setting up animations
    const ctx = gsap.context(() => {
      // Get all elements to animate
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      
      if (animateElements.length > 0) {
        // Set initial state
        gsap.set(animateElements, { y: 30, opacity: 0 });
        
        // Create a simple intersection observer instead of ScrollTrigger
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
        animateElements.forEach(element => {
          observer.observe(element);
        });
        
        // Cleanup function
        return () => {
          animateElements.forEach(element => {
            observer.unobserve(element);
          });
        };
      }
    });
    
    // Cleanup function
    return () => {
      ctx.revert(); // Clean up all GSAP animations
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Preload component previews */}
      <AnimatedComponentsLoader />
      
      {/* Main sections */}
      <HeroSection />
      <FeaturesSection />
      <ComponentsShowcase />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

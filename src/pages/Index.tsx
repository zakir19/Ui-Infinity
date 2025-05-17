
import React, { useEffect, useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ComponentsShowcase from '@/components/sections/ComponentsShowcase';
import CTASection from '@/components/sections/CTASection';
import AnimatedComponentsLoader from '@/components/sections/AnimatedComponentsLoader';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  // References for main page sections
  const componentsRef = useRef<HTMLDivElement>(null);
  
  // Initialize GSAP animations with improved performance
  useEffect(() => {
    // Get all elements to animate
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    // Only proceed if elements exist
    if (animateElements.length > 0) {
      // Set initial state for all elements
      gsap.set(animateElements, { y: 30, opacity: 0 });
      
      // Create individual animations for elements instead of using batch
      animateElements.forEach((element) => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=100",
            once: true
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out"
        });
      });
    }
    
    return () => {
      // Cleanup all ScrollTriggers when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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

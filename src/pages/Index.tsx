
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
    // Use a single timeline for better performance
    const tl = gsap.timeline();
    
    // Batch animations for better performance
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    // Create one ScrollTrigger with batch animations instead of many individual ones
    if (animateElements.length > 0) {
      gsap.set(animateElements, { y: 30, opacity: 0 });
      
      ScrollTrigger.batch(animateElements, {
        start: "top bottom-=100",
        onEnter: (batch) => gsap.to(batch, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out"
        }),
        once: true
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

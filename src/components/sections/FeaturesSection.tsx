
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ title, description, icon }: { title: string, description: string, icon: string }) => (
  <div className="glass-morphism p-6 rounded-xl animate-on-scroll opacity-0">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  // Initialize GSAP animations
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
    <section className="py-20" id="features" ref={featuresRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Designed for Developers
          </h2>
          <p className="text-gray-400 text-lg">
            Build stunning interfaces with less effort using our library of UI components.
            Customize everything to match your brand and requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            title="Beautiful Animations"
            description="Smooth, performant animations powered by GSAP for an incredible user experience."
            icon="✨"
          />
          <FeatureCard 
            title="Interactive 3D"
            description="Engaging 3D elements that respond to user interaction, built with Three.js."
            icon="🔮"
          />
          <FeatureCard 
            title="Fully Customizable"
            description="Every component can be tailored to your needs with simple props and theming."
            icon="🎨"
          />
          <FeatureCard 
            title="Developer Friendly"
            description="Well-documented API with TypeScript support and copy-paste code snippets."
            icon="👨‍💻"
          />
          <FeatureCard 
            title="Responsive Design"
            description="Components that work flawlessly across all devices and screen sizes."
            icon="📱"
          />
          <FeatureCard 
            title="Accessibility Built-in"
            description="WCAG compliant components with proper ARIA attributes and keyboard navigation."
            icon="♿"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

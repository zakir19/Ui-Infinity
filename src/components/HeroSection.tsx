
import React, { useEffect, useRef } from 'react';
import ThreeScene from './ThreeScene';
import gsap from 'gsap';

const HeroSection = () => {
  // Reference for the text that will have the color animation
  const textRef = useRef<HTMLSpanElement>(null);

  // Set up the color animation with GSAP
  useEffect(() => {
    if (textRef.current) {
      const colors = [
        '#D946EF', // Magenta Pink
        '#8B5CF6', // Vivid Purple
        '#0EA5E9', // Ocean Blue
        '#33C3F0', // Sky Blue
        '#F97316', // Bright Orange
        '#D946EF'  // Back to Pink (for smooth loop)
      ];

      // Create a timeline for smooth color transitions
      const timeline = gsap.timeline({
        repeat: -1, // Infinite loop
        yoyo: false, 
      });

      // Add color transitions
      colors.forEach((color, index) => {
        timeline.to(textRef.current, {
          color: color,
          duration: 1.8,
          ease: "power2.inOut",
        });
      });

      // Clean up animation on component unmount
      return () => {
        timeline.kill();
      };
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-neon-purple opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-neon-cyan opacity-10 rounded-full blur-3xl"></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 py-16 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
        {/* Left side - Text content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gradient">Beautiful UI Components</span>
            <br />
            <span 
              ref={textRef} 
              className="transition-colors duration-200"
              style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
            >
              For Modern Websites
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            A stunning collection of UI components with beautiful animations, 
            3D effects, and a developer-friendly API. Build beautiful interfaces faster.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
            <a 
              href="#components"
              className="px-6 py-3 bg-neon-purple hover:bg-neon-purple/80 text-white font-medium rounded-md transition-all"
            >
              Explore Components
            </a>
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-transparent border border-white/20 hover:border-white/40 text-white font-medium rounded-md transition-all"
            >
              View on GitHub
            </a>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-gray-400">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((_, i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 rounded-full bg-gray-800 border-2 border-background flex items-center justify-center text-xs font-medium"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span>Trusted by thousands of developers</span>
          </div>
        </div>
        
        {/* Right side - 3D Scene */}
        <div className="lg:w-1/2 relative">
          <ThreeScene />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-bounce">
        <span className="text-sm">Scroll to explore</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

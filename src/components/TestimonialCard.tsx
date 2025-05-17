
import React, { useRef, useEffect } from 'react';
import TiltCard from '@/components/ui/tilt-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import gsap from 'gsap';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  image?: string;
  className?: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  name, 
  title, 
  image, 
  className,
  delay = 0
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Simplified animation with better performance
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom-=100",
        once: true
      }
    });

    timeline.fromTo(
      container, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: delay }
    );

    return () => {
      timeline.kill();
    };
  }, [delay]);

  return (
    <div ref={containerRef}>
      <TiltCard 
        className={cn("p-6 rounded-xl backdrop-blur-lg bg-black/30 border border-white/10", className)}
        tiltAmount={3} 
        glareAmount={0.1} 
        scale={1.01}
      >
        <div className="mb-4 text-5xl text-neon-purple">"</div>
        <p className="text-gray-300 italic mb-6">{quote}</p>
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border border-white/10">
            <AvatarImage src={image} />
            <AvatarFallback className="bg-neon-purple/20 text-neon-purple">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-white font-medium">{name}</p>
            <p className="text-gray-400 text-sm">{title}</p>
          </div>
        </div>
      </TiltCard>
    </div>
  );
};

export default TestimonialCard;

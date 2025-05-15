
import React, { useRef, useEffect } from 'react';
import { TiltCard } from '@/components/ui/tilt-card';
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
  const cardRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const quoteEl = quoteRef.current;
    const avatarEl = avatarRef.current;
    const infoEl = infoRef.current;

    if (!card || !quoteEl || !avatarEl || !infoEl) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        toggleActions: "play none none none"
      }
    });

    timeline
      .fromTo(card, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: delay * 0.1 }
      )
      .fromTo(quoteEl,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out" },
        "-=0.3"
      )
      .fromTo(avatarEl,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        "-=0.2"
      )
      .fromTo(infoEl,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        "-=0.2"
      );

    return () => {
      timeline.kill();
    };
  }, [delay]);

  return (
    <TiltCard 
      ref={cardRef}
      className={cn("p-6 rounded-xl backdrop-blur-lg bg-black/30 border border-white/10", className)}
      tiltAmount={5}
      glareAmount={0.15}
      scale={1.02}
    >
      <div ref={quoteRef} className="mb-4 text-5xl text-neon-purple">"</div>
      <p className="text-gray-300 italic mb-6">{quote}</p>
      <div className="flex items-center gap-3">
        <div ref={avatarRef}>
          <Avatar className="h-10 w-10 border border-white/10">
            <AvatarImage src={image} />
            <AvatarFallback className="bg-neon-purple/20 text-neon-purple">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>
        <div ref={infoRef}>
          <p className="text-white font-medium">{name}</p>
          <p className="text-gray-400 text-sm">{title}</p>
        </div>
      </div>
    </TiltCard>
  );
};

export default TestimonialCard;

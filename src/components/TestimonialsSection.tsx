
import React, { useRef, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import TestimonialCard from './TestimonialCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "These components saved me countless hours. The animations are buttery smooth and the code is clean and maintainable.",
    name: "Alex Johnson",
    title: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "I've never seen a UI library that combines beautiful aesthetics with performance this well. The 3D effects are amazing.",
    name: "Sarah Chen",
    title: "UI Designer",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    quote: "The documentation is excellent and the components are incredibly easy to customize. This is now my go-to library.",
    name: "Michael Rodriguez",
    title: "Software Engineer",
    image: "https://i.pravatar.cc/150?img=3"
  },
  {
    quote: "UIinfinity has transformed our design workflow. My team is now shipping features twice as fast.",
    name: "Emma Wilson",
    title: "Product Manager",
    image: "https://i.pravatar.cc/150?img=4"
  },
  {
    quote: "The interactive components are a game changer. Our users love the micro-interactions and smooth transitions.",
    name: "David Kim",
    title: "UX Designer",
    image: "https://i.pravatar.cc/150?img=5"
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;

    if (!section || !title) return;

    // Animate the title and description
    gsap.fromTo(
      title.querySelectorAll("h2, p"),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Loved by Developers
          </h2>
          <p className="text-gray-400 text-lg">
            Don't just take our word for it. Here's what the community has to say.
          </p>
        </div>
        
        {/* Desktop view - Grid display */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              {...testimonial}
              delay={index}
            />
          ))}
        </div>
        
        {/* Mobile view - Carousel */}
        <div className="lg:hidden">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }} 
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard 
                    {...testimonial}
                    delay={index}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="relative static transform-none" />
              <CarouselNext className="relative static transform-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

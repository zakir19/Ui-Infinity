
import React, { useState, useRef, useEffect } from 'react';
import ComponentCard from '@/components/ComponentCard';
import ButtonPreview from '@/components/previews/ButtonPreview';
import CardPreview from '@/components/previews/CardPreview';
import ModalPreview from '@/components/previews/ModalPreview';
import FormPreview from '@/components/previews/FormPreview';
import NavigationPreview from '@/components/previews/NavigationPreview';
import LayoutPreview from '@/components/previews/LayoutPreview';
import FeedbackPreview from '@/components/previews/FeedbackPreview';
import EffectPreview from '@/components/previews/EffectPreview';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ComponentData {
  title: string;
  description: string;
  tag?: string;
  linkTo: string;
  previewElement: React.ReactNode;
}

const ComponentsShowcase = () => {
  // Add state for showing all components
  const [showAll, setShowAll] = useState(false);
  const componentsRef = useRef<HTMLDivElement>(null);
  
  // Initialize GSAP animations
  useEffect(() => {
    if (componentsRef.current) {
      const elements = componentsRef.current.querySelectorAll('.animate-on-scroll');
      
      if (elements.length) {
        gsap.set(elements, { y: 30, opacity: 0 });
        
        ScrollTrigger.batch(elements, {
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
    }
    
    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === componentsRef.current) {
          trigger.kill();
        }
      });
    };
  }, [showAll]); // Re-run when showAll changes as new elements might be added

  // Example components showcase data
  const components: ComponentData[] = [
    {
      title: 'Animated Buttons',
      description: 'Beautiful buttons with hover effects and animations.',
      tag: 'Popular',
      linkTo: '/buttons',
      previewElement: <ButtonPreview />
    },
    {
      title: '3D Cards',
      description: 'Interactive cards with 3D tilt effects and smooth transitions.',
      tag: 'New',
      linkTo: '/cards',
      previewElement: <CardPreview />
    },
    {
      title: 'Modals',
      description: 'Animated modals with customizable entrances and exits.',
      tag: 'Updated',
      linkTo: '/modals',
      previewElement: <ModalPreview />
    },
    {
      title: 'Tooltips & Popovers',
      description: 'Informative tooltips with smooth fade transitions.',
      linkTo: '/feedback',
      previewElement: <FeedbackPreview />
    },
    {
      title: 'Form Inputs',
      description: 'Stylish form controls with validation feedback.',
      linkTo: '/forms',
      previewElement: <FormPreview />
    },
    {
      title: 'Navigation',
      description: 'Responsive navigation bars and menus.',
      linkTo: '/navigation',
      previewElement: <NavigationPreview />
    },
    {
      title: 'Layouts',
      description: 'Structural components for page organization.',
      linkTo: '/layout',
      previewElement: <LayoutPreview />
    },
    {
      title: 'Effects',
      description: 'Visual interactions and animations.',
      linkTo: '/effects',
      previewElement: <EffectPreview />
    },
    {
      title: 'Typography',
      description: 'Beautifully animated and styled text components.',
      tag: 'New',
      linkTo: '/components',
      previewElement: (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="bg-gradient-to-r from-neon-purple to-neon-cyan text-transparent bg-clip-text font-bold">Typography</div>
          </div>
        </div>
      )
    },
    {
      title: 'Animated Grids',
      description: 'Modern grid layouts with entrance animations.',
      tag: 'New',
      linkTo: '/components',
      previewElement: (
        <div className="w-full h-full grid grid-cols-2 gap-1 p-1">
          <div className="bg-neon-purple/20 rounded-sm"></div>
          <div className="bg-white/10 rounded-sm"></div>
          <div className="bg-white/10 rounded-sm"></div>
          <div className="bg-neon-purple/20 rounded-sm"></div>
        </div>
      )
    },
    {
      title: '3D Effects',
      description: 'Immersive 3D transformations and interactions.',
      tag: 'New',
      linkTo: '/components',
      previewElement: (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 bg-neon-purple/40 rounded transform rotate-12 perspective-[800px] shadow-lg"></div>
        </div>
      )
    },
    {
      title: 'Motion Effects',
      description: 'Fluid animations and transitions for elements.',
      tag: 'New',
      linkTo: '/components',
      previewElement: (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-6 h-6 bg-neon-cyan/40 rounded-full animate-ping"></div>
        </div>
      )
    },
  ];

  // Determine how many components to show
  const previewCount = 4;
  const displayedComponents = showAll ? components : components.slice(0, previewCount);

  return (
    <section className="py-20 bg-black/30" id="components" ref={componentsRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Component Library
          </h2>
          <p className="text-gray-400 text-lg">
            Explore our growing collection of beautiful, responsive UI components.
          </p>
        </div>
        
        {/* Use windowing for better performance with the component grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedComponents.map((component, index) => (
            <div key={index} className="animate-on-scroll opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
              <ComponentCard {...component} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          {/* Show the button only if there are more components than the preview count */}
          {components.length > previewCount && (
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-block px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-md text-white font-medium hover:opacity-90 transition-all"
            >
              {showAll ? 'Show Less' : 'Show All'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ComponentsShowcase;

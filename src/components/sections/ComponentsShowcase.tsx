
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
  
  // Initialize animations with IntersectionObserver for better performance and stability
  useEffect(() => {
    if (componentsRef.current) {
      const elements = componentsRef.current.querySelectorAll('.animate-on-scroll');
      
      if (elements.length > 0) {
        // Set initial state
        gsap.set(elements, { y: 30, opacity: 0 });
        
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
        elements.forEach(element => {
          observer.observe(element);
        });
        
        // Cleanup function
        return () => {
          elements.forEach(element => {
            observer.unobserve(element);
          });
        };
      }
    }
  }, [showAll]); // Re-run when showAll changes as new elements might be added

  // Example components showcase data with additional components
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
    // Original components
    {
      title: 'Typography',
      description: 'Beautifully animated and styled text components.',
      tag: 'New',
      linkTo: '/typography',
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
      linkTo: '/grids',
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
      linkTo: '/3d-effects',
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
      linkTo: '/animation',
      previewElement: (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-6 h-6 bg-neon-cyan/40 rounded-full animate-ping"></div>
        </div>
      )
    },
    // New components for expanded categories
    {
      title: 'Hover Effects',
      description: 'Interactive hover animations and transitions.',
      tag: 'New',
      linkTo: '/hover',
      previewElement: (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-16 h-16 bg-neon-purple/30 hover:bg-neon-purple/80 transition-all duration-300 rounded-md"></div>
        </div>
      )
    },
    {
      title: 'Animated Backgrounds',
      description: 'Dynamic background effects and patterns.',
      tag: 'New',
      linkTo: '/backgrounds',
      previewElement: (
        <div className="w-full h-full bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 animate-pulse"></div>
      )
    },
    {
      title: 'Custom Inputs',
      description: 'Beautifully styled form input components.',
      tag: 'New',
      linkTo: '/inputs',
      previewElement: (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-3/4 h-8 rounded-md bg-white/10 border border-neon-purple/30"></div>
        </div>
      )
    },
    {
      title: 'Animated Sliders',
      description: 'Interactive slider components with animations.',
      tag: 'New',
      linkTo: '/sliders',
      previewElement: (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-3/4 h-1 bg-white/20 rounded-full">
            <div className="w-1/2 h-1 bg-neon-purple rounded-full relative">
              <div className="absolute -right-2 -top-1.5 w-4 h-4 bg-neon-purple rounded-full"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Loaders & Spinners',
      description: 'Animated loading indicators and spinners.',
      tag: 'New',
      linkTo: '/loaders',
      previewElement: (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-neon-cyan border-t-transparent rounded-full animate-spin"></div>
        </div>
      )
    },
  ];

  // Determine how many components to show
  const previewCount = 8;
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

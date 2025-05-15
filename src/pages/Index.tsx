
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ComponentCard from '@/components/ComponentCard';
import Footer from '@/components/Footer';
import ButtonPreview from '@/components/previews/ButtonPreview';
import CardPreview from '@/components/previews/CardPreview';
import ModalPreview from '@/components/previews/ModalPreview';
import FormPreview from '@/components/previews/FormPreview';
import NavigationPreview from '@/components/previews/NavigationPreview';
import LayoutPreview from '@/components/previews/LayoutPreview';
import FeedbackPreview from '@/components/previews/FeedbackPreview';
import EffectPreview from '@/components/previews/EffectPreview';

const Index = () => {
  // This would be replaced with real GSAP animations in production
  useEffect(() => {
    // Simulate GSAP animations with CSS animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Example components showcase data
  const components = [
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
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      
      {/* Features section */}
      <section className="py-20" id="features">
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
      
      {/* Components showcase */}
      <section className="py-20 bg-black/30" id="components">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Component Library
            </h2>
            <p className="text-gray-400 text-lg">
              Explore our growing collection of beautiful, responsive UI components.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {components.map((component, index) => (
              <div key={index} className="animate-on-scroll opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
                <ComponentCard {...component} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/components" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-md text-white font-medium hover:opacity-90 transition-all"
            >
              View All Components
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonials section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Loved by Developers
            </h2>
            <p className="text-gray-400 text-lg">
              Don't just take our word for it. Here's what the community has to say.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="These components saved me countless hours. The animations are buttery smooth and the code is clean and maintainable."
              name="Alex Johnson"
              title="Frontend Developer"
            />
            <TestimonialCard 
              quote="I've never seen a UI library that combines beautiful aesthetics with performance this well. The 3D effects are amazing."
              name="Sarah Chen"
              title="UI Designer"
            />
            <TestimonialCard 
              quote="The documentation is excellent and the components are incredibly easy to customize. This is now my go-to library."
              name="Michael Rodriguez"
              title="Software Engineer"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black/0 to-black/40">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Get started with UIinfinity today and transform your projects.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="/components"
                className="px-8 py-3 bg-neon-purple hover:bg-neon-purple/80 text-white font-medium rounded-md transition-all"
              >
                Browse Components
              </a>
              
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-transparent border border-white/20 hover:border-white/40 text-white font-medium rounded-md transition-all"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const FeatureCard = ({ title, description, icon }: { title: string, description: string, icon: string }) => (
  <div className="glass-morphism p-6 rounded-xl animate-on-scroll opacity-0">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const TestimonialCard = ({ quote, name, title }: { quote: string, name: string, title: string }) => (
  <div className="glass-morphism p-6 rounded-xl animate-on-scroll opacity-0">
    <div className="mb-4 text-neon-purple">"</div>
    <p className="text-gray-300 italic mb-6">{quote}</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
        {name.charAt(0)}
      </div>
      <div>
        <p className="text-white font-medium">{name}</p>
        <p className="text-gray-400 text-sm">{title}</p>
      </div>
    </div>
  </div>
);

export default Index;

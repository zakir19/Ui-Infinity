
import React from 'react';
import { CopyButton } from '@/components/ui/copy-button';
import Footer from '@/components/Footer';

const AnimationComponents = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Animation Components
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Motion and animation effects for your UI.
          </p>
        </div>
      </div>

      {/* Component Showcase */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fade Animation */}
            <ComponentShowcase 
              title="Fade Animation"
              description="Smooth fade in/out transitions"
              code={`<div className="animate-fade-in">
  This content fades in
</div>

<button 
  className="px-4 py-2 bg-neon-purple rounded-md hover:opacity-0 transition-opacity duration-300"
>
  Hover to fade out
</button>`}>
              <div className="flex flex-col gap-6 items-center">
                <div className="animate-fade-in">This content fades in</div>
                <button 
                  className="px-4 py-2 bg-neon-purple rounded-md hover:opacity-0 transition-opacity duration-300"
                >
                  Hover to fade out
                </button>
              </div>
            </ComponentShowcase>

            {/* Float Animation */}
            <ComponentShowcase 
              title="Float Animation"
              description="Gentle floating effect"
              code={`<div className="animate-[float_3s_ease-in-out_infinite]">
  <div className="w-16 h-16 bg-neon-purple/30 rounded-lg"></div>
</div>

/* In your tailwind config:
keyframes: {
  float: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
  }
}
*/`}>
              <div className="animate-[float_3s_ease-in-out_infinite]">
                <div className="w-16 h-16 bg-neon-purple/30 rounded-lg"></div>
              </div>
            </ComponentShowcase>

            {/* Bounce Animation */}
            <ComponentShowcase 
              title="Bounce Animation"
              description="Energetic bouncing effect"
              code={`<div className="animate-bounce">
  <div className="w-8 h-8 bg-neon-cyan rounded-full"></div>
</div>`}>
              <div className="animate-bounce">
                <div className="w-8 h-8 bg-neon-cyan rounded-full"></div>
              </div>
            </ComponentShowcase>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="py-12 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Usage</h2>
          <div className="glass-morphism p-6 rounded-xl overflow-hidden relative group">
            <CopyButton 
              code={`// Fade in animation
<div className="animate-fade-in">This content fades in</div>

// Float animation
<div className="animate-[float_3s_ease-in-out_infinite]">
  <div className="w-16 h-16 bg-neon-purple/30 rounded-lg"></div>
</div>

// Bounce animation
<div className="animate-bounce">
  <div className="w-8 h-8 bg-neon-cyan rounded-full"></div>
</div>`} 
              className="opacity-0 group-hover:opacity-100"
            />
            <pre className="text-sm text-gray-300 overflow-auto p-4">
{`// Fade in animation
<div className="animate-fade-in">This content fades in</div>

// Float animation
<div className="animate-[float_3s_ease-in-out_infinite]">
  <div className="w-16 h-16 bg-neon-purple/30 rounded-lg"></div>
</div>

// Bounce animation
<div className="animate-bounce">
  <div className="w-8 h-8 bg-neon-cyan rounded-full"></div>
</div>`}
            </pre>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const ComponentShowcase = ({ 
  title, 
  description, 
  children,
  code 
}: { 
  title: string; 
  description: string; 
  children: React.ReactNode;
  code: string;
}) => {
  return (
    <div className="glass-morphism rounded-xl overflow-hidden hover:border-neon-purple/30 transition-colors group relative">
      {/* Copy Code Button */}
      <CopyButton code={code} className="opacity-0 group-hover:opacity-100" />
      
      {/* Component info */}
      <div className="p-4 border-b border-white/10">
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      
      {/* Component preview */}
      <div className="p-8 flex items-center justify-center bg-black/20 h-48">
        <div className="flex flex-col gap-4 items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AnimationComponents;

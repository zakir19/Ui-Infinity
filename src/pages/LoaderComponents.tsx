
import React from 'react';
import { CopyButton } from '@/components/ui/copy-button';
import Footer from '@/components/Footer';

const LoaderComponents = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Loader Components
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Beautiful loading indicators and spinners for your UI.
          </p>
        </div>
      </div>

      {/* Component Showcase */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Spinner Loader */}
            <ComponentShowcase 
              title="Spinner Loader"
              description="Simple spinning loader animation"
              code={`<div className="w-8 h-8 border-2 border-neon-purple border-t-transparent rounded-full animate-spin"></div>
<div className="w-10 h-10 border-4 border-neon-cyan/30 border-t-neon-cyan rounded-full animate-spin"></div>`}>
              <div className="flex flex-col gap-8 items-center">
                <div className="w-8 h-8 border-2 border-neon-purple border-t-transparent rounded-full animate-spin"></div>
                <div className="w-10 h-10 border-4 border-neon-cyan/30 border-t-neon-cyan rounded-full animate-spin"></div>
              </div>
            </ComponentShowcase>

            {/* Pulse Loader */}
            <ComponentShowcase 
              title="Pulse Loader"
              description="Pulsing dots with staggered animation"
              code={`<div className="flex gap-2">
  <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse"></div>
  <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse [animation-delay:0.2s]"></div>
  <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse [animation-delay:0.4s]"></div>
</div>`}>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse [animation-delay:0.2s]"></div>
                <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse [animation-delay:0.4s]"></div>
              </div>
            </ComponentShowcase>

            {/* Progress Bar */}
            <ComponentShowcase 
              title="Progress Bar"
              description="Linear progress indicators"
              code={`<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
  <div className="w-1/3 h-full bg-neon-purple"></div>
</div>
<div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
  <div className="w-2/3 h-full bg-gradient-to-r from-neon-purple to-neon-cyan animate-pulse"></div>
</div>`}>
              <div className="flex flex-col gap-4 w-full">
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-neon-purple"></div>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-gradient-to-r from-neon-purple to-neon-cyan animate-pulse"></div>
                </div>
              </div>
            </ComponentShowcase>

            {/* Circular Progress */}
            <ComponentShowcase 
              title="Circular Progress"
              description="SVG-based circular progress indicators"
              code={`<svg className="w-16 h-16" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
  <circle cx="50" cy="50" r="40" 
    stroke="rgba(155,135,245,1)" 
    strokeWidth="8" 
    strokeDasharray={251.2} 
    strokeDashoffset={251.2 * (1 - 0.65)} 
    strokeLinecap="round"
    fill="none" 
    transform="rotate(-90 50 50)" 
  />
  <text x="50" y="55" textAnchor="middle" fill="white" fontSize="16">65%</text>
</svg>`}>
              <svg className="w-16 h-16" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
                <circle cx="50" cy="50" r="40" 
                  stroke="rgba(155,135,245,1)" 
                  strokeWidth="8" 
                  strokeDasharray={251.2} 
                  strokeDashoffset={251.2 * (1 - 0.65)} 
                  strokeLinecap="round"
                  fill="none" 
                  transform="rotate(-90 50 50)" 
                />
                <text x="50" y="55" textAnchor="middle" fill="white" fontSize="16">65%</text>
              </svg>
            </ComponentShowcase>

            {/* Shimmer Effect */}
            <ComponentShowcase 
              title="Shimmer Effect"
              description="Loading placeholder with shimmer animation"
              code={`<div className="relative overflow-hidden rounded-md w-full h-20 bg-white/5">
  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] 
       bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>`}>
              <div className="relative overflow-hidden rounded-md w-full h-20 bg-white/5">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </div>
            </ComponentShowcase>

            {/* Spinner with Text */}
            <ComponentShowcase 
              title="Spinner with Text"
              description="Spinner with status text"
              code={`<div className="flex flex-col items-center gap-3">
  <div className="w-10 h-10 border-3 border-neon-purple/30 border-t-neon-purple rounded-full animate-spin"></div>
  <p className="text-sm text-gray-400">Loading data...</p>
</div>`}>
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-3 border-neon-purple/30 border-t-neon-purple rounded-full animate-spin"></div>
                <p className="text-sm text-gray-400">Loading data...</p>
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
              code={`// Simple spinner
<div className="w-8 h-8 border-2 border-neon-purple border-t-transparent rounded-full animate-spin"></div>

// Pulse dots loader
<div className="flex gap-2">
  <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse"></div>
  <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse [animation-delay:0.2s]"></div>
  <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse [animation-delay:0.4s]"></div>
</div>

// Progress bar
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
  <div className="w-1/3 h-full bg-neon-purple"></div>
</div>

// Add to keyframes in tailwind.config.js for shimmer effect:
// shimmer: {
//   '0%': { transform: 'translateX(-100%)' },
//   '100%': { transform: 'translateX(100%)' }
// }`} 
            />
            <pre className="text-sm text-gray-300 overflow-auto p-4">
{`// Simple spinner
<div className="w-8 h-8 border-2 border-neon-purple border-t-transparent rounded-full animate-spin"></div>

// Pulse dots loader
<div className="flex gap-2">
  <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse"></div>
  <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse [animation-delay:0.2s]"></div>
  <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse [animation-delay:0.4s]"></div>
</div>

// Progress bar
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
  <div className="w-1/3 h-full bg-neon-purple"></div>
</div>

// Add to keyframes in tailwind.config.js for shimmer effect:
// shimmer: {
//   '0%': { transform: 'translateX(-100%)' },
//   '100%': { transform: 'translateX(100%)' }
// }`}
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
      <CopyButton code={code} />
      
      {/* Component info */}
      <div className="p-4 border-b border-white/10">
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      
      {/* Component preview */}
      <div className="p-8 flex items-center justify-center bg-black/20">
        <div className="flex flex-col gap-4 items-center w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LoaderComponents;

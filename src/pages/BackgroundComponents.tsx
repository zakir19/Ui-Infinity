import React from 'react';
import { CopyButton } from '@/components/ui/copy-button';
import Footer from '@/components/Footer';

const BackgroundComponents = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Background Components
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Dynamic background patterns and effects.
          </p>
        </div>
      </div>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gradient Background */}
            <div className="bg-black/20 border border-white/10 rounded-lg p-6 relative group">
              <h3 className="text-xl font-semibold mb-4 text-white">Gradient Background</h3>
              <div className="mb-6">
                <div className="h-40 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-lg"></div>
              </div>
              <div className="bg-black/80 rounded-md p-4 relative">
                <CopyButton 
                  code={`<div className="h-40 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-lg"></div>`} 
                />
                <pre className="text-gray-300 text-xs overflow-auto p-1">
                  <code>{`<div className="h-40 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-lg"></div>`}</code>
                </pre>
              </div>
            </div>
            
            {/* Animated Gradient */}
            <div className="bg-black/20 border border-white/10 rounded-lg p-6 relative group">
              <h3 className="text-xl font-semibold mb-4 text-white">Animated Gradient</h3>
              <div className="mb-6">
                <div className="h-40 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan rounded-lg animate-gradient-x"></div>
              </div>
              <div className="bg-black/80 rounded-md p-4 relative">
                <CopyButton 
                  code={`/* Add this to your tailwind.config.js */
animation: {
  'gradient-x': 'gradient-x 5s ease infinite',
},
keyframes: {
  'gradient-x': {
    '0%, 100%': {
      'background-size': '200% 200%',
      'background-position': 'left center',
    },
    '50%': {
      'background-size': '200% 200%',
      'background-position': 'right center',
    },
  },
}

/* React Component */
<div className="h-40 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan rounded-lg animate-gradient-x"></div>`} 
                />
                <pre className="text-gray-300 text-xs overflow-auto p-1">
                  <code>{`/* Add this to your tailwind.config.js */
animation: {
  'gradient-x': 'gradient-x 5s ease infinite',
},
keyframes: {
  'gradient-x': {
    '0%, 100%': {
      'background-size': '200% 200%',
      'background-position': 'left center',
    },
    '50%': {
      'background-size': '200% 200%',
      'background-position': 'right center',
    },
  },
}

/* React Component */
<div className="h-40 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan rounded-lg animate-gradient-x"></div>`}</code>
                </pre>
              </div>
            </div>
            
            {/* Glass Morphism */}
            <div className="bg-black/20 border border-white/10 rounded-lg p-6 relative group">
              <h3 className="text-xl font-semibold mb-4 text-white">Glass Morphism</h3>
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan opacity-20 rounded-lg"></div>
                <div className="h-40 glass-morphism rounded-lg relative flex items-center justify-center">
                  <span className="text-white font-semibold">Glass Effect</span>
                </div>
              </div>
              <div className="bg-black/80 rounded-md p-4 relative">
                <CopyButton 
                  code={`<div className="relative">
  <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan opacity-20 rounded-lg"></div>
  <div className="h-40 glass-morphism rounded-lg relative flex items-center justify-center">
    <span className="text-white font-semibold">Glass Effect</span>
  </div>
</div>

/* In your CSS or Tailwind utilities */
.glass-morphism {
  @apply backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)];
}`} 
                />
                <pre className="text-gray-300 text-xs overflow-auto p-1">
                  <code>{`<div className="relative">
  <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan opacity-20 rounded-lg"></div>
  <div className="h-40 glass-morphism rounded-lg relative flex items-center justify-center">
    <span className="text-white font-semibold">Glass Effect</span>
  </div>
</div>

/* In your CSS or Tailwind utilities */
.glass-morphism {
  @apply backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)];
}`}</code>
                </pre>
              </div>
            </div>
            
            {/* Noise Texture */}
            <div className="bg-black/20 border border-white/10 rounded-lg p-6 relative group">
              <h3 className="text-xl font-semibold mb-4 text-white">Noise Texture</h3>
              <div className="mb-6">
                <div className="h-40 bg-gray-800 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E')",
                    backgroundRepeat: 'repeat',
                    width: '200%',
                    height: '200%'
                  }}></div>
                </div>
              </div>
              <div className="bg-black/80 rounded-md p-4 relative">
                <CopyButton 
                  code={`<div className="h-40 bg-gray-800 rounded-lg relative overflow-hidden">
  <div className="absolute inset-0 opacity-30" style={{
    backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E')",
    backgroundRepeat: 'repeat',
    width: '200%',
    height: '200%'
  }}></div>
</div>`} 
                />
                <pre className="text-gray-300 text-xs overflow-auto p-1">
                  <code>{`<div className="h-40 bg-gray-800 rounded-lg relative overflow-hidden">
  <div className="absolute inset-0 opacity-30" style={{
    backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E')",
    backgroundRepeat: 'repeat',
    width: '200%',
    height: '200%'
  }}></div>
</div>`}</code>
                </pre>
              </div>
            </div>
            
            {/* Animated Background */}
            <div className="bg-black/20 border border-white/10 rounded-lg p-6 relative group">
              <h3 className="text-xl font-semibold mb-4 text-white">Animated Background</h3>
              <div className="mb-6">
                <div className="h-40 bg-gray-800 rounded-lg relative overflow-hidden">
                  <div className="absolute -inset-[100%] bg-gradient-to-r from-neon-purple to-neon-cyan opacity-30 animate-slow-spin"></div>
                </div>
              </div>
              <div className="bg-black/80 rounded-md p-4 relative">
                <CopyButton 
                  code={`/* Add this to your tailwind.config.js */
animation: {
  'slow-spin': 'spin 15s linear infinite',
},

/* React Component */
<div className="h-40 bg-gray-800 rounded-lg relative overflow-hidden">
  <div className="absolute -inset-[100%] bg-gradient-to-r from-neon-purple to-neon-cyan opacity-30 animate-slow-spin"></div>
</div>`} 
                />
                <pre className="text-gray-300 text-xs overflow-auto p-1">
                  <code>{`/* Add this to your tailwind.config.js */
animation: {
  'slow-spin': 'spin 15s linear infinite',
},

/* React Component */
<div className="h-40 bg-gray-800 rounded-lg relative overflow-hidden">
  <div className="absolute -inset-[100%] bg-gradient-to-r from-neon-purple to-neon-cyan opacity-30 animate-slow-spin"></div>
</div>`}</code>
                </pre>
              </div>
            </div>
            
            {/* Grid Background */}
            <div className="bg-black/20 border border-white/10 rounded-lg p-6 relative group">
              <h3 className="text-xl font-semibold mb-4 text-white">Grid Background</h3>
              <div className="mb-6">
                <div className="h-40 bg-gray-900 rounded-lg relative" style={{
                  backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
                  backgroundSize: "20px 20px"
                }}></div>
              </div>
              <div className="bg-black/80 rounded-md p-4 relative">
                <CopyButton 
                  code={`<div className="h-40 bg-gray-900 rounded-lg relative" style={{
  backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
  backgroundSize: "20px 20px"
}}></div>`} 
                />
                <pre className="text-gray-300 text-xs overflow-auto p-1">
                  <code>{`<div className="h-40 bg-gray-900 rounded-lg relative" style={{
  backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
  backgroundSize: "20px 20px"
}}></div>`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BackgroundComponents;
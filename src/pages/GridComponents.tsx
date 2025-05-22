
import React from 'react';
import { CopyButton } from '@/components/ui/copy-button';
import Footer from '@/components/Footer';

const GridComponents = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Grid Components
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Modern grid layout systems for your UI.
          </p>
        </div>
      </div>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="glass-morphism p-6 rounded-xl overflow-hidden relative group">
            <CopyButton 
              code={`// Basic grid layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

// Auto-fit grid with minmax
<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
  <div>Auto-fit Item 1</div>
  <div>Auto-fit Item 2</div>
  <div>Auto-fit Item 3</div>
</div>`} 
              className="opacity-0 group-hover:opacity-100"
            />
            <p className="text-center text-gray-400 text-lg mb-4">
              Grid components coming soon. Check back for updates!
            </p>
            <pre className="text-sm text-gray-300 overflow-auto p-4">
{`// Basic grid layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

// Auto-fit grid with minmax
<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
  <div>Auto-fit Item 1</div>
  <div>Auto-fit Item 2</div>
  <div>Auto-fit Item 3</div>
</div>`}
            </pre>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GridComponents;

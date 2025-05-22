
import React from 'react';
import { CopyButton } from '@/components/ui/copy-button';
import Footer from '@/components/Footer';

const SliderComponents = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Slider Components
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Interactive sliders and carousel components.
          </p>
        </div>
      </div>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="glass-morphism p-6 rounded-xl overflow-hidden relative group">
            <CopyButton 
              code={`// Import slider component
import { Slider } from "@/components/ui/slider";

// Basic slider
<Slider defaultValue={[50]} max={100} step={1} />

// Range slider
<Slider defaultValue={[25, 75]} max={100} step={1} />

// With labels
<div>
  <label>Volume</label>
  <Slider defaultValue={[50]} max={100} step={1} />
</div>`} 
              className="opacity-0 group-hover:opacity-100"
            />
            <p className="text-center text-gray-400 text-lg mb-4">
              Slider components coming soon. Check back for updates!
            </p>
            <pre className="text-sm text-gray-300 overflow-auto p-4">
{`// Import slider component
import { Slider } from "@/components/ui/slider";

// Basic slider
<Slider defaultValue={[50]} max={100} step={1} />

// Range slider
<Slider defaultValue={[25, 75]} max={100} step={1} />

// With labels
<div>
  <label>Volume</label>
  <Slider defaultValue={[50]} max={100} step={1} />
</div>`}
            </pre>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SliderComponents;

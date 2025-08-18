
import React from 'react';
import { CopyButton } from '@/components/ui/copy-button';
import Footer from '@/components/Footer';

const ThreeDEffectsComponents = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            3D Effects Components
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Immersive 3D effects and transformations.
          </p>
        </div>
      </div>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="glass-morphism p-6 rounded-xl overflow-hidden relative group">
            <CopyButton 
              code={`// 3D Card with perspective
<div className="group perspective-1000">
  <div className="relative transition-transform duration-500 group-hover:[transform:rotateY(10deg)]">
    <div className="p-6 rounded-lg bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border border-white/10">
      <h3>3D Card Effect</h3>
      <p>Hover to see the 3D rotation</p>
    </div>
  </div>
</div>

// 3D Button
<button className="relative px-6 py-3 bg-neon-purple text-white rounded-md transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(155,135,245,0.5)]">
  3D Button
</button>

// Import TiltCard for 3D tilt effect
import TiltCard from '@/components/ui/tilt-card';

<TiltCard>
  <div className="p-6">
    <h3>Interactive 3D Tilt</h3>
    <p>Move your cursor to see the effect</p>
  </div>
</TiltCard>`} 
              className="opacity-0 group-hover:opacity-100"
            />
            <p className="text-center text-gray-400 text-lg mb-4">
              3D Effects components coming soon. Check back for updates!
            </p>
            <pre className="text-sm text-gray-300 overflow-auto p-4">
{`// 3D Card with perspective
<div className="group perspective-1000">
  <div className="relative transition-transform duration-500 group-hover:[transform:rotateY(10deg)]">
    <div className="p-6 rounded-lg bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border border-white/10">
      <h3>3D Card Effect</h3>
      <p>Hover to see the 3D rotation</p>
    </div>
  </div>
</div>

// 3D Button
<button className="relative px-6 py-3 bg-neon-purple text-white rounded-md transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(155,135,245,0.5)]">
  3D Button
</button>

// Import TiltCard for 3D tilt effect
import TiltCard from '@/components/ui/tilt-card';

<TiltCard>
  <div className="p-6">
    <h3>Interactive 3D Tilt</h3>
    <p>Move your cursor to see the effect</p>
  </div>
</TiltCard>`}
            </pre>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ThreeDEffectsComponents;

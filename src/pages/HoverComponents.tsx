import React from 'react';
import { CopyButton } from '@/components/ui/copy-button';
import Footer from '@/components/Footer';
import { Magnetic } from '@/components/ui/magnetic';

const HoverComponents = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Hover Components
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Interactive hover effects for your UI.
          </p>
        </div>
      </div>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hover Scale Effect */}
            <div className="bg-black/20 border border-white/10 rounded-lg p-6 relative group">
              <h3 className="text-xl font-semibold mb-4 text-white">Hover Scale</h3>
              <div className="mb-6 flex justify-center">
                <button className="px-4 py-2 bg-gray-800 rounded-md text-white transition-transform hover:scale-110">
                  Hover Me
                </button>
              </div>
              <div className="bg-black/80 rounded-md p-4 relative">
                <CopyButton 
                  code={`<button className="px-4 py-2 bg-gray-800 rounded-md text-white transition-transform hover:scale-110">
  Hover Me
</button>`} 
                />
                <pre className="text-gray-300 text-xs overflow-auto p-1">
                  <code>{`<button className="px-4 py-2 bg-gray-800 rounded-md text-white transition-transform hover:scale-110">
  Hover Me
</button>`}</code>
                </pre>
              </div>
            </div>
            
            {/* Border Glow Effect */}
            <div className="bg-black/20 border border-white/10 rounded-lg p-6 relative group">
              <h3 className="text-xl font-semibold mb-4 text-white">Border Glow</h3>
              <div className="mb-6 flex justify-center">
                <button className="px-4 py-2 bg-gray-800 rounded-md text-white border border-transparent hover:border-neon-purple transition-colors">
                  Hover Me
                </button>
              </div>
              <div className="bg-black/80 rounded-md p-4 relative">
                <CopyButton 
                  code={`<button className="px-4 py-2 bg-gray-800 rounded-md text-white border border-transparent hover:border-neon-purple transition-colors">
  Hover Me
</button>`} 
                />
                <pre className="text-gray-300 text-xs overflow-auto p-1">
                  <code>{`<button className="px-4 py-2 bg-gray-800 rounded-md text-white border border-transparent hover:border-neon-purple transition-colors">
  Hover Me
</button>`}</code>
                </pre>
              </div>
            </div>
            
            {/* Color Shift Effect */}
            <div className="bg-black/20 border border-white/10 rounded-lg p-6 relative group">
              <h3 className="text-xl font-semibold mb-4 text-white">Color Shift</h3>
              <div className="mb-6 flex justify-center">
                <button className="px-4 py-2 bg-gray-800 rounded-md text-white hover:bg-neon-purple transition-colors">
                  Hover Me
                </button>
              </div>
              <div className="bg-black/80 rounded-md p-4 relative">
                <CopyButton 
                  code={`<button className="px-4 py-2 bg-gray-800 rounded-md text-white hover:bg-neon-purple transition-colors">
  Hover Me
</button>`} 
                />
                <pre className="text-gray-300 text-xs overflow-auto p-1">
                  <code>{`<button className="px-4 py-2 bg-gray-800 rounded-md text-white hover:bg-neon-purple transition-colors">
  Hover Me
</button>`}</code>
                </pre>
              </div>
            </div>
            
            {/* Shadow Effect */}
            <div className="bg-black/20 border border-white/10 rounded-lg p-6 relative group">
              <h3 className="text-xl font-semibold mb-4 text-white">Shadow Effect</h3>
              <div className="mb-6 flex justify-center">
                <button className="px-4 py-2 bg-gray-800 rounded-md text-white shadow-none hover:shadow-[0_0_15px_rgba(155,135,245,0.5)] transition-shadow">
                  Hover Me
                </button>
              </div>
              <div className="bg-black/80 rounded-md p-4 relative">
                <CopyButton 
                  code={`<button className="px-4 py-2 bg-gray-800 rounded-md text-white shadow-none hover:shadow-[0_0_15px_rgba(155,135,245,0.5)] transition-shadow">
  Hover Me
</button>`} 
                />
                <pre className="text-gray-300 text-xs overflow-auto p-1">
                  <code>{`<button className="px-4 py-2 bg-gray-800 rounded-md text-white shadow-none hover:shadow-[0_0_15px_rgba(155,135,245,0.5)] transition-shadow">
  Hover Me
</button>`}</code>
                </pre>
              </div>
            </div>
            
            {/* Magnetic Effect */}
            <div className="bg-black/20 border border-white/10 rounded-lg p-6 relative group">
              <h3 className="text-xl font-semibold mb-4 text-white">Magnetic Effect</h3>
              <div className="mb-6 flex justify-center">
                <Magnetic strength={20}>
                  <button className="px-4 py-2 bg-gray-800 rounded-md text-white">
                    Move Your Mouse Near Me
                  </button>
                </Magnetic>
              </div>
              <div className="bg-black/80 rounded-md p-4 relative">
                <CopyButton 
                  code={`import { Magnetic } from '@/components/ui/magnetic';

<Magnetic strength={20}>
  <button className="px-4 py-2 bg-gray-800 rounded-md text-white">
    Move Your Mouse Near Me
  </button>
</Magnetic>`} 
                />
                <pre className="text-gray-300 text-xs overflow-auto p-1">
                  <code>{`import { Magnetic } from '@/components/ui/magnetic';

<Magnetic strength={20}>
  <button className="px-4 py-2 bg-gray-800 rounded-md text-white">
    Move Your Mouse Near Me
  </button>
</Magnetic>`}</code>
                </pre>
              </div>
            </div>
            
            {/* Text Underline Effect */}
            <div className="bg-black/20 border border-white/10 rounded-lg p-6 relative group">
              <h3 className="text-xl font-semibold mb-4 text-white">Text Underline</h3>
              <div className="mb-6 flex justify-center">
                <a href="#" className="text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-neon-purple after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left">
                  Hover Over This Text
                </a>
              </div>
              <div className="bg-black/80 rounded-md p-4 relative">
                <CopyButton 
                  code={`<a href="#" className="text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-neon-purple after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left">
  Hover Over This Text
</a>`} 
                />
                <pre className="text-gray-300 text-xs overflow-auto p-1">
                  <code>{`<a href="#" className="text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-neon-purple after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left">
  Hover Over This Text
</a>`}</code>
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

export default HoverComponents;
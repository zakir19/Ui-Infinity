
import React from 'react';
import { Button } from '@/components/ui/button';
import { NeoCard, NeoCardHeader, NeoCardTitle, NeoCardDescription, NeoCardContent, NeoCardFooter } from '@/components/ui/neo-card';
import TiltCard from '@/components/ui/tilt-card';
import Footer from '@/components/Footer';
import '../styles/custom-ui.css';

const CustomUI = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Custom UI Components
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Unique and innovative components with a distinct visual identity
          </p>
        </div>
      </div>

      {/* Component Showcase */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Neo Button Showcase */}
            <ComponentShowcase 
              title="Neo Buttons"
              description="Custom buttons with unique visual effects">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4">
                  <Button variant="default">Default</Button>
                  <Button className="bg-white/10 hover:bg-white/20">Solid</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button className="h-8 px-3 text-xs">Extra Small</Button>
                  <Button className="h-9 px-4 text-sm">Small</Button>
                  <Button>Default</Button>
                  <Button className="h-11 px-6 text-base">Large</Button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button className="shadow-[0_0_20px_theme(colors.purple.500/30)]">Subtle Glow</Button>
                  <Button className="shadow-[0_0_30px_theme(colors.purple.500/50)]">Strong Glow</Button>
                  <Button className="bg-white/10 hover:bg-white/20 shadow-[0_0_30px_theme(colors.purple.500/50)]">Solid Glow</Button>
                </div>
              </div>
            </ComponentShowcase>

            {/* Neo Card Showcase */}
            <ComponentShowcase 
              title="Neo Cards"
              description="Custom cards with unique styles and effects">
              <div className="space-y-6">
                <NeoCard className="max-w-md">
                  <NeoCardHeader>
                    <NeoCardTitle>Neo Card Title</NeoCardTitle>
                    <NeoCardDescription>A unique card component with custom styling</NeoCardDescription>
                  </NeoCardHeader>
                  <NeoCardContent>
                    <p className="text-gray-300">This is the main content area of the card where you can place your primary information.</p>
                  </NeoCardContent>
                  <NeoCardFooter>
                    <Button variant="ghost" className="text-sm">Cancel</Button>
                    <Button variant="default" className="text-sm ml-auto">Continue</Button>
                  </NeoCardFooter>
                </NeoCard>

                <div className="flex gap-4 overflow-x-auto pb-2">
                  <NeoCard variant="default" className="w-40 h-32 flex items-center justify-center">
                    <p className="text-gray-300 text-sm">Default</p>
                  </NeoCard>
                  <NeoCard variant="glass" className="w-40 h-32 flex items-center justify-center">
                    <p className="text-gray-300 text-sm">Glass</p>
                  </NeoCard>
                  <NeoCard variant="gradient" className="w-40 h-32 flex items-center justify-center">
                    <p className="text-gray-300 text-sm">Gradient</p>
                  </NeoCard>
                  <NeoCard variant="dark" className="w-40 h-32 flex items-center justify-center">
                    <p className="text-gray-300 text-sm">Dark</p>
                  </NeoCard>
                </div>
              </div>
            </ComponentShowcase>

            {/* Tilt Card Showcase */}
            <ComponentShowcase 
              title="Enhanced Tilt Cards"
              description="Interactive cards with enhanced 3D tilt effect and glare">
              <div className="grid grid-cols-2 gap-4">
                <TiltCard className="h-40 flex items-center justify-center p-6">
                  <p className="text-center text-gray-300">Hover me</p>
                </TiltCard>
                <TiltCard className="h-40 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center p-6">
                  <p className="text-center text-gray-300">Gradient background</p>
                </TiltCard>
                <TiltCard className="h-40 bg-black/40 flex items-center justify-center p-6" maxTilt={30}>
                  <p className="text-center text-gray-300">More tilt</p>
                </TiltCard>
                <TiltCard className="h-40 bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 flex items-center justify-center p-6" glareAmount={0.3}>
                  <p className="text-center text-gray-300">More glare</p>
                </TiltCard>
              </div>
            </ComponentShowcase>

            {/* Form Controls Showcase */}
            <ComponentShowcase 
              title="Form Elements"
              description="Custom styled form controls">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="neo-input" className="text-sm text-gray-300">Neo Input</label>
                  <input id="neo-input" type="text" className="neo-input w-full h-10 px-3 py-2" placeholder="Enter text..." />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Neo Checkbox</label>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="neo-checkbox" id="checkbox1" />
                    <label htmlFor="checkbox1" className="text-sm text-gray-300">Accept terms</label>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Neo Switch</label>
                  <div className="neo-switch">
                    <input type="checkbox" className="opacity-0 w-0 h-0 neo-switch-input" id="switch1" />
                    <label htmlFor="switch1" className="neo-switch-track block cursor-pointer">
                      <span className="neo-switch-thumb"></span>
                    </label>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="neo-select" className="text-sm text-gray-300">Neo Select</label>
                  <select id="neo-select" className="neo-select w-full h-10 px-3">
                    <option value="">Select an option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                </div>
              </div>
            </ComponentShowcase>
            
            {/* Badge & Labels Showcase */}
            <ComponentShowcase 
              title="Badges & Labels"
              description="Custom badges for status and notifications">
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  <span className="neo-badge">Default</span>
                  <span className="neo-badge bg-neon-purple/30">Purple</span>
                  <span className="neo-badge bg-neon-cyan/30">Cyan</span>
                  <span className="neo-badge bg-neon-pink/30">Pink</span>
                  <span className="neo-badge bg-green-500/30">Success</span>
                  <span className="neo-badge bg-red-500/30">Error</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-300">Online</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <span className="text-sm text-gray-300">Away</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-sm text-gray-300">Offline</span>
                  </div>
                </div>
              </div>
            </ComponentShowcase>
            
            {/* Animation Effects Showcase */}
            <ComponentShowcase 
              title="Animation Effects"
              description="Custom animation effects for UI elements">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Button className="neo-pulse">Pulse Effect</Button>
                  <div className="neo-badge neo-pulse">Pulse Badge</div>
                </div>
                
                <NeoCard variant="gradient" className="p-6 neo-pulse border-neon-purple/30 max-w-xs">
                  <p className="text-gray-300">This card has a pulse animation on its border</p>
                </NeoCard>
                
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <Button key={i} variant="ghost" className="animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
                      Float {i}
                    </Button>
                  ))}
                </div>
              </div>
            </ComponentShowcase>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="py-12 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Implementation Guide</h2>
          <NeoCard className="overflow-hidden">
            <pre className="text-sm text-gray-300 overflow-auto p-8">
{`// Import custom components
import { Button } from '@/components/ui/button';
import { NeoCard, NeoCardHeader, NeoCardTitle } from '@/components/ui/neo-card';
import TiltCard from '@/components/ui/tilt-card';
import '../styles/custom-ui.css';

// Use in your components
function MyComponent() {
  return (
    <NeoCard variant="gradient" glow="subtle">
      <NeoCardHeader>
        <NeoCardTitle>Custom Component</NeoCardTitle>
      </NeoCardHeader>
      <div className="p-6">
        <Button className="bg-white/10 hover:bg-white/20 shadow-[0_0_30px_theme(colors.purple.500/50)]">
          Interactive Button
        </Button>
      </div>
    </NeoCard>
  );
}`}
            </pre>
          </NeoCard>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Component showcase wrapper
const ComponentShowcase = ({ 
  title, 
  description, 
  children 
}: { 
  title: string; 
  description: string; 
  children: React.ReactNode 
}) => {
  return (
    <NeoCard className="overflow-hidden hover:border-neon-purple/30 transition-colors">
      {/* Component info */}
      <div className="p-4 border-b border-white/10">
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      
      {/* Component preview */}
      <div className="p-8 flex items-center justify-center bg-black/20">
        <div className="w-full">
          {children}
        </div>
      </div>
    </NeoCard>
  );
};

export default CustomUI;

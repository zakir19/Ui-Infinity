
import React from 'react';
import Footer from '@/components/Footer';

const LayoutComponents = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Layout Components
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Flexible layout components for building responsive interfaces.
          </p>
        </div>
      </div>

      {/* Component Showcase */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Grid Layout */}
            <LayoutShowcase 
              title="Grid Layout"
              description="Responsive grid system for layout structures">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-neon-purple/20 h-12 rounded-md flex items-center justify-center text-xs text-neon-purple">
                    Grid {i+1}
                  </div>
                ))}
              </div>
            </LayoutShowcase>

            {/* Flex Layout */}
            <LayoutShowcase 
              title="Flex Layout"
              description="Flexible box layout for aligning elements">
              <div className="flex flex-wrap gap-2">
                <div className="bg-neon-cyan/20 h-12 w-16 rounded-md flex items-center justify-center text-xs text-neon-cyan">
                  Item 1
                </div>
                <div className="bg-neon-cyan/20 h-12 w-24 rounded-md flex items-center justify-center text-xs text-neon-cyan">
                  Item 2
                </div>
                <div className="bg-neon-cyan/20 h-12 w-20 rounded-md flex items-center justify-center text-xs text-neon-cyan">
                  Item 3
                </div>
                <div className="bg-neon-cyan/20 h-12 w-16 rounded-md flex items-center justify-center text-xs text-neon-cyan">
                  Item 4
                </div>
              </div>
            </LayoutShowcase>
            
            {/* Container */}
            <LayoutShowcase 
              title="Container"
              description="Center-aligned content with max-width">
              <div className="w-full bg-black/30 p-4 rounded-md">
                <div className="w-full mx-auto max-w-md bg-white/5 p-4 border border-dashed border-white/20 rounded-md">
                  <p className="text-xs text-center text-gray-400">
                    Constrained container with max-width
                  </p>
                </div>
              </div>
            </LayoutShowcase>

            {/* Split Layout */}
            <LayoutShowcase 
              title="Split Layout"
              description="Two-column layout with adjustable ratio">
              <div className="flex h-32 w-full gap-2 rounded-md overflow-hidden">
                <div className="w-1/3 bg-neon-purple/20 flex items-center justify-center text-xs text-neon-purple">
                  Sidebar
                </div>
                <div className="w-2/3 bg-neon-cyan/20 flex items-center justify-center text-xs text-neon-cyan">
                  Main Content
                </div>
              </div>
            </LayoutShowcase>

            {/* Card Grid */}
            <LayoutShowcase 
              title="Card Grid"
              description="Responsive grid of cards">
              <div className="grid grid-cols-2 gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-3 rounded-md">
                    <div className="h-6 w-full bg-white/5 rounded mb-2"></div>
                    <div className="h-3 w-3/4 bg-white/5 rounded mb-1"></div>
                    <div className="h-3 w-1/2 bg-white/5 rounded"></div>
                  </div>
                ))}
              </div>
            </LayoutShowcase>

            {/* Sidebar Layout */}
            <LayoutShowcase 
              title="Sidebar Layout"
              description="Fixed sidebar with scrollable main content">
              <div className="h-48 w-full flex gap-2 rounded-md overflow-hidden">
                <div className="w-16 bg-neon-purple/20 flex flex-col items-center py-3 space-y-3">
                  <div className="w-6 h-6 rounded-full bg-neon-purple/30"></div>
                  <div className="w-6 h-6 rounded bg-white/10"></div>
                  <div className="w-6 h-6 rounded bg-white/10"></div>
                  <div className="w-6 h-6 rounded bg-white/10"></div>
                </div>
                <div className="flex-1 bg-white/5 p-3">
                  <div className="h-6 w-1/2 bg-white/10 rounded mb-3"></div>
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-white/10 rounded"></div>
                    <div className="h-3 w-full bg-white/10 rounded"></div>
                    <div className="h-3 w-3/4 bg-white/10 rounded"></div>
                  </div>
                </div>
              </div>
            </LayoutShowcase>

            {/* Sticky Header Layout */}
            <LayoutShowcase 
              title="Sticky Header"
              description="Layout with fixed header and scrollable content">
              <div className="h-48 w-full flex flex-col rounded-md overflow-hidden border border-white/10">
                <div className="h-10 bg-neon-cyan/20 flex items-center px-3">
                  <div className="h-4 w-1/3 bg-white/10 rounded"></div>
                </div>
                <div className="flex-1 bg-white/5 p-3 space-y-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-6 w-full bg-white/10 rounded"></div>
                  ))}
                </div>
              </div>
            </LayoutShowcase>

            {/* Holy Grail Layout */}
            <LayoutShowcase 
              title="Holy Grail Layout"
              description="Classic header, footer, sidebar, and content layout">
              <div className="h-48 w-full flex flex-col rounded-md overflow-hidden border border-white/10">
                <div className="h-8 bg-neon-purple/20 flex items-center justify-center text-xs text-neon-purple">
                  Header
                </div>
                <div className="flex-1 flex">
                  <div className="w-16 bg-white/10 flex items-center justify-center text-xs text-gray-400">
                    Sidebar
                  </div>
                  <div className="flex-1 bg-white/5 flex items-center justify-center text-xs text-gray-300">
                    Content
                  </div>
                </div>
                <div className="h-6 bg-neon-purple/20 flex items-center justify-center text-xs text-neon-purple">
                  Footer
                </div>
              </div>
            </LayoutShowcase>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="py-12 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Usage</h2>
          <div className="glass-morphism p-6 rounded-xl overflow-hidden">
            <pre className="text-sm text-gray-300 overflow-auto p-4">
{`// Responsive Layout Example
export function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background">
        {/* Header content */}
      </header>
      
      {/* Main content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 hidden md:block">
          {/* Sidebar content */}
        </aside>
        
        {/* Main area */}
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
      
      {/* Footer */}
      <footer className="bg-background">
        {/* Footer content */}
      </footer>
    </div>
  );
}`}
            </pre>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const LayoutShowcase = ({ 
  title, 
  description, 
  children 
}: { 
  title: string; 
  description: string; 
  children: React.ReactNode 
}) => {
  return (
    <div className="glass-morphism rounded-xl overflow-hidden hover:border-neon-purple/30 transition-colors">
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
    </div>
  );
};

export default LayoutComponents;

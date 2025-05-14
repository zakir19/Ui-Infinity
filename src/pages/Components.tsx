
import React, { useState } from 'react';
import Footer from '@/components/Footer';
import { Search } from 'lucide-react';
import { TiltCard } from '@/components/ui/tilt-card';
import { Spotlight } from '@/components/ui/spotlight';
import { GlassCard } from '@/components/ui/glass-card';
import { Magnetic } from '@/components/ui/magnetic';
import { Sparkles } from '@/components/ui/sparkles';
import { GradientBorder } from '@/components/ui/gradient-border';
import { RevealImage } from '@/components/ui/reveal-image';
import { Button } from '@/components/ui/button';

const Components = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Component categories
  const categories = [
    'All',
    'Buttons',
    'Cards',
    'Navigation',
    'Forms',
    'Modals',
    'Layout',
    'Feedback',
    'Loaders',
    'Effects'
  ];

  // Example components with our new additions
  const allComponents = [
    { name: 'Button', category: 'Buttons', description: 'Standard button with multiple variants', isNew: false },
    { name: 'Gradient Button', category: 'Buttons', description: 'Buttons with beautiful gradient backgrounds', isNew: true },
    { name: 'Icon Button', category: 'Buttons', description: 'Compact buttons with icons', isNew: false },
    { name: 'Magnetic Button', category: 'Buttons', description: 'Button that follows cursor with magnetic effect', isNew: true },
    { name: 'Card', category: 'Cards', description: 'Standard card component with header, body, and footer', isNew: false },
    { name: '3D Card', category: 'Cards', description: 'Interactive card with 3D tilt effect', isNew: true },
    { name: 'Glass Card', category: 'Cards', description: 'Modern glassmorphism card with blur effect', isNew: true },
    { name: 'Gradient Border Card', category: 'Cards', description: 'Card with animated gradient border', isNew: true },
    { name: 'Profile Card', category: 'Cards', description: 'Specialized card for user profiles', isNew: false },
    { name: 'Navbar', category: 'Navigation', description: 'Responsive navigation bar', isNew: false },
    { name: 'Tabs', category: 'Navigation', description: 'Tabbed interface for content organization', isNew: false },
    { name: 'Dropdown', category: 'Navigation', description: 'Toggleable menu for additional options', isNew: false },
    { name: 'Text Input', category: 'Forms', description: 'Standard text input field', isNew: false },
    { name: 'Select', category: 'Forms', description: 'Dropdown select component', isNew: false },
    { name: 'Checkbox', category: 'Forms', description: 'Interactive checkbox component', isNew: false },
    { name: 'Modal', category: 'Modals', description: 'Standard modal dialog', isNew: false },
    { name: 'Drawer', category: 'Modals', description: 'Side-sliding panel', isNew: false },
    { name: 'Tooltip', category: 'Feedback', description: 'Contextual tooltips for UI elements', isNew: false },
    { name: 'Toast', category: 'Feedback', description: 'Non-disruptive notifications', isNew: false },
    { name: 'Spinner', category: 'Loaders', description: 'Animated loading spinner', isNew: false },
    { name: 'Progress Bar', category: 'Loaders', description: 'Visual indicator of progress', isNew: false },
    { name: 'Reveal Image', category: 'Effects', description: 'Image with reveal animation and parallax effect', isNew: true },
    { name: 'Spotlight Effect', category: 'Effects', description: 'Interactive spotlight that follows the cursor', isNew: true },
    { name: 'Text Sparkles', category: 'Effects', description: 'Text with animated sparkle effect', isNew: true },
  ];

  // Filter components by search query and active category
  const filteredComponents = allComponents.filter(component => {
    const matchesSearch = component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || component.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with page title */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Component Library
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A collection of beautiful, accessible, and customizable UI components
            for your next React project.
          </p>
        </div>
      </div>
      
      {/* Component browser */}
      <section className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4 space-y-6">
              {/* Search input */}
              <div className="glass-morphism p-4 rounded-xl">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search components..."
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 pl-10 rounded-md focus:outline-none focus:ring-1 focus:ring-neon-purple"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
              </div>
              
              {/* Categories */}
              <div className="glass-morphism p-4 rounded-xl">
                <h3 className="text-white font-medium mb-3">Categories</h3>
                <ul className="space-y-1">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setActiveCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          activeCategory === category
                            ? 'bg-neon-purple/20 text-neon-purple'
                            : 'hover:bg-white/5 text-gray-400 hover:text-white'
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Quick Links */}
              <div className="glass-morphism p-4 rounded-xl">
                <h3 className="text-white font-medium mb-3">Resources</h3>
                <ul className="space-y-1">
                  <ResourceLink href="#">Documentation</ResourceLink>
                  <ResourceLink href="#">API Reference</ResourceLink>
                  <ResourceLink href="#">Examples</ResourceLink>
                  <ResourceLink href="#">GitHub Repository</ResourceLink>
                </ul>
              </div>
            </div>
            
            {/* Component grid */}
            <div className="lg:w-3/4">
              {/* Featured components showcase */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-6">Featured Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Spotlight showcase */}
                  <Spotlight className="h-72 rounded-2xl border border-white/10">
                    <div className="flex flex-col items-center justify-center h-full">
                      <h3 className="text-xl font-bold">Spotlight Effect</h3>
                      <p className="text-center text-gray-400 mt-2">
                        Move your cursor to see the spotlight follow it
                      </p>
                    </div>
                  </Spotlight>
                  
                  {/* 3D Tilt Card showcase */}
                  <TiltCard className="h-72 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border border-white/10 p-8">
                    <div className="flex flex-col items-center justify-center h-full">
                      <h3 className="text-xl font-bold">3D Tilt Effect</h3>
                      <p className="text-center text-gray-400 mt-2">
                        Move your cursor to see the tilt effect
                      </p>
                    </div>
                  </TiltCard>

                  {/* Gradient Border showcase */}
                  <GradientBorder className="h-72">
                    <div className="flex flex-col items-center justify-center h-full w-full p-4">
                      <h3 className="text-xl font-bold">Gradient Border</h3>
                      <p className="text-center text-gray-400 mt-2">
                        Animated gradient border effect
                      </p>
                    </div>
                  </GradientBorder>

                  {/* Glass Card showcase with sparkles */}
                  <GlassCard className="h-72 flex items-center justify-center">
                    <Sparkles className="text-center p-8">
                      <h3 className="text-xl font-bold">Sparkle Text Effect</h3>
                      <p className="text-gray-400 mt-2">
                        Text with animated sparkle effects
                      </p>
                    </Sparkles>
                  </GlassCard>

                  {/* Magnetic Button showcase */}
                  <div className="col-span-1 md:col-span-2 flex justify-center items-center">
                    <Magnetic>
                      <Button variant="ghost" className="bg-gradient-to-r from-neon-purple to-neon-cyan text-white border border-white/20 px-8 py-6 text-xl">
                        Magnetic Button - Hover me
                      </Button>
                    </Magnetic>
                  </div>
                </div>
              </div>

              {/* Component grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredComponents.length > 0 ? (
                  filteredComponents.map((component, index) => (
                    <ComponentItem
                      key={index}
                      name={component.name}
                      description={component.description}
                      isNew={component.isNew}
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-gray-400 text-lg">
                      No components found. Try a different search term or category.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const ResourceLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="block px-3 py-2 text-gray-400 hover:text-neon-purple transition-colors"
    >
      {children}
    </a>
  </li>
);

const ComponentItem = ({ name, description, isNew }: { name: string, description: string, isNew: boolean }) => (
  <div className="glass-morphism rounded-xl overflow-hidden hover:border-neon-purple/30 transition-colors">
    {/* Component preview */}
    <div className="h-32 bg-black/20 flex items-center justify-center">
      <div className="w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-purple">
        {name.charAt(0)}
      </div>
    </div>
    
    {/* Component info */}
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-white font-medium">{name}</h3>
        {isNew && (
          <span className="bg-neon-purple/80 text-white text-xs px-2 py-0.5 rounded-full">
            New
          </span>
        )}
      </div>
      <p className="text-gray-400 text-sm mb-3">{description}</p>
      <button className="text-neon-purple hover:text-neon-cyan text-sm font-medium transition-colors">
        View Details →
      </button>
    </div>
  </div>
);

export default Components;

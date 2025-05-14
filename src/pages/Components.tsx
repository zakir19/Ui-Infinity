import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import { Search } from 'lucide-react';
import { TiltCard } from '@/components/ui/tilt-card';
import { Spotlight } from '@/components/ui/spotlight';
import { GlassCard } from '@/components/ui/glass-card';
import { Magnetic } from '@/components/ui/magnetic';
import { Sparkles } from '@/components/ui/sparkles';
import { GradientBorder } from '@/components/ui/gradient-border';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Components = () => {
  const navigate = useNavigate();
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
    'Effects'
  ];

  // Handle category click
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    
    // Navigate to specific category page
    switch(category) {
      case 'Buttons':
        navigate('/buttons');
        break;
      case 'Cards':
        navigate('/cards');
        break;
      case 'Navigation':
        navigate('/navigation');
        break;
      case 'Forms':
        navigate('/forms');
        break;
      case 'Modals':
        navigate('/modals');
        break;
      case 'Layout':
        navigate('/layout');
        break;
      case 'Feedback':
        navigate('/feedback');
        break;
      case 'Effects':
        navigate('/effects');
        break;
      default:
        // If 'All' or any other category, stay on current page
        break;
    }
  };

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
                        onClick={() => handleCategoryClick(category)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          activeCategory === category
                            ? 'bg-neon-purple/20 text-neon-purple'
                            : 'hover:bg-white/5 text-gray-400 hover:text-white'
                        }`}
                      >
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="inline-block"
                        >
                          {category}
                        </motion.span>
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
                <h2 className="text-2xl font-semibold text-white mb-6">Featured Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <CategoryCard
                    title="Buttons"
                    description="Interactive UI elements for actions"
                    onClick={() => navigate('/buttons')}
                  />
                  <CategoryCard
                    title="Cards"
                    description="Content containers with flexible layouts"
                    onClick={() => navigate('/cards')}
                  />
                  <CategoryCard
                    title="Navigation"
                    description="Menus, tabs, and other navigational elements"
                    onClick={() => navigate('/navigation')}
                  />
                  <CategoryCard
                    title="Forms"
                    description="Input controls and data collection elements"
                    onClick={() => navigate('/forms')}
                  />
                  <CategoryCard
                    title="Modals"
                    description="Dialog boxes and popup interfaces"
                    onClick={() => navigate('/modals')}
                  />
                  <CategoryCard
                    title="Layout"
                    description="Structural components for page organization"
                    onClick={() => navigate('/layout')}
                  />
                  <CategoryCard
                    title="Feedback"
                    description="Status indicators and notifications"
                    onClick={() => navigate('/feedback')}
                  />
                  <CategoryCard
                    title="Effects"
                    description="Visual interactions and animations"
                    onClick={() => navigate('/effects')}
                  />
                </div>
              </div>

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
      <motion.span
        initial={{ x: 0 }}
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </a>
  </li>
);

const CategoryCard = ({ 
  title, 
  description,
  onClick
}: { 
  title: string; 
  description: string;
  onClick: () => void;
}) => (
  <motion.div 
    className="glass-morphism rounded-xl overflow-hidden border border-white/10 hover:border-neon-purple/30 transition-colors cursor-pointer"
    onClick={onClick}
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    {/* Category info */}
    <div className="p-6 flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center text-neon-purple mb-4">
        {title.charAt(0)}
      </div>
      <h3 className="text-white font-medium mb-1">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </motion.div>
);

export default Components;

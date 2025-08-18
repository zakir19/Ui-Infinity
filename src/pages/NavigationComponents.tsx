
import React from 'react';
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from '@/components/ui/navigation-menu';
import Footer from '@/components/Footer';
import { CopyButton } from '@/components/ui/copy-button';
import { HoloSphereNav } from '@/components/ui/holo-sphere-nav';
import { QuantumPortalNav } from '@/components/ui/quantum-portal-nav';
import { toast } from '@/hooks/use-toast';

const NavigationComponents = () => {
  // Sample navigation data for the 3D components
  const sampleNavItems = [
    { id: '1', label: 'Home', color: '#9b87f5', onClick: () => toast({ title: 'Home clicked!' }) },
    { id: '2', label: 'About', color: '#06b6d4', onClick: () => toast({ title: 'About clicked!' }) },
    { id: '3', label: 'Services', color: '#ec4899', onClick: () => toast({ title: 'Services clicked!' }) },
    { id: '4', label: 'Contact', color: '#10b981', onClick: () => toast({ title: 'Contact clicked!' }) }
  ];

  const portalNavItems = [
    { 
      id: '1', 
      label: 'Products', 
      color: '#9b87f5',
      subItems: [
        { label: 'Web Apps', onClick: () => toast({ title: 'Web Apps clicked!' }) },
        { label: 'Mobile Apps', onClick: () => toast({ title: 'Mobile Apps clicked!' }) }
      ],
      onClick: () => toast({ title: 'Products clicked!' })
    },
    { 
      id: '2', 
      label: 'Solutions', 
      color: '#06b6d4',
      subItems: [
        { label: 'Enterprise', onClick: () => toast({ title: 'Enterprise clicked!' }) },
        { label: 'Startups', onClick: () => toast({ title: 'Startups clicked!' }) }
      ],
      onClick: () => toast({ title: 'Solutions clicked!' })
    },
    { 
      id: '3', 
      label: 'Resources', 
      color: '#ec4899',
      subItems: [
        { label: 'Documentation', onClick: () => toast({ title: 'Docs clicked!' }) },
        { label: 'Tutorials', onClick: () => toast({ title: 'Tutorials clicked!' }) }
      ],
      onClick: () => toast({ title: 'Resources clicked!' })
    },
    { 
      id: '4', 
      label: 'Support', 
      color: '#10b981',
      subItems: [
        { label: 'Help Center', onClick: () => toast({ title: 'Help clicked!' }) },
        { label: 'Contact Us', onClick: () => toast({ title: 'Contact clicked!' }) }
      ],
      onClick: () => toast({ title: 'Support clicked!' })
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Navigation Components
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Interactive and responsive navigation elements for your web applications.
          </p>
        </div>
      </div>

      {/* Component Showcase */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* HoloSphere Navigation */}
            <NavShowcase 
              title="HoloSphere Navigation"
              description="3D holographic sphere with orbiting navigation nodes"
              code={`import { HoloSphereNav } from '@/components/ui/holo-sphere-nav';

const navItems = [
  { id: '1', label: 'Home', color: '#9b87f5', onClick: () => console.log('Home') },
  { id: '2', label: 'About', color: '#06b6d4', onClick: () => console.log('About') },
  { id: '3', label: 'Services', color: '#ec4899', onClick: () => console.log('Services') },
  { id: '4', label: 'Contact', color: '#10b981', onClick: () => console.log('Contact') }
];

<HoloSphereNav 
  items={navItems}
  radius={3}
  coreColor="#9b87f5"
  className="w-full h-64"
/>`}>
              <div className="bg-black/20 p-6 rounded-lg">
                <HoloSphereNav 
                  items={sampleNavItems}
                  radius={2.5}
                  coreColor="#9b87f5"
                />
              </div>
            </NavShowcase>

            {/* Quantum Portal Navigation */}
            <NavShowcase 
              title="Quantum Portal Navigation"
              description="Futuristic portal with floating polyhedron nodes and sub-menus"
              code={`import { QuantumPortalNav } from '@/components/ui/quantum-portal-nav';

const portalItems = [
  { 
    id: '1', 
    label: 'Products', 
    color: '#9b87f5',
    subItems: [
      { label: 'Web Apps', onClick: () => console.log('Web Apps') },
      { label: 'Mobile Apps', onClick: () => console.log('Mobile Apps') }
    ],
    onClick: () => console.log('Products')
  },
  // ... more items
];

<QuantumPortalNav 
  items={portalItems}
  className="w-full h-64"
/>`}>
              <div className="bg-black/20 p-6 rounded-lg">
                <QuantumPortalNav items={portalNavItems} />
              </div>
            </NavShowcase>

            {/* Navigation Menu */}
            <NavShowcase 
              title="Navigation Menu"
              description="Flexible navigation menu with dropdown support"
              code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-[400px] p-4">
          <div className="grid gap-3 p-4">
            <div>
              <h4 className="text-sm font-medium leading-none">Introduction</h4>
              <p className="text-sm text-muted-foreground">
                Learn the basics and get started quickly
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium leading-none">Installation</h4>
              <p className="text-sm text-muted-foreground">
                How to install and set up your project
              </p>
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Components</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-[400px] p-4">
          <div className="grid gap-3 p-4">
            <div>
              <h4 className="text-sm font-medium leading-none">UI Components</h4>
              <p className="text-sm text-muted-foreground">
                Pre-built components for faster development
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium leading-none">Hooks</h4>
              <p className="text-sm text-muted-foreground">
                Custom hooks for common functionality
              </p>
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className="block px-4 py-2">Documentation</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}>
              <div className="bg-black/20 p-6 rounded-lg">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[400px] p-4">
                          <div className="grid gap-3 p-4">
                            <div>
                              <h4 className="text-sm font-medium leading-none">Introduction</h4>
                              <p className="text-sm text-muted-foreground">
                                Learn the basics and get started quickly
                              </p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium leading-none">Installation</h4>
                              <p className="text-sm text-muted-foreground">
                                How to install and set up your project
                              </p>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[400px] p-4">
                          <div className="grid gap-3 p-4">
                            <div>
                              <h4 className="text-sm font-medium leading-none">UI Components</h4>
                              <p className="text-sm text-muted-foreground">
                                Pre-built components for faster development
                              </p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium leading-none">Hooks</h4>
                              <p className="text-sm text-muted-foreground">
                                Custom hooks for common functionality
                              </p>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink className="block px-4 py-2">Documentation</NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </NavShowcase>

            {/* Breadcrumbs */}
            <NavShowcase 
              title="Breadcrumbs"
              description="Navigation trail showing the path to the current page"
              code={`<nav className="flex" aria-label="Breadcrumb">
  <ol className="flex items-center space-x-2">
    <li className="inline-flex items-center">
      <a href="#" className="text-gray-400 hover:text-white">
        Home
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <span className="mx-2 text-gray-500">/</span>
        <a href="#" className="text-gray-400 hover:text-white">
          Components
        </a>
      </div>
    </li>
    <li>
      <div className="flex items-center">
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-neon-purple" aria-current="page">Navigation</span>
      </div>
    </li>
  </ol>
</nav>`}>
              <div className="bg-black/20 p-6 rounded-lg">
                <nav className="flex" aria-label="Breadcrumb">
                  <ol className="flex items-center space-x-2">
                    <li className="inline-flex items-center">
                      <a href="#" className="text-gray-400 hover:text-white">
                        Home
                      </a>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <span className="mx-2 text-gray-500">/</span>
                        <a href="#" className="text-gray-400 hover:text-white">
                          Components
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <span className="mx-2 text-gray-500">/</span>
                        <span className="text-neon-purple" aria-current="page">Navigation</span>
                      </div>
                    </li>
                  </ol>
                </nav>
              </div>
            </NavShowcase>
            
            {/* Tabs */}
            <NavShowcase 
              title="Tabs"
              description="Tabbed interface for organizing content"
              code={`<div className="border-b border-white/10">
  <ul className="flex -mb-px">
    <li className="mr-1">
      <a href="#" className="inline-block px-4 py-2 text-neon-purple border-b-2 border-neon-purple">
        Dashboard
      </a>
    </li>
    <li className="mr-1">
      <a href="#" className="inline-block px-4 py-2 text-gray-400 hover:text-white hover:border-b-2 hover:border-white/30">
        Settings
      </a>
    </li>
    <li className="mr-1">
      <a href="#" className="inline-block px-4 py-2 text-gray-400 hover:text-white hover:border-b-2 hover:border-white/30">
        Analytics
      </a>
    </li>
  </ul>
</div>
<div className="p-4">
  <p className="text-sm text-gray-300">Dashboard content goes here</p>
</div>`}>
              <div className="bg-black/20 p-6 rounded-lg">
                <div className="border-b border-white/10">
                  <ul className="flex -mb-px">
                    <li className="mr-1">
                      <a href="#" className="inline-block px-4 py-2 text-neon-purple border-b-2 border-neon-purple">
                        Dashboard
                      </a>
                    </li>
                    <li className="mr-1">
                      <a href="#" className="inline-block px-4 py-2 text-gray-400 hover:text-white hover:border-b-2 hover:border-white/30">
                        Settings
                      </a>
                    </li>
                    <li className="mr-1">
                      <a href="#" className="inline-block px-4 py-2 text-gray-400 hover:text-white hover:border-b-2 hover:border-white/30">
                        Analytics
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-300">Dashboard content goes here</p>
                </div>
              </div>
            </NavShowcase>

            <NavShowcase 
              title="Dropdown Menu"
              description="Toggle menu for displaying additional options"
              code={`<div className="relative">
  <button className="px-4 py-2 bg-neon-purple/20 text-neon-purple rounded-md hover:bg-neon-purple/30 flex items-center">
    Options
    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>
  <div className="absolute mt-2 w-48 rounded-md shadow-lg glass-morphism py-1 border border-white/10">
    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white">
      Account Settings
    </a>
    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white">
      Support
    </a>
    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white">
      License
    </a>
    <div className="border-t border-white/10 my-1"></div>
    <a href="#" className="block px-4 py-2 text-sm text-red-400 hover:bg-white/10">
      Sign out
    </a>
  </div>
</div>`}>
              <div className="bg-black/20 p-6 rounded-lg">
                <div className="relative">
                  <button className="px-4 py-2 bg-neon-purple/20 text-neon-purple rounded-md hover:bg-neon-purple/30 flex items-center">
                    Options
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <div className="absolute mt-2 w-48 rounded-md shadow-lg glass-morphism py-1 border border-white/10">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white">
                      Account Settings
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white">
                      Support
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white">
                      License
                    </a>
                    <div className="border-t border-white/10 my-1"></div>
                    <a href="#" className="block px-4 py-2 text-sm text-red-400 hover:bg-white/10">
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            </NavShowcase>
            
            <NavShowcase 
              title="Pagination"
              description="Navigation controls for paginated content"
              code={`<div className="flex items-center justify-center space-x-1">
  <a href="#" className="px-3 py-1 rounded-md hover:bg-white/10 text-gray-400">
    <span className="sr-only">Previous</span>
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
    </svg>
  </a>
  <a href="#" className="px-3 py-1 rounded-md bg-neon-purple/20 text-neon-purple">1</a>
  <a href="#" className="px-3 py-1 rounded-md hover:bg-white/10 text-gray-300">2</a>
  <a href="#" className="px-3 py-1 rounded-md hover:bg-white/10 text-gray-300">3</a>
  <span className="px-3 py-1 text-gray-500">...</span>
  <a href="#" className="px-3 py-1 rounded-md hover:bg-white/10 text-gray-300">8</a>
  <a href="#" className="px-3 py-1 rounded-md hover:bg-white/10 text-gray-300">9</a>
  <a href="#" className="px-3 py-1 rounded-md hover:bg-white/10 text-gray-400">
    <span className="sr-only">Next</span>
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
    </svg>
  </a>
</div>`}>
              <div className="bg-black/20 p-6 rounded-lg">
                <div className="flex items-center justify-center space-x-1">
                  <a href="#" className="px-3 py-1 rounded-md hover:bg-white/10 text-gray-400">
                    <span className="sr-only">Previous</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </a>
                  <a href="#" className="px-3 py-1 rounded-md bg-neon-purple/20 text-neon-purple">1</a>
                  <a href="#" className="px-3 py-1 rounded-md hover:bg-white/10 text-gray-300">2</a>
                  <a href="#" className="px-3 py-1 rounded-md hover:bg-white/10 text-gray-300">3</a>
                  <span className="px-3 py-1 text-gray-500">...</span>
                  <a href="#" className="px-3 py-1 rounded-md hover:bg-white/10 text-gray-300">8</a>
                  <a href="#" className="px-3 py-1 rounded-md hover:bg-white/10 text-gray-300">9</a>
                  <a href="#" className="px-3 py-1 rounded-md hover:bg-white/10 text-gray-400">
                    <span className="sr-only">Next</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </NavShowcase>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="py-12 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Usage</h2>
          <div className="glass-morphism p-6 rounded-xl overflow-hidden relative group">
            <CopyButton 
              code={`// Import navigation components
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";

// Import 3D navigation components
import { HoloSphereNav } from "@/components/ui/holo-sphere-nav";
import { QuantumPortalNav } from "@/components/ui/quantum-portal-nav";

// Basic Navigation Menu
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
      <NavigationMenuContent>
        {/* Your dropdown content here */}
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink>Documentation</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

// 3D HoloSphere Navigation
<HoloSphereNav 
  items={navItems}
  radius={3}
  coreColor="#9b87f5"
/>

// 3D Quantum Portal Navigation
<QuantumPortalNav items={portalItems} />
`}
              className="opacity-0 group-hover:opacity-100"
            />
            <pre className="text-sm text-gray-300 overflow-auto p-4">
{`// Import navigation components
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";

// Import 3D navigation components
import { HoloSphereNav } from "@/components/ui/holo-sphere-nav";
import { QuantumPortalNav } from "@/components/ui/quantum-portal-nav";

// Basic Navigation Menu
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
      <NavigationMenuContent>
        {/* Your dropdown content here */}
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink>Documentation</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

// 3D HoloSphere Navigation
<HoloSphereNav 
  items={navItems}
  radius={3}
  coreColor="#9b87f5"
/>

// 3D Quantum Portal Navigation
<QuantumPortalNav items={portalItems} />
`}
            </pre>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const NavShowcase = ({ 
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
      <CopyButton code={code} className="opacity-0 group-hover:opacity-100" />
      
      {/* Component info */}
      <div className="p-4 border-b border-white/10">
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      
      {/* Component preview */}
      <div className="p-8 flex items-center justify-center">
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default NavigationComponents;

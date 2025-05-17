
import React from 'react';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import TiltCard from '@/components/ui/tilt-card';
import { GlassCard } from '@/components/ui/glass-card';
import { GradientBorder } from '@/components/ui/gradient-border';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Footer from '@/components/Footer';

const CardComponents = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Card Components
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Beautiful and versatile card components with various styles and effects.
          </p>
        </div>
      </div>

      {/* Component Showcase */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Standard Card */}
            <CardShowcase 
              title="Standard Card"
              description="Basic card component with flexible content areas">
              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description text goes here</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is the main content area of the card where you can place your primary information.</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <button className="text-sm text-blue-500">Cancel</button>
                  <button className="text-sm text-blue-500 font-medium">Continue</button>
                </CardFooter>
              </Card>
            </CardShowcase>

            {/* 3D Tilt Card */}
            <CardShowcase 
              title="3D Tilt Card"
              description="Interactive card with 3D tilt effect">
              <TiltCard className="w-full max-w-md bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border border-white/10 p-6 h-64">
                <div className="flex flex-col h-full justify-center items-center text-center">
                  <h3 className="text-lg font-medium mb-2">3D Tilt Effect</h3>
                  <p className="text-gray-400 text-sm">Move your cursor to see the tilt effect</p>
                </div>
              </TiltCard>
            </CardShowcase>

            {/* Glass Card */}
            <CardShowcase 
              title="Glass Card"
              description="Modern glassmorphism card with blur effect">
              <GlassCard className="w-full max-w-md p-6 h-64">
                <div className="flex flex-col h-full justify-center items-center text-center">
                  <h3 className="text-lg font-medium mb-2">Glass Morphism</h3>
                  <p className="text-gray-400 text-sm">Sleek glassmorphism effect with backdrop blur</p>
                </div>
              </GlassCard>
            </CardShowcase>

            {/* Gradient Border Card */}
            <CardShowcase 
              title="Gradient Border Card"
              description="Card with animated gradient border">
              <GradientBorder className="w-full max-w-md h-64">
                <div className="flex flex-col h-full justify-center items-center text-center p-6">
                  <h3 className="text-lg font-medium mb-2">Gradient Border</h3>
                  <p className="text-gray-400 text-sm">Card with animated gradient border effect</p>
                </div>
              </GradientBorder>
            </CardShowcase>

            {/* Profile Card */}
            <CardShowcase 
              title="Profile Card"
              description="Specialized card for user profiles">
              <Card className="w-full max-w-md">
                <div className="p-6 flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center text-2xl font-bold text-white">
                    JD
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Jane Doe</h3>
                    <p className="text-gray-400 text-sm">UX Designer</p>
                    <div className="flex space-x-2 mt-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-xs text-gray-400">Online</span>
                    </div>
                  </div>
                </div>
                <CardFooter className="bg-black/20 px-6 py-3">
                  <button className="text-sm text-neon-purple">View Profile</button>
                </CardFooter>
              </Card>
            </CardShowcase>

            {/* Image Card with Aspect Ratio */}
            <CardShowcase 
              title="Image Card"
              description="Card with maintained aspect ratio for images">
              <Card className="w-full max-w-md overflow-hidden">
                <AspectRatio ratio={16/9} className="bg-black/20">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Image Placeholder
                  </div>
                </AspectRatio>
                <CardContent>
                  <h3 className="text-lg font-medium mt-2">Card with Image</h3>
                  <p className="text-gray-400 text-sm mt-1">Card with maintained aspect ratio for images</p>
                </CardContent>
              </Card>
            </CardShowcase>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="py-12 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Usage</h2>
          <div className="glass-morphism p-6 rounded-xl overflow-hidden">
            <pre className="text-sm text-gray-300 overflow-auto p-4">
{`// Import card components
import { 
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card";

// Standard Card
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>

// For special cards like TiltCard, GlassCard, etc.
import { TiltCard } from "@/components/ui/tilt-card";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientBorder } from "@/components/ui/gradient-border";
`}
            </pre>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const CardShowcase = ({ 
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

export default CardComponents;


import React from 'react';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { Magnetic } from '@/components/ui/magnetic';
import { Sparkles } from '@/components/ui/sparkles';
import { ArrowRight } from 'lucide-react';
import { CopyButton } from '@/components/ui/copy-button';
import Footer from '@/components/Footer';

const ButtonComponents = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Button Components
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A collection of beautiful, interactive button components for your projects.
          </p>
        </div>
      </div>

      {/* Component Showcase */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Standard Button */}
            <ButtonShowcase 
              title="Standard Button"
              description="Clean, minimal button with multiple variants"
              code={`<Button variant="default">Default Button</Button>
<Button variant="destructive">Destructive Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="ghost">Ghost Button</Button>`}>
              <div className="flex flex-col gap-4">
                <Button variant="default">Default Button</Button>
                <Button variant="destructive">Destructive Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </ButtonShowcase>

            {/* Gradient Button */}
            <ButtonShowcase 
              title="Gradient Button"
              description="Buttons with beautiful gradient backgrounds"
              code={`<GradientButton variant="purple">Purple Gradient</GradientButton>
<GradientButton variant="blue">Blue Gradient</GradientButton>
<GradientButton variant="pink">Pink Gradient</GradientButton>`}>
              <div className="flex flex-col gap-4">
                <GradientButton variant="purple">Purple Gradient</GradientButton>
                <GradientButton variant="blue">Blue Gradient</GradientButton>
                <GradientButton variant="pink">Pink Gradient</GradientButton>
              </div>
            </ButtonShowcase>
            
            {/* Icon Button */}
            <ButtonShowcase 
              title="Icon Button"
              description="Buttons with integrated icons"
              code={`<Button>
  Continue
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>
<Button variant="outline">
  View More
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>
<Button variant="secondary" size="icon">
  <ArrowRight className="h-4 w-4" />
</Button>`}>
              <div className="flex flex-col gap-4">
                <Button>
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">
                  View More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="secondary" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </ButtonShowcase>

            {/* Magnetic Button */}
            <ButtonShowcase 
              title="Magnetic Button"
              description="Button with magnetic cursor attraction effect"
              code={`<Magnetic>
  <Button className="bg-gradient-to-r from-neon-purple to-neon-cyan text-white border border-white/20 px-8 py-6">
    Magnetic Button
  </Button>
</Magnetic>`}>
              <Magnetic>
                <Button className="bg-gradient-to-r from-neon-purple to-neon-cyan text-white border border-white/20 px-8 py-6">
                  Magnetic Button
                </Button>
              </Magnetic>
            </ButtonShowcase>

            {/* Sparkle Button */}
            <ButtonShowcase 
              title="Sparkle Button"
              description="Button with sparkle text effect"
              code={`<Button variant="outline" className="border-neon-purple/50">
  <Sparkles>Sparkle Effect</Sparkles>
</Button>`}>
              <Button variant="outline" className="border-neon-purple/50">
                <Sparkles>Sparkle Effect</Sparkles>
              </Button>
            </ButtonShowcase>

            {/* Size Variants */}
            <ButtonShowcase 
              title="Button Sizes"
              description="Different size variants for buttons"
              code={`<Button size="lg">Large Button</Button>
<Button size="default">Default Size</Button>
<Button size="sm">Small Button</Button>`}>
              <div className="flex flex-col gap-4">
                <Button size="lg">Large Button</Button>
                <Button size="default">Default Size</Button>
                <Button size="sm">Small Button</Button>
              </div>
            </ButtonShowcase>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="py-12 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Usage</h2>
          <div className="glass-morphism p-6 rounded-xl overflow-hidden">
            <pre className="text-sm text-gray-300 overflow-auto p-4">
{`// Import the button component
import { Button } from "@/components/ui/button";

// Use in your component
export default function MyComponent() {
  return (
    <>
      <Button variant="default">Default Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="link">Link Button</Button>
      
      {/* With icon */}
      <Button>
        Continue
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      
      {/* Different sizes */}
      <Button size="lg">Large Button</Button>
      <Button size="default">Default Size</Button>
      <Button size="sm">Small Button</Button>
      <Button size="icon">
        <ArrowRight className="h-4 w-4" />
      </Button>
    </>
  )
}`}
            </pre>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const ButtonShowcase = ({ 
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
      <CopyButton code={code} />
      
      {/* Component info */}
      <div className="p-4 border-b border-white/10">
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      
      {/* Component preview */}
      <div className="p-8 flex items-center justify-center bg-black/20">
        <div className="flex flex-col gap-4 items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ButtonComponents;

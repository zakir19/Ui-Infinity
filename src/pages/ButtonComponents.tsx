
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { GlossyButton } from '@/components/ui/glossy-button';
import { NeumorphicButton } from '@/components/ui/neumorphic-button';
import { GlassButton } from '@/components/ui/glass-button';
import { LoadingButton } from '@/components/ui/loading-button';
import { FloatingActionButton } from '@/components/ui/floating-action-button';
import { Magnetic } from '@/components/ui/magnetic';
import { Sparkles } from '@/components/ui/sparkles';
import { ArrowRight, Plus, Heart, Download, Settings, Share } from 'lucide-react';
import { CopyButton } from '@/components/ui/copy-button';
import Footer from '@/components/Footer';

const ButtonComponents = () => {
  const [loading, setLoading] = useState(false);
  const [toggleActive, setToggleActive] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Button Components
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A comprehensive collection of modern, interactive button components with premium styles and animations.
          </p>
        </div>
      </div>

      {/* Component Showcase */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Standard Buttons */}
            <ButtonShowcase 
              title="Standard Buttons"
              description="Clean, minimal buttons with multiple variants"
              code={`<Button variant="default">Default Button</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>`}>
              <div className="flex flex-col gap-4">
                <Button variant="default">Default Button</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </ButtonShowcase>

            {/* Glossy Buttons */}
            <ButtonShowcase 
              title="Glossy Buttons"
              description="Glossy buttons with reflections and gradient shine"
              code={`<GlossyButton variant="purple">Purple Glossy</GlossyButton>
<GlossyButton variant="pink">Pink Glossy</GlossyButton>
<GlossyButton variant="blue">Blue Glossy</GlossyButton>
<GlossyButton variant="green">Green Glossy</GlossyButton>`}>
              <div className="flex flex-col gap-4">
                <GlossyButton variant="purple">Purple Glossy</GlossyButton>
                <GlossyButton variant="pink">Pink Glossy</GlossyButton>
                <GlossyButton variant="blue">Blue Glossy</GlossyButton>
                <GlossyButton variant="green">Green Glossy</GlossyButton>
              </div>
            </ButtonShowcase>

            {/* Neumorphic Buttons */}
            <ButtonShowcase 
              title="Neumorphic Buttons"
              description="Soft UI with raised and inset effects"
              code={`<NeumorphicButton variant="raised">Raised Button</NeumorphicButton>
<NeumorphicButton variant="inset">Inset Button</NeumorphicButton>
<NeumorphicButton variant="dark">Dark Neumorphic</NeumorphicButton>`}>
              <div className="flex flex-col gap-4">
                <NeumorphicButton variant="raised">Raised Button</NeumorphicButton>
                <NeumorphicButton variant="inset">Inset Button</NeumorphicButton>
                <NeumorphicButton variant="dark">Dark Neumorphic</NeumorphicButton>
              </div>
            </ButtonShowcase>

            {/* Glass Buttons */}
            <ButtonShowcase 
              title="Glass Buttons"
              description="Glassmorphism with blur and transparency effects"
              code={`<GlassButton variant="default">Glass Default</GlassButton>
<GlassButton variant="frosted">Frosted Glass</GlassButton>
<GlassButton variant="tinted">Tinted Glass</GlassButton>
<GlassButton variant="dark">Dark Glass</GlassButton>`}>
              <div className="flex flex-col gap-4">
                <GlassButton variant="default">Glass Default</GlassButton>
                <GlassButton variant="frosted">Frosted Glass</GlassButton>
                <GlassButton variant="tinted">Tinted Glass</GlassButton>
                <GlassButton variant="dark">Dark Glass</GlassButton>
              </div>
            </ButtonShowcase>

            {/* Gradient Buttons */}
            <ButtonShowcase 
              title="Gradient Buttons"
              description="Smooth color transitions and gradients"
              code={`<GradientButton variant="purple">Purple Gradient</GradientButton>
<GradientButton variant="blue">Blue Gradient</GradientButton>
<GradientButton variant="pink">Pink Gradient</GradientButton>
<GradientButton variant="cyan">Cyan Gradient</GradientButton>`}>
              <div className="flex flex-col gap-4">
                <GradientButton variant="purple">Purple Gradient</GradientButton>
                <GradientButton variant="blue">Blue Gradient</GradientButton>
                <GradientButton variant="pink">Pink Gradient</GradientButton>
                <GradientButton variant="cyan">Cyan Gradient</GradientButton>
              </div>
            </ButtonShowcase>

            {/* Icon Buttons */}
            <ButtonShowcase 
              title="Icon Buttons"
              description="Buttons with icons in different positions"
              code={`<Button>
  <Plus className="mr-2 h-4 w-4" />
  Left Icon
</Button>
<Button>
  Right Icon
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>
<Button size="icon">
  <Heart className="h-4 w-4" />
</Button>`}>
              <div className="flex flex-col gap-4">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Left Icon
                </Button>
                <Button>
                  Right Icon
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </ButtonShowcase>

            {/* Loading Buttons */}
            <ButtonShowcase 
              title="Loading Buttons"
              description="Buttons with loading states and spinners"
              code={`<LoadingButton loading={true}>Loading...</LoadingButton>
<LoadingButton 
  loading={loading} 
  onClick={handleLoadingDemo}
  loadingText="Processing..."
>
  Click to Load
</LoadingButton>`}>
              <div className="flex flex-col gap-4">
                <LoadingButton loading={true}>Loading...</LoadingButton>
                <LoadingButton 
                  loading={loading} 
                  onClick={handleLoadingDemo}
                  loadingText="Processing..."
                >
                  Click to Load
                </LoadingButton>
              </div>
            </ButtonShowcase>

            {/* Button Sizes */}
            <ButtonShowcase 
              title="Button Sizes"
              description="Different size variants and shapes"
              code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<GlossyButton shape="pill" variant="purple">Pill Shape</GlossyButton>`}>
              <div className="flex flex-col gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <GlossyButton shape="pill" variant="purple">Pill Shape</GlossyButton>
              </div>
            </ButtonShowcase>

            {/* Interactive Effects */}
            <ButtonShowcase 
              title="Interactive Effects"
              description="Advanced hover and focus effects"
              code={`<Magnetic>
  <Button className="bg-gradient-to-r from-neon-purple to-neon-cyan">
    Magnetic Button
  </Button>
</Magnetic>
<Button variant="outline" className="border-neon-purple/50">
  <Sparkles>Sparkle Effect</Sparkles>
</Button>`}>
              <div className="flex flex-col gap-4">
                <Magnetic>
                  <Button className="bg-gradient-to-r from-neon-purple to-neon-cyan">
                    Magnetic Button
                  </Button>
                </Magnetic>
                <Button variant="outline" className="border-neon-purple/50">
                  <Sparkles>Sparkle Effect</Sparkles>
                </Button>
              </div>
            </ButtonShowcase>

            {/* Toggle Button */}
            <ButtonShowcase 
              title="Toggle Button"
              description="Active/inactive state management"
              code={`<Button 
  variant={toggleActive ? "default" : "outline"}
  onClick={() => setToggleActive(!toggleActive)}
  className={toggleActive ? "bg-neon-purple" : ""}
>
  {toggleActive ? "Active" : "Inactive"}
</Button>`}>
              <div className="flex flex-col gap-4">
                <Button 
                  variant={toggleActive ? "default" : "outline"}
                  onClick={() => setToggleActive(!toggleActive)}
                  className={toggleActive ? "bg-neon-purple" : ""}
                >
                  {toggleActive ? "Active" : "Inactive"}
                </Button>
                <div className="text-xs text-gray-400">
                  State: {toggleActive ? "Active" : "Inactive"}
                </div>
              </div>
            </ButtonShowcase>

            {/* Ripple Effect */}
            <ButtonShowcase 
              title="Ripple Effect"
              description="Material Design ripple on click"
              code={`<Button className="neo-ripple bg-neon-purple">
  Click for Ripple
</Button>
<Button className="neo-ripple bg-gradient-to-r from-neon-purple to-neon-cyan">
  Gradient Ripple
</Button>`}>
              <div className="flex flex-col gap-4">
                <Button className="neo-ripple bg-neon-purple">
                  Click for Ripple
                </Button>
                <Button className="neo-ripple bg-gradient-to-r from-neon-purple to-neon-cyan">
                  Gradient Ripple
                </Button>
              </div>
            </ButtonShowcase>

            {/* Floating Action Button */}
            <ButtonShowcase 
              title="Floating Action Button"
              description="Fixed positioned circular action button"
              code={`<FloatingActionButton 
  variant="purple" 
  position="bottom-right"
>
  <Plus />
</FloatingActionButton>`}>
              <div className="relative h-24 w-full bg-gray-900/20 rounded-lg overflow-hidden">
                <FloatingActionButton 
                  variant="purple" 
                  className="relative bottom-2 right-2"
                >
                  <Plus />
                </FloatingActionButton>
              </div>
            </ButtonShowcase>

          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="py-12 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Usage Examples</h2>
          <div className="glass-morphism p-6 rounded-xl overflow-hidden relative group">
            <CopyButton 
              code={`// Import the button components
import { Button } from "@/components/ui/button";
import { GlossyButton } from "@/components/ui/glossy-button";
import { NeumorphicButton } from "@/components/ui/neumorphic-button";
import { GlassButton } from "@/components/ui/glass-button";
import { LoadingButton } from "@/components/ui/loading-button";
import { FloatingActionButton } from "@/components/ui/floating-action-button";

// Usage examples
export default function MyComponent() {
  const [loading, setLoading] = useState(false);
  
  return (
    <>
      {/* Standard buttons */}
      <Button variant="default">Standard Button</Button>
      
      {/* Glossy buttons with hover effects */}
      <GlossyButton variant="purple" size="lg">
        Glossy Button
      </GlossyButton>
      
      {/* Neumorphic soft UI */}
      <NeumorphicButton variant="raised">
        Neumorphic Button
      </NeumorphicButton>
      
      {/* Glass morphism */}
      <GlassButton variant="frosted" shape="pill">
        Glass Button
      </GlassButton>
      
      {/* Loading state */}
      <LoadingButton 
        loading={loading}
        onClick={() => setLoading(true)}
        loadingText="Processing..."
      >
        Submit Form
      </LoadingButton>
      
      {/* Floating Action Button */}
      <FloatingActionButton variant="purple">
        <Plus />
      </FloatingActionButton>
    </>
  )
}`} 
            />
            <pre className="text-sm text-gray-300 overflow-auto p-4">
{`// Import the button components
import { Button } from "@/components/ui/button";
import { GlossyButton } from "@/components/ui/glossy-button";
import { NeumorphicButton } from "@/components/ui/neumorphic-button";
import { GlassButton } from "@/components/ui/glass-button";
import { LoadingButton } from "@/components/ui/loading-button";
import { FloatingActionButton } from "@/components/ui/floating-action-button";

// Usage examples
export default function MyComponent() {
  const [loading, setLoading] = useState(false);
  
  return (
    <>
      {/* Standard buttons */}
      <Button variant="default">Standard Button</Button>
      
      {/* Glossy buttons with hover effects */}
      <GlossyButton variant="purple" size="lg">
        Glossy Button
      </GlossyButton>
      
      {/* Neumorphic soft UI */}
      <NeumorphicButton variant="raised">
        Neumorphic Button
      </NeumorphicButton>
      
      {/* Glass morphism */}
      <GlassButton variant="frosted" shape="pill">
        Glass Button
      </GlassButton>
      
      {/* Loading state */}
      <LoadingButton 
        loading={loading}
        onClick={() => setLoading(true)}
        loadingText="Processing..."
      >
        Submit Form
      </LoadingButton>
      
      {/* Floating Action Button */}
      <FloatingActionButton variant="purple">
        <Plus />
      </FloatingActionButton>
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


import React from 'react';
import { CopyButton } from '@/components/ui/copy-button';
import Footer from '@/components/Footer';
import { Sparkles } from '@/components/ui/sparkles';

const TypographyComponents = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Typography Components
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Beautiful text styling and typography effects for your UI.
          </p>
        </div>
      </div>

      {/* Component Showcase */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gradient Text */}
            <ComponentShowcase 
              title="Gradient Text"
              description="Text with beautiful color gradients"
              code={`<h2 className="bg-gradient-to-r from-neon-purple to-neon-cyan text-transparent bg-clip-text font-bold text-3xl">
  Gradient Text Heading
</h2>
<p className="bg-gradient-to-r from-neon-pink to-neon-purple text-transparent bg-clip-text">
  This paragraph has a gradient effect
</p>`}>
              <div className="flex flex-col gap-4">
                <h2 className="bg-gradient-to-r from-neon-purple to-neon-cyan text-transparent bg-clip-text font-bold text-3xl">
                  Gradient Text Heading
                </h2>
                <p className="bg-gradient-to-r from-neon-pink to-neon-purple text-transparent bg-clip-text">
                  This paragraph has a gradient effect
                </p>
              </div>
            </ComponentShowcase>

            {/* Sparkle Text */}
            <ComponentShowcase 
              title="Sparkle Text"
              description="Text with animated sparkle effects"
              code={`<Sparkles>
  <h3 className="text-2xl font-bold">Sparkle Heading</h3>
</Sparkles>
<Sparkles>
  <p>This text has sparkles!</p>
</Sparkles>`}>
              <div className="flex flex-col gap-4">
                <Sparkles>
                  <h3 className="text-2xl font-bold">Sparkle Heading</h3>
                </Sparkles>
                <Sparkles>
                  <p>This text has sparkles!</p>
                </Sparkles>
              </div>
            </ComponentShowcase>

            {/* Animated Text */}
            <ComponentShowcase 
              title="Animated Text"
              description="Text with fade-in animations"
              code={`<h2 className="animate-on-scroll opacity-0 text-2xl font-bold">
  Fade In Text
</h2>
<p className="animate-on-scroll opacity-0 delay-100">
  This appears with a slight delay
</p>`}>
              <div className="flex flex-col gap-4">
                <h2 className="animate-fade-in text-2xl font-bold">
                  Fade In Text
                </h2>
                <p className="animate-fade-in delay-100">
                  This appears with a slight delay
                </p>
              </div>
            </ComponentShowcase>

            {/* Glow Text */}
            <ComponentShowcase 
              title="Glow Text"
              description="Text with subtle glow effects"
              code={`<h2 className="text-2xl font-bold text-neon-purple drop-shadow-[0_0_8px_rgba(155,135,245,0.5)]">
  Glowing Purple Text
</h2>
<p className="text-neon-cyan drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]">
  Cyan glow effect
</p>`}>
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-neon-purple drop-shadow-[0_0_8px_rgba(155,135,245,0.5)]">
                  Glowing Purple Text
                </h2>
                <p className="text-neon-cyan drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]">
                  Cyan glow effect
                </p>
              </div>
            </ComponentShowcase>

            {/* Outlined Text */}
            <ComponentShowcase 
              title="Outlined Text"
              description="Text with outline effects"
              code={`<h2 className="text-3xl font-bold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)]">
  Outlined Text
</h2>
<p className="text-transparent [-webkit-text-stroke:0.5px_rgba(155,135,245,0.7)]">
  Thin purple outline
</p>`}>
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)]">
                  Outlined Text
                </h2>
                <p className="text-transparent [-webkit-text-stroke:0.5px_rgba(155,135,245,0.7)]">
                  Thin purple outline
                </p>
              </div>
            </ComponentShowcase>

            {/* Text with Background */}
            <ComponentShowcase 
              title="Text with Background"
              description="Text with stylized backgrounds"
              code={`<h2 className="inline-block bg-neon-purple/20 px-3 py-1 rounded text-neon-purple">
  Highlighted Text
</h2>
<p className="inline-block bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 px-3 py-1 rounded">
  Gradient background
</p>`}>
              <div className="flex flex-col gap-4">
                <h2 className="inline-block bg-neon-purple/20 px-3 py-1 rounded text-neon-purple">
                  Highlighted Text
                </h2>
                <p className="inline-block bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 px-3 py-1 rounded">
                  Gradient background
                </p>
              </div>
            </ComponentShowcase>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="py-12 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Usage</h2>
          <div className="glass-morphism p-6 rounded-xl overflow-hidden relative group">
            <CopyButton 
              code={`// Basic gradient text
<h2 className="bg-gradient-to-r from-neon-purple to-neon-cyan text-transparent bg-clip-text font-bold">
  Gradient Text Heading
</h2>

// Sparkle text effect
import { Sparkles } from '@/components/ui/sparkles';

<Sparkles>
  <h3>Sparkle Heading</h3>
</Sparkles>

// Glow effect text
<p className="text-neon-cyan drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]">
  Cyan glow effect
</p>

// Animated text
<h2 className="animate-fade-in">
  Fade In Text
</h2>`} 
            />
            <pre className="text-sm text-gray-300 overflow-auto p-4">
{`// Basic gradient text
<h2 className="bg-gradient-to-r from-neon-purple to-neon-cyan text-transparent bg-clip-text font-bold">
  Gradient Text Heading
</h2>

// Sparkle text effect
import { Sparkles } from '@/components/ui/sparkles';

<Sparkles>
  <h3>Sparkle Heading</h3>
</Sparkles>

// Glow effect text
<p className="text-neon-cyan drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]">
  Cyan glow effect
</p>

// Animated text
<h2 className="animate-fade-in">
  Fade In Text
</h2>`}
            </pre>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const ComponentShowcase = ({ 
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

export default TypographyComponents;

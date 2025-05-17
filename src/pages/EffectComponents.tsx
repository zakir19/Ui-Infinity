
import React from 'react';
import { Magnetic } from '@/components/ui/magnetic';
import { Spotlight } from '@/components/ui/spotlight';
import { GlassCard } from '@/components/ui/glass-card';
import { Sparkles } from '@/components/ui/sparkles';
import { GradientBorder } from '@/components/ui/gradient-border';
import TiltCard from '@/components/ui/tilt-card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const EffectComponents = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Effect Components
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Beautiful visual effects and animations to enhance your user interface.
          </p>
        </div>
      </div>

      {/* Component Showcase */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Spotlight Effect */}
            <EffectShowcase 
              title="Spotlight Effect"
              description="Interactive spotlight that follows the cursor">
              <Spotlight className="h-72 rounded-2xl">
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-xl font-bold">Spotlight Effect</h3>
                  <p className="text-center text-gray-400 mt-2">
                    Move your cursor to see the spotlight follow it
                  </p>
                </div>
              </Spotlight>
            </EffectShowcase>

            {/* 3D Tilt Effect */}
            <EffectShowcase 
              title="3D Tilt Effect"
              description="Interactive card with 3D tilt effect">
              <TiltCard className="h-72 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border border-white/10 p-8">
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-xl font-bold">3D Tilt Effect</h3>
                  <p className="text-center text-gray-400 mt-2">
                    Move your cursor to see the tilt effect
                  </p>
                </div>
              </TiltCard>
            </EffectShowcase>
            
            {/* Gradient Border */}
            <EffectShowcase 
              title="Gradient Border"
              description="Animated gradient border effect">
              <GradientBorder className="h-72">
                <div className="flex flex-col items-center justify-center h-full w-full p-4">
                  <h3 className="text-xl font-bold">Gradient Border</h3>
                  <p className="text-center text-gray-400 mt-2">
                    Animated gradient border effect
                  </p>
                </div>
              </GradientBorder>
            </EffectShowcase>

            {/* Glass Effect */}
            <EffectShowcase 
              title="Glass Effect"
              description="Modern glassmorphism with blur effect">
              <GlassCard className="h-72 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-xl font-bold">Glass Effect</h3>
                  <p className="text-gray-400 mt-2">
                    Modern glassmorphism effect with backdrop blur
                  </p>
                </div>
              </GlassCard>
            </EffectShowcase>

            {/* Text Sparkles */}
            <EffectShowcase 
              title="Text Sparkles"
              description="Text with animated sparkle effect">
              <div className="h-72 flex items-center justify-center">
                <Sparkles className="text-center">
                  <h3 className="text-3xl font-bold">Sparkle Effect</h3>
                  <p className="text-gray-400 mt-2">
                    Text with animated sparkle effects
                  </p>
                </Sparkles>
              </div>
            </EffectShowcase>

            {/* Magnetic Effect */}
            <EffectShowcase 
              title="Magnetic Effect"
              description="Elements with magnetic cursor attraction">
              <div className="h-72 flex items-center justify-center">
                <Magnetic>
                  <Button className="bg-gradient-to-r from-neon-purple to-neon-cyan text-white border border-white/20 px-8 py-6 text-xl">
                    Magnetic Effect
                  </Button>
                </Magnetic>
              </div>
            </EffectShowcase>

            {/* Parallax Effect */}
            <EffectShowcase 
              title="Parallax Effect"
              description="Layered elements with depth perception">
              <div 
                className="h-72 rounded-2xl overflow-hidden relative" 
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-neon-purple/40 to-neon-cyan/40"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ y: 0 }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">Parallax</h3>
                    <p className="text-gray-400 mt-2">Hover to see the effect</p>
                  </div>
                </motion.div>
              </div>
            </EffectShowcase>

            {/* Hover Scale */}
            <EffectShowcase 
              title="Hover Scale"
              description="Smooth scaling animation on hover">
              <div className="h-72 flex items-center justify-center">
                <motion.div 
                  className="bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border border-white/10 p-8 rounded-xl text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <h3 className="text-xl font-bold">Hover Scale</h3>
                  <p className="text-gray-400 mt-2">
                    Hover to see the scale animation
                  </p>
                </motion.div>
              </div>
            </EffectShowcase>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="py-12 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Usage</h2>
          <div className="glass-morphism p-6 rounded-xl overflow-hidden">
            <pre className="text-sm text-gray-300 overflow-auto p-4">
{`// Import effect components
import { TiltCard } from "@/components/ui/tilt-card";
import { Spotlight } from "@/components/ui/spotlight";
import { GlassCard } from "@/components/ui/glass-card";
import { Magnetic } from "@/components/ui/magnetic";
import { Sparkles } from "@/components/ui/sparkles";
import { GradientBorder } from "@/components/ui/gradient-border";

// 3D Tilt Card
<TiltCard className="bg-gradient-to-br from-purple-400/20 to-cyan-400/20 p-8">
  <h3>Tilt Card Content</h3>
  <p>Move your cursor to see the effect</p>
</TiltCard>

// Spotlight Effect
<Spotlight>
  <div className="h-full flex items-center justify-center">
    <h3>Spotlight Content</h3>
  </div>
</Spotlight>

// Text Sparkles
<Sparkles>
  <h3>Sparkle Text Effect</h3>
</Sparkles>

// Magnetic Effect
<Magnetic>
  <Button>Magnetic Button</Button>
</Magnetic>
`}
            </pre>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const EffectShowcase = ({ 
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

export default EffectComponents;

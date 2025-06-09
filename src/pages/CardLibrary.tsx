
import React from 'react';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import TiltCard from '@/components/ui/tilt-card';
import { GlassCard } from '@/components/ui/glass-card';
import { NeoCard } from '@/components/ui/neo-card';
import { FlipCard } from '@/components/ui/flip-card';
import { ExpandableCard } from '@/components/ui/expandable-card';
import { HoverRevealCard } from '@/components/ui/hover-reveal-card';
import { SwipeableCard } from '@/components/ui/swipeable-card';
import { AuroraCard } from '@/components/ui/aurora-card';
import { GlowCard } from '@/components/ui/glow-card';
import { GradientBorder } from '@/components/ui/gradient-border';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { CopyButton } from '@/components/ui/copy-button';
import { Badge } from '@/components/ui/badge';
import { Heart, MessageCircle, Share, Star, TrendingUp, Users } from 'lucide-react';
import Footer from '@/components/Footer';

const CardLibrary = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Card Component Library
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A comprehensive collection of modern, interactive, and accessible card components for your next project.
          </p>
        </div>
      </div>

      {/* Component Showcase */}
      <section className="py-12">
        <div className="container mx-auto px-4 space-y-16">
          
          {/* Base Card Variants */}
          <CardSection 
            title="📦 Base Card Variants"
            description="Essential card layouts for common use cases"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Standard Card */}
              <CardShowcase 
                title="Standard Card"
                description="Basic card with header, content, and footer"
                code={`<Card className="w-full max-w-md">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
              >
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <CardTitle>Standard Card</CardTitle>
                    <CardDescription>A versatile card component for any content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">This is the main content area where you can place any information.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="default">Get Started</Button>
                  </CardFooter>
                </Card>
              </CardShowcase>

              {/* Profile Card */}
              <CardShowcase 
                title="Profile Card"
                description="User profile with avatar and status"
                code={`<Card className="w-full max-w-md">
  <CardContent className="pt-6">
    <div className="flex items-center space-x-4">
      <Avatar className="h-16 w-16">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="font-semibold">Jane Doe</h3>
        <p className="text-sm text-gray-400">UX Designer</p>
        <Badge variant="outline" className="mt-1">Online</Badge>
      </div>
    </div>
  </CardContent>
</Card>`}
              >
                <Card className="w-full max-w-md">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="bg-gradient-to-br from-neon-purple to-neon-cyan text-white font-bold">JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-white">Jane Doe</h3>
                        <p className="text-sm text-gray-400">UX Designer</p>
                        <Badge variant="outline" className="mt-1 border-green-500 text-green-400">Online</Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View Profile</Button>
                  </CardFooter>
                </Card>
              </CardShowcase>

              {/* Image Card */}
              <CardShowcase 
                title="Image Card"
                description="Card with aspect ratio maintained image"
                code={`<Card className="w-full max-w-md overflow-hidden">
  <AspectRatio ratio={16/9}>
    <div className="w-full h-full bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20" />
  </AspectRatio>
  <CardContent>
    <h3 className="font-semibold">Image Card</h3>
    <p className="text-sm text-gray-400">Perfect for showcasing visual content</p>
  </CardContent>
</Card>`}
              >
                <Card className="w-full max-w-md overflow-hidden">
                  <AspectRatio ratio={16/9}>
                    <div className="w-full h-full bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center">
                      <span className="text-gray-400">16:9 Image Placeholder</span>
                    </div>
                  </AspectRatio>
                  <CardContent>
                    <h3 className="font-semibold text-white mt-2">Image Card</h3>
                    <p className="text-sm text-gray-400">Perfect for showcasing visual content with maintained aspect ratios</p>
                  </CardContent>
                </Card>
              </CardShowcase>
            </div>
          </CardSection>

          {/* Visual Styles */}
          <CardSection 
            title="🧊 Visual Styles"
            description="Modern card designs with unique visual effects"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Glass Card */}
              <CardShowcase 
                title="Glassmorphism Card"
                description="Frosted glass effect with blur"
                code={`<GlassCard className="w-full max-w-md p-6">
  <h3 className="text-lg font-semibold mb-2">Glass Effect</h3>
  <p className="text-gray-300">Beautiful glassmorphism with backdrop blur</p>
</GlassCard>`}
              >
                <GlassCard className="w-full max-w-md p-6 h-48">
                  <div className="flex flex-col justify-center h-full">
                    <h3 className="text-lg font-semibold text-white mb-2">Glass Effect</h3>
                    <p className="text-gray-300">Beautiful glassmorphism design with backdrop blur and transparency</p>
                  </div>
                </GlassCard>
              </CardShowcase>

              {/* Neumorphism Card */}
              <CardShowcase 
                title="Neumorphism Card"
                description="Soft UI with raised/inset shadows"
                code={`<NeoCard variant="raised" className="w-full max-w-md p-6">
  <h3 className="text-lg font-semibold mb-2">Soft UI</h3>
  <p className="text-gray-600">Neumorphic design with soft shadows</p>
</NeoCard>`}
              >
                <NeoCard variant="raised" className="w-full max-w-md p-6 h-48">
                  <div className="flex flex-col justify-center h-full">
                    <h3 className="text-lg font-semibold mb-2">Soft UI</h3>
                    <p className="text-gray-600 dark:text-gray-400">Neumorphic design with soft, natural shadows</p>
                  </div>
                </NeoCard>
              </CardShowcase>

              {/* Aurora Card */}
              <CardShowcase 
                title="Aurora Card"
                description="Animated gradient background"
                code={`<AuroraCard variant="default" className="w-full max-w-md p-6">
  <h3 className="text-lg font-semibold text-white mb-2">Aurora Effect</h3>
  <p className="text-gray-300">Dynamic aurora-like background</p>
</AuroraCard>`}
              >
                <AuroraCard variant="default" className="w-full max-w-md p-6 h-48">
                  <div className="flex flex-col justify-center h-full">
                    <h3 className="text-lg font-semibold text-white mb-2">Aurora Effect</h3>
                    <p className="text-gray-300">Dynamic aurora-like animated background with shifting colors</p>
                  </div>
                </AuroraCard>
              </CardShowcase>
            </div>
          </CardSection>

          {/* Interactive Cards */}
          <CardSection 
            title="🧠 Interactive & Advanced Cards"
            description="Cards with engaging interactions and animations"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 3D Tilt Card */}
              <CardShowcase 
                title="3D Tilt Card"
                description="Mouse-responsive 3D tilt effect"
                code={`<TiltCard className="w-full max-w-md bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border border-white/10 p-6">
  <h3 className="text-lg font-semibold mb-2">3D Tilt</h3>
  <p>Move your cursor to see the effect</p>
</TiltCard>`}
              >
                <TiltCard className="w-full max-w-md bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border border-white/10 p-6 h-48">
                  <div className="flex flex-col justify-center h-full">
                    <h3 className="text-lg font-semibold text-white mb-2">3D Tilt Effect</h3>
                    <p className="text-gray-300">Move your cursor over this card to see the interactive 3D tilt</p>
                  </div>
                </TiltCard>
              </CardShowcase>

              {/* Flip Card */}
              <CardShowcase 
                title="Flip Card"
                description="Front/back content with flip animation"
                code={`<FlipCard
  frontContent={<div className="p-6 bg-neon-purple/20 h-full flex items-center justify-center">Front</div>}
  backContent={<div className="p-6 bg-neon-cyan/20 h-full flex items-center justify-center">Back</div>}
  trigger="hover"
/>`}
              >
                <FlipCard
                  className="w-full max-w-md"
                  frontContent={
                    <div className="p-6 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 h-full flex flex-col items-center justify-center border border-white/10 rounded-xl">
                      <h3 className="text-lg font-semibold text-white mb-2">Front Side</h3>
                      <p className="text-gray-300 text-center">Hover to flip this card and see the back content</p>
                    </div>
                  }
                  backContent={
                    <div className="p-6 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 h-full flex flex-col items-center justify-center border border-white/10 rounded-xl">
                      <h3 className="text-lg font-semibold text-white mb-2">Back Side</h3>
                      <p className="text-gray-300 text-center">This is the hidden content revealed on flip!</p>
                    </div>
                  }
                  trigger="hover"
                />
              </CardShowcase>

              {/* Hover Reveal Card */}
              <CardShowcase 
                title="Hover Reveal Card"
                description="Content reveals on hover"
                code={`<HoverRevealCard
  revealContent={<div className="text-center text-white">Revealed!</div>}
>
  <div className="p-6 bg-black/40 h-48">Base content</div>
</HoverRevealCard>`}
              >
                <HoverRevealCard
                  className="w-full max-w-md h-48"
                  revealContent={
                    <div className="text-center text-white">
                      <h3 className="text-lg font-semibold mb-2">Revealed Content!</h3>
                      <p>This content appears on hover with a smooth animation</p>
                    </div>
                  }
                >
                  <div className="p-6 bg-black/40 h-full flex flex-col justify-center border border-white/10 rounded-xl">
                    <h3 className="text-lg font-semibold text-white mb-2">Hover to Reveal</h3>
                    <p className="text-gray-300">Hidden content will slide up when you hover over this card</p>
                  </div>
                </HoverRevealCard>
              </CardShowcase>
            </div>
          </CardSection>

          {/* Special Effects */}
          <CardSection 
            title="✨ Special Effects"
            description="Cards with unique visual treatments"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Glow Card */}
              <CardShowcase 
                title="Glow Card"
                description="Animated glow border effect"
                code={`<GlowCard glowColor="purple" animated className="w-full max-w-md p-6">
  <h3 className="text-lg font-semibold text-white mb-2">Glow Effect</h3>
  <p className="text-gray-300">Card with animated glow border</p>
</GlowCard>`}
              >
                <GlowCard glowColor="purple" animated className="w-full max-w-md p-6 h-48">
                  <div className="flex flex-col justify-center h-full">
                    <h3 className="text-lg font-semibold text-white mb-2">Glow Effect</h3>
                    <p className="text-gray-300">This card has an animated glow border that responds to hover</p>
                  </div>
                </GlowCard>
              </CardShowcase>

              {/* Gradient Border Card */}
              <CardShowcase 
                title="Gradient Border"
                description="Animated gradient border"
                code={`<GradientBorder className="w-full max-w-md p-6">
  <h3 className="text-lg font-semibold text-white mb-2">Gradient Border</h3>
  <p className="text-gray-300">Animated gradient border effect</p>
</GradientBorder>`}
              >
                <GradientBorder className="w-full max-w-md p-6 h-48">
                  <div className="flex flex-col justify-center h-full">
                    <h3 className="text-lg font-semibold text-white mb-2">Gradient Border</h3>
                    <p className="text-gray-300">Beautiful animated gradient border that continuously flows</p>
                  </div>
                </GradientBorder>
              </CardShowcase>

              {/* Expandable Card */}
              <CardShowcase 
                title="Expandable Card"
                description="Click to expand content"
                code={`<ExpandableCard
  title="Expandable Card"
  preview={<p>Click to expand...</p>}
  expandedContent={<div>Expanded content here!</div>}
/>`}
              >
                <ExpandableCard
                  className="w-full max-w-md"
                  title="Expandable Card"
                  preview={
                    <div className="text-gray-300">
                      <p>This card can expand to show more content. Click the arrow to see more!</p>
                    </div>
                  }
                  expandedContent={
                    <div className="text-gray-300 space-y-2">
                      <p>Here's the expanded content that was hidden!</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Feature 1: Advanced functionality</li>
                        <li>Feature 2: Beautiful animations</li>
                        <li>Feature 3: Responsive design</li>
                      </ul>
                    </div>
                  }
                />
              </CardShowcase>
            </div>
          </CardSection>

          {/* Usage Examples */}
          <CardSection 
            title="🎯 Real-World Examples"
            description="Practical card implementations for common scenarios"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Stats Card */}
              <CardShowcase 
                title="Stats Card"
                description="Display metrics and KPIs"
                code={`<Card className="w-full max-w-md">
  <CardContent className="pt-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-400">Total Users</p>
        <p className="text-2xl font-bold">12,345</p>
      </div>
      <TrendingUp className="h-8 w-8 text-green-500" />
    </div>
  </CardContent>
</Card>`}
              >
                <Card className="w-full max-w-md">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Total Users</p>
                        <p className="text-2xl font-bold text-white">12,345</p>
                        <p className="text-xs text-green-400">+12% from last month</p>
                      </div>
                      <TrendingUp className="h-8 w-8 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Active Sessions</p>
                        <p className="text-2xl font-bold text-white">1,234</p>
                      </div>
                      <Users className="h-8 w-8 text-blue-500" />
                    </div>
                  </CardContent>
                </Card>
              </CardShowcase>

              {/* Social Media Card */}
              <CardShowcase 
                title="Social Media Card"
                description="Post-style card with interactions"
                code={`<Card className="w-full max-w-md">
  <CardHeader>
    <div className="flex items-center space-x-3">
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-semibold">John Doe</p>
        <p className="text-xs text-gray-400">2 hours ago</p>
      </div>
    </div>
  </CardHeader>
  <CardContent>
    <p>Just launched my new project!</p>
  </CardContent>
  <CardFooter>
    <div className="flex space-x-4">
      <Button variant="ghost" size="sm">
        <Heart className="h-4 w-4 mr-1" /> 42
      </Button>
    </div>
  </CardFooter>
</Card>`}
              >
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-to-r from-neon-purple to-neon-cyan text-white">JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-white">John Doe</p>
                        <p className="text-xs text-gray-400">2 hours ago</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">Just launched my new project! Really excited to share this with the community. 🚀</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex space-x-4">
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400">
                        <Heart className="h-4 w-4 mr-1" /> 42
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400">
                        <MessageCircle className="h-4 w-4 mr-1" /> 8
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-green-400">
                        <Share className="h-4 w-4 mr-1" /> Share
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </CardShowcase>

              {/* Product Card */}
              <CardShowcase 
                title="Product Card"
                description="E-commerce style product display"
                code={`<Card className="w-full max-w-md overflow-hidden">
  <AspectRatio ratio={4/3}>
    <div className="w-full h-full bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20" />
  </AspectRatio>
  <CardContent>
    <h3 className="font-semibold">Product Name</h3>
    <p className="text-sm text-gray-400">Product description</p>
    <p className="text-lg font-bold mt-2">$99.99</p>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Add to Cart</Button>
  </CardFooter>
</Card>`}
              >
                <Card className="w-full max-w-md overflow-hidden">
                  <AspectRatio ratio={4/3}>
                    <div className="w-full h-full bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center">
                      <span className="text-gray-400">Product Image</span>
                    </div>
                  </AspectRatio>
                  <CardContent>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-white">Premium Headphones</h3>
                        <p className="text-sm text-gray-400">Wireless noise-cancelling</p>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-xs text-gray-400 ml-1">4.9</span>
                      </div>
                    </div>
                    <p className="text-lg font-bold text-white mt-2">$199.99</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
              </CardShowcase>
            </div>
          </CardSection>
        </div>
      </section>

      {/* Usage Guide */}
      <section className="py-12 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Usage Guide</h2>
          <div className="glass-morphism p-6 rounded-xl overflow-hidden relative group">
            <CopyButton 
              code={`// Import the card components you need
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GlassCard } from "@/components/ui/glass-card";
import TiltCard from "@/components/ui/tilt-card";
import { FlipCard } from "@/components/ui/flip-card";

// Basic usage
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Your content here
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>

// Advanced cards
<TiltCard className="p-6 bg-gradient-to-br from-purple-500/20 to-cyan-500/20">
  Interactive 3D content
</TiltCard>

<GlassCard className="p-6">
  Glassmorphism content
</GlassCard>`}
              className="opacity-0 group-hover:opacity-100" 
            />
            <pre className="text-sm text-gray-300 overflow-auto">
{`// Import the card components you need
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GlassCard } from "@/components/ui/glass-card";
import TiltCard from "@/components/ui/tilt-card";
import { FlipCard } from "@/components/ui/flip-card";

// Basic usage
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Your content here
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>

// Advanced cards
<TiltCard className="p-6 bg-gradient-to-br from-purple-500/20 to-cyan-500/20">
  Interactive 3D content
</TiltCard>

<GlassCard className="p-6">
  Glassmorphism content
</GlassCard>`}
            </pre>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const CardSection = ({ 
  title, 
  description, 
  children 
}: { 
  title: string; 
  description: string; 
  children: React.ReactNode;
}) => {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-400">{description}</p>
      </div>
      {children}
    </div>
  );
};

const CardShowcase = ({ 
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
      <CopyButton code={code} className="opacity-0 group-hover:opacity-100" />
      
      <div className="p-4 border-b border-white/10">
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      
      <div className="p-8 flex items-center justify-center bg-black/20">
        <div className="w-full flex justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardLibrary;

# UIinfinity Components Documentation

## Table of Contents

1. [Core Components](#core-components)
2. [Layout Components](#layout-components)
3. [Animation Components](#animation-components)
4. [Experimental Components](#experimental-components)
5. [UI Components](#ui-components)
6. [Special Effect Components](#special-effect-components)
7. [Hooks](#hooks)
8. [Utilities](#utilities)

## Core Components

### Button
A versatile button component with multiple variants and animations.

```tsx
import { Button } from '@uiinfinity/components';

<Button 
  variant="default" 
  size="md" 
  onClick={() => console.log('clicked')}
>
  Click Me
</Button>
```

**Props:**
- `variant`: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean
- `children`: ReactNode

### Card
A flexible card container with customizable styling.

```tsx
import { Card } from '@uiinfinity/components';

<Card className="p-6 bg-gray-800 border-gray-700">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

### Input
A form input component with validation support.

```tsx
import { Input } from '@uiinfinity/components';

<Input 
  type="email"
  placeholder="Enter your email"
  className="w-full"
  required
/>
```

### Modal
A modal dialog component with backdrop and animations.

```tsx
import { Modal } from '@uiinfinity/components';

<Modal
  trigger={<Button>Open Modal</Button>}
  title="Example Modal"
  description="This is a sample modal"
>
  <div className="p-4">
    <p>Modal content goes here!</p>
  </div>
</Modal>
```

## Layout Components

### Navbar
A responsive navigation bar with animations and mobile menu.

```tsx
import { Navbar } from '@uiinfinity/components';

<Navbar 
  logo="UIinfinity"
  links={[
    { href: '/', label: 'Home' },
    { href: '/components', label: 'Components' },
    { href: '/docs', label: 'Documentation' }
  ]}
/>
```

### Footer
A footer component with social links and contact form.

```tsx
import { Footer } from '@uiinfinity/components';

<Footer 
  brandName="UIinfinity"
  description="Beautiful UI components with smooth animations"
  socialLinks={[
    { platform: 'github', url: 'https://github.com/zakir19' },
    { platform: 'twitter', url: 'https://twitter.com' },
    { platform: 'linkedin', url: 'https://linkedin.com' }
  ]}
/>
```

### HeroSection
A hero section with 3D effects and call-to-action.

```tsx
import { HeroSection } from '@uiinfinity/components';

<HeroSection
  title="Welcome to UIinfinity"
  subtitle="Beautiful components with stunning effects"
  ctaText="Get Started"
  onCtaClick={() => console.log('CTA clicked')}
/>
```

## Animation Components

### AqueousRippleButton
A button with water ripple animation effect.

```tsx
import { AqueousRippleButton } from '@uiinfinity/components';

<AqueousRippleButton 
  className="px-6 py-3 bg-blue-500 text-white"
  onClick={() => console.log('ripple effect')}
>
  Ripple Effect
</AqueousRippleButton>
```

### GoboLightCard
A card with light projection effects.

```tsx
import { GoboLightCard } from '@uiinfinity/components';

<GoboLightCard className="w-64 h-48">
  <div className="p-6">
    <h3>Light Projection</h3>
    <p>Beautiful light effects</p>
  </div>
</GoboLightCard>
```

### SilkCurtainDemo
A silk curtain animation component.

```tsx
import { SilkCurtainDemo } from '@uiinfinity/components';

<SilkCurtainDemo>
  <div className="p-8">
    <h2>Silk Curtain Effect</h2>
    <p>Content behind the curtain</p>
  </div>
</SilkCurtainDemo>
```

### SmokeFogModal
A modal with smoke and fog effects.

```tsx
import { SmokeFogModal } from '@uiinfinity/components';

<SmokeFogModal
  trigger={<Button>Open Smoke Modal</Button>}
  title="Smoke & Fog"
>
  <div className="p-6">
    <p>Content with smoke effects</p>
  </div>
</SmokeFogModal>
```

## Experimental Components

### BioluminescentCursor
A glowing cursor effect component.

```tsx
import { BioluminescentCursor } from '@uiinfinity/components';

<BioluminescentCursor 
  color="#00ff88"
  size={20}
  trailLength={10}
/>
```

### CrystalBloomModal
A modal with crystal growth animation.

```tsx
import { CrystalBloomModal } from '@uiinfinity/components';

<CrystalBloomModal
  trigger={<Button>Crystal Modal</Button>}
  bloomDuration={2000}
>
  <div className="p-6">
    <h3>Crystal Bloom Effect</h3>
  </div>
</CrystalBloomModal>
```

### FerroFormInput
An input with ferrofluid animation effects.

```tsx
import { FerroFormInput } from '@uiinfinity/components';

<FerroFormInput
  placeholder="Type with ferrofluid effect"
  className="w-full"
/>
```

### FlockingList
A list with flocking animation behavior.

```tsx
import { FlockingList } from '@uiinfinity/components';

<FlockingList
  items={['Item 1', 'Item 2', 'Item 3']}
  flockingSpeed={0.5}
  separationDistance={50}
/>
```

### InkBloomTransition
A page transition with ink bloom effect.

```tsx
import { InkBloomTransition } from '@uiinfinity/components';

<InkBloomTransition
  isActive={isTransitioning}
  color="#ff0066"
  duration={1000}
>
  <div>Page content</div>
</InkBloomTransition>
```

## UI Components

### Standard UI Components

#### Accordion
```tsx
import { Accordion } from '@uiinfinity/components';

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
  </AccordionItem>
</Accordion>
```

#### Alert
```tsx
import { Alert } from '@uiinfinity/components';

<Alert>
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
</Alert>
```

#### Dialog
```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@uiinfinity/components';

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Edit Profile</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
    </DialogHeader>
    {/* Dialog content */}
  </DialogContent>
</Dialog>
```

#### Form
```tsx
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@uiinfinity/components';

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </form>
</Form>
```

## Special Effect Components

### AuroraButton
A button with aurora borealis effect.

```tsx
import { AuroraButton } from '@uiinfinity/components';

<AuroraButton 
  className="px-6 py-3 text-white font-medium"
  auroraColors={['#ff0066', '#00ff88', '#0066ff']}
  onClick={() => console.log('aurora clicked')}
>
  Aurora Effect
</AuroraButton>
```

### ClayButton
A button with clay morphing animation.

```tsx
import { ClayButton } from '@uiinfinity/components';

<ClayButton 
  className="px-6 py-3 bg-orange-500 text-white"
  morphingSpeed={0.3}
>
  Clay Morphing
</ClayButton>
```

### GlassButton
A button with glass morphism effect.

```tsx
import { GlassButton } from '@uiinfinity/components';

<GlassButton 
  className="px-6 py-3 text-white"
  blurAmount={10}
  transparency={0.2}
>
  Glass Effect
</GlassButton>
```

### GlowCard
A card with glowing neon effects.

```tsx
import { GlowCard } from '@uiinfinity/components';

<GlowCard 
  className="p-6 bg-gradient-to-r from-purple-500 to-pink-500"
  glowColor="#ff0066"
  glowIntensity={0.8}
>
  <h3 className="text-white font-bold">Glowing Card</h3>
</GlowCard>
```

### HoloSphereNav
A holographic sphere navigation component.

```tsx
import { HoloSphereNav } from '@uiinfinity/components';

<HoloSphereNav
  items={[
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'about', label: 'About', icon: UserIcon },
    { id: 'contact', label: 'Contact', icon: MailIcon }
  ]}
  sphereSize={200}
  rotationSpeed={0.01}
/>
```

### LiquidButton
A button with liquid animation effects.

```tsx
import { LiquidButton } from '@uiinfinity/components';

<LiquidButton 
  className="px-6 py-3 bg-blue-500 text-white"
  liquidColor="#ffffff"
  animationSpeed={1.5}
>
  Liquid Animation
</LiquidButton>
```

### NeonGridField
An input field with neon grid effects.

```tsx
import { NeonGridField } from '@uiinfinity/components';

<NeonGridField
  placeholder="Type with neon grid effect"
  className="w-full"
  gridColor="#00ff88"
  pulseSpeed={2}
/>
```

### QuantumPortalNav
A quantum portal navigation component.

```tsx
import { QuantumPortalNav } from '@uiinfinity/components';

<QuantumPortalNav
  portals={[
    { id: 'portal1', label: 'Portal 1', destination: '/page1' },
    { id: 'portal2', label: 'Portal 2', destination: '/page2' }
  ]}
  portalSize={150}
  quantumEffect={true}
/>
```

### ThreeDButton
A 3D button with depth and perspective.

```tsx
import { ThreeDButton } from '@uiinfinity/components';

<ThreeDButton 
  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white"
  depth={20}
  perspective={1000}
>
  3D Button
</ThreeDButton>
```

### TiltCard
A card with 3D tilt effect on hover.

```tsx
import { TiltCard } from '@uiinfinity/components';

<TiltCard 
  className="w-64 h-48 bg-gradient-to-br from-purple-500 to-pink-500"
  maxTilt={15}
  perspective={1000}
>
  <div className="p-6 text-white">
    <h3 className="text-xl font-bold">3D Tilt Card</h3>
    <p>Hover to see the effect!</p>
  </div>
</TiltCard>
```

## Hooks

### useToast
A hook for displaying toast notifications.

```tsx
import { useToast } from '@uiinfinity/components';

function MyComponent() {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "Success!",
      description: "Action completed successfully",
      variant: "default", // or "destructive"
    });
  };

  return <Button onClick={handleClick}>Show Toast</Button>;
}
```

### useMobile
A hook to detect mobile devices.

```tsx
import { useMobile } from '@uiinfinity/components';

function ResponsiveComponent() {
  const isMobile = useMobile();

  return (
    <div className={isMobile ? 'p-4' : 'p-8'}>
      {isMobile ? 'Mobile Layout' : 'Desktop Layout'}
    </div>
  );
}
```

## Utilities

### cn (className utility)
A utility function for combining class names.

```tsx
import { cn } from '@uiinfinity/components';

<div className={cn(
  "base-class",
  condition && "conditional-class",
  "another-class"
)}>
  Content
</div>
```

## Styling and Theming

### Tailwind CSS Integration
All components are built with Tailwind CSS. Make sure to include the library's styles in your Tailwind config:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@uiinfinity/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#a855f7',
        'neon-pink': '#ec4899',
        'neon-blue': '#3b82f6',
      },
      animation: {
        'aurora': 'aurora 2s ease-in-out infinite alternate',
        'liquid': 'liquid 1s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      }
    }
  }
}
```

### Custom CSS Variables
You can customize the appearance using CSS variables:

```css
:root {
  --uiinfinity-primary: #a855f7;
  --uiinfinity-secondary: #ec4899;
  --uiinfinity-accent: #3b82f6;
  --uiinfinity-background: #0f0f23;
  --uiinfinity-foreground: #ffffff;
}
```

## Performance Optimization

### Tree Shaking
The library is fully tree-shakable. Only import the components you need:

```tsx
// ✅ Good - Only imports what you need
import { Button, Card } from '@uiinfinity/components';

// ❌ Avoid - Imports everything
import * as UIinfinity from '@uiinfinity/components';
```

### Lazy Loading
For better performance, consider lazy loading heavy components:

```tsx
import { lazy, Suspense } from 'react';

const ThreeScene = lazy(() => import('@uiinfinity/components').then(m => ({ default: m.ThreeScene })));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThreeScene />
    </Suspense>
  );
}
```

## Accessibility

All components are built with accessibility in mind:

- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Color contrast compliance

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

### Common Issues

1. **Styles not loading**: Make sure Tailwind CSS is properly configured
2. **Animations not working**: Check if Framer Motion is installed
3. **3D effects not showing**: Ensure Three.js is available
4. **TypeScript errors**: Update to the latest version of TypeScript

### Getting Help

- 📧 Email: support@uiinfinity.com
- 🐛 Issues: [GitHub Issues](https://github.com/zakir19/uiinfinity-components/issues)
- 💬 Discord: [Join our community](https://discord.gg/uiinfinity)

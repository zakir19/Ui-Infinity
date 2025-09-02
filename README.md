# UIinfinity Components

A beautiful React component library with smooth animations and stunning 3D effects. Built with TypeScript, Tailwind CSS, and Framer Motion.

![UIinfinity](https://img.shields.io/badge/UIinfinity-1.0.0-blue)
![React](https://img.shields.io/badge/React-18+-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🎨 **100+ Beautiful Components** - From basic UI elements to advanced 3D effects
- 🎭 **Smooth Animations** - Powered by Framer Motion and GSAP
- 🌟 **3D Effects** - Three.js integration for stunning visual effects
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🔧 **TypeScript Support** - Full type safety and IntelliSense
- 🎯 **Accessible** - Built with accessibility in mind using Radix UI
- ⚡ **Performance Optimized** - Tree-shakable and optimized for production

## 🚀 Installation

```bash
npm install @uiinfinity/components
```

Or with yarn:

```bash
yarn add @uiinfinity/components
```

## 📦 Peer Dependencies

Make sure you have these peer dependencies installed:

```bash
npm install react react-dom
```

## 🎯 Quick Start

```tsx
import { Button, Card, AuroraButton } from '@uiinfinity/components';

function App() {
  return (
    <div className="p-8">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to UIinfinity</h1>
        <Button>Standard Button</Button>
        <AuroraButton>Aurora Effect Button</AuroraButton>
      </Card>
    </div>
  );
}
```

## 🎨 Component Categories

### Core Components
- `Button` - Standard button with variants
- `Card` - Flexible card container
- `Input` - Form input with validation
- `Modal` - Modal dialog component
- `CopyCodeButton` - Copy code to clipboard

### Layout Components
- `Navbar` - Navigation bar with animations
- `Footer` - Footer with social links
- `HeroSection` - Hero section with 3D effects
- `PageTransition` - Smooth page transitions
- `Preloader` - Loading screen with animations

### Animation Components
- `AqueousRippleButton` - Water ripple effect button
- `GoboLightCard` - Light projection card
- `SilkCurtainDemo` - Silk curtain animation
- `SmokeFogModal` - Smoke and fog modal effect

### Experimental Components
- `BioluminescentCursor` - Glowing cursor effect
- `CrystalBloomModal` - Crystal growth modal
- `FerroFormInput` - Ferrofluid input effect
- `FlockingList` - Flocking animation list
- `InkBloomTransition` - Ink bloom page transition

### Special Effect UI Components
- `AuroraButton` - Aurora borealis effect
- `ClayButton` - Clay morphing button
- `GlassButton` - Glass morphism effect
- `GlowCard` - Glowing card with neon effects
- `HoloSphereNav` - Holographic sphere navigation
- `LiquidButton` - Liquid animation button
- `NeonGridField` - Neon grid input field
- `QuantumPortalNav` - Quantum portal navigation
- `ThreeDButton` - 3D button with depth

### Standard UI Components
- `Accordion` - Collapsible content sections
- `Alert` - Alert messages with variants
- `Dialog` - Modal dialogs
- `DropdownMenu` - Dropdown menus
- `Form` - Form components with validation
- `Tabs` - Tabbed content
- `Toast` - Toast notifications
- And many more...

## 🎭 Animation Examples

### Aurora Button Effect
```tsx
import { AuroraButton } from '@uiinfinity/components';

<AuroraButton 
  className="px-6 py-3 text-white font-medium"
  onClick={() => console.log('Aurora clicked!')}
>
  Aurora Effect
</AuroraButton>
```

### Liquid Button Animation
```tsx
import { LiquidButton } from '@uiinfinity/components';

<LiquidButton 
  className="px-6 py-3 bg-blue-500 text-white"
  onClick={() => console.log('Liquid clicked!')}
>
  Liquid Animation
</LiquidButton>
```

### 3D Card with Tilt Effect
```tsx
import { TiltCard } from '@uiinfinity/components';

<TiltCard className="w-64 h-48 bg-gradient-to-br from-purple-500 to-pink-500">
  <div className="p-6 text-white">
    <h3 className="text-xl font-bold">3D Tilt Card</h3>
    <p>Hover to see the 3D effect!</p>
  </div>
</TiltCard>
```

## 🎨 Customization

### Tailwind CSS Integration
The components are built with Tailwind CSS. Make sure to include Tailwind in your project:

```bash
npm install tailwindcss
```

### Custom Themes
You can customize the appearance by extending your Tailwind config:

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
      }
    }
  }
}
```

## 🔧 Advanced Usage

### Custom Hooks
```tsx
import { useToast, useMobile } from '@uiinfinity/components';

function MyComponent() {
  const { toast } = useToast();
  const isMobile = useMobile();

  const handleClick = () => {
    toast({
      title: "Success!",
      description: "Action completed successfully",
    });
  };

  return (
    <button onClick={handleClick}>
      Show Toast
    </button>
  );
}
```

### 3D Scene Integration
```tsx
import { ThreeScene } from '@uiinfinity/components';

<ThreeScene className="w-full h-96">
  {/* Your 3D content here */}
</ThreeScene>
```

## 📚 Documentation

For detailed documentation and examples, visit our [documentation site](https://uiinfinity.com/docs).

## 🤝 Contributing

We welcome contributions! Please see our [contributing guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Three.js](https://threejs.org/) for 3D effects
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide React](https://lucide.dev/) for icons

## 📞 Support

- 📧 Email: support@uiinfinity.com
- 🐛 Issues: [GitHub Issues](https://github.com/zakir19/uiinfinity-components/issues)
- 💬 Discord: [Join our community](https://discord.gg/uiinfinity)

---

Made with ❤️ by [Zakir Husain Patel](https://github.com/zakir19)

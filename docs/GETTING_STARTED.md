# Getting Started with UIinfinity Components

Welcome to UIinfinity Components! This guide will help you get up and running with the most advanced React component library in just a few minutes.

## 🚀 Installation

### Prerequisites

Before installing UIinfinity Components, make sure you have:

- **Node.js** 18.0.0 or higher
- **npm** 8.0.0 or higher (or **yarn** 1.22.0+, **pnpm** 7.0.0+)
- **React** 18.0.0 or higher
- **TypeScript** 4.9.0 or higher (recommended)

### Install the Package

```bash
# Using npm
npm install uiinfinity-components

# Using yarn
yarn add uiinfinity-components

# Using pnpm
pnpm add uiinfinity-components
```

### Install Peer Dependencies

UIinfinity Components requires these peer dependencies:

```bash
npm install framer-motion gsap lucide-react
```

## 🎯 Quick Start

### 1. Basic Setup

Create a new React project or add to your existing one:

```tsx
// App.tsx
import React from 'react';
import { Button, Card, Input } from 'uiinfinity-components';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Card className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to UIinfinity</h1>
        <Input 
          placeholder="Enter your name" 
          className="mb-4" 
        />
        <Button className="w-full">
          Get Started
        </Button>
      </Card>
    </div>
  );
}

export default App;
```

### 2. Configure Tailwind CSS

Add UIinfinity Components to your Tailwind configuration:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/uiinfinity-components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // UIinfinity custom colors
        'uiinfinity': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#0c4a6e',
        }
      },
      animation: {
        'aurora': 'aurora 2s ease-in-out infinite alternate',
        'liquid': 'liquid 1s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'tilt': 'tilt 10s infinite linear',
      }
    }
  },
  plugins: [
    require('tailwindcss-animate')
  ]
}
```

### 3. Import Styles

Import the component styles in your main CSS file:

```css
/* index.css or App.css */
@import 'uiinfinity-components/styles';
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🏗️ Project Structure

After installation, your project structure should look like this:

```
your-project/
├── node_modules/
│   └── uiinfinity-components/
│       ├── dist/
│       ├── package.json
│       └── README.md
├── src/
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Your First Component

Let's create a simple landing page using UIinfinity Components:

```tsx
// LandingPage.tsx
import React from 'react';
import { 
  Button, 
  Card, 
  Input, 
  HeroSection,
  Navbar,
  Footer 
} from 'uiinfinity-components';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Navigation */}
      <Navbar 
        logo="UIinfinity"
        links={[
          { href: '#home', label: 'Home' },
          { href: '#features', label: 'Features' },
          { href: '#contact', label: 'Contact' }
        ]}
      />

      {/* Hero Section */}
      <HeroSection
        title="Build Amazing UIs"
        subtitle="500+ premium components with stunning animations"
        ctaText="Get Started Free"
        onCtaClick={() => console.log('CTA clicked')}
      />

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose UIinfinity?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">500+ Components</h3>
              <p className="text-gray-400">
                From basic UI to mind-blowing animations
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">Zero Dependencies</h3>
              <p className="text-gray-400">
                Built with our own design system
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">TypeScript First</h3>
              <p className="text-gray-400">
                Full type safety and IntelliSense
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-md mx-auto">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Get in Touch
            </h3>
            
            <form className="space-y-4">
              <Input 
                placeholder="Your name"
                className="w-full"
              />
              <Input 
                type="email"
                placeholder="Your email"
                className="w-full"
              />
              <textarea 
                placeholder="Your message"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white resize-none"
                rows={4}
              />
              <Button className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer 
        brandName="UIinfinity"
        description="Building the future of web development"
      />
    </div>
  );
}

export default LandingPage;
```

## 🔧 Configuration Options

### TypeScript Configuration

Ensure your `tsconfig.json` includes the UIinfinity Components types:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src", "node_modules/uiinfinity-components/**/*"]
}
```

### Environment Variables

Create a `.env` file for any custom configurations:

```env
# .env
REACT_APP_UIINFINITY_THEME=dark
REACT_APP_UIINFINITY_ANIMATIONS=enabled
REACT_APP_UIINFINITY_DEBUG=false
```

## 🎭 Animation Setup

UIinfinity Components comes with powerful animations powered by Framer Motion and GSAP:

```tsx
// Enable advanced animations
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

// GSAP plugins (optional)
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);
```

## 📱 Responsive Design

All components are mobile-first and responsive by default:

```tsx
// Responsive grid example
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card className="p-4 md:p-6">
    <h3 className="text-lg md:text-xl font-semibold">Responsive Card</h3>
    <p className="text-sm md:text-base">Adapts to all screen sizes</p>
  </Card>
</div>
```

## 🚀 Development Server

Start your development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Your app should now be running with UIinfinity Components!

## 🔍 Next Steps

Now that you have the basics set up, explore:

1. **[Components Guide](./COMPONENTS.md)** - Learn about all available components
2. **[Design System](./DESIGN_SYSTEM.md)** - Understand the design principles
3. **[Examples & Recipes](./EXAMPLES.md)** - See real-world usage examples
4. **[API Reference](./API_REFERENCE.md)** - Detailed component documentation

## 🆘 Troubleshooting

### Common Issues

**Components not rendering?**
- Check that Tailwind CSS is properly configured
- Ensure styles are imported correctly
- Verify peer dependencies are installed

**Animations not working?**
- Make sure Framer Motion is installed
- Check browser console for errors
- Verify GSAP is available for advanced animations

**TypeScript errors?**
- Update to the latest TypeScript version
- Check your `tsconfig.json` configuration
- Ensure types are properly imported

### Getting Help

- 📧 **Email**: support@uiinfinity.com
- 🐛 **GitHub Issues**: [Report a bug](https://github.com/zakir19/uiinfinity-components/issues)
- 💬 **Discord**: [Join our community](https://discord.gg/uiinfinity)
- 📖 **Documentation**: [Full API Reference](./API_REFERENCE.md)

---

**Ready to build something amazing?** 🚀

Check out the [Components Guide](./COMPONENTS.md) to explore all 500+ components!

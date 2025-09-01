# Examples & Recipes

This guide provides practical examples and common use cases for UIinfinity Components. Each example is production-ready and follows best practices.

## 🚀 Quick Examples

### Basic Landing Page

```tsx
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
      <Navbar 
        logo="MyApp"
        links={[
          { href: '#home', label: 'Home' },
          { href: '#features', label: 'Features' },
          { href: '#contact', label: 'Contact' }
        ]}
      />
      
      <HeroSection
        title="Build Something Amazing"
        subtitle="500+ premium components at your fingertips"
        ctaText="Get Started"
        onCtaClick={() => console.log('CTA clicked')}
      />
      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <form className="space-y-4">
              <Input placeholder="Your name" />
              <Input type="email" placeholder="Your email" />
              <textarea 
                placeholder="Your message"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg"
                rows={4}
              />
              <Button className="w-full">Send Message</Button>
            </form>
          </Card>
        </div>
      </section>
      
      <Footer brandName="MyApp" />
    </div>
  );
}
```

### Dashboard Layout

```tsx
import React from 'react';
import { 
  Card, 
  Button, 
  Input,
  Navbar 
} from 'uiinfinity-components';
import { 
  Home, 
  Users, 
  Settings, 
  BarChart3,
  Bell,
  Search 
} from 'lucide-react';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        logo="Dashboard"
        links={[
          { href: '/', label: 'Home', icon: Home },
          { href: '/users', label: 'Users', icon: Users },
          { href: '/analytics', label: 'Analytics', icon: BarChart3 },
          { href: '/settings', label: 'Settings', icon: Settings }
        ]}
        actions={[
          <Button key="notifications" variant="ghost" size="sm">
            <Bell className="w-5 h-5" />
          </Button>
        ]}
      />
      
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Search..."
                className="pl-10"
              />
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold">12,345</p>
                </div>
                <Users className="w-8 h-8 text-blue-500" />
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Revenue</p>
                  <p className="text-2xl font-bold">$45,678</p>
                </div>
                <BarChart3 className="w-8 h-8 text-green-500" />
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Orders</p>
                  <p className="text-2xl font-bold">1,234</p>
                </div>
                <BarChart3 className="w-8 h-8 text-purple-500" />
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Growth</p>
                  <p className="text-2xl font-bold">+23%</p>
                </div>
                <BarChart3 className="w-8 h-8 text-orange-500" />
              </div>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">User {item} signed up</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
            
            <div>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="w-4 h-4 mr-2" />
                    Add User
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Reports
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## 🎨 Animation Examples

### Staggered List Animation

```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from 'uiinfinity-components';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function AnimatedList() {
  const items = [
    { id: 1, title: 'Feature 1', description: 'Amazing feature description' },
    { id: 2, title: 'Feature 2', description: 'Another great feature' },
    { id: 3, title: 'Feature 3', description: 'The best feature ever' },
    { id: 4, title: 'Feature 4', description: 'You will love this one' }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {items.map((item) => (
        <motion.div key={item.id} variants={itemVariants}>
          <Card className="p-4 hover:shadow-lg transition-shadow">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
```

### Interactive Card with Hover Effects

```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from 'uiinfinity-components';

function InteractiveCard() {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      className="cursor-pointer"
    >
      <Card className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <h3 className="text-xl font-bold mb-2">Interactive Card</h3>
        <p className="text-blue-100">
          Hover and click to see the magic happen!
        </p>
      </Card>
    </motion.div>
  );
}
```

### Parallax Scrolling Effect

```tsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card } from 'uiinfinity-components';

function ParallaxCard() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="h-96 flex items-center justify-center"
    >
      <Card className="p-8 max-w-md text-center">
        <h2 className="text-3xl font-bold mb-4">Parallax Effect</h2>
        <p className="text-gray-600">
          Scroll to see this card move with parallax effect
        </p>
      </Card>
    </motion.div>
  );
}
```

## 📱 Responsive Design Examples

### Responsive Grid Layout

```tsx
import React from 'react';
import { Card, Button } from 'uiinfinity-components';

function ResponsiveGrid() {
  const items = [
    { title: 'Item 1', description: 'Description for item 1' },
    { title: 'Item 2', description: 'Description for item 2' },
    { title: 'Item 3', description: 'Description for item 3' },
    { title: 'Item 4', description: 'Description for item 4' },
    { title: 'Item 5', description: 'Description for item 5' },
    { title: 'Item 6', description: 'Description for item 6' }
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {items.map((item, index) => (
          <Card key={index} className="p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              {item.description}
            </p>
            <Button size="sm" className="w-full md:w-auto">
              Learn More
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
```

### Mobile-First Navigation

```tsx
import React, { useState } from 'react';
import { Button, Navbar } from 'uiinfinity-components';
import { Menu, X } from 'lucide-react';

function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg"
        >
          <div className="p-4 space-y-2">
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Home
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              About
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}
```

## 🎭 Advanced Animation Examples

### GSAP Scroll-Triggered Animations

```tsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from 'uiinfinity-components';

gsap.registerPlugin(ScrollTrigger);

function GSAPScrollAnimations() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card, 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.2
        }
      );
    });
  }, []);

  return (
    <div className="space-y-8 p-6">
      {[1, 2, 3, 4].map((item, index) => (
        <div
          key={item}
          ref={el => cardsRef.current[index] = el}
          className="opacity-0"
        >
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Animated Card {item}
            </h3>
            <p className="text-gray-600">
              This card animates in when scrolled into view using GSAP
            </p>
          </Card>
        </div>
      ))}
    </div>
  );
}
```

### Text Typing Animation

```tsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { Card } from 'uiinfinity-components';

gsap.registerPlugin(TextPlugin);

function TypingAnimation() {
  const textRef = useRef(null);

  useEffect(() => {
    const text = "Welcome to UIinfinity Components!";
    
    gsap.to(textRef.current, {
      duration: 2,
      text: text,
      ease: "none",
      delay: 1
    });
  }, []);

  return (
    <Card className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Typing Effect</h2>
      <p 
        ref={textRef}
        className="text-lg text-gray-600 min-h-[1.5rem]"
      >
        &nbsp;
      </p>
    </Card>
  );
}
```

## 🔧 Form Examples

### Multi-Step Form

```tsx
import React, { useState } from 'react';
import { Button, Input, Card } from 'uiinfinity-components';
import { motion, AnimatePresence } from 'framer-motion';

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const steps = [
    {
      title: 'Personal Information',
      fields: [
        { name: 'name', label: 'Full Name', type: 'text' },
        { name: 'email', label: 'Email', type: 'email' }
      ]
    },
    {
      title: 'Company Details',
      fields: [
        { name: 'company', label: 'Company Name', type: 'text' }
      ]
    },
    {
      title: 'Message',
      fields: [
        { name: 'message', label: 'Your Message', type: 'textarea' }
      ]
    }
  ];

  return (
    <div className="max-w-md mx-auto p-6">
      <Card className="p-6">
        <div className="mb-6">
          <div className="flex justify-between mb-4">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  index + 1 <= step 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <h2 className="text-xl font-semibold text-center">
            {steps[step - 1].title}
          </h2>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-4">
              {steps[step - 1].fields.map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      value={formData[field.name as keyof typeof formData]}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                      rows={4}
                    />
                  ) : (
                    <Input
                      type={field.type}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-6">
          <Button
            onClick={prevStep}
            disabled={step === 1}
            variant="outline"
          >
            Previous
          </Button>
          
          {step < 3 ? (
            <Button onClick={nextStep}>
              Next
            </Button>
          ) : (
            <Button onClick={() => console.log('Form submitted:', formData)}>
              Submit
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
```

### Search with Debouncing

```tsx
import React, { useState, useEffect, useCallback } from 'react';
import { Input, Card } from 'uiinfinity-components';
import { Search } from 'lucide-react';
import { debounce } from 'lodash';

function SearchWithDebounce() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce(async (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock results
      const mockResults = [
        `Result 1 for "${searchQuery}"`,
        `Result 2 for "${searchQuery}"`,
        `Result 3 for "${searchQuery}"`
      ];
      
      setResults(mockResults);
      setIsLoading(false);
    }, 300),
    []
  );

  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  return (
    <div className="max-w-md mx-auto p-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Search</h3>
        
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="pl-10"
          />
        </div>

        {isLoading && (
          <div className="text-center py-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 mx-auto"></div>
          </div>
        )}

        {results.length > 0 && (
          <div className="space-y-2">
            {results.map((result, index) => (
              <div
                key={index}
                className="p-3 bg-gray-50 rounded-lg text-sm"
              >
                {result}
              </div>
            ))}
          </div>
        )}

        {query && !isLoading && results.length === 0 && (
          <p className="text-gray-500 text-center py-4">
            No results found
          </p>
        )}
      </Card>
    </div>
  );
}
```

## 🎨 Theme Switching Example

```tsx
import React, { useState, useEffect } from 'react';
import { Button, Card } from 'uiinfinity-components';
import { Sun, Moon } from 'lucide-react';

function ThemeSwitcher() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="p-6">
      <Card className="p-6 max-w-sm mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Theme Switcher</h3>
          <Button
            onClick={toggleTheme}
            variant="outline"
            size="sm"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </Button>
        </div>
        
        <p className="text-gray-600">
          Current theme: <span className="font-medium capitalize">{theme}</span>
        </p>
        
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <p className="text-sm">
            This card adapts to the current theme automatically
          </p>
        </div>
      </Card>
    </div>
  );
}
```

## 🔍 Best Practices

### Performance Optimization

```tsx
// ✅ Good: Memoize expensive components
const ExpensiveComponent = React.memo(({ data }) => (
  <Card className="p-6">
    <h3>Expensive Component</h3>
    <p>{data}</p>
  </Card>
));

// ✅ Good: Use callback refs for animations
const AnimationRef = React.useCallback((node) => {
  if (node) {
    gsap.fromTo(node, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  }
}, []);

// ✅ Good: Lazy load heavy components
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
```

### Accessibility

```tsx
// ✅ Good: Proper ARIA labels
<Button aria-label="Close modal" aria-describedby="modal-description">
  <X className="w-4 h-4" />
</Button>

// ✅ Good: Keyboard navigation
<div role="button" tabIndex={0} onKeyDown={handleKeyDown}>
  Clickable div
</div>

// ✅ Good: Focus management
useEffect(() => {
  const firstInput = document.querySelector('input');
  if (firstInput) firstInput.focus();
}, []);
```

### Error Boundaries

```tsx
import React from 'react';
import { Card } from 'uiinfinity-components';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Card className="p-6 text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-2">
            Something went wrong
          </h2>
          <p className="text-gray-600">
            Please refresh the page and try again
          </p>
        </Card>
      );
    }

    return this.props.children;
  }
}
```

---

**Ready to build amazing UIs?** 🚀

These examples show just a fraction of what's possible with UIinfinity Components. Check out the [Components Guide](./COMPONENTS.md) for the complete component library!

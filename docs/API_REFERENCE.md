# API Reference

Complete API documentation for all UIinfinity Components.

## 🧩 Core Components

### Button

```tsx
import { Button } from 'uiinfinity-components';

interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
```

**Variants:**
- `default`: Primary button with blue background
- `destructive`: Red button for dangerous actions
- `outline`: Bordered button with transparent background
- `secondary`: Gray button for secondary actions
- `ghost`: Transparent button with hover effects
- `link`: Button that looks like a link

**Sizes:**
- `sm`: Small button (32px height)
- `md`: Medium button (40px height) - default
- `lg`: Large button (44px height)
- `xl`: Extra large button (48px height)

### Card

```tsx
import { Card } from 'uiinfinity-components';

interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  className?: string;
}
```

**Variants:**
- `default`: Standard card with subtle shadow
- `elevated`: Card with prominent shadow
- `outlined`: Card with border only
- `filled`: Card with background fill

### Input

```tsx
import { Input } from 'uiinfinity-components';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}
```

### Modal

```tsx
import { Modal } from 'uiinfinity-components';

interface ModalProps {
  trigger: React.ReactNode;
  title: string;
  description?: string;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
```

## 🎨 Animation Components

### AqueousRippleButton

```tsx
import { AqueousRippleButton } from 'uiinfinity-components';

interface AqueousRippleButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  rippleColor?: string;
  rippleDuration?: number;
}
```

### GoboLightCard

```tsx
import { GoboLightCard } from 'uiinfinity-components';

interface GoboLightCardProps {
  children: React.ReactNode;
  className?: string;
  lightIntensity?: number;
  lightColor?: string;
}
```

### SilkCurtainDemo

```tsx
import { SilkCurtainDemo } from 'uiinfinity-components';

interface SilkCurtainDemoProps {
  children: React.ReactNode;
  className?: string;
  curtainColor?: string;
  animationDuration?: number;
}
```

## 🧪 Experimental Components

### BioluminescentCursor

```tsx
import { BioluminescentCursor } from 'uiinfinity-components';

interface BioluminescentCursorProps {
  color?: string;
  size?: number;
  trailLength?: number;
  glowIntensity?: number;
}
```

### CrystalBloomModal

```tsx
import { CrystalBloomModal } from 'uiinfinity-components';

interface CrystalBloomModalProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  bloomDuration?: number;
  crystalColor?: string;
}
```

## 🎭 Special Effect Components

### AuroraButton

```tsx
import { AuroraButton } from 'uiinfinity-components';

interface AuroraButtonProps {
  children: React.ReactNode;
  className?: string;
  auroraColors?: string[];
  animationSpeed?: number;
  onClick?: () => void;
}
```

### GlassButton

```tsx
import { GlassButton } from 'uiinfinity-components';

interface GlassButtonProps {
  children: React.ReactNode;
  className?: string;
  blurAmount?: number;
  transparency?: number;
  onClick?: () => void;
}
```

### GlowCard

```tsx
import { GlowCard } from 'uiinfinity-components';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  glowIntensity?: number;
  glowSpread?: number;
}
```

## 🎣 Hooks

### useToast

```tsx
import { useToast } from 'uiinfinity-components';

interface ToastOptions {
  title: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success' | 'warning';
  duration?: number;
}

const { toast } = useToast();

// Usage
toast({
  title: "Success!",
  description: "Action completed successfully",
  variant: "success",
  duration: 5000
});
```

### useMobile

```tsx
import { useMobile } from 'uiinfinity-components';

const isMobile = useMobile();

// Returns boolean indicating if device is mobile
```

## 🛠️ Utilities

### cn (className utility)

```tsx
import { cn } from 'uiinfinity-components';

// Combines class names with conditional logic
const className = cn(
  "base-class",
  condition && "conditional-class",
  "another-class"
);
```

## 🎨 Design Tokens

### Colors

```tsx
import { colors } from 'uiinfinity-components/design-tokens';

// Primary colors
colors.blue[500]    // #3b82f6
colors.purple[500]  // #a855f7

// Semantic colors
colors.success[500] // #22c55e
colors.warning[500] // #f59e0b
colors.error[500]   // #ef4444
```

### Spacing

```tsx
import { spacing } from 'uiinfinity-components/design-tokens';

spacing[4]   // 1rem (16px)
spacing[6]   // 1.5rem (24px)
spacing[8]   // 2rem (32px)
spacing[12]  // 3rem (48px)
```

### Typography

```tsx
import { typography } from 'uiinfinity-components/design-tokens';

typography.sizes.xl    // 1.25rem (20px)
typography.sizes['2xl'] // 1.5rem (24px)
typography.sizes['3xl'] // 1.875rem (30px)
```

## 🔧 Advanced Usage

### Custom Component Variants

```tsx
// Extend existing components
const CustomButton = ({ variant, ...props }) => {
  const customVariants = {
    ...buttonVariants,
    custom: "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
  };
  
  return (
    <Button 
      variant={variant} 
      className={customVariants[variant]}
      {...props}
    />
  );
};
```

### Animation Integration

```tsx
import { motion } from 'framer-motion';
import { Card } from 'uiinfinity-components';

const AnimatedCard = motion(Card);

// Usage with Framer Motion
<AnimatedCard
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</AnimatedCard>
```

### GSAP Integration

```tsx
import { gsap } from 'gsap';
import { Card } from 'uiinfinity-components';

const cardRef = useRef(null);

useEffect(() => {
  gsap.fromTo(cardRef.current, 
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 0.8 }
  );
}, []);

<Card ref={cardRef}>Animated with GSAP</Card>
```

## 📱 Responsive Utilities

### Breakpoint Helpers

```tsx
import { breakpoints } from 'uiinfinity-components/design-tokens';

// Available breakpoints
breakpoints.sm   // 640px
breakpoints.md   // 768px
breakpoints.lg   // 1024px
breakpoints.xl   // 1280px
breakpoints['2xl'] // 1536px
```

### Responsive Classes

```tsx
// Built-in responsive utilities
<div className="
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3 
  xl:grid-cols-4
">
  {/* Responsive grid */}
</div>
```

## ♿ Accessibility

### ARIA Support

All components include proper ARIA attributes:

- `aria-label` for screen readers
- `aria-describedby` for descriptions
- `aria-expanded` for expandable elements
- `aria-selected` for selectable items
- `aria-hidden` for decorative elements

### Keyboard Navigation

- **Tab**: Navigate between interactive elements
- **Enter/Space**: Activate buttons and links
- **Escape**: Close modals and dropdowns
- **Arrow Keys**: Navigate within components

### Focus Management

```tsx
// Automatic focus management
<Modal>
  <Input autoFocus /> {/* Focuses automatically */}
</Modal>

// Manual focus control
const inputRef = useRef(null);
useEffect(() => {
  inputRef.current?.focus();
}, []);
```

## 🎯 Performance

### Tree Shaking

```tsx
// ✅ Only imports what you need
import { Button, Card } from 'uiinfinity-components';

// ❌ Avoid importing everything
import * as UIinfinity from 'uiinfinity-components';
```

### Lazy Loading

```tsx
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => 
  import('uiinfinity-components').then(m => ({ 
    default: m.HeavyComponent 
  }))
);

<Suspense fallback={<div>Loading...</div>}>
  <HeavyComponent />
</Suspense>
```

## 🔍 TypeScript

### Strict Mode

All components are built with strict TypeScript:

```tsx
// Full type safety
interface MyComponentProps {
  title: string;
  count?: number;
  onAction: (id: string) => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ 
  title, 
  count = 0, 
  onAction 
}) => {
  // TypeScript ensures all props are properly typed
};
```

### Generic Components

```tsx
interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

const List = <T,>({ items, renderItem }: ListProps<T>) => (
  <div>
    {items.map((item, index) => renderItem(item, index))}
  </div>
);
```

---

**Need more details?** 📚

Check out the [Components Guide](./COMPONENTS.md) for comprehensive examples and the [Examples & Recipes](./EXAMPLES.md) for real-world usage patterns!

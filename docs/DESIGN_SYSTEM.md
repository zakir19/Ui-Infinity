# UIinfinity Design System

The UIinfinity Design System is the foundation of our component library, providing a cohesive visual language that ensures consistency, accessibility, and beauty across all components.

## 🎨 Design Philosophy

### Core Principles

1. **Beauty Through Simplicity** - Clean, minimal designs that focus on content
2. **Accessibility First** - Every component meets WCAG 2.1 AA standards
3. **Performance Matters** - Smooth animations that don't compromise speed
4. **Mobile-First** - Responsive design that works on all devices
5. **Developer Experience** - Intuitive APIs that make development enjoyable

### Design Values

- **Modern** - Contemporary aesthetics that stand the test of time
- **Professional** - Enterprise-ready components for serious applications
- **Innovative** - Cutting-edge effects and animations
- **Reliable** - Consistent behavior across all browsers and devices

## 🌈 Color Palette

### Primary Colors

```css
:root {
  /* Primary Blue */
  --uiinfinity-blue-50: #eff6ff;
  --uiinfinity-blue-100: #dbeafe;
  --uiinfinity-blue-200: #bfdbfe;
  --uiinfinity-blue-300: #93c5fd;
  --uiinfinity-blue-400: #60a5fa;
  --uiinfinity-blue-500: #3b82f6;
  --uiinfinity-blue-600: #2563eb;
  --uiinfinity-blue-700: #1d4ed8;
  --uiinfinity-blue-800: #1e40af;
  --uiinfinity-blue-900: #1e3a8a;
  --uiinfinity-blue-950: #172554;

  /* Primary Purple */
  --uiinfinity-purple-50: #faf5ff;
  --uiinfinity-purple-100: #f3e8ff;
  --uiinfinity-purple-200: #e9d5ff;
  --uiinfinity-purple-300: #d8b4fe;
  --uiinfinity-purple-400: #c084fc;
  --uiinfinity-purple-500: #a855f7;
  --uiinfinity-purple-600: #9333ea;
  --uiinfinity-purple-700: #7c3aed;
  --uiinfinity-purple-800: #6b21a8;
  --uiinfinity-purple-900: #581c87;
  --uiinfinity-purple-950: #3b0764;
}
```

### Semantic Colors

```css
:root {
  /* Success */
  --uiinfinity-success-50: #f0fdf4;
  --uiinfinity-success-500: #22c55e;
  --uiinfinity-success-600: #16a34a;
  --uiinfinity-success-700: #15803d;

  /* Warning */
  --uiinfinity-warning-50: #fffbeb;
  --uiinfinity-warning-500: #f59e0b;
  --uiinfinity-warning-600: #d97706;
  --uiinfinity-warning-700: #b45309;

  /* Error */
  --uiinfinity-error-50: #fef2f2;
  --uiinfinity-error-500: #ef4444;
  --uiinfinity-error-600: #dc2626;
  --uiinfinity-error-700: #b91c1c;

  /* Info */
  --uiinfinity-info-50: #eff6ff;
  --uiinfinity-info-500: #3b82f6;
  --uiinfinity-info-600: #2563eb;
  --uiinfinity-info-700: #1d4ed8;
}
```

### Neutral Colors

```css
:root {
  /* Gray Scale */
  --uiinfinity-gray-50: #f9fafb;
  --uiinfinity-gray-100: #f3f4f6;
  --uiinfinity-gray-200: #e5e7eb;
  --uiinfinity-gray-300: #d1d5db;
  --uiinfinity-gray-400: #9ca3af;
  --uiinfinity-gray-500: #6b7280;
  --uiinfinity-gray-600: #4b5563;
  --uiinfinity-gray-700: #374151;
  --uiinfinity-gray-800: #1f2937;
  --uiinfinity-gray-900: #111827;
  --uiinfinity-gray-950: #030712;

  /* Dark Theme */
  --uiinfinity-dark-50: #f8fafc;
  --uiinfinity-dark-100: #f1f5f9;
  --uiinfinity-dark-200: #e2e8f0;
  --uiinfinity-dark-300: #cbd5e1;
  --uiinfinity-dark-400: #94a3b8;
  --uiinfinity-dark-500: #64748b;
  --uiinfinity-dark-600: #475569;
  --uiinfinity-dark-700: #334155;
  --uiinfinity-dark-800: #1e293b;
  --uiinfinity-dark-900: #0f172a;
  --uiinfinity-dark-950: #020617;
}
```

### Accent Colors

```css
:root {
  /* Accent Colors for Special Effects */
  --uiinfinity-accent-cyan: #06b6d4;
  --uiinfinity-accent-emerald: #10b981;
  --uiinfinity-accent-amber: #f59e0b;
  --uiinfinity-accent-rose: #f43f5e;
  --uiinfinity-accent-indigo: #6366f1;
  --uiinfinity-accent-teal: #14b8a6;
  --uiinfinity-accent-orange: #f97316;
  --uiinfinity-accent-pink: #ec4899;
}
```

## 🔤 Typography

### Font Stack

```css
:root {
  /* Primary Font Family */
  --uiinfinity-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  
  /* Monospace Font Family */
  --uiinfinity-font-mono: 'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', monospace;
  
  /* Display Font Family */
  --uiinfinity-font-display: 'Cal Sans', 'Inter', sans-serif;
}
```

### Font Sizes

```css
:root {
  /* Text Sizes */
  --uiinfinity-text-xs: 0.75rem;    /* 12px */
  --uiinfinity-text-sm: 0.875rem;   /* 14px */
  --uiinfinity-text-base: 1rem;     /* 16px */
  --uiinfinity-text-lg: 1.125rem;   /* 18px */
  --uiinfinity-text-xl: 1.25rem;    /* 20px */
  --uiinfinity-text-2xl: 1.5rem;    /* 24px */
  --uiinfinity-text-3xl: 1.875rem;  /* 30px */
  --uiinfinity-text-4xl: 2.25rem;   /* 36px */
  --uiinfinity-text-5xl: 3rem;      /* 48px */
  --uiinfinity-text-6xl: 3.75rem;   /* 60px */
  --uiinfinity-text-7xl: 4.5rem;    /* 72px */
  --uiinfinity-text-8xl: 6rem;      /* 96px */
  --uiinfinity-text-9xl: 8rem;      /* 128px */
}
```

### Font Weights

```css
:root {
  --uiinfinity-font-thin: 100;
  --uiinfinity-font-extralight: 200;
  --uiinfinity-font-light: 300;
  --uiinfinity-font-normal: 400;
  --uiinfinity-font-medium: 500;
  --uiinfinity-font-semibold: 600;
  --uiinfinity-font-bold: 700;
  --uiinfinity-font-extrabold: 800;
  --uiinfinity-font-black: 900;
}
```

### Line Heights

```css
:root {
  --uiinfinity-leading-none: 1;
  --uiinfinity-leading-tight: 1.25;
  --uiinfinity-leading-snug: 1.375;
  --uiinfinity-leading-normal: 1.5;
  --uiinfinity-leading-relaxed: 1.625;
  --uiinfinity-leading-loose: 2;
}
```

## 📏 Spacing & Layout

### Spacing Scale

```css
:root {
  /* Spacing Scale (4px base unit) */
  --uiinfinity-space-0: 0;
  --uiinfinity-space-1: 0.25rem;    /* 4px */
  --uiinfinity-space-2: 0.5rem;     /* 8px */
  --uiinfinity-space-3: 0.75rem;    /* 12px */
  --uiinfinity-space-4: 1rem;       /* 16px */
  --uiinfinity-space-5: 1.25rem;    /* 20px */
  --uiinfinity-space-6: 1.5rem;     /* 24px */
  --uiinfinity-space-8: 2rem;       /* 32px */
  --uiinfinity-space-10: 2.5rem;    /* 40px */
  --uiinfinity-space-12: 3rem;      /* 48px */
  --uiinfinity-space-16: 4rem;      /* 64px */
  --uiinfinity-space-20: 5rem;      /* 80px */
  --uiinfinity-space-24: 6rem;      /* 96px */
  --uiinfinity-space-32: 8rem;      /* 128px */
  --uiinfinity-space-40: 10rem;     /* 160px */
  --uiinfinity-space-48: 12rem;     /* 192px */
  --uiinfinity-space-56: 14rem;     /* 224px */
  --uiinfinity-space-64: 16rem;     /* 256px */
}
```

### Container Sizes

```css
:root {
  /* Container Max Widths */
  --uiinfinity-container-sm: 640px;
  --uiinfinity-container-md: 768px;
  --uiinfinity-container-lg: 1024px;
  --uiinfinity-container-xl: 1280px;
  --uiinfinity-container-2xl: 1536px;
}
```

### Border Radius

```css
:root {
  /* Border Radius Scale */
  --uiinfinity-radius-none: 0;
  --uiinfinity-radius-sm: 0.125rem;   /* 2px */
  --uiinfinity-radius-base: 0.25rem;  /* 4px */
  --uiinfinity-radius-md: 0.375rem;   /* 6px */
  --uiinfinity-radius-lg: 0.5rem;     /* 8px */
  --uiinfinity-radius-xl: 0.75rem;    /* 12px */
  --uiinfinity-radius-2xl: 1rem;      /* 16px */
  --uiinfinity-radius-3xl: 1.5rem;    /* 24px */
  --uiinfinity-radius-full: 9999px;
}
```

## 🎭 Animation & Motion

### Animation Principles

1. **Purposeful Motion** - Every animation serves a functional purpose
2. **Natural Physics** - Animations feel organic and human
3. **Performance First** - Smooth 60fps animations on all devices
4. **Accessibility** - Respect user preferences for reduced motion

### Duration Scale

```css
:root {
  /* Animation Durations */
  --uiinfinity-duration-75: 75ms;
  --uiinfinity-duration-100: 100ms;
  --uiinfinity-duration-150: 150ms;
  --uiinfinity-duration-200: 200ms;
  --uiinfinity-duration-300: 300ms;
  --uiinfinity-duration-500: 500ms;
  --uiinfinity-duration-700: 700ms;
  --uiinfinity-duration-1000: 1000ms;
}
```

### Easing Functions

```css
:root {
  /* Easing Curves */
  --uiinfinity-ease-linear: linear;
  --uiinfinity-ease-in: cubic-bezier(0.4, 0, 1, 1);
  --uiinfinity-ease-out: cubic-bezier(0, 0, 0.2, 1);
  --uiinfinity-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Custom Easing */
  --uiinfinity-ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --uiinfinity-ease-elastic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --uiinfinity-ease-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

### Animation Variants

```tsx
// Common animation variants used across components
const animationVariants = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  
  // Slide animations
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  },
  
  // Scale animations
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  },
  
  // Stagger animations
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};
```

## 🎨 Component Variants

### Button Variants

```tsx
// Button component variants
const buttonVariants = {
  variant: {
    default: "bg-blue-600 hover:bg-blue-700 text-white",
    destructive: "bg-red-600 hover:bg-red-700 text-white",
    outline: "border border-gray-300 hover:bg-gray-50 text-gray-700",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900",
    ghost: "hover:bg-gray-100 text-gray-700",
    link: "text-blue-600 hover:underline"
  },
  size: {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-11 px-8 text-base",
    xl: "h-12 px-10 text-lg"
  }
};
```

### Card Variants

```tsx
// Card component variants
const cardVariants = {
  variant: {
    default: "bg-white border border-gray-200 shadow-sm",
    elevated: "bg-white border border-gray-200 shadow-lg",
    outlined: "bg-transparent border border-gray-200",
    filled: "bg-gray-50 border border-gray-200"
  },
  size: {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10"
  }
};
```

## 🌙 Theme System

### Light Theme

```css
[data-theme="light"] {
  --uiinfinity-bg-primary: #ffffff;
  --uiinfinity-bg-secondary: #f9fafb;
  --uiinfinity-bg-tertiary: #f3f4f6;
  
  --uiinfinity-text-primary: #111827;
  --uiinfinity-text-secondary: #4b5563;
  --uiinfinity-text-tertiary: #9ca3af;
  
  --uiinfinity-border-primary: #e5e7eb;
  --uiinfinity-border-secondary: #d1d5db;
  --uiinfinity-border-tertiary: #9ca3af;
}
```

### Dark Theme

```css
[data-theme="dark"] {
  --uiinfinity-bg-primary: #0f172a;
  --uiinfinity-bg-secondary: #1e293b;
  --uiinfinity-bg-tertiary: #334155;
  
  --uiinfinity-text-primary: #f8fafc;
  --uiinfinity-text-secondary: #cbd5e1;
  --uiinfinity-text-tertiary: #94a3b8;
  
  --uiinfinity-border-primary: #334155;
  --uiinfinity-border-secondary: #475569;
  --uiinfinity-border-tertiary: #64748b;
}
```

### Custom Theme

```tsx
// Create custom themes
const customTheme = {
  colors: {
    primary: {
      50: '#f0f9ff',
      500: '#3b82f6',
      900: '#1e3a8a'
    },
    accent: {
      50: '#fdf4ff',
      500: '#a855f7',
      900: '#581c87'
    }
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem'
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem'
  }
};
```

## 📱 Responsive Design

### Breakpoint System

```css
:root {
  /* Breakpoints */
  --uiinfinity-breakpoint-sm: 640px;
  --uiinfinity-breakpoint-md: 768px;
  --uiinfinity-breakpoint-lg: 1024px;
  --uiinfinity-breakpoint-xl: 1280px;
  --uiinfinity-breakpoint-2xl: 1536px;
}
```

### Responsive Utilities

```tsx
// Responsive design utilities
const responsiveClasses = {
  // Grid columns
  grid: {
    sm: "grid-cols-1",
    md: "md:grid-cols-2",
    lg: "lg:grid-cols-3",
    xl: "xl:grid-cols-4"
  },
  
  // Spacing
  spacing: {
    sm: "p-4",
    md: "md:p-6",
    lg: "lg:p-8",
    xl: "xl:p-10"
  },
  
  // Typography
  text: {
    sm: "text-sm",
    md: "md:text-base",
    lg: "lg:text-lg",
    xl: "xl:text-xl"
  }
};
```

## ♿ Accessibility

### Color Contrast

All colors meet WCAG 2.1 AA standards:

- **Normal text**: 4.5:1 minimum contrast ratio
- **Large text**: 3:1 minimum contrast ratio
- **UI components**: 3:1 minimum contrast ratio

### Focus States

```css
:root {
  /* Focus indicators */
  --uiinfinity-focus-ring: 0 0 0 3px rgba(59, 130, 246, 0.5);
  --uiinfinity-focus-ring-offset: 2px;
  --uiinfinity-focus-ring-color: #3b82f6;
}
```

### Motion Preferences

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 🎯 Design Tokens

### Using Design Tokens

```tsx
// Import design tokens
import { 
  colors, 
  spacing, 
  typography, 
  animations 
} from 'uiinfinity-components/design-tokens';

// Use in components
const MyComponent = () => (
  <div 
    style={{
      backgroundColor: colors.primary[500],
      padding: spacing[6],
      fontSize: typography.sizes.lg,
      animationDuration: animations.duration[300]
    }}
  >
    Content
  </div>
);
```

### Custom Design Tokens

```tsx
// Extend design tokens
const extendedTokens = {
  ...defaultTokens,
  colors: {
    ...defaultTokens.colors,
    brand: {
      primary: '#ff6b6b',
      secondary: '#4ecdc4',
      accent: '#45b7d1'
    }
  },
  spacing: {
    ...defaultTokens.spacing,
    '18': '4.5rem',
    '22': '5.5rem'
  }
};
```

## 🔄 Design System Updates

### Versioning

The design system follows semantic versioning:

- **Major**: Breaking changes to design tokens or principles
- **Minor**: New design tokens or component variants
- **Patch**: Bug fixes and refinements

### Migration Guide

When updating to a new major version:

1. Review breaking changes in the changelog
2. Update deprecated design tokens
3. Test visual regression
4. Update component implementations

---

**Ready to implement the design system?** 🎨

Check out the [Components Guide](./COMPONENTS.md) to see how these design principles are applied in practice!

# Contributing to UIinfinity Components

Thank you for your interest in contributing to UIinfinity Components! This guide will help you get started with contributing to our open-source project.

## 🤝 How to Contribute

There are many ways to contribute to UIinfinity Components:

- 🐛 **Report Bugs** - Help us identify and fix issues
- 💡 **Request Features** - Suggest new components or improvements
- 📝 **Submit Code** - Contribute new components or fix existing ones
- 📚 **Improve Documentation** - Help make our docs better
- 🧪 **Test Components** - Test components and report issues
- 💬 **Community Support** - Help other developers in discussions
- 🌟 **Share Examples** - Create and share usage examples

## 🚀 Getting Started

### Prerequisites

Before contributing, make sure you have:

- **Node.js** 18.0.0 or higher
- **npm** 8.0.0 or higher (or **yarn** 1.22.0+, **pnpm** 7.0.0+)
- **Git** installed and configured
- Basic knowledge of **React**, **TypeScript**, and **Tailwind CSS**

### Setting Up the Development Environment

1. **Fork the Repository**
   ```bash
   # Go to https://github.com/zakir19/uiinfinity-components
   # Click "Fork" button to create your own copy
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/uiinfinity-components.git
   cd uiinfinity-components
   ```

3. **Add Upstream Remote**
   ```bash
   git remote add upstream https://github.com/zakir19/uiinfinity-components.git
   ```

4. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

## 🏗️ Project Structure

Understanding the project structure will help you contribute effectively:

```
uiinfinity-components/
├── src/
│   ├── components/          # All React components
│   │   ├── core/           # Core UI components (Button, Card, Input)
│   │   ├── layout/         # Layout components (Navbar, Footer)
│   │   ├── animation/      # Animation components
│   │   ├── experimental/   # Experimental/advanced components
│   │   ├── ui/             # Standard UI components
│   │   └── sections/       # Page section components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions and exports
│   └── pages/              # Example pages and demos
├── docs/                   # Documentation files
├── examples/               # Usage examples
├── scripts/                # Build and deployment scripts
├── dist/                   # Built library files
└── package.json            # Project configuration
```

## 🎯 Development Guidelines

### Code Style

We follow these coding standards:

- **TypeScript** - All components must be written in TypeScript
- **ESLint** - Follow our ESLint configuration
- **Prettier** - Use consistent formatting
- **Component Naming** - Use PascalCase for components (e.g., `MyComponent`)
- **File Naming** - Use kebab-case for files (e.g., `my-component.tsx`)

### Component Development Standards

When creating new components:

1. **Create the Component File**
   ```tsx
   // src/components/ui/my-component.tsx
   import React from 'react';
   import { cn } from '../../lib/utils';
   import { MyComponentProps } from './types';

   export const MyComponent: React.FC<MyComponentProps> = ({
     className,
     children,
     ...props
   }) => {
     return (
       <div
         className={cn(
           "base-styles",
           "responsive-styles",
           "interactive-styles",
           className
         )}
         {...props}
       >
         {children}
       </div>
     );
   };
   ```

2. **Create Types File**
   ```tsx
   // src/components/ui/types.ts
   export interface MyComponentProps {
     className?: string;
     children?: React.ReactNode;
     // Add other props as needed
   }
   ```

3. **Create Index File**
   ```tsx
   // src/components/ui/index.ts
   export { MyComponent } from './my-component';
   export type { MyComponentProps } from './types';
   ```

4. **Add to Main Export**
   ```tsx
   // src/lib/index.ts
   export { MyComponent } from '../components/ui';
   export type { MyComponentProps } from '../components/ui';
   ```

### Component Requirements

Every component must include:

- **TypeScript Types** - Proper prop interfaces
- **Accessibility** - ARIA attributes and keyboard navigation
- **Responsive Design** - Mobile-first approach
- **Documentation** - JSDoc comments for props
- **Examples** - Usage examples in the docs
- **Tests** - Unit tests for functionality

### Example Component Template

```tsx
import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';
import { MyComponentProps } from './types';

/**
 * MyComponent - A brief description of what this component does
 * 
 * @example
 * ```tsx
 * <MyComponent variant="primary" size="md">
 *   Click me
 * </MyComponent>
 * ```
 */
export const MyComponent = forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
    
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "underline-offset-4 hover:underline text-primary"
    };

    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-4 py-2",
      lg: "h-11 px-8 text-lg"
    };

    return (
      <div
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

MyComponent.displayName = 'MyComponent';
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- MyComponent.test.tsx
```

### Writing Tests

Create test files alongside your components:

```tsx
// src/components/ui/__tests__/my-component.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MyComponent } from '../my-component';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent>Test Content</MyComponent>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<MyComponent className="custom-class">Test</MyComponent>);
    expect(screen.getByText('Test')).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<MyComponent ref={ref}>Test</MyComponent>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
```

## 📚 Documentation

### Adding Component Documentation

When adding a new component, update these files:

1. **Components Guide** (`docs/COMPONENTS.md`)
2. **Examples** (`docs/EXAMPLES.md`)
3. **API Reference** (`docs/API_REFERENCE.md`)

### Documentation Format

```markdown
### MyComponent

A brief description of what this component does and when to use it.

```tsx
import { MyComponent } from 'uiinfinity-components';

<MyComponent variant="primary" size="md">
  Click me
</MyComponent>
```

**Props:**
- `variant`: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
- `size`: 'sm' | 'md' | 'lg'
- `className`: string - Additional CSS classes
- `children`: ReactNode - Component content

**Examples:**
- Basic usage
- With variants
- With custom styling
```

## 🔄 Pull Request Process

### Before Submitting a PR

1. **Ensure Code Quality**
   - Run linting: `npm run lint`
   - Run tests: `npm test`
   - Build the library: `npm run build:lib`
   - Check TypeScript: `npm run type-check`

2. **Update Documentation**
   - Add component documentation
   - Update examples if needed
   - Add changelog entry

3. **Test Your Changes**
   - Test in different browsers
   - Test responsive behavior
   - Test accessibility features

### Creating a Pull Request

1. **Create a Feature Branch**
   ```bash
   git checkout -b feature/my-new-component
   ```

2. **Make Your Changes**
   - Write your code
   - Add tests
   - Update documentation

3. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add MyComponent with full functionality

   - Add new MyComponent with TypeScript support
   - Include comprehensive test coverage
   - Add documentation and examples
   - Ensure accessibility compliance"
   ```

4. **Push to Your Fork**
   ```bash
   git push origin feature/my-new-component
   ```

5. **Create Pull Request**
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Select your feature branch
   - Fill out the PR template

### Pull Request Template

```markdown
## Description
Brief description of what this PR adds or changes.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Component Added/Modified
- [ ] New component: `ComponentName`
- [ ] Modified component: `ComponentName`
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Manual testing completed
- [ ] Accessibility testing completed
- [ ] Cross-browser testing completed

## Screenshots (if applicable)
Add screenshots to help explain your changes.

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] Any dependent changes have been merged and published in downstream modules
```

## 🐛 Reporting Issues

### Bug Report Template

```markdown
## Bug Description
Clear and concise description of the bug.

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
What you expected to happen.

## Actual Behavior
What actually happened.

## Environment
- OS: [e.g. Windows 10, macOS 12.0]
- Browser: [e.g. Chrome 96, Firefox 95]
- UIinfinity Components Version: [e.g. 2.0.0]
- React Version: [e.g. 18.2.0]

## Additional Context
Add any other context about the problem here.

## Screenshots
If applicable, add screenshots to help explain your problem.
```

### Feature Request Template

```markdown
## Feature Description
Clear and concise description of the feature you'd like to see.

## Problem Statement
A clear and concise description of what problem this feature would solve.

## Proposed Solution
A clear and concise description of what you want to happen.

## Alternative Solutions
A clear and concise description of any alternative solutions you've considered.

## Additional Context
Add any other context or screenshots about the feature request here.

## Use Cases
Describe specific use cases where this feature would be valuable.
```

## 🎨 Design Contributions

### Design System Guidelines

When contributing to the design system:

1. **Follow Existing Patterns** - Maintain consistency with current components
2. **Accessibility First** - Ensure all designs meet WCAG 2.1 AA standards
3. **Mobile-First** - Design for mobile devices first, then enhance for desktop
4. **Performance** - Keep animations smooth and lightweight
5. **Documentation** - Document design decisions and usage guidelines

### Design Token Contributions

```tsx
// Adding new design tokens
const newTokens = {
  colors: {
    brand: {
      50: '#f0f9ff',
      500: '#3b82f6',
      900: '#1e3a8a'
    }
  },
  spacing: {
    '18': '4.5rem',
    '22': '5.5rem'
  },
  animations: {
    'bounce-gentle': 'bounce-gentle 0.6s ease-in-out'
  }
};
```

## 🌟 Recognition

### Contributors

All contributors are recognized in:

- **README.md** - Contributors section
- **GitHub** - Contributors tab
- **Documentation** - Contributors page
- **Release Notes** - Individual contribution mentions

### Contribution Levels

- **Bronze** - 1-5 contributions
- **Silver** - 6-20 contributions  
- **Gold** - 21-50 contributions
- **Platinum** - 50+ contributions

## 📞 Getting Help

### Communication Channels

- **GitHub Issues** - For bugs and feature requests
- **GitHub Discussions** - For questions and general discussion
- **Discord** - For real-time chat and community support
- **Email** - For private or sensitive matters

### Community Guidelines

1. **Be Respectful** - Treat all contributors with respect
2. **Be Helpful** - Help others learn and grow
3. **Be Patient** - Remember that contributors are volunteers
4. **Be Constructive** - Provide helpful feedback and suggestions
5. **Follow the Code of Conduct** - Maintain a welcoming environment

## 📋 Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand our community standards.

## 🎯 Next Steps

Ready to contribute? Here's what you can do:

1. **Start Small** - Begin with documentation improvements or bug fixes
2. **Join Discussions** - Participate in GitHub discussions and Discord
3. **Review PRs** - Help review other contributors' pull requests
4. **Create Examples** - Build and share usage examples
5. **Report Issues** - Help identify bugs and suggest improvements

---

**Thank you for contributing to UIinfinity Components!** 🚀

Your contributions help make this library better for developers worldwide. If you have any questions, don't hesitate to reach out to the community!

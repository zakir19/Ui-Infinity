import React from 'react';
import { cn } from '@/lib/utils';
import { CardVariants, CardSizes, CardProps, CardHeaderProps, CardContentProps, CardFooterProps, CardTitleProps, CardDescriptionProps } from './types';

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'md', 
    elevation = 'md',
    glass = false,
    gradient = false,
    children, 
    ...props 
  }, ref) => {
    
    const baseStyles = `
      rounded-xl transition-all duration-300 ease-out relative overflow-hidden
      border backdrop-blur-sm
    `;
    
    const variants: CardVariants = {
      default: `
        bg-card/90 border-border/40 text-card-foreground 
        hover:border-border/60 hover:bg-card/95
        shadow-sm hover:shadow-md
      `,
      glass: `
        bg-white/5 border-white/10 text-white backdrop-blur-lg
        hover:bg-white/10 hover:border-white/20
        shadow-lg hover:shadow-xl
      `,
      neon: `
        bg-black/40 border-primary/30 text-white backdrop-blur-md
        hover:border-primary/50 hover:bg-black/60
        shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]
      `,
      gradient: `
        bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 
        border-primary/20 text-foreground
        hover:from-primary/20 hover:to-secondary/20 hover:border-primary/30
        shadow-lg hover:shadow-xl
      `,
      elevated: `
        bg-card border-border text-card-foreground
        shadow-xl hover:shadow-2xl
        hover:border-border/80 hover:-translate-y-1
      `,
      flat: `
        bg-card/60 border-border/20 text-card-foreground
        hover:bg-card/80 hover:border-border/40
      `,
      tilt: `
        bg-card/90 border-border/40 text-card-foreground
        hover:border-border/60 hover:bg-card/95
        transform-gpu transition-all duration-300
        hover:rotate-1 hover:scale-105
        shadow-md hover:shadow-xl
      `
    };
    
    const sizes: CardSizes = {
      xs: 'p-3 text-xs',
      sm: 'p-4 text-sm',
      md: 'p-6 text-base',
      lg: 'p-8 text-lg',
      xl: 'p-10 text-xl'
    };

    const elevations = {
      none: 'shadow-none',
      sm: 'shadow-sm hover:shadow-md',
      md: 'shadow-md hover:shadow-lg',
      lg: 'shadow-lg hover:shadow-xl',
      xl: 'shadow-xl hover:shadow-2xl'
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          elevations[elevation],
          glass && 'backdrop-blur-xl bg-white/5 border-white/10',
          gradient && 'bg-gradient-to-br from-primary/5 to-secondary/5',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    >
      {children}
    </div>
  )
);

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, level = 3, ...props }, ref) => {
    const baseClass = cn(
      "font-semibold leading-none tracking-tight",
      level === 1 && "text-3xl",
      level === 2 && "text-2xl", 
      level === 3 && "text-xl",
      level === 4 && "text-lg",
      level === 5 && "text-base",
      level === 6 && "text-sm",
      className
    );
    
    if (level === 1) return <h1 ref={ref} className={baseClass} {...props}>{children}</h1>;
    if (level === 2) return <h2 ref={ref} className={baseClass} {...props}>{children}</h2>;
    if (level === 3) return <h3 ref={ref} className={baseClass} {...props}>{children}</h3>;
    if (level === 4) return <h4 ref={ref} className={baseClass} {...props}>{children}</h4>;
    if (level === 5) return <h5 ref={ref} className={baseClass} {...props}>{children}</h5>;
    return <h6 ref={ref} className={baseClass} {...props}>{children}</h6>;
  }
);

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  )
);

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("p-6 pt-0", className)}
      {...props}
    >
      {children}
    </div>
  )
);

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    >
      {children}
    </div>
  )
);

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardTitle.displayName = 'CardTitle';
CardDescription.displayName = 'CardDescription';
CardContent.displayName = 'CardContent';
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
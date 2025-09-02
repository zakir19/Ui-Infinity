import React from 'react';
import { cn } from '@/lib/utils';
import { ButtonVariants, ButtonSizes, ButtonProps } from './types';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    loading = false,
    leftIcon,
    rightIcon,
    children, 
    disabled,
    ...props 
  }, ref) => {
    
    const baseStyles = `
      inline-flex items-center justify-center font-medium transition-all duration-200 
      focus:outline-none focus:ring-2 focus:ring-offset-2 
      disabled:opacity-50 disabled:pointer-events-none
      relative overflow-hidden
    `;
    
    const variants: ButtonVariants = {
      primary: `
        bg-gradient-to-r from-blue-600 to-blue-700 text-white 
        hover:from-blue-700 hover:to-blue-800 
        focus:ring-blue-500/50 shadow-lg hover:shadow-xl
        active:scale-95
      `,
      secondary: `
        bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 
        hover:from-gray-200 hover:to-gray-300 
        focus:ring-gray-500/50 border border-gray-300
        active:scale-95
      `,
      outline: `
        border-2 border-blue-600 text-blue-600 bg-transparent 
        hover:bg-blue-50 hover:border-blue-700 
        focus:ring-blue-500/50 active:scale-95
      `,
      ghost: `
        bg-transparent text-gray-700 hover:bg-gray-100 
        focus:ring-gray-500/50 active:scale-95
      `,
      danger: `
        bg-gradient-to-r from-red-600 to-red-700 text-white 
        hover:from-red-700 hover:to-red-800 
        focus:ring-red-500/50 shadow-lg hover:shadow-xl
        active:scale-95
      `,
      success: `
        bg-gradient-to-r from-green-600 to-green-700 text-white 
        hover:from-green-700 hover:to-green-800 
        focus:ring-green-500/50 shadow-lg hover:shadow-xl
        active:scale-95
      `,
      warning: `
        bg-gradient-to-r from-yellow-500 to-yellow-600 text-white 
        hover:from-yellow-600 hover:to-yellow-700 
        focus:ring-yellow-500/50 shadow-lg hover:shadow-xl
        active:scale-95
      `,
      neon: `
        bg-black text-cyan-400 border-2 border-cyan-400 
        hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_#00ffff]
        focus:ring-cyan-400/50 transition-all duration-300
        active:scale-95
      `,
      glass: `
        bg-white/10 backdrop-blur-md border border-white/20 text-white 
        hover:bg-white/20 hover:border-white/30 
        focus:ring-white/50 shadow-xl
        active:scale-95
      `,
      gradient: `
        bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white 
        hover:from-purple-600 hover:via-pink-600 hover:to-red-600 
        focus:ring-purple-500/50 shadow-lg hover:shadow-xl
        active:scale-95 animate-gradient-x bg-[length:200%_200%]
      `
    };
    
    const sizes: ButtonSizes = {
      xs: 'h-6 px-2 text-xs rounded',
      sm: 'h-8 px-3 text-sm rounded-md',
      md: 'h-10 px-4 text-sm rounded-md',
      lg: 'h-12 px-6 text-base rounded-lg',
      xl: 'h-14 px-8 text-lg rounded-xl'
    };
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          loading && 'cursor-wait',
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg 
            className="animate-spin -ml-1 mr-2 h-4 w-4" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        
        {leftIcon && !loading && (
          <span className="mr-2">{leftIcon}</span>
        )}
        
        {children}
        
        {rightIcon && (
          <span className="ml-2">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
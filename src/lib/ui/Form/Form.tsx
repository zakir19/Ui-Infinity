import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  InputProps, 
  TextareaProps, 
  SelectProps, 
  CheckboxProps, 
  RadioGroupProps, 
  FormGroupProps,
  LabelProps 
} from './types';

const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
  ({ className, children, error, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("space-y-2", className)}
        {...props}
      >
        {children}
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
      </div>
    );
  }
);

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, required, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "text-sm font-medium text-foreground block",
          className
        )}
        {...props}
      >
        {children}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
    );
  }
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    variant = 'default',
    size = 'md',
    state = 'default',
    leftIcon,
    rightIcon,
    error,
    ...props 
  }, ref) => {
    
    const baseStyles = `
      flex w-full rounded-md border bg-background transition-all duration-200
      placeholder:text-muted-foreground
      focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
      disabled:cursor-not-allowed disabled:opacity-50
    `;
    
    const variants = {
      default: 'border-input hover:border-ring/50',
      ghost: 'border-transparent bg-transparent hover:bg-accent/50',
      filled: 'border-transparent bg-muted hover:bg-muted/80',
      neon: 'border-primary/30 bg-black/20 text-white hover:border-primary/50 focus:border-primary focus:shadow-[0_0_10px_hsl(var(--primary)/0.3)]',
      glass: 'border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10'
    };
    
    const sizes = {
      sm: leftIcon || rightIcon ? 'h-8 pl-8 pr-3 text-sm' : 'h-8 px-3 text-sm',
      md: leftIcon || rightIcon ? 'h-10 pl-10 pr-3 text-sm' : 'h-10 px-3 text-sm',
      lg: leftIcon || rightIcon ? 'h-12 pl-12 pr-4 text-base' : 'h-12 px-4 text-base'
    };
    
    const states = {
      default: '',
      error: 'border-destructive focus:ring-destructive',
      success: 'border-green-500 focus:ring-green-500',
      warning: 'border-yellow-500 focus:ring-yellow-500'
    };
    
    return (
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            baseStyles,
            variants[variant],
            sizes[size],
            states[state],
            error && 'border-destructive focus:ring-destructive',
            className
          )}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className, 
    variant = 'default',
    state = 'default',
    error,
    ...props 
  }, ref) => {
    
    const baseStyles = `
      flex min-h-[80px] w-full rounded-md border bg-background px-3 py-2 transition-all duration-200
      placeholder:text-muted-foreground
      focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
      disabled:cursor-not-allowed disabled:opacity-50
      resize-y
    `;
    
    const variants = {
      default: 'border-input hover:border-ring/50',
      ghost: 'border-transparent bg-transparent hover:bg-accent/50',
      filled: 'border-transparent bg-muted hover:bg-muted/80',
      neon: 'border-primary/30 bg-black/20 text-white hover:border-primary/50 focus:border-primary focus:shadow-[0_0_10px_hsl(var(--primary)/0.3)]',
      glass: 'border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10'
    };
    
    const states = {
      default: '',
      error: 'border-destructive focus:ring-destructive',
      success: 'border-green-500 focus:ring-green-500',
      warning: 'border-yellow-500 focus:ring-yellow-500'
    };
    
    return (
      <textarea
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          states[state],
          error && 'border-destructive focus:ring-destructive',
          className
        )}
        {...props}
      />
    );
  }
);

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ 
    className, 
    variant = 'default',
    size = 'md',
    state = 'default',
    error,
    children,
    ...props 
  }, ref) => {
    
    const baseStyles = `
      flex w-full rounded-md border bg-background transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
      disabled:cursor-not-allowed disabled:opacity-50
      appearance-none bg-no-repeat bg-right bg-[length:16px]
    `;
    
    const variants = {
      default: 'border-input hover:border-ring/50',
      ghost: 'border-transparent bg-transparent hover:bg-accent/50',
      filled: 'border-transparent bg-muted hover:bg-muted/80',
      neon: 'border-primary/30 bg-black/20 text-white hover:border-primary/50 focus:border-primary',
      glass: 'border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10'
    };
    
    const sizes = {
      sm: 'h-8 px-3 pr-8 text-sm',
      md: 'h-10 px-3 pr-8 text-sm',
      lg: 'h-12 px-4 pr-10 text-base'
    };
    
    const states = {
      default: '',
      error: 'border-destructive focus:ring-destructive',
      success: 'border-green-500 focus:ring-green-500',
      warning: 'border-yellow-500 focus:ring-yellow-500'
    };
    
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            baseStyles,
            variants[variant],
            sizes[size],
            states[state],
            error && 'border-destructive focus:ring-destructive',
            className
          )}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundPosition: 'right 0.5rem center'
          }}
          {...props}
        >
          {children}
        </select>
      </div>
    );
  }
);

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ 
    className, 
    label,
    error,
    size = 'md',
    variant = 'default',
    ...props 
  }, ref) => {
    
    const sizes = {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-5 w-5'
    };
    
    const variants = {
      default: 'text-primary border-input focus:ring-ring',
      neon: 'text-primary border-primary/30 focus:ring-primary focus:ring-offset-0 bg-black/20',
      glass: 'text-white border-white/20 focus:ring-white/50 bg-white/10'
    };
    
    return (
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          ref={ref}
          className={cn(
            'rounded border transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            sizes[size],
            variants[variant],
            error && 'border-destructive focus:ring-destructive',
            className
          )}
          {...props}
        />
        {label && (
          <label 
            htmlFor={props.id}
            className={cn(
              "text-sm font-medium text-foreground",
              error && "text-destructive"
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ 
    className, 
    options = [],
    value,
    onChange,
    name,
    error,
    variant = 'default',
    orientation = 'vertical',
    ...props 
  }, ref) => {
    
    const variants = {
      default: 'text-primary border-input focus:ring-ring',
      neon: 'text-primary border-primary/30 focus:ring-primary focus:ring-offset-0 bg-black/20',
      glass: 'text-white border-white/20 focus:ring-white/50 bg-white/10'
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          "space-y-2",
          orientation === 'horizontal' && "flex space-x-4 space-y-0",
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <input
              type="radio"
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange?.(e.target.value)}
              className={cn(
                'h-4 w-4 border transition-colors',
                'focus:outline-none focus:ring-2 focus:ring-offset-2',
                'disabled:cursor-not-allowed disabled:opacity-50',
                variants[variant],
                error && 'border-destructive focus:ring-destructive'
              )}
              disabled={option.disabled}
            />
            <label 
              htmlFor={`${name}-${option.value}`}
              className={cn(
                "text-sm font-medium text-foreground",
                option.disabled && "opacity-50 cursor-not-allowed",
                error && "text-destructive"
              )}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    );
  }
);

FormGroup.displayName = 'FormGroup';
Label.displayName = 'Label';
Input.displayName = 'Input';
Textarea.displayName = 'Textarea';
Select.displayName = 'Select';
Checkbox.displayName = 'Checkbox';
RadioGroup.displayName = 'RadioGroup';

export { FormGroup, Label, Input, Textarea, Select, Checkbox, RadioGroup };
import React from 'react';

export type FormVariant = 'default' | 'ghost' | 'filled' | 'neon' | 'glass';
export type FormSize = 'sm' | 'md' | 'lg';
export type FormState = 'default' | 'error' | 'success' | 'warning';

export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  error?: string;
}

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  required?: boolean;
}

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: FormVariant;
  size?: FormSize;
  state?: FormState;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: FormVariant;
  state?: FormState;
  error?: string;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  variant?: FormVariant;
  size?: FormSize;
  state?: FormState;
  error?: string;
  children: React.ReactNode;
}

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  size?: FormSize;
  variant?: FormVariant;
}

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  name: string;
  error?: string;
  variant?: FormVariant;
  orientation?: 'horizontal' | 'vertical';
}
import React from 'react';

export type CardVariant = 
  | 'default'
  | 'glass' 
  | 'neon'
  | 'gradient'
  | 'elevated'
  | 'flat'
  | 'tilt';

export type CardSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type CardElevation = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  size?: CardSize;
  elevation?: CardElevation;
  glass?: boolean;
  gradient?: boolean;
  children: React.ReactNode;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export type CardVariants = Record<CardVariant, string>;
export type CardSizes = Record<CardSize, string>;
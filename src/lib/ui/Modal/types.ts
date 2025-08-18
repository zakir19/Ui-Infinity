import React from 'react';

export type ModalVariant = 'default' | 'glass' | 'neon' | 'gradient';
export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
export type DrawerSide = 'left' | 'right' | 'top' | 'bottom';
export type DrawerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type TooltipSide = 'top' | 'bottom' | 'left' | 'right';
export type TooltipVariant = 'default' | 'dark' | 'glass';
export type TooltipSize = 'sm' | 'md' | 'lg';
export type AlertVariant = 'default' | 'destructive' | 'warning';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  variant?: ModalVariant;
  size?: ModalSize;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
}

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  side?: DrawerSide;
  variant?: ModalVariant;
  size?: DrawerSize;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
}

export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: TooltipSide;
  variant?: TooltipVariant;
  size?: TooltipSize;
  delay?: number;
}

export interface AlertDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  variant?: AlertVariant;
  destructive?: boolean;
}
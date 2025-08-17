import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';
import { ModalProps, DrawerProps, TooltipProps, AlertDialogProps } from './types';

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ 
    isOpen,
    onClose,
    title,
    children,
    className,
    variant = 'default',
    size = 'md',
    closeOnBackdrop = true,
    closeOnEscape = true,
    showCloseButton = true,
    ...props 
  }, ref) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && closeOnEscape) {
          onClose();
        }
      };

      if (isOpen) {
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
      }

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }, [isOpen, onClose, closeOnEscape]);

    useEffect(() => {
      if (isOpen && modalRef.current) {
        modalRef.current.focus();
      }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget && closeOnBackdrop) {
        onClose();
      }
    };

    const variants = {
      default: 'bg-background border-border',
      glass: 'bg-white/10 backdrop-blur-xl border-white/20',
      neon: 'bg-black/90 border-primary/30 shadow-[0_0_50px_hsl(var(--primary)/0.3)]',
      gradient: 'bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20'
    };

    const sizes = {
      sm: 'max-w-sm',
      md: 'max-w-md', 
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      '2xl': 'max-w-2xl',
      full: 'max-w-full mx-4'
    };

    const modalContent = (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={handleBackdropClick}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in" />
        
        {/* Modal */}
        <div
          ref={ref || modalRef}
          tabIndex={-1}
          className={cn(
            "relative border rounded-lg shadow-xl w-full max-h-[90vh] overflow-auto animate-scale-in",
            variants[variant],
            sizes[size],
            className
          )}
          {...props}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between p-6 border-b border-border">
              {title && (
                <h2 className="text-lg font-semibold text-foreground">{title}</h2>
              )}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-accent rounded-md transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          )}
          
          {/* Content */}
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    );

    return createPortal(modalContent, document.body);
  }
);

const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  ({ 
    isOpen,
    onClose,
    title,
    children,
    className,
    side = 'right',
    variant = 'default',
    size = 'md',
    closeOnBackdrop = true,
    closeOnEscape = true,
    showCloseButton = true,
    ...props 
  }, ref) => {
    const drawerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && closeOnEscape) {
          onClose();
        }
      };

      if (isOpen) {
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
      }

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }, [isOpen, onClose, closeOnEscape]);

    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget && closeOnBackdrop) {
        onClose();
      }
    };

    const variants = {
      default: 'bg-background border-border',
      glass: 'bg-white/10 backdrop-blur-xl border-white/20',
      neon: 'bg-black/90 border-primary/30 shadow-[0_0_50px_hsl(var(--primary)/0.3)]'
    };

    const sizes = {
      sm: 'w-64',
      md: 'w-80',
      lg: 'w-96',
      xl: 'w-[28rem]',
      full: 'w-full'
    };

    const positions = {
      left: 'left-0 animate-slide-in-left',
      right: 'right-0 animate-slide-in-right',
      top: 'top-0 w-full h-64 animate-slide-in-top',
      bottom: 'bottom-0 w-full h-64 animate-slide-in-bottom'
    };

    const drawerContent = (
      <div
        className="fixed inset-0 z-50 flex"
        onClick={handleBackdropClick}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in" />
        
        {/* Drawer */}
        <div
          ref={ref || drawerRef}
          tabIndex={-1}
          className={cn(
            "fixed h-full border shadow-xl",
            variants[variant],
            side === 'top' || side === 'bottom' ? 'w-full' : sizes[size],
            positions[side],
            className
          )}
          {...props}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between p-4 border-b border-border">
              {title && (
                <h3 className="text-lg font-medium text-foreground">{title}</h3>
              )}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-accent rounded-md transition-colors"
                  aria-label="Close drawer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          )}
          
          {/* Content */}
          <div className="p-4 overflow-auto">
            {children}
          </div>
        </div>
      </div>
    );

    return createPortal(drawerContent, document.body);
  }
);

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ 
    children,
    content,
    className,
    side = 'top',
    variant = 'default',
    size = 'md',
    delay = 0,
    ...props 
  }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const timeoutRef = React.useRef<NodeJS.Timeout>();

    const showTooltip = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
    };

    const hideTooltip = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsVisible(false);
    };

    const variants = {
      default: 'bg-popover text-popover-foreground border-border',
      dark: 'bg-gray-900 text-white border-gray-700',
      glass: 'bg-white/10 backdrop-blur-md text-white border-white/20'
    };

    const sizes = {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3 py-2 text-sm',
      lg: 'px-4 py-3 text-base'
    };

    const positions = {
      top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
      bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
      left: 'right-full top-1/2 -translate-y-1/2 mr-2',
      right: 'left-full top-1/2 -translate-y-1/2 ml-2'
    };

    return (
      <div 
        className="relative inline-block"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        {...props}
      >
        {children}
        {isVisible && (
          <div
            ref={ref}
            className={cn(
              "absolute z-50 rounded-md border shadow-md animate-fade-in pointer-events-none",
              variants[variant],
              sizes[size],
              positions[side],
              className
            )}
          >
            {content}
            {/* Arrow */}
            <div 
              className={cn(
                "absolute w-2 h-2 rotate-45 border",
                variants[variant].split(' ')[0],
                side === 'top' && 'top-full left-1/2 -translate-x-1/2 border-t-0 border-l-0',
                side === 'bottom' && 'bottom-full left-1/2 -translate-x-1/2 border-b-0 border-r-0',
                side === 'left' && 'left-full top-1/2 -translate-y-1/2 border-l-0 border-b-0',
                side === 'right' && 'right-full top-1/2 -translate-y-1/2 border-r-0 border-t-0'
              )}
            />
          </div>
        )}
      </div>
    );
  }
);

const AlertDialog = React.forwardRef<HTMLDivElement, AlertDialogProps>(
  ({ 
    isOpen,
    onClose,
    onConfirm,
    title,
    description,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    variant = 'default',
    destructive = false,
    className,
    ...props 
  }, ref) => {
    if (!isOpen) return null;

    const variants = {
      default: 'bg-background border-border',
      destructive: 'bg-background border-destructive/30',
      warning: 'bg-background border-yellow-500/30'
    };

    const buttonVariants = {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      warning: 'bg-yellow-500 text-white hover:bg-yellow-600'
    };

    const iconVariants = {
      default: 'text-primary',
      destructive: 'text-destructive',
      warning: 'text-yellow-500'
    };

    const getIcon = () => {
      if (destructive) {
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
      }
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    };

    const dialogVariant = destructive ? 'destructive' : variant;

    return createPortal(
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in" />
        <div
          ref={ref}
          className={cn(
            "relative w-full max-w-md rounded-lg border shadow-xl animate-scale-in",
            variants[dialogVariant],
            className
          )}
          {...props}
        >
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className={cn("mr-4 rounded-full p-2 bg-opacity-20", iconVariants[dialogVariant])}>
                {getIcon()}
              </div>
              <h3 className="text-lg font-medium text-foreground">{title}</h3>
            </div>
            {description && (
              <p className="text-sm text-muted-foreground mb-6">{description}</p>
            )}
            <div className="flex justify-end space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm rounded-md border border-border hover:bg-accent transition-colors"
              >
                {cancelText}
              </button>
              <button
                onClick={() => {
                  onConfirm?.();
                  onClose();
                }}
                className={cn(
                  "px-4 py-2 text-sm rounded-md transition-colors",
                  buttonVariants[dialogVariant]
                )}
              >
                {confirmText}
              </button>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  }
);

Modal.displayName = 'Modal';
Drawer.displayName = 'Drawer';
Tooltip.displayName = 'Tooltip';
AlertDialog.displayName = 'AlertDialog';

export { Modal, Drawer, Tooltip, AlertDialog };
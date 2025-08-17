import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { NavigationProps, BreadcrumbProps, TabsProps, PaginationProps } from './types';

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ 
    className, 
    variant = 'horizontal', 
    items = [],
    active,
    onItemClick,
    children, 
    ...props 
  }, ref) => {
    
    const baseStyles = `
      flex items-center transition-all duration-300
    `;
    
    const variants = {
      horizontal: 'flex-row space-x-1',
      vertical: 'flex-col space-y-1',
      pills: 'flex-row space-x-2',
      underline: 'flex-row space-x-6 border-b border-border',
      sidebar: 'flex-col space-y-2 w-64 p-4'
    };
    
    return (
      <nav
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children || items.map((item, index) => (
          <button
            key={item.id || index}
            onClick={() => onItemClick?.(item)}
            className={cn(
              'px-3 py-2 rounded-md text-sm font-medium transition-all duration-200',
              'hover:bg-accent hover:text-accent-foreground',
              'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
              active === item.id && 'bg-primary text-primary-foreground',
              variant === 'pills' && 'bg-muted',
              variant === 'underline' && 'border-b-2 border-transparent hover:border-primary',
              variant === 'underline' && active === item.id && 'border-primary'
            )}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.label}
          </button>
        ))}
      </nav>
    );
  }
);

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, items = [], separator = '/', ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn("flex items-center space-x-2 text-sm", className)}
        aria-label="Breadcrumb"
        {...props}
      >
        {items.map((item, index) => (
          <React.Fragment key={item.id || index}>
            {index > 0 && (
              <span className="text-muted-foreground">{separator}</span>
            )}
            {item.href ? (
              <a
                href={item.href}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                }}
                className={cn(
                  "hover:text-foreground transition-colors",
                  index === items.length - 1 
                    ? "text-foreground font-medium" 
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </a>
            ) : (
              <span
                className={cn(
                  index === items.length - 1 
                    ? "text-foreground font-medium" 
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>
    );
  }
);

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ 
    className, 
    variant = 'default',
    items = [],
    active,
    onTabChange,
    children,
    ...props 
  }, ref) => {
    const [activeTab, setActiveTab] = useState(active || items[0]?.id);
    
    const handleTabChange = (tabId: string) => {
      setActiveTab(tabId);
      onTabChange?.(tabId);
    };
    
    const variants = {
      default: 'border-b border-border',
      pills: 'bg-muted p-1 rounded-lg',
      cards: 'space-x-2'
    };
    
    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        <div className={cn("flex", variants[variant])}>
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={cn(
                'px-4 py-2 text-sm font-medium transition-all duration-200',
                'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                variant === 'default' && [
                  'border-b-2 border-transparent hover:border-primary/50',
                  activeTab === item.id && 'border-primary text-primary'
                ],
                variant === 'pills' && [
                  'rounded-md hover:bg-background',
                  activeTab === item.id && 'bg-background text-foreground shadow-sm'
                ],
                variant === 'cards' && [
                  'rounded-t-lg border border-b-0 bg-muted',
                  activeTab === item.id && 'bg-background border-border'
                ]
              )}
              disabled={item.disabled}
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.label}
            </button>
          ))}
        </div>
        <div className="mt-4">
          {children || items.find(item => item.id === activeTab)?.content}
        </div>
      </div>
    );
  }
);

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ 
    className,
    currentPage = 1,
    totalPages = 1,
    onPageChange,
    showFirstLast = true,
    showPrevNext = true,
    maxVisible = 5,
    ...props 
  }, ref) => {
    const getVisiblePages = () => {
      const pages = [];
      const start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
      const end = Math.min(totalPages, start + maxVisible - 1);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      return pages;
    };
    
    return (
      <nav
        ref={ref}
        className={cn("flex items-center justify-center space-x-1", className)}
        aria-label="Pagination"
        {...props}
      >
        {showFirstLast && currentPage > 1 && (
          <button
            onClick={() => onPageChange?.(1)}
            className="px-3 py-2 text-sm rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            First
          </button>
        )}
        
        {showPrevNext && currentPage > 1 && (
          <button
            onClick={() => onPageChange?.(currentPage - 1)}
            className="px-3 py-2 text-sm rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Previous
          </button>
        )}
        
        {getVisiblePages().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange?.(page)}
            className={cn(
              "px-3 py-2 text-sm rounded-md border transition-colors",
              page === currentPage 
                ? "bg-primary text-primary-foreground border-primary" 
                : "border-border hover:bg-accent hover:text-accent-foreground"
            )}
          >
            {page}
          </button>
        ))}
        
        {showPrevNext && currentPage < totalPages && (
          <button
            onClick={() => onPageChange?.(currentPage + 1)}
            className="px-3 py-2 text-sm rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Next
          </button>
        )}
        
        {showFirstLast && currentPage < totalPages && (
          <button
            onClick={() => onPageChange?.(totalPages)}
            className="px-3 py-2 text-sm rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Last
          </button>
        )}
      </nav>
    );
  }
);

Navigation.displayName = 'Navigation';
Breadcrumb.displayName = 'Breadcrumb';
Tabs.displayName = 'Tabs';
Pagination.displayName = 'Pagination';

export { Navigation, Breadcrumb, Tabs, Pagination };
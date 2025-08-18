import React from 'react';

export type NavigationVariant = 'horizontal' | 'vertical' | 'pills' | 'underline' | 'sidebar';
export type TabVariant = 'default' | 'pills' | 'cards';

export interface NavigationItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  variant?: NavigationVariant;
  items?: NavigationItem[];
  active?: string;
  onItemClick?: (item: NavigationItem) => void;
  children?: React.ReactNode;
}

export interface BreadcrumbItem {
  id?: string;
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: string | React.ReactNode;
}

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: TabVariant;
  items: TabItem[];
  active?: string;
  onTabChange?: (tabId: string) => void;
  children?: React.ReactNode;
}

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisible?: number;
}
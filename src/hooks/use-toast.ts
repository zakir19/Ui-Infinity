
// Re-export the toast functionality from the UI component
import {
  Toast,
  ToastActionElement,
  ToastProps
} from "@/components/ui/toast";

import { createToast, useToast as useToastHook } from "@/lib/toast";

export type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

export const toast = createToast();
export const useToast = useToastHook;


// Import types from the UI component
import {
  Toast,
  ToastActionElement,
  ToastProps
} from "@/components/ui/toast";

// Import the toast functionality from the lib
import { useToast as useToastHook } from "@/lib/toast";
import { createToast } from "@/lib/toast";

export type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

// Create a new toast instance
const toast = createToast();

// Re-export the toast functionality
export { toast, useToastHook as useToast };

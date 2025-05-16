
// Re-export the toast functionality from the UI component
import { useToast as useToastOriginal, toast as toastOriginal } from "@/components/ui/toast"

// Export with the same names
export const useToast = useToastOriginal
export const toast = toastOriginal

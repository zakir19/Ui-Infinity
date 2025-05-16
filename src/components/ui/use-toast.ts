
// Re-export the toast functionality from the library
import { useToast } from "@/lib/toast";
import { createToast } from "@/lib/toast";

const toast = createToast();

export { useToast, toast };

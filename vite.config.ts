import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: mode === "production" ? "/" : "./", // Use "/" for production to match Vercel’s hosting
  build: {
    outDir: "dist", // Explicitly set output directory
    sourcemap: true, // Optional: for debugging
    rollupOptions: {
      // Ensure no external modules unless explicitly needed
      external: [],
    },
  },
}));
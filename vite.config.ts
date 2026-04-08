import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",       // Accept connections from any IPv4/IPv6
    port: 8080,       // Development server port
    hmr: {
      overlay: false, // Disable full-page error overlay
    },
  },
  plugins: [
    react(),                          // React plugin for Vite
    mode === "development" && componentTagger(), // Only tag components in dev
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Shortcut to import from src
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  build: {
    outDir: "dist",    // Output directory for production build
    sourcemap: false,  // Optional: disable source maps for smaller builds
  },
}));
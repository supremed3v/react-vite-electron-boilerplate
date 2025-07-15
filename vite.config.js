import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/views": path.resolve(__dirname, "./src/views"),
      "@/api": path.resolve(__dirname, "./src/api"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/layout": path.resolve(__dirname, "./src/layout"),
    },
  },
  plugins: [react(), tailwindcss()],
  server: {
    port: 6969,
  },
});

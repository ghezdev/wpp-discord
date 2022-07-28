import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@containers": path.resolve(__dirname, "./src/containers"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@mocks": path.resolve(__dirname, "./src/mocks"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// vite.config.ts
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        app2: "http://localhost:8002/assets/remoteEntryReact.js",
      },
      shared: {
        "react": { singleton: true, requiredVersion: "18.2.0" },
        "react-dom": { singleton: true, requiredVersion: "18.2.0" },
      } as any,
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});

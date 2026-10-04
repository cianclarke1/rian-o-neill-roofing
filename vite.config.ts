import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [tanstackStart(), nitro(), viteReact()],
  resolve: {
    // Resolve the @/* imports used throughout the app to the src directory.
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [tanstackStart(), nitro(), viteReact()],
  resolve: {
    // Enable the @/* aliases defined in tsconfig.json for Vite builds.
    tsconfigPaths: true,
  },
});

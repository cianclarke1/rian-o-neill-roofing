// @lovable.dev/vite-tanstack-config already includes the core TanStack/Vite plugins.
// For Vercel, explicitly disable the Cloudflare build target and enable Nitro's
// Vercel preset so the deployment contains a Vercel server function.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isVercel = Boolean(process.env.VERCEL || process.env.VERCEL_URL);

export default defineConfig({
  cloudflare: isVercel ? false : undefined,
  nitro: isVercel ? { preset: "vercel" } : true,
  tanstackStart: {
    server: { entry: "server" },
  },
});

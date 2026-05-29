// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Deploy to Vercel:
// - cloudflare: false → prevents @cloudflare/vite-plugin from injecting wrangler.json
// - server.preset: "vercel" → builds for Vercel serverless functions
// - server.entry: "server" → points to src/server.ts (required by TanStack Start)
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { preset: "vercel", entry: "server" },
  },
});

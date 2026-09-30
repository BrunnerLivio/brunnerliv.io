// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://brunnerliv.io",
  trailingSlash: "always",
  fonts: [
    // The sign carries the identity: block until loaded rather than flash a fallback script.
    {
      name: "Yellowtail",
      cssVariable: "--font-yellowtail",
      provider: fontProviders.fontsource(),
      styles: ["normal"],
      display: "block",
      fallbacks: ["cursive"],
    },
    {
      name: "Tilt Neon",
      cssVariable: "--font-tilt-neon",
      provider: fontProviders.fontsource(),
      styles: ["normal"],
      display: "block",
      fallbacks: ["sans-serif"],
    },
    {
      name: "Instrument Sans",
      cssVariable: "--font-instrument-sans",
      provider: fontProviders.fontsource(),
      weights: [400, 500],
      styles: ["normal", "italic"],
      fallbacks: ["system-ui", "sans-serif"],
    },
    {
      name: "Chivo Mono",
      cssVariable: "--font-chivo-mono",
      provider: fontProviders.fontsource(),
      styles: ["normal"],
      fallbacks: ["monospace"],
    },
  ],
  integrations: [mdx(), sitemap(), react()],
  markdown: {
    processor: unified({ remarkPlugins: [remarkReadingTime] }),
    shikiConfig: { theme: "poimandres" },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

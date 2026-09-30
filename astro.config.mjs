// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

export default defineConfig({
  site: "https://brunnerliv.io",
  trailingSlash: "always",
  integrations: [mdx(), sitemap()],
  markdown: {
    processor: unified({ remarkPlugins: [remarkReadingTime] }),
    shikiConfig: { theme: "poimandres" },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

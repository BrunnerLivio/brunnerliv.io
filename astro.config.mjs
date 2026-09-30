// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://brunnerliv.io",
  trailingSlash: "always",
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: { theme: "poimandres" },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

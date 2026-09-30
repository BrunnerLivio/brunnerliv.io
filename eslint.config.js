// ESLint only lints Tailwind classes in .astro templates; oxlint covers JS/TS.
import * as astroParser from "astro-eslint-parser";
import betterTailwindcss from "eslint-plugin-better-tailwindcss";
import { defineConfig } from "eslint/config";
import { parser as tsParser } from "typescript-eslint";

export default defineConfig({
  files: ["**/*.astro"],
  plugins: { "better-tailwindcss": betterTailwindcss },
  languageOptions: { parser: astroParser, parserOptions: { parser: tsParser } },
  settings: { "better-tailwindcss": { entryPoint: "src/styles/global.css" } },
  rules: {
    "better-tailwindcss/enforce-canonical-classes": "error",
    "better-tailwindcss/no-conflicting-classes": "error",
    "better-tailwindcss/no-duplicate-classes": "error",
  },
});

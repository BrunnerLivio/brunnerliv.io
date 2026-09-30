# brunnerliv.io

Personal website of Livio Brunner. Astro, MDX, Tailwind v4, deployed on Netlify.

```sh
pnpm install
pnpm dev      # local dev server
pnpm build    # static build to dist/
pnpm check    # astro check
pnpm lint     # oxlint
pnpm format   # prettier
```

## Writing

Articles live in `src/content/blog/<slug>/index.mdx`. The folder name is the URL: `/articles/<slug>/`.

```mdx
---
title: "Title"
description: "One sentence for the list and meta tags."
date: 2026-01-31
tags: ["typescript"] # optional, not rendered
draft: true # optional, excluded from the build
devTo: "https://dev.to/…" # optional, shows "Also on DEV"
cover: ./featured-img.png # optional, used for OG image; a URL also works
---
```

Components available in every article without importing: `<PullQuote>`, `<Figure src alt caption>`, `<Cta links={[{ href, label, primary }]} />`.

Projects and talks are in `src/data/*.json`. Design tokens are in `src/styles/global.css` under `@theme`.

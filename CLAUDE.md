# Blog Project

## Overview
Personal blog supporting articles and photography, minimalist design, multilingual (en / ja / zh-TW).

## Tech Stack
- Framework: Astro 7.x + Svelte
- Styling: Tailwind CSS v4 + CSS tokens (src/styles/tokens.css)
- Search: Pagefind (Phase 3, may switch to Meilisearch later)
- i18n: Custom (src/features/i18n/), supports en / ja / zh-TW
- Deploy: Cloudflare Pages (auto-deploy on git push)

## Dev Server
- Manual: `npm run dev`
- Background (for Claude Code): `npx astro dev --background`
- Stop background server: `npx astro dev stop`

## Common Commands
- `npm run dev` - dev server (localhost:4321)
- `npm run build` - build
- `npm run preview` - preview build output

## Architecture Principles
1. Strict separation of content and features: content in src/content/, features in src/features/
2. Colors and spacing use only CSS tokens (src/styles/tokens.css) — no hardcoded values
3. pages/ should be thin: data assembly only, no UI logic
4. Each feature in features/ exposes only index.ts; everything else is internal

## Project Structure
src/
├── content.config.ts   # Content Layer schema (Astro 7+, lives outside content/)
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── PostCard.astro   # Article list card (timeline layout)
│   └── PhotoCard.astro  # Photo list card (grid layout)
├── layouts/
│   ├── BaseLayout.astro
│   ├── ArticleLayout.astro
│   └── PhotoLayout.astro
├── pages/
│   ├── index.astro
│   ├── articles/
│   │   ├── index.astro      # Article list
│   │   └── [slug].astro     # Article detail
│   └── photos/
│       ├── index.astro      # Photo grid
│       └── [slug].astro     # Photo detail
├── content/
│   ├── articles/
│   │   ├── hello-world.md       # lang: en
│   │   ├── hello-world-zh.md    # lang: zh-TW
│   │   └── hello-world-ja.md    # lang: ja
│   └── photos/
│       ├── tokyo-2026.md        # location: Tokyo
│       └── taipei-streets.md    # location: Taipei
├── features/
│   ├── i18n/               # useTranslation(lang) → { t }
│   │   ├── index.ts         # Public entry point
│   │   └── locales/         # en.json / ja.json / zh-TW.json
│   ├── theme/              # getTheme() / setTheme()
│   │   ├── index.ts         # Public entry point
│   │   └── ThemeToggle.astro
│   └── search/             # Pagefind integration
│       ├── index.ts         # openSearch() / closeSearch()
│       └── SearchModal.astro
└── styles/                 # global.css, tokens.css

## Adding a New Feature
1. Create a folder under src/features/
2. Write the public API in index.ts
3. Update this CLAUDE.md

## Adding a New Content Type
1. Create a folder under src/content/
2. Add schema to src/content.config.ts (with glob loader)
3. Add a layout to src/layouts/
4. Add a route to src/pages/

## Article Frontmatter
Required: title, date, description
Optional: tags, lang (en / ja / zh-TW), type (article / photo)

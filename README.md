# zytsai.dev

Personal blog. Articles and photography. Minimalist.

## Stack

- [Astro 7](https://astro.build) — static site generator
- Tailwind CSS v4 + CSS custom properties (`src/styles/tokens.css`)
- Pagefind — full-text search (built at compile time)
- Custom i18n — en / ja / zh-TW
- Cloudflare Pages — auto-deploy on push to `master`

## Commands

```bash
npm run dev      # dev server at localhost:4321 (search not functional in dev)
npm run build    # astro build + pagefind index
npm run preview  # preview production build (search works here)
```

## What's built

- `/` — home
- `/articles` — article list (timeline layout)
- `/articles/[slug]` — article detail with prose styles
- `/photos` — photo grid
- `/photos/[slug]` — photo detail
- `⌘K` — full-text search via Pagefind

## Features

| Feature | Location |
| --- | --- |
| i18n (en / ja / zh-TW) | `src/features/i18n/` |
| Light / dark theme | `src/features/theme/` |
| Search modal | `src/features/search/` |

## Content

Articles: `src/content/articles/*.md`
— required: `title`, `date`, `description` / optional: `tags`, `lang`

Photos: `src/content/photos/*.md`
— required: `title`, `date`, `description` / optional: `tags`, `location`

See `CLAUDE.md` for architecture principles and full project structure.

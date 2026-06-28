# Blog Project

## 專案概述
個人 blog，支援文章、攝影等多媒體內容，風格極簡，中英雙語。

## 技術棧
- Framework: Astro 5.x + Svelte
- Styling: Tailwind CSS v4 + CSS tokens（src/styles/tokens.css）
- 搜尋: Pagefind（Phase 3，之後可換 Meilisearch）
- 多語言: 自製 i18n（src/features/i18n/），支援 en / ja / zh-TW
- Deploy: Cloudflare Pages（git push 自動部署）

## 開發伺服器
- 手動開發：`npm run dev`
- Claude Code 使用：`npx astro dev --background`
- 停止背景伺服器：`npx astro dev stop`

## 常用指令
- `npm run dev` - 開發伺服器（localhost:4321）
- `npm run build` - 打包
- `npm run preview` - 預覽 build 結果

## 架構原則
1. 內容與功能完全切割：內容放 src/content/，功能放 src/features/
2. 顏色與間距只用 CSS token（src/styles/tokens.css），不寫死數值
3. pages/ 盡量薄，只做資料組裝，不含 UI 邏輯
4. features/ 每個功能對外只暴露 index.ts，其他為內部實作

## 專案結構
src/
├── content.config.ts   # Content Layer schema（Astro 7+，不在 content/ 內）
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   └── PostCard.astro  # 文章列表卡片
├── layouts/
│   ├── BaseLayout.astro
│   └── ArticleLayout.astro
├── pages/
│   ├── index.astro
│   └── articles/
│       ├── index.astro      # 文章列表
│       └── [slug].astro     # 文章內頁
├── content/
│   └── articles/
│       ├── hello-world.md       # lang: en
│       ├── hello-world-zh.md   # lang: zh-TW
│       └── hello-world-ja.md   # lang: ja
├── features/               # 功能模組（i18n、theme、search）
└── styles/                 # global.css、tokens.css

## 新增功能步驟
1. 在 src/features/ 新增資料夾
2. 對外 API 寫在 index.ts
3. 在此 CLAUDE.md 補充說明

## 新增內容類型步驟
1. 在 src/content/ 新增資料夾
2. 在 src/content.config.ts 新增 schema（含 glob loader）
3. 在 src/layouts/ 新增對應版型
4. 在 src/pages/ 新增路由

## 文章 Frontmatter 規範
必填：title、date、description
選填：tags、lang（en / ja / zh-TW）、type（article / photo）
# Blog Project

## 專案理念
內容與功能完全切割。新增功能進 features/，新增內容進 content/，UI 元件在 components/。

## 技術棧
- Framework: Astro 5.x + Svelte（文章支援用）
- Styling: Tailwind CSS v4 + CSS tokens（styles/tokens.css）
- 搜尋: Pagefind（之後可換 Meilisearch）
- 多語言: 自製 i18n（features/i18n/）
- Deploy: Cloudflare Pages

## 開發原則
1. pages/ 盡量薄，只做資料組裝，不含 UI 邏輯
2. features/ 每個功能對外只暴露 index.ts，其他檔案是內部實作
3. 顏色與間距只用 CSS token，不寫死數值
4. 不裝不必要的套件，保持可讀性優先

## 新增內容類型的步驟
1. 在 content/ 新增資料夾
2. 在 content/config.ts 新增 schema
3. 在 layouts/ 新增對應版型
4. 在 pages/[lang]/ 新增路由
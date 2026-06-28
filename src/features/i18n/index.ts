import en from './locales/en.json';
import ja from './locales/ja.json';
import zhTW from './locales/zh-TW.json';

export type Lang = 'en' | 'ja' | 'zh-TW';

type Locale = typeof en;

const locales: Record<Lang, Locale> = { en, ja, 'zh-TW': zhTW };

export function useTranslation(lang: Lang = 'en') {
  const locale = locales[lang] ?? locales.en;
  function t(key: string): string {
    const value = key.split('.').reduce<unknown>((obj, k) => {
      return obj && typeof obj === 'object' ? (obj as Record<string, unknown>)[k] : undefined;
    }, locale);
    return typeof value === 'string' ? value : key;
  }
  return { t };
}

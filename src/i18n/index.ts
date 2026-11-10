import { en, zhTW } from './messages';

export const locales = ['en', 'zh-TW'] as const;
export type Locale = typeof locales[number];
export type MessageKey = keyof typeof en;

export function t(locale: Locale, key: MessageKey): string {
  return (locale === 'zh-TW' ? zhTW[key]?.trim() : undefined) || en[key];
}

// Both languages have explicit prefixes; retain any configured deployment base.
export function localePath(locale: Locale, path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const suffix = path.replace(/^\/+|\/+$/g, '');
  return `${base}/${locale}/${suffix ? `${suffix}/` : ''}`;
}

export function pagePath(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const relative = base && pathname.startsWith(`${base}/`) ? pathname.slice(base.length) : pathname;
  return relative.replace(/^\/(?:(?:en|zh-TW)\/)?/, '').replace(/\/$/, '');
}

export function dateLocale(locale: Locale): string {
  return locale === 'zh-TW' ? 'zh-TW' : 'en-US';
}

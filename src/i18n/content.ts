import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './index';

type SourceCollection = 'events' | 'blog' | 'team';
export type LocalizedEntry<C extends SourceCollection> = Awaited<ReturnType<typeof getLocalizedCollection<C>>>[number];
const textFields = ['title', 'description', 'summary', 'badge'] as const;

export async function getLocalizedCollection<C extends SourceCollection>(collection: C, locale: Locale) {
  const entries = await getCollection(collection);
  const translations = await getCollection('translations', ({ data }) => !data.draft);
  const bySource = new Map<string, CollectionEntry<'translations'>>();
  for (const translation of translations) {
    if (translation.data.sourceCollection !== collection) continue;
    if (!entries.some(entry => entry.id === translation.data.sourceId)) {
      throw new Error(`Translation ${translation.id} references missing ${collection}/${translation.data.sourceId}`);
    }
    const key = `${translation.data.sourceId}:${translation.data.locale}`;
    if (bySource.has(key)) throw new Error(`Duplicate translation for ${collection}/${key}`);
    bySource.set(key, translation);
  }
  return entries.filter(entry => !entry.data.draft).map(entry => {
    const english = bySource.get(`${entry.id}:en`);
    const requested = bySource.get(`${entry.id}:${locale}`);
    const data = { ...entry.data };
    // Missing and blank translations both fall back to English, then the legacy source.
    for (const field of textFields) {
      const translated = requested?.data[field]?.trim() || english?.data[field]?.trim();
      if (translated) Object.assign(data, { [field]: translated });
    }
    const translatedBody = requested?.body?.trim() ? requested : english?.body?.trim() ? english : undefined;
    return {
      ...entry,
      data,
      bodyEntry: translatedBody ?? entry,
      bodyLanguage: translatedBody?.data.locale ?? entry.data.bodyLanguage,
    };
  });
}

import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import ts from 'typescript';

// Load the real TS helpers with a fixture-backed Astro content API, without a browser.
const moduleUrl = code => `data:text/javascript;base64,${Buffer.from(code).toString('base64')}`;
function compile(file, imports = {}) {
  let code = ts.transpileModule(readFileSync(new URL(file, import.meta.url), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  }).outputText.replaceAll('import.meta.env.BASE_URL', "'/NTUAIS/'");
  for (const [name, url] of Object.entries(imports)) code = code.replaceAll(`'${name}'`, JSON.stringify(url));
  return moduleUrl(code);
}
const messagesUrl = compile('../src/i18n/messages.ts');
const i18n = await import(compile('../src/i18n/index.ts', { './messages': messagesUrl }));
const messages = await import(messagesUrl);
const mockUrl = moduleUrl(`
  let records = {};
  export function setRecords(value) { records = value; }
  export async function getCollection(name, filter = () => true) { return (records[name] || []).filter(filter); }
`);
const { setRecords } = await import(mockUrl);
const { getLocalizedCollection } = await import(compile('../src/i18n/content.ts', { 'astro:content': mockUrl }));
const source = { id: 'nested/sample.md', slug: 'nested/sample', body: '原文', data: {
  title: 'Original title', summary: 'Original summary', date: '2026-11-10', draft: false, bodyLanguage: 'zh-TW',
}};
const translation = (locale, fields = {}, body) => ({ id: locale, body, data: {
  sourceCollection: 'blog', sourceId: source.id, locale, draft: false, ...fields,
}});

test('routes preserve deployment base, stable slugs and locale round trips', () => {
  assert.equal(i18n.localePath('en'), '/NTUAIS/en/');
  assert.equal(i18n.localePath('zh-TW', '/blog/nested/sample/'), '/NTUAIS/zh-TW/blog/nested/sample/');
  const path = i18n.pagePath('/NTUAIS/zh-TW/blog/nested/sample/');
  assert.equal(i18n.localePath('en', path), '/NTUAIS/en/blog/nested/sample/');
  assert.equal(i18n.pagePath('/NTUAIS/en/blog/nested/sample/'), path);
  assert.equal(i18n.pagePath('/NTUAIS/en/'), '');
  assert.equal(i18n.pagePath('/NTUAIS/'), '');
});

test('missing or blank Chinese UI strings fall back to English', () => {
  const previous = messages.zhTW.home;
  try {
    delete messages.zhTW.home;
    assert.equal(i18n.t('zh-TW', 'home'), 'Home');
    messages.zhTW.home = '   ';
    assert.equal(i18n.t('zh-TW', 'home'), 'Home');
  } finally { messages.zhTW.home = previous; }
});

test('partial metadata falls back field by field; body falls back independently to English', async () => {
  setRecords({ blog: [source], translations: [
    translation('en', { title: 'English title', summary: 'English summary' }, 'English body'),
    translation('zh-TW', { title: '中文標題', summary: '  ' }),
  ] });
  const [entry] = await getLocalizedCollection('blog', 'zh-TW');
  assert.equal(entry.data.title, '中文標題');
  assert.equal(entry.data.summary, 'English summary');
  assert.equal(entry.bodyEntry.body, 'English body');
  assert.equal(entry.bodyLanguage, 'en');
  assert.equal(entry.id, source.id);
  assert.equal(entry.slug, source.slug);
  assert.equal(entry.data.date, source.data.date);
});

test('translated body wins; missing translations preserve the original and its language', async () => {
  setRecords({ blog: [source], translations: [translation('zh-TW', {}, '中文全文')] });
  assert.equal((await getLocalizedCollection('blog', 'zh-TW'))[0].bodyEntry.body, '中文全文');
  const [entry] = await getLocalizedCollection('blog', 'en');
  assert.equal(entry.bodyEntry, source);
  assert.equal(entry.bodyLanguage, 'zh-TW');
});

test('draft records and draft translations are excluded', async () => {
  setRecords({ blog: [source, { ...source, id: 'draft.md', data: { ...source.data, draft: true } }],
    translations: [translation('zh-TW', { title: 'Draft translation', draft: true }, 'Draft body')] });
  const entries = await getLocalizedCollection('blog', 'zh-TW');
  assert.equal(entries.length, 1);
  assert.equal(entries[0].data.title, source.data.title);
});

test('orphan and duplicate translations fail instead of silently replacing content', async () => {
  setRecords({ blog: [source], translations: [translation('en'), translation('en')] });
  await assert.rejects(getLocalizedCollection('blog', 'en'), /Duplicate translation/);
  setRecords({ blog: [source], translations: [translation('en', { sourceId: 'missing.md' })] });
  await assert.rejects(getLocalizedCollection('blog', 'en'), /references missing/);
});

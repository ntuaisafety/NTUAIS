import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  // base: '/NTUAIS/',
  // site: 'https://ntuais.github.io',
  site: 'https://ntuais.org',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', { path: 'zh-TW', codes: ['zh-TW'] }],
    // Explicit locale routes plus legacy redirects are generated in src/pages.
    routing: 'manual',
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    bodyLanguage: z.enum(['en', 'zh-TW', 'mul']).default('mul'),
    description: z.string(),
    summary: z.string().optional(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional().default([]),
    badge: z.string().optional(),
    badge_color: z.string().optional().default('green'),
    icon_path: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    bodyLanguage: z.enum(['en', 'zh-TW', 'mul']).default('mul'),
    date: z.coerce.date(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    authors: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
  }),
});

const team = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    bodyLanguage: z.enum(['en', 'zh-TW', 'mul']).default('en'),
    preferredName: z.string().optional(),
    description: z.string().optional(),
    summary: z.string().optional(),
    role: z.enum(['organizer', 'mentor', 'founder']),
    weight: z.number().optional().default(99),
    draft: z.boolean().optional().default(false),
    social: z.array(z.record(z.string())).optional().default([]),
  }),
});

// Optional translations reference an existing record; dates, IDs, assets, tags,
// authors, roles and publication status remain owned by that source record.
const translations = defineCollection({
  type: 'content',
  schema: z.object({
    sourceCollection: z.enum(['events', 'blog', 'team']),
    sourceId: z.string(),
    locale: z.enum(['en', 'zh-TW']),
    title: z.string().optional(),
    description: z.string().optional(),
    summary: z.string().optional(),
    badge: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { events, blog, team, translations };

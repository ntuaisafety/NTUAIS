import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional().default([]),
    badge: z.string().optional(),
    badge_color: z.string().optional().default('green'),
    icon_path: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { events };

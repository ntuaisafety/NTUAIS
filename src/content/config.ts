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

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    authors: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
  }),
});

const team = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    summary: z.string().optional(),
    role: z.enum(['organizer', 'mentor']),
    weight: z.number().optional().default(99),
    draft: z.boolean().optional().default(false),
    image: image().optional(),
    social: z.array(z.record(z.string())).optional().default([]),
  }),
});

export const collections = { events, blog, team };

import { defineCollection, z } from 'astro:content';

const reviews = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    creator: z.string().optional(),
    artist: z.string().optional(),
    label: z.string().optional(),
    medium: z.enum(['novel', 'film', 'anime', 'tv', 'comic', 'music', 'videogame', 'ttrpg']),
    year: z.number(),
    era: z.enum(['80s', '90s', '00s', '10s', '20s']),
    score: z.number(),
    verdict: z.string().optional(),
    summary: z.string().optional(),
    blurb: z.string().optional(),
    score_bars: z.array(z.object({
      label: z.string(),
      value: z.number(),
    })).optional(),
    genre_tags: z.array(z.string()).optional(),
    listen_platform: z.enum(['bandcamp', 'ampwall', 'soundcloud', 'youtube']).optional(),
    listen_url: z.string().optional(),
    tags: z.array(z.string()).optional(),
    published_date: z.coerce.date().optional(),
    featured: z.boolean().optional(),
    related: z.array(z.string()).optional(),
    cover_image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const quotes = defineCollection({
  type: 'content',
  schema: z.object({
    text: z.string(),
    attribution: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { reviews, quotes };

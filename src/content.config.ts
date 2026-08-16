import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    category: z.string(),
    year: z.string(),
    role: z.string(),
    featured: z.boolean().default(true),
    order: z.number().default(1),
    image: z.string().optional(),
    tags: z.array(z.string()),
    accentColor: z.string().optional(),
    overview: z.string(),
    liveUrl: z.string().optional(),
    githubUrl: z.string().optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.string(),
    readTime: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(true),
    order: z.number().default(1),
  }),
});

export const collections = { projects, notes };

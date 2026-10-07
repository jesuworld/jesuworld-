import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each writing is one Markdown file in src/content/writings.
// - If `url` is set, the card links out (e.g. to myezhuthu.link).
// - If `url` is empty, the Markdown body is published at /writings/<file-name>.
const writings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writings' }),
  schema: z.object({
    title: z.string(),
    transliteration: z.string().optional(),
    lang: z.enum(['ta', 'en']),
    category: z.enum(['Short story', 'Poem', 'Essay', 'Cinema', 'Music']),
    date: z.coerce.date(),
    summary: z.string(),
    url: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writings };

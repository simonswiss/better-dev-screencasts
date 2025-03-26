import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: 'src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      excerpt: z.string(),
      coverImage: image().optional(),
    }),
})

export const collections = { posts }

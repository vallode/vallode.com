import { rssSchema } from "@astrojs/rss";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: rssSchema.extend({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { posts };

// Astro content collections — Keystatic bu şemaya uyumlu dosyalar yazar
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    titleEn: z.string(),
    titleTr: z.string().optional(),
    publishedAt: z.coerce.date(),
    excerpt: z.string().optional(),
    excerptTr: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { blog };

import { defineCollection, z } from "astro:content";

// Blog — markdown içerik
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

// Testimonials — yaml veri
const testimonials = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    location: z.string(),
    rating: z.number().min(1).max(5),
    quoteEn: z.string(),
    quoteTr: z.string(),
    featured: z.boolean().default(false),
  }),
});

// Team — yaml veri
const team = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    titleEn: z.string(),
    titleTr: z.string(),
    bioEn: z.string(),
    bioTr: z.string(),
    photo: z.string().optional(),
    order: z.number(),
  }),
});

const services = defineCollection({
  type: "data",
  schema: z.object({
    titleEn: z.string(),
    titleTr: z.string(),
    descriptionEn: z.string(),
    descriptionTr: z.string(),
    icon: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, testimonials, team, services };

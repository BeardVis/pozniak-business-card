import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const eventCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/events" }),
  schema: z.object({
    position: z.number().optional(),
    title: z.string(),
    date: z.date(),
    description: z.string(),
  }),
});

const workshopCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/workshops" }),
  schema: z.object({
    position: z.number().optional(),
    title: z.string(),
    start_date: z.date(),
    end_date: z.date(),
    description: z.string(),
  }),
});

const pressCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/press" }),
  schema: z.object({
    position: z.number().optional(),
    quote: z.string(),
  }),
});

export const collections = {
  events: eventCollection,
  workshops: workshopCollection,
  press: pressCollection,
};

import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob, file } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "*/index.mdx", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      devTo: z.string().url().optional(),
      cover: image().or(z.string().url()).optional(),
    }),
});

const projects = defineCollection({
  loader: file("./src/data/projects.json"),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    name: z.string(),
    description: z.string(),
    sourceCode: z.string().url(),
    languages: z.array(z.string()),
  }),
});

const talks = defineCollection({
  loader: file("./src/data/talks.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    youtube: z.string().url(),
  }),
});

export const collections = { blog, projects, talks };

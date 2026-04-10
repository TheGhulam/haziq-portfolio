import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const portfolioCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
	schema: z.object({
		title: z.string(),
		image: z.object({
			src: z.string(),
			alt: z.string(),
		}),
		snippet: z.string(),
		links: z.array(
			z.object({
				icon: z.string(),
				src: z.string(),
			}),
		),
		publishDate: z.coerce.date(),
	}),
});

export const collections = {
	portfolio: portfolioCollection,
};

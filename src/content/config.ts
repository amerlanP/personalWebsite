import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			// img: z.string(),
			// img2: z.string().optional(),
			imgs: z.array(z.string()),
			img_alt: z.string().optional(),
		}),
	}),
};

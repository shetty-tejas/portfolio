import type { Component } from 'svelte';

export interface PostMetadata {
	title: string;
	description: string;
	publishedAt: string;
	tags?: string[];
	readingTime?: number;
}

export interface Post {
	slug: string;
	metadata: PostMetadata;
	component?: Component;
}

type EagerGlob = {
	meta: Record<string, PostMetadata>;
	raw: Record<string, string>;
};

type LazyGlob = Record<string, () => Promise<Component>>;

export type AppEagerGlobs = {
	writings: EagerGlob;
	series: EagerGlob;
};

export type AppLazyGlobs = {
	writings: LazyGlob;
	series: LazyGlob;
};

// Helper to extract slug from path
const getSlug = (path: string) => path.split('/').pop()?.replace('.md', '') ?? '';

// Helper to calculate reading time
const calculateReadingTime = (text: string): number => {
	const wordsPerMinute = 225;
	const words = text
		.replace(/---[\s\S]*?---/, '')
		.trim()
		.split(/\s+/).length;
	return Math.ceil(words / wordsPerMinute);
};

// 1. EAGER GLOBALS: Load only the small bits (metadata and raw text for reading time)
// These are included in the bundle but are lightweight.
const eagerGlobs: AppEagerGlobs = {
	writings: {
		meta: import.meta.glob<PostMetadata>('/src/lib/content/writings/*.md', {
			import: 'metadata',
			eager: true
		}),
		raw: import.meta.glob<string>('/src/lib/content/writings/*.md', {
			query: '?raw',
			import: 'default',
			eager: true
		})
	},
	series: {
		meta: import.meta.glob<PostMetadata>('/src/lib/content/series/*.md', {
			import: 'metadata',
			eager: true
		}),
		raw: import.meta.glob<string>('/src/lib/content/series/*.md', {
			query: '?raw',
			import: 'default',
			eager: true
		})
	}
};

// 2. LAZY GLOBALS: The actual Svelte components stay behind dynamic imports.
const lazyGlobs: AppLazyGlobs = {
	writings: import.meta.glob<Component>('/src/lib/content/writings/*.md', {
		import: 'default'
	}),
	series: import.meta.glob<Component>('/src/lib/content/series/*.md', {
		import: 'default'
	})
};

// 3. PROCESSOR: Build the static list once
const process = (meta: Record<string, PostMetadata>, raw: Record<string, string>): Post[] => {
	return Object.entries(meta)
		.map(([path, metadata]) => ({
			slug: getSlug(path),
			metadata: {
				...metadata,
				readingTime: calculateReadingTime(raw[path] || '')
			}
		}))
		.sort(
			(a, b) =>
				new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
		);
};

const writings = process(eagerGlobs.writings.meta, eagerGlobs.writings.raw);
const series = process(eagerGlobs.series.meta, eagerGlobs.series.raw);

// 4. EXPORTS
export const get = (type: 'writings' | 'series'): Post[] =>
	process(eagerGlobs[type].meta, eagerGlobs[type].raw);

/**
 * Loads the full post including the Svelte component lazily.
 */
export const getPostBySlug = async (
	slug: string,
	type: 'writings' | 'series'
): Promise<Post | undefined> => {
	const list = type === 'writings' ? writings : series;
	const comps = lazyGlobs[type];

	const post = list.find((p) => p.slug === slug);
	if (!post) return undefined;

	// Find the matching path in the component glob
	const path = Object.keys(comps).find((p) => getSlug(p) === slug);
	if (!path) return undefined;

	return {
		...post,
		component: await comps[path]()
	};
};

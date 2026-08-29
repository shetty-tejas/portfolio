import type { Component } from 'svelte';

export interface PostMetadata {
	title: string;
	description: string;
	publishedAt: string;
	readingTime: number;
	excerpt: string;

	tags?: string[];
}

export interface Post {
	path: string;
	slug: string;
	metadata: PostMetadata;
	component?: Component;
}

type PostType = 'writings' | 'series';

const metadataGlobs = {
	writings: import.meta.glob<PostMetadata>('/src/lib/content/writings/*.md', {
		import: 'metadata',
		eager: true
	}),
	series: import.meta.glob<PostMetadata>('/src/lib/content/series/*.md', {
		import: 'metadata',
		eager: true
	})
};

const componentGlobs = {
	writings: import.meta.glob<Component>('/src/lib/content/writings/*.md', {
		import: 'default'
	}),
	series: import.meta.glob<Component>('/src/lib/content/series/*.md', {
		import: 'default'
	})
};

// Prebuild metadata into Post[]
const writings = process(metadataGlobs.writings);
const series = process(metadataGlobs.series);

export function get(type: PostType): Post[] {
	return type === 'writings' ? writings : series;
}

export async function getPostBySlug(slug: string, type: PostType): Promise<Post | undefined> {
	const post = get(type).find((p) => p.slug === slug);
	if (!post) return undefined;

	const component = componentGlobs[type][post.path];
	if (!component) return undefined;

	return {
		...post,
		component: await component()
	};
}

function getSlug(path: string): string {
	return path.split('/').pop()?.replace('.md', '') ?? '';
}

function process(meta: Record<string, PostMetadata>): Post[] {
	return Object.entries(meta)
		.map(([path, metadata]) => ({ path: path, slug: getSlug(path), metadata }))
		.sort((a, b) => b.metadata.publishedAt.localeCompare(a.metadata.publishedAt));
}

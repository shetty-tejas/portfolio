import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import remarkGfm from 'remark-gfm';
import remarkHeadingId from 'remark-heading-id';

import calculateReadingTime from './src/lib/plugins/reading-time.ts';
import buildExcerpt from './src/lib/plugins/excerpt.ts';
import buildToc from './src/lib/plugins/toc.ts';

const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [
				remarkGfm,
				[remarkHeadingId, { defaults: true }],
				[buildToc, { heading: '(table[ -]of[ -])?contents?|toc' }],
				calculateReadingTime,
				buildExcerpt
			]
		})
	],
	kit: {
		adapter: adapter(),
		inlineStyleThreshold: 40960,
		prerender: {
			origin: process.env.ORIGIN,
			handleUnseenRoutes: 'warn'
		}
	},
	extensions: ['.svelte', '.md']
};

export default config;

import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import rehypeSlug from 'rehype-slug';
import rehypeWS from 'rehype-wrap-sibling';

import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';

const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [
				[
					remarkToc,
					{
						ordered: false,
						maxDepth: 3,
						tight: true
					}
				],
				remarkGfm
			],
			rehypePlugins: [
				rehypeSlug,
				[rehypeWS, { selector: 'h4#table-of-contents', wrapper: 'nav#contents' }]
			]
		})
	],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.md']
};

export default config;

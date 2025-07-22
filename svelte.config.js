import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import remarkGfm from 'remark-gfm';

const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [remarkGfm]
		})
	],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.md']
};

export default config;

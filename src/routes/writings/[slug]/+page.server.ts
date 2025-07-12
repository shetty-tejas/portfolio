import { error, type ServerLoadEvent } from '@sveltejs/kit';
import { render } from 'svelte/server';

import type { PageServerLoad } from './$types';
import { loadMarkdownFile } from '$lib/server_utils';

export const load: PageServerLoad = async ({ params }: ServerLoadEvent) => {
	const slug = params.slug || '';

	try {
		const module: App.MarkdownModule | undefined = await loadMarkdownFile('writings', slug);
		if (!module) throw new Error();

		const rendered = render(module.default);

		return {
			html: rendered.body,
			metadata: module.metadata
		};
	} catch {
		error(404, 'Writing not found!');
	}
};

import { error, type ServerLoadEvent } from '@sveltejs/kit';
import { render } from 'svelte/server';

import type { PageServerLoad } from './$types';
import { fetchMarkdownComponent } from '$lib/server_utils';

export const load: PageServerLoad = async ({ params }: ServerLoadEvent) => {
	const slug = params.slug || '';

	try {
		const module: App.MarkdownComponent | undefined = await fetchMarkdownComponent(
			'writings',
			slug
		);
		if (!module) throw new Error();

		const rendered = render(module.default);

		return {
			html: rendered.body,
			metadata: module.metadata
		};
	} catch {
		error(404, {
			code: 'NOT_FOUND',
			message: 'Page Not Found'
		});
	}
};

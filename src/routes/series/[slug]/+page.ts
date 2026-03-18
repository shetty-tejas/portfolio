import { error } from '@sveltejs/kit';
import type { PageLoad, PageLoadEvent } from './$types';
import { getPostBySlug } from '$lib/content/loader';

export const load: PageLoad = async ({ params }: PageLoadEvent) => {
	const post = await getPostBySlug(params.slug, 'series');

	if (!post) {
		error(404, {
			code: 'NOT_FOUND',
			message: 'Page Not Found'
		});
	}

	return {
		post
	};
};

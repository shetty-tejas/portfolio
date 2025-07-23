import { error } from '@sveltejs/kit';
import type { PageLoad, PageLoadEvent } from './$types';
import { routeExists, writings } from '$lib/content/routes';

export const load: PageLoad = ({ params }: PageLoadEvent) => {
	const route = routeExists(params.slug, writings);

	if (!route) {
		error(404, {
			code: 'NOT_FOUND',
			message: 'Page Not Found'
		});
	}

	return {
		slug: params.slug
	};
};

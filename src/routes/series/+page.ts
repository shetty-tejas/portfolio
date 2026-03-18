import type { PageLoad } from './$types';
import { get } from '$lib/content/loader';

export const load: PageLoad = async () => {
	const series = get('series');

	return {
		series
	};
};

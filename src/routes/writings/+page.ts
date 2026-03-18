import type { PageLoad } from './$types';
import { get } from '$lib/content/loader';

export const load: PageLoad = async () => {
	const writings = get('writings');

	return {
		writings
	};
};

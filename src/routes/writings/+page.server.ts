import { loadMarkdownFiles } from '$lib/server_utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (): Promise<{ articles: Array<App.ContentMetadata> }> => {
	const markdownModules: Array<App.MarkdownModule> = await loadMarkdownFiles('writings');

	return {
		articles: markdownModules.map((m): App.ContentMetadata => m.metadata)
	};
};

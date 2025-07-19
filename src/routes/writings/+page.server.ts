import { listMarkdownComponents } from '$lib/server_utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (): Promise<{ articles: Array<App.Frontmatter> }> => {
	const markdownModules: Array<App.MarkdownComponent> = await listMarkdownComponents('writings');

	return {
		articles: markdownModules.map((m): App.Frontmatter => m.metadata)
	};
};

import { listMarkdownComponents } from '$lib/server_utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (): Promise<{ series: Array<App.Frontmatter> }> => {
	const markdownModules: Array<App.MarkdownComponent> = await listMarkdownComponents('series');

	return {
		series: markdownModules.map((m): App.Frontmatter => m.metadata)
	};
};

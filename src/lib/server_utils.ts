import { readdir } from 'fs/promises';
import { join } from 'path';

function normaliseFileName(file: string): string {
	if (file.endsWith('.md')) file = file.slice(0, -3);

	return file;
}

export async function loadMarkdownFile(
	directory: string,
	file: string
): Promise<App.MarkdownModule | undefined> {
	try {
		return await import(`./content/${directory}/${file}.md`);
	} catch (error) {
		console.log(error);
	}
}

export async function loadMarkdownFiles(directory: string): Promise<Array<App.MarkdownModule>> {
	try {
		const fileNames: string[] = await readdir(
			join(process.cwd(), 'src', 'lib', 'content', directory)
		);
		const markdownFiles: string[] = fileNames.map((f) => normaliseFileName(f));

		const promises: Array<Promise<App.MarkdownModule | undefined>> = markdownFiles.map(
			async (f: string): Promise<App.MarkdownModule | undefined> => {
				try {
					return await import(`./content/${directory}/${f}.md`);
				} catch (error) {
					console.error(`Failed to load ${f} due to error: `, error);
				}
			}
		);

		const modules: Array<App.MarkdownModule> = (await Promise.all(promises))
			.filter((m: App.MarkdownModule | undefined) => !!m)
			.filter((m: App.MarkdownModule) => (m.metadata.publishedAt || '')?.length > 0)
			.sort((a, b) => ((a.metadata.publishedAt || '') > (b.metadata.publishedAt || '') ? -1 : 1));

		return modules;
	} catch (error) {
		console.error(`Error loading markdown files from ${directory}:`, error);
		return [];
	}
}

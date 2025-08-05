// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Chapter {
			name: string;
			url: string;
		}

		interface Frontmatter {
			title: string;
			description: string;
			publishedAt: string;

			chapter?: Chapter;
		}

		module '*.md' {
			import type { SvelteComponent } from 'svelte';

			export default class Comp extends SvelteComponent {}

			export const metadata: Frontmatter;
		}

		type MarkdownComponent = typeof import('*.md');

		interface Error {
			code: 'NOT_FOUND';
		}

		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

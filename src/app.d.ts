// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		declare module '*.md' {
			import type { SvelteComponent } from 'svelte';

			export default class Comp extends SvelteComponent {}

			export const metadata: ContentMetadata;
		}

		interface ContentMetadata {
			title: string;
			createdAt: string;
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

function createTheme() {
	let theme = $state<Theme>('dark');

	if (browser) {
		const savedTheme = localStorage.getItem('theme') as Theme | null;
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		theme = savedTheme || (prefersDark ? 'dark' : 'light');

		$effect.root(() => {
			$effect(() => {
				document.documentElement.setAttribute('data-theme', theme);
				localStorage.setItem('theme', theme);
			});
		});
	}

	return {
		get current() {
			return theme;
		},
		toggle: () => {
			theme = theme === 'light' ? 'dark' : 'light';
		}
	};
}

export const theme = createTheme();

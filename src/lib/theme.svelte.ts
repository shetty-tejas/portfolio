import { browser } from '$app/environment';

export type Theme = 'light' | 'dark' | 'system';

function createTheme() {
	const states: Record<Theme, Theme> = {
		system: 'light',
		light: 'dark',
		dark: 'system'
	};

	let theme = $state<Theme>('system');

	if (browser) {
		theme = (localStorage.getItem('theme') || 'system') as Theme;

		$effect.root(() => {
			$effect(() => {
				if (theme === 'system') {
					document.documentElement.removeAttribute('data-theme');
				} else {
					document.documentElement.setAttribute('data-theme', theme);
				}

				localStorage.setItem('theme', theme);
			});
		});
	}

	return {
		get current() {
			return theme;
		},
		toggle() {
			theme = states[theme];
		}
	};
}

export const theme = createTheme();

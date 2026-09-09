<script lang="ts">
	import { Sun, Moon, SunMoon } from '@lucide/svelte';
	import { theme } from '$lib/theme.svelte';
	import { cn } from '$lib/utils';

	interface Props {
		class?: string;
	}

	const { class: cls }: Props = $props();
</script>

<svelte:head>
	<script>
		const t = localStorage.getItem('theme');
		if (t === 'light' || t === 'dark') {
			document.documentElement.setAttribute('data-theme', t);
		}
	</script>
</svelte:head>

<button
	type="button"
	onclick={theme.toggle}
	class={cn('size-8 transition-all duration-300 cursor-pointer', cls)}
	aria-label="Toggle theme"
>
	<div class="flex items-center justify-center *:text-brand">
		{#if theme.current === 'dark'}
			<Moon size={24} strokeWidth={2} />
		{:else if theme.current === 'light'}
			<Sun size={24} strokeWidth={2} />
		{:else}
			<SunMoon size={24} strokeWidth={2} />
		{/if}
	</div>
</button>

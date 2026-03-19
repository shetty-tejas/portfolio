<script lang="ts">
	import { Sun, Moon } from '@lucide/svelte';
	import { theme } from '$lib/theme.svelte';
	import { cn } from '$lib/utils';

	interface Props {
		class?: string;
	}

	const { class: cls }: Props = $props();
</script>

<button
	type="button"
	onclick={() => theme.toggle()}
	class={cn(
		'h-11 w-11 border border-surface bg-based hover:bg-surface-light/40 transition-all duration-300 shadow-[2px_2px_0_var(--color-surface)] hover:scale-102 active:scale-98 hover:shadow-[3px_3px_0_var(--color-surface)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] cursor-pointer',
		cls
	)}
	aria-label="Toggle theme"
>
	<div class="flex items-center justify-center inset-0">
		{#if theme.current === 'dark'}
			<Moon size={24} strokeWidth={1.5} class="text-brand" />
		{:else}
			<Sun size={24} strokeWidth={1.5} class="text-brand" />
		{/if}
	</div>
</button>

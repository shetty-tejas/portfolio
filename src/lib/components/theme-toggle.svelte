<script lang="ts">
	import { Sun, Moon } from '@lucide/svelte';
	import { scale } from 'svelte/transition';
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
		'relative flex h-11 w-11 items-center justify-center rounded-none border border-surface bg-based hover:bg-surface-light transition-all duration-200 group shadow-[2px_2px_0_var(--color-surface)] active:shadow-none active:translate-x-[1px] active:translate-y-[1px] cursor-pointer',
		cls
	)}
	aria-label="Toggle theme"
>
	<div class="flex items-center justify-center h-6 w-6 overflow-hidden pointer-events-none">
		{#if theme.current === 'dark'}
			<div transition:scale={{ duration: 150, start: 0.8 }} class="flex items-center justify-center absolute inset-0">
				<Moon size={22} class="text-brand shrink-0" />
			</div>
		{:else}
			<div transition:scale={{ duration: 150, start: 0.8 }} class="flex items-center justify-center absolute inset-0">
				<Sun size={22} class="text-brand shrink-0" />
			</div>
		{/if}
	</div>
</button>

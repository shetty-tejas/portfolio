<script lang="ts">
	import ThemeToggle from '$lib/components/theme-toggle.svelte';

	interface Props {
		buildDate: string;
	}

	const { buildDate }: Props = $props();
</script>

<header class="flex justify-between items-center mb-8 pb-4 border-b border-overlay/30 select-none">
	<div class="flex flex-col md:flex-row md:items-baseline md:gap-x-4">
		<h1 class="font-mono font-bold text-[10px] tracking-[0.2em] uppercase text-subtext">
			./portfolio
		</h1>
		<span class="font-mono text-[9px] uppercase tracking-widest text-subtext/40 font-bold hidden md:block">
			Last Updated: {buildDate}
		</span>
	</div>
	
	<ThemeToggle />
</header>

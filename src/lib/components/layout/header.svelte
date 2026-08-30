<script lang="ts">
	import ThemeToggle from '$lib/components/theme-toggle.svelte';

	interface Props {
		buildDate: string;
	}

	const { buildDate }: Props = $props();
</script>

<header class="flex justify-between items-center mb-8 pb-4 border-b border-overlay/30 select-none">
	<div class="flex flex-row md:items-baseline gap-x-2 text-xs font-mono">
		<h1 class="font-bold text-subtext">
			<span class="text-brand">$&nbsp;</span>./portfolio
		</h1>

		<span class="text-subtle font-semibold hidden sm:block">
			--build-version {buildDate}
		</span>
		<span class="text-subtle font-semibold block sm:hidden">
			-v {buildDate}
		</span>
	</div>

	<ThemeToggle />
</header>

<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		title: string;
		description?: string;
		class?: string;
	}

	const { title, description, class: cls }: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class={cn('space-y-1 !mb-8', cls)}>
	<h2>{title}</h2>

	{#if description}
		<p class="text-subtle text-sm">{description}</p>
	{/if}
</div>

<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		title: string;
		description: string;
		class?: string;
	}

	const { title, description, class: cls }: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class={cn('space-y-1 !mb-8', cls)}>
	<h1>{title}</h1>
	<p class="text-subtle text-sm">{description}</p>
</div>

<script lang="ts">
	import About, { metadata } from '$lib/content/misc/about.md';
	import { formatDate } from '$lib/utils';
</script>

<svelte:head>
	<title>{metadata.title}</title>
</svelte:head>

<article>
	<About />

	{#if metadata.publishedAt}
		<footer>
			<span>{formatDate(metadata.publishedAt)}</span>
		</footer>
	{/if}
</article>

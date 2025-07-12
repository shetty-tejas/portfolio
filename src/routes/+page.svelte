<script lang="ts">
	import About, { metadata } from '$lib/content/misc/about.md';
	import { formatDate } from '$lib/utils';
</script>

<svelte:head>
	<title>{metadata.title}</title>
</svelte:head>

<article>
	<About />

	<footer>
		<span>{formatDate(metadata.createdAt)}</span>
	</footer>
</article>

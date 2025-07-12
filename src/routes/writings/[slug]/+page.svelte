<script lang="ts">
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
</svelte:head>

<article>
	<!-- eslint-disable-next-line svelte/no-at-html-tags : This is known, and the input that would be received would be from the markdown files only. -->
	{@html data.html}

	{#if data.metadata.publishedAt}
		<footer>
			<span>{formatDate(data.metadata.publishedAt)}</span>
		</footer>
	{/if}
</article>

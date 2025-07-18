<script lang="ts">
	import { Header } from '$lib/components/writeup';
	import Footer from '$lib/components/writeup/footer.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { title, description, publishedAt } = data.metadata;
</script>

<article>
	<Header {title} {description} />

	<!-- eslint-disable-next-line svelte/no-at-html-tags : This is known, and the input that would be received would be from the markdown files only. -->
	{@html data.html}

	<Footer {publishedAt} />
</article>

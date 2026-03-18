<script lang="ts">
	import type { PageProps } from './$types';

	import { Header, ReadingProgress } from '$lib/components/writeup';
	import Footer from '$lib/components/writeup/footer.svelte';

	let { data }: PageProps = $props();
</script>

<ReadingProgress />

<article>
	<Header
		title={data.post.metadata.title}
		description={data.post.metadata.description}
		tags={data.post.metadata.tags}
		readingTime={data.post.metadata.readingTime}
	/>

	<data.post.component></data.post.component>

	<Footer publishedAt={data.post.metadata.publishedAt} />
</article>

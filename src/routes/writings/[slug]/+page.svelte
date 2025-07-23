<script lang="ts">
	import type { PageProps } from './$types';

	import { writings, alwaysGetRoute } from '$lib/content/routes';
	import { Header } from '$lib/components/writeup';
	import Footer from '$lib/components/writeup/footer.svelte';

	let { data }: PageProps = $props();

	const writing = alwaysGetRoute(data.slug, writings);

	const { title, description, publishedAt } = writing.component.metadata;
</script>

<article>
	<Header {title} {description} />

	<writing.component.default />

	<Footer {publishedAt} />
</article>

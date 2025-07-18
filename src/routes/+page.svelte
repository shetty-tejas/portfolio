<script lang="ts">
	import { Header } from '$lib/components/writeup';
	import Footer from '$lib/components/writeup/footer.svelte';
	import About, { metadata } from '$lib/content/misc/about.md';

	const { title, description, publishedAt } = metadata;
</script>

<article>
	<Header {title} {description} />

	<About />

	<Footer {publishedAt} />
</article>

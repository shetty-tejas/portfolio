<script lang="ts">
	import { Header } from '$lib/components/writeup';
	import Footer from '$lib/components/writeup/footer.svelte';
	import Resume, { metadata } from '$lib/content/misc/resume.md';

	const { title, description, publishedAt } = metadata;
</script>

<article>
	<Header {title} {description} />

	<Resume />

	<Footer {publishedAt} />
</article>

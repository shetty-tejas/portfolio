<script lang="ts">
	import type { PageProps } from './$types';

	import { Header, EmptyState, PostPreview } from '$lib/components/writeup';

	const title = 'Series';

	let { data }: PageProps = $props();
</script>

<article>
	<Header {title} description="Multi-part investigations." />

	{#if data.series.length === 0}
		<EmptyState
			message="Multi-part investigations are still in the lab. Check back soon for the results."
		/>
	{:else}
		<div class="mt-8 space-y-12">
			{#each data.series as s (s.slug)}
				<PostPreview slug={s.slug} metadata={s.metadata} basePath="series" />
			{/each}
		</div>
	{/if}
</article>

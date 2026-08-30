<script lang="ts">
	import type { PageProps } from './$types';

	import { Header, EmptyState, PostPreview } from '$lib/components/writeup';

	let { data }: PageProps = $props();
</script>

<article>
	<Header title="Series" description="Multi-part investigations." />

	{#if data.series.length === 0}
		<EmptyState
			message="Multi-part investigations are still in the lab. Check back soon for the results."
		/>
	{:else}
		<div class="mt-8 space-y-12">
			{#each data.series as series (series.slug)}
				<PostPreview route="/series/[slug]" slug={series.slug} metadata={series.metadata} />
			{/each}
		</div>
	{/if}
</article>

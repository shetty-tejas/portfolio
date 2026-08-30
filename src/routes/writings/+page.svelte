<script lang="ts">
	import type { PageProps } from './$types';

	import { Header, EmptyState, PostPreview } from '$lib/components/writeup';

	let { data }: PageProps = $props();
</script>

<article>
	<Header title="Writings" description="Engineering, philosophy, and life." />

	{#if data.writings.length === 0}
		<EmptyState
			message="The ink hasn't dried yet. Check back soon for thoughts on engineering and life."
		/>
	{:else}
		<div class="mt-8 space-y-12">
			{#each data.writings as writing (writing.slug)}
				<PostPreview route="/writings/[slug]" slug={writing.slug} metadata={writing.metadata} />
			{/each}
		</div>
	{/if}
</article>

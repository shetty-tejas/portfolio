<script lang="ts">
	import type { PageProps } from './$types';

	import { Header, EmptyState, PostPreview } from '$lib/components/writeup';

	const title = 'Writings';

	let { data }: PageProps = $props();
</script>

<article>
	<Header {title} description="Engineering, philosophy, and life." />

	{#if data.writings.length === 0}
		<EmptyState
			message="The ink hasn't dried yet. Check back soon for thoughts on engineering and life."
		/>
	{:else}
		<div class="mt-8 space-y-12">
			{#each data.writings as writing (writing.slug)}
				<PostPreview slug={writing.slug} metadata={writing.metadata} basePath="writings" />
			{/each}
		</div>
	{/if}
</article>

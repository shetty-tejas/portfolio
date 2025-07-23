<script lang="ts">
	import { series } from '$lib/content/routes';

	import { Header } from '$lib/components/writeup';
	import { formatDate } from '$lib/utils';

	const title = 'My Series 📚';
</script>

<article>
	<Header {title} description="A few deeper dives, shared over multiple posts." />

	{#if series.length === 0}
		<div class="mt-8 space-y-1">
			<div class="text-2xl">:(</div>
			<div class="text-sm">Nothing to display yet.</div>
		</div>
	{:else}
		<div class="mt-8 space-y-6">
			{#each series as s (s.route)}
				{@const metadata = s.component.metadata}

				<div class="space-y-2.5 group">
					<div class="flex flex-col md:flex-row md:justify-between">
						<div class="space-y-1 flex-1">
							<a href="series/{s.route}" class="!no-underline"><h3>{metadata.title}</h3></a>
							<p>{metadata.description}</p>
						</div>

						<span class="text-right md:w-fit text-subtle text-sm">
							{formatDate(metadata.publishedAt || '')}
						</span>
					</div>

					<hr />
				</div>
			{/each}
		</div>
	{/if}
</article>

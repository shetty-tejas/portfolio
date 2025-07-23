<script lang="ts">
	import { writings } from '$lib/content/routes';

	import { Header } from '$lib/components/writeup';
	import { formatDate } from '$lib/utils';

	const title = 'My Writings ✍🏾';
</script>

<article>
	<Header
		{title}
		description="Things I’ve written on engineering, philosophy, and life."
	/>

	{#if writings.length === 0}
		<div class="mt-8 space-y-1">
			<div class="text-2xl">:(</div>
			<div class="text-sm">Nothing to display yet.</div>
		</div>
	{:else}
		<div class="mt-8 space-y-6">
			{#each writings as writing (writing.route)}
				{@const metadata = writing.component.metadata}

				<div class="space-y-2.5 group">
					<div class="flex flex-col md:flex-row md:justify-between gap-y-0.5">
						<div class="space-y-1 flex-1">
							<a href="writings/{writing.route}" class="!no-underline"><h3>{metadata.title}</h3></a>
							<p>{metadata.description}</p>
						</div>

						<span class="md:mt-1 text-right md:w-fit text-subtle text-xs md:text-sm">
							{formatDate(metadata.publishedAt || '', false)}
						</span>
					</div>

					<hr />
				</div>
			{/each}
		</div>
	{/if}
</article>

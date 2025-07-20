<script lang="ts">
	import { Header } from '$lib/components/writeup';
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const title = 'My Series 📚';
</script>

<article>
	<Header
		{title}
		description="Things I’ve written on engineering, philosophy, and life in general."
	/>

	{#if data.series.length === 0}
		<div class="mt-8 space-y-1">
			<div class="text-2xl">:(</div>
			<div class="text-sm">Nothing to display yet.</div>
		</div>
	{:else}
		<div class="mt-8 space-y-6">
			{#each data.series as series (series.slug)}
				<div class="space-y-2.5 group">
					<div class="flex flex-col md:flex-row md:justify-between">
						<div class="space-y-1 flex-1">
							<a href={series.slug} class="!no-underline"><h3>{series.title}</h3></a>
							<p>{series.description}</p>
						</div>

						<span class="text-right md:w-fit text-subtle text-sm">
							{formatDate(series.publishedAt || '')}
						</span>
					</div>

					<div class="border-t border-surface group-last:hidden"></div>
				</div>
			{/each}
		</div>
	{/if}
</article>

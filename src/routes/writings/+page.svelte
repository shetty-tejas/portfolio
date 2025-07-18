<script lang="ts">
	import { Header } from '$lib/components/writeup';
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const title = 'My Writings ✍🏾';
</script>

<article>
	<Header
		{title}
		description="Things I’ve written on engineering, philosophy, and life in general."
	/>

	<div class="mt-8">
		{#each data.articles as article (article.slug)}
			<div class="flex flex-col md:flex-row md:justify-between">
				<div class="space-y-1 flex-1">
					<a href={article.slug} class="!no-underline"><h3>{article.title}</h3></a>
					<p>{article.description}</p>
				</div>

				<span class="text-right md:w-fit text-subtle text-sm">
					{formatDate(article.publishedAt || '')}
				</span>
			</div>
		{/each}
	</div>
</article>

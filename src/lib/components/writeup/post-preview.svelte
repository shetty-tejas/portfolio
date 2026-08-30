<script lang="ts">
	import type { PostMetadata } from '$lib/content/loader';

	import { resolve } from '$app/paths';
	import { formatDate } from '$lib/utils';
	import Tags from './tags.svelte';

	interface Props {
		metadata: PostMetadata;
		route: '/writings/[slug]' | '/series/[slug]';
		slug: string;
	}

	const { metadata, route, slug }: Props = $props();
</script>

<section class="group relative flex flex-col gap-y-2">
	<!-- Compact Date Header -->
	<div class="flex items-center gap-x-2">
		<div class="h-px w-4 bg-brand/60"></div>
		<div class="flex items-center gap-x-2">
			<span class="font-mono text-xs uppercase tracking-wide text-subtext font-semibold">
				{formatDate(metadata.publishedAt)}
			</span>
			{#if metadata.readingTime}
				<span
					class="font-mono text-xs tracking-wide text-subtle font-semibold pl-2 md:border-l md:border-overlay/20"
				>
					~{metadata.readingTime} min read
				</span>
			{/if}
		</div>
	</div>

	<div class="space-y-2">
		<a href={resolve(route, { slug })} class="no-underline! block">
			<h2
				class="m-0! p-0! border-none! leading-tight font-black text-xl md:text-3xl tracking-tighter transition-colors text-neutral! hover:text-brand!"
			>
				{metadata.title}
			</h2>
		</a>
		<p class="text-subtext/80 font-body leading-relaxed max-w-3xl text-sm md:text-base">
			{metadata.description}
		</p>

		<Tags tags={metadata.tags} />
	</div>
</section>

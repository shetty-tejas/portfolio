<script lang="ts">
	import type { PostMetadata } from '$lib/content/loader';
	import { formatDate } from '$lib/utils';
	import Tags from './tags.svelte';

	interface Props {
		slug: string;
		metadata: PostMetadata;
		basePath: string;
	}

	const { slug, metadata, basePath }: Props = $props();
</script>

<div class="group relative flex flex-col gap-y-2">
	<!-- Compact Date Header -->
	<div class="flex items-center gap-x-2">
		<div class="h-px w-4 bg-brand/30"></div>
		<div class="flex items-center gap-x-2">
			<span
				class="font-mono text-[9px] uppercase tracking-[0.2em] text-subtext font-bold opacity-50"
			>
				{formatDate(metadata.publishedAt || '', false)}
			</span>
			{#if metadata.readingTime}
				<span
					class="font-mono text-[9px] uppercase tracking-[0.2em] text-subtext/40 font-bold pl-2 md:border-l md:border-overlay/20"
				>
					{metadata.readingTime} min read
				</span>
			{/if}
		</div>
	</div>

	<div class="space-y-2">
		<a href="/{basePath}/{slug}" class="no-underline! block">
			<h2
				class="m-0! p-0! border-none! leading-tight font-black text-xl md:text-3xl tracking-tighter transition-colors text-neutral! hover:text-brand!"
			>
				{metadata.title}
			</h2>
		</a>
		<p class="text-subtext font-body leading-relaxed max-w-3xl text-sm md:text-base opacity-80">
			{metadata.description}
		</p>

		<Tags tags={metadata.tags} />
	</div>
</div>

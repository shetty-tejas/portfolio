<script lang="ts">
	import { cn } from '$lib/utils';
	import Tags from './tags.svelte';

	interface Props {
		title: string;
		description: string;
		tags?: string[];
		readingTime?: number;
		class?: string;
	}

	const { title, description, tags, readingTime, class: cls }: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class={cn('space-y-4 mb-12! pb-8 border-b-2 border-overlay/20', cls)}>
	<div class="space-y-3">
		<h1 class="leading-[1.1] tracking-tighter text-neutral font-black text-3xl md:text-4xl">
			{title}
		</h1>
		<div class="flex flex-col md:flex-row md:items-center gap-x-4 gap-y-2">
			<div class="h-px w-6 bg-brand/60 hidden md:block"></div>
			<div class="flex flex-col md:flex-row md:items-center gap-x-3 gap-y-1">
				<p
					class="text-subtext/80 font-decor text-xs uppercase tracking-widest max-w-3xl leading-relaxed font-bold"
				>
					{description}
				</p>
				{#if readingTime}
					<span
						class="text-subtext/40 font-mono text-xs uppercase tracking-widest font-bold md:border-l md:border-overlay/20 md:pl-3"
					>
						{readingTime} min read
					</span>
				{/if}
			</div>
		</div>
	</div>

	{#if tags && tags.length > 0}
		<Tags {tags} />
	{/if}
</div>

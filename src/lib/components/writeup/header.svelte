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
	<title>{title} — by Tejas</title>

	<meta property="og:title" content="{title} — by Tejas" />
	<meta property="og:description" content={description} />
	<meta name="twitter:title" content="{title} — by Tejas" />
	<meta name="twitter:description" content={description} />
</svelte:head>

<header class={cn('space-y-4 mb-12! pb-8 border-b-2 border-overlay/20', cls)}>
	<div class="space-y-3">
		<h1 class="leading-[1.1] tracking-tighter text-neutral font-black text-3xl md:text-4xl">
			{title}
		</h1>
		<div class="flex flex-col md:flex-row md:items-center gap-x-2 gap-y-2">
			<div class="h-px w-4 bg-brand/60 hidden md:block"></div>
			<div class="flex flex-col sm:flex-row sm:items-center gap-3">
				<p
					class="text-subtext font-decor text-xs uppercase tracking-wide max-w-3xl leading-relaxed font-semibold"
				>
					{description}
				</p>
				{#if readingTime}
					<aside
						class="text-subtle font-mono text-xs tracking-wide font-semibold sm:border-l sm:border-overlay/20 sm:pl-3"
					>
						~{readingTime} min read
					</aside>
				{/if}
			</div>
		</div>
	</div>

	{#if tags && tags.length > 0}
		<Tags {tags} />
	{/if}
</header>

<script lang="ts">
	import type { PathnameWithSearchOrHash } from '$app/types';

	import { resolve } from '$app/paths';
	import { cn } from '$lib/utils';

	interface Props {
		message: string;
		href?: PathnameWithSearchOrHash;
		actionLabel?: string;
		class?: string;
	}

	const { message, href = '/', actionLabel = 'Back Home', class: cls }: Props = $props();
</script>

<div
	class={cn(
		'mt-12 py-12 flex flex-col items-center text-center space-y-4 text-sm uppercase tracking-wider font-semibold',
		cls
	)}
>
	<div class="h-10 w-px bg-brand"></div>
	<p class="font-mono text-subtext max-w-xs leading-relaxed">
		{message}
	</p>
	<a href={resolve(href)} class="font-decor text-brand">
		{actionLabel}
	</a>
</div>

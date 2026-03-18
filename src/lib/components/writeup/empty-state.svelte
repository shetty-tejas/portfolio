<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		message: string;
		href?: string;
		actionLabel?: string;
		class?: string;
	}

	const { message, href = '/', actionLabel = 'Back Home', class: cls }: Props = $props();
</script>

<div class={cn('mt-12 py-12 flex flex-col items-center text-center space-y-4', cls)}>
	<div class="h-10 w-px bg-brand/30"></div>
	<p
		class="font-mono text-[10px] uppercase tracking-[0.3em] text-subtext/60 font-bold max-w-xs leading-relaxed"
	>
		{message}
	</p>
	<a
		{href}
		class="text-xs uppercase tracking-widest font-decor font-bold text-brand hover:text-neutral transition-colors no-underline!"
	>
		{actionLabel}
	</a>
</div>

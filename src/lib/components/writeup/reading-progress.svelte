<script lang="ts">
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils';

	interface Props {
		class?: string;
	}

	const { class: cls }: Props = $props();

	let progress = $state(0);
	let animationId: number | null = null;

	function updateProgress() {
		const winScroll = document.documentElement.scrollTop;
		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

		if (winScroll <= 0 || height === 0) {
			progress = 0;
		} else {
			progress = (winScroll / height) * 100;
		}
	}

	function onScroll() {
		if (animationId === null) {
			animationId = window.requestAnimationFrame(() => {
				updateProgress();
				animationId = null;
			});
		}
	}

	onMount(() => {
		updateProgress();
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', onScroll);
			if (animationId !== null) window.cancelAnimationFrame(animationId);
		};
	});
</script>

<div
	class={cn(
		'fixed md:top-0 bottom-0 left-0 w-full h-1 z-50 pointer-events-none bg-overlay/10',
		cls
	)}
	aria-hidden="true"
>
	<div class="h-full bg-brand shadow-[0_0_8px_var(--color-brand)]" style="width: {progress}%"></div>
</div>

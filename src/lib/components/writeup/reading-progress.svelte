<script lang="ts">
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils';

	interface Props {
		class?: string;
	}

	const { class: cls }: Props = $props();

	let progress = $state(0);

	function updateProgress() {
		const winScroll = document.documentElement.scrollTop;
		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

		if (winScroll <= 0 || height === 0) {
			progress = 0;
		} else {
			progress = (winScroll / height) * 100;
		}
	}

	onMount(() => {
		window.addEventListener('scroll', updateProgress);
		updateProgress(); // Initial check

		return () => {
			window.removeEventListener('scroll', updateProgress);
		};
	});
</script>

<div
	class={cn('fixed top-0 left-0 w-full h-1 z-50 pointer-events-none bg-overlay/10', cls)}
	aria-hidden="true"
>
	<div
		class="h-full bg-brand transition-all duration-75 ease-out shadow-[0_0_8px_var(--color-brand)]"
		style="width: {progress}%"
	></div>
</div>

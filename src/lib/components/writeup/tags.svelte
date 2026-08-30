<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		tags?: string[];
		class?: string;
	}

	const { tags, class: cls }: Props = $props();
</script>

{#if tags && tags.length > 0}
	<div class={cn('flex flex-wrap justify-end-safe gap-2', cls)}>
		{#each tags as tag (tag)}
			<aside aria-hidden="true" class="tag">
				{tag}
			</aside>
		{/each}
	</div>
{/if}

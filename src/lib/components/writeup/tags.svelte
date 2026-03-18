<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		tags?: string[];
		class?: string;
	}

	const { tags, class: cls }: Props = $props();
</script>

{#if tags && tags.length > 0}
	<div class={cn('flex flex-wrap gap-2', cls)}>
		{#each tags as tag (tag)}
			<span class="tag">
				{tag}
			</span>
		{/each}
	</div>
{/if}

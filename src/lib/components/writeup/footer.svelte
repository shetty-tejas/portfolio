<script lang="ts">
	import { formatDate } from '$lib/utils';

	interface Props {
		publishedAt?: string;
	}

	const { publishedAt }: Props = $props();
</script>

{#if publishedAt}
	<footer>
		<span>{formatDate(publishedAt)}</span>
	</footer>
{/if}

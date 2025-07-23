<script lang="ts">
	import { formatDate } from '$lib/utils';

	interface Props {
		publishedAt: string;
	}

	const { publishedAt }: Props = $props();
</script>

<footer>
	<span>{formatDate(publishedAt)}</span>
</footer>

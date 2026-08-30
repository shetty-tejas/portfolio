<script lang="ts">
	import { formatDate } from '$lib/utils';

	interface Props {
		publishedAt: string;
	}

	const { publishedAt }: Props = $props();
</script>

<footer>
	<time datetime={publishedAt}>
		<aside>
			{formatDate(publishedAt)}
		</aside>
	</time>
</footer>

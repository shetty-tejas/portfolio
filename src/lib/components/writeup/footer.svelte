<script lang="ts">
	import { formatDate } from '$lib/utils';
	import Signature from './signature.svelte';

	interface Props {
		publishedAt: string;
	}

	const { publishedAt }: Props = $props();
</script>

<footer>
	<time datetime={publishedAt}>
		<aside class="text-subtext-light font-semibold">
			{formatDate(publishedAt)}
		</aside>
	</time>

	<aside aria-label="Tejas Shetty">
		<Signature />
	</aside>
</footer>

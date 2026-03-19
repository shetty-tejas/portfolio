<script module>
	import '$lib/../app.css';
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';
	import Sidebar from '$lib/components/layout/sidebar.svelte';
	import Header from '$lib/components/layout/header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import { asset } from '$app/paths';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	// @ts-expect-error - defined in vite.config.ts
	const buildDate = __BUILD_DATE__;
</script>

<svelte:head>
	<title>Tejas Shetty</title>
	<meta
		name="description"
		content="Software engineer by trade, curious by nature. Writing about building robust systems and navigating the messy process of personal growth."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:title" content="Tejas Shetty" />
	<meta
		property="og:description"
		content="Software engineer by trade, curious by nature. Writing about building robust systems and navigating the messy process of personal growth."
	/>
	<meta property="og:image" content={new URL(asset('/og-logo.png'), page.url.origin).href} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@_shettytejas_" />
	<meta name="twitter:title" content="Tejas Shetty" />
	<meta
		name="twitter:description"
		content="Software engineer by trade, curious by nature. Writing about building robust systems and navigating the messy process of personal growth."
	/>
	<meta name="twitter:image" content={new URL(asset('/og-logo.png'), page.url.origin).href} />
</svelte:head>

<div class="max-w-5xl xl:max-w-6xl mx-6 md:mx-8 lg:mx-auto mb-10 mt-8 md:mt-20 lg:mt-32">
	<div class="flex flex-col md:flex-row gap-x-12 lg:gap-x-16">
		<Sidebar />

		<!-- Main Content -->
		<div class="flex-1 flex flex-col pt-2 min-w-0">
			<Header {buildDate} />

			<main class="flex-1">
				{@render children()}
			</main>

			<Footer />
		</div>
	</div>
</div>

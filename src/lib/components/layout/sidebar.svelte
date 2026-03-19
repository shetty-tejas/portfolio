<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import type { Pathname, ResolvedPathname } from '$app/types';
	import { cn } from '$lib/utils';

	type NavLink = {
		label: string;
		href: Pathname;
	};

	const navLinks: Array<NavLink> = [
		{ label: 'Home', href: '/' },
		{ label: 'Writings', href: '/writings/' },
		{ label: 'Series', href: '/series/' },
		{ label: 'Resume', href: '/resume/' }
	];

	function isNavLinkActive(link: NavLink): boolean {
		const path: ResolvedPathname = page.url.pathname;
		const navHref: Pathname = link.href;

		return navHref === '/' ? path === navHref : path.startsWith(navHref);
	}
</script>

<div class="md:w-64 shrink-0 md:border-r border-overlay/30 md:pr-12">
	<aside class="space-y-12 md:sticky md:top-20 select-none">
		<div class="flex md:flex-col max-md:items-center gap-x-4 gap-y-6">
			<a
				href={resolve('/')}
				class="group w-fit block transition-transform hover:scale-102 active:scale-98 active:translate-x-1 active:translate-y-1"
			>
				<img
					src="/logo.svg"
					alt="TS"
					class="size-12 md:size-16 rounded-none border-2 border-neutral shadow-[4px_4px_0_var(--color-surface)] group-hover:shadow-[6px_6px_0_var(--color-surface)] group-active:shadow-none transition-all duration-300"
				/>
			</a>
			<span class="font-decor font-black text-xl tracking-tight text-neutral block leading-none">
				Tejas Shetty
			</span>
		</div>

		<nav
			class="flex flex-wrap md:flex-col gap-x-4 md:gap-x-6 gap-y-2 md:gap-y-1 font-decor text-xs"
		>
			{#each navLinks as link (link.href)}
				{@render navItem(link)}
			{/each}
		</nav>
	</aside>

	<hr class="border-t border-overlay/30 my-10 md:hidden" />
</div>

{#snippet navItem(link: NavLink)}
	{@const isActive = isNavLinkActive(link)}
	<div class="flex items-center gap-x-3 group">
		<div
			class={cn(
				'h-px transition-all duration-300 shrink-0',
				isActive ? 'w-4 bg-brand' : 'w-0 bg-transparent group-hover:w-2 group-hover:bg-subtle/30'
			)}
		></div>
		<a
			href={resolve(link.href)}
			class={cn(
				'py-2 transition-all duration-200 uppercase tracking-widest font-bold block w-full',
				isActive ? 'text-neutral' : 'text-subtle hover:text-neutral'
			)}
		>
			{link.label}
		</a>
	</div>
{/snippet}

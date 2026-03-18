<script lang="ts">
	import { page } from '$app/state';
	import { cn } from '$lib/utils';

	type NavLink = {
		label: string;
		href: string;
	};

	const navLinks: Array<NavLink> = [
		{ label: 'Home', href: '/' },
		{ label: 'Writings', href: '/writings' },
		{ label: 'Series', href: '/series' },
		{ label: 'Resume', href: '/resume' }
	];

	function isNavLinkActive(link: NavLink): boolean {
		const path = page.url.pathname;
		if (link.href === '/') return path === link.href;
		return path.startsWith(link.href);
	}
</script>

<div class="md:w-64 shrink-0 md:border-r border-overlay/30 md:pr-12">
	<aside class="space-y-12 md:sticky md:top-20 select-none">
		<div class="flex md:flex-col max-md:items-center gap-x-4 gap-y-6">
			<a href="/" class="group w-fit block transition-transform hover:scale-105 active:scale-95">
				<img
					src="/logo.svg"
					alt="TS"
					class="size-12 md:size-16 rounded-none border-2 border-neutral shadow-[4px_4px_0_var(--color-surface)] group-hover:shadow-[6px_6px_0_var(--color-surface)] transition-all duration-300"
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
				{@const isActive = isNavLinkActive(link)}

				<div class="flex items-center gap-x-3 group">
					<div
						class={cn(
							'h-px transition-all duration-300 shrink-0',
							isActive
								? 'w-4 bg-brand'
								: 'w-0 bg-transparent group-hover:w-2 group-hover:bg-subtle/30'
						)}
					></div>
					<a
						href={link.href}
						class={cn(
							'py-2 transition-all duration-200 uppercase tracking-widest font-bold block w-full',
							isActive ? 'text-neutral' : 'text-subtle hover:text-neutral'
						)}
					>
						{link.label}
					</a>
				</div>
			{/each}
		</nav>
	</aside>

	<hr class="border-t border-overlay/30 my-10 md:hidden" />
</div>

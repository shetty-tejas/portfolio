<script module>
	import '$lib/../app.css';
</script>

<script lang="ts">
	import type { Component, Snippet } from 'svelte';

	import { CopyrightIcon, GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from '@lucide/svelte';

	import { page } from '$app/state';
	import { cn } from '$lib/utils';

	interface Props {
		children: Snippet;
	}

	type NavLink = {
		label: string;
		href: string;
	};

	type FooterLink = {
		href: string;
		icon: Component;

		target?: string;
	};

	const navLinks: Array<NavLink> = [
		{
			label: 'Home',
			href: '/'
		},
		{
			label: 'Writings',
			href: '/writings'
		},
		{
			label: 'Series',
			href: '/series'
		},
		{
			label: 'Resume',
			href: '/resume'
		}
	];

	const footerLinks: Array<FooterLink> = [
		{
			href: 'mailto:tejas.shetty@mailbox.org',
			icon: MailIcon
		},
		{
			href: 'https://github.com/shetty-tejas',
			target: '_blank',
			icon: GithubIcon
		},
		{
			href: 'https://linkedin.com/in/shetty-tejas',
			target: '_blank',
			icon: LinkedinIcon
		},
		{
			href: 'https://instagram.com/_shettytejas_',
			target: '_blank',
			icon: InstagramIcon
		}
	];

	let { children }: Props = $props();

	function isNavLinkActive(link: NavLink): boolean {
		const path = page.url.pathname;

		if (link.href === '/') return path === link.href;

		return path.startsWith(link.href);
	}
</script>

<div class="max-w-4xl mx-8 lg:mx-auto mb-8 md:mb-20 mt-8 md:mt-20 lg:mt-40">
	<div class="flex flex-col md:flex-row gap-y-4">
		<div class="space-y-3">
			<aside class="min-w-50 font-decor space-y-4 md:space-y-8 md:sticky md:top-24 select-none">
				<div class="flex flex-col gap-y-8">
					<a href="/" class="w-fit">
						<img src="/logo.svg" alt="TS" class="size-8 md:size-12 rounded-full" />
					</a>
					<span class="font-decor font-bold text-lg tracking-[0.075rem] uppercase md:hidden"
						>Tejas Shetty</span
					>
				</div>

				<nav class="flex md:flex-col gap-x-4 gap-y-1.5 font-light text-xs md:text-sm">
					{#each navLinks as link (link.href)}
						{@const isActive = isNavLinkActive(link)}

						<div
							class="flex max-md:flex-col-reverse max-md:justify-end items-center gap-x-1.5 gap-y-1"
						>
							<div class={cn('size-1.25 bg-mocha-peach rounded-full', { hidden: !isActive })}></div>
							<a
								href={link.href}
								class={isActive ? 'text-neutral font-medium' : 'text-subtext hover:text-neutral'}
								>{link.label}</a
							>
						</div>
					{/each}
				</nav>
			</aside>

			<hr class="border-t border-surface-light md:hidden" />
		</div>

		<div class="flex-1 flex flex-col gap-y-16 pt-2">
			<header class="hidden md:block select-none">
				<h1 class="font-decor font-bold text-xl tracking-[0.075rem] uppercase">Tejas Shetty</h1>
			</header>

			<main class="font-body flex-1">
				{@render children()}
			</main>

			<footer class="flex justify-between mt-8 md:mt-28 select-none">
				<span class="flex items-center gap-x-1 text-sm text-subtle">
					<CopyrightIcon size="16" />
					{new Date().getFullYear()} Tejas Shetty.
				</span>

				<span class="flex items-center gap-x-2">
					{#each footerLinks as link (link.href)}
						<a href={link.href} target={link.target} class="text-subtle hover:text-neutral">
							<link.icon size="16" />
						</a>
					{/each}
				</span>
			</footer>
		</div>
	</div>
</div>

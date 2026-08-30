<script lang="ts">
	import type { Component } from 'svelte';
	import {
		GithubIcon,
		InstagramIcon,
		LinkedinIcon,
		MailIcon,
		ScanFaceIcon
	} from '@lucide/svelte';

	type FooterLink = {
		href: string;
		icon: Component;
		label: string;
		target?: string;
	};

	const footerLinks: Array<FooterLink> = [
		{ href: 'mailto:tejas.shetty@mailbox.org', icon: MailIcon, label: 'Email Tejas' },
		{
			href: 'https://github.com/shetty-tejas',
			target: '_blank',
			icon: GithubIcon,
			label: 'Follow on GitHub'
		},
		{
			href: 'https://linkedin.com/in/shetty-tejas',
			target: '_blank',
			icon: LinkedinIcon,
			label: 'Connect on LinkedIn'
		},
		{
			href: 'https://instagram.com/_shettytejas_',
			target: '_blank',
			icon: InstagramIcon,
			label: 'Follow on Instagram'
		},
		{
			href: 'https://bere.al/shettytejas',
			target: '_blank',
			icon: ScanFaceIcon,
			label: 'Follow on BeReal'
		}
	];
</script>

<footer
	class="mt-20 py-10 border-t border-overlay/30 select-none flex flex-col sm:flex-row justify-end items-center gap-y-8"
>
	<div class="flex items-center gap-x-2">
		{#each footerLinks as link (link.href)}
			<a
				href={link.href}
				rel="external noopener noreferrer"
				target={link.target}
				class="text-subtle hover:text-brand transition-all hover:-translate-y-1 p-2"
				aria-label={link.label}
			>
				<link.icon size="20" strokeWidth={1.5} />
			</a>
		{/each}
	</div>
</footer>

<svelte:head>
	<title>Hey! 👋🏾</title>
</svelte:head>

<div class="tracking-wide font-light leading-relaxed space-y-4">
	<p>
		I'm a developer based in Mumbai, India. I currently work at <a
			href="https://www.sage.com"
			target="_blank">Sage</a
		>
		as a <strong>Senior Engineer</strong>, where I’m part of the team building
		<a href="https://www.sage.com/en-us/sage-network/" target="_blank">Sage Network</a>
		and the
		<a href="https://network.sage.com/e-invoicing/register/" target="_blank"
			>Sage E-Invoicing Portal</a
		>.
	</p>

	<p>
		After hours, I like to tinker with ideas and build things I enjoy. Lately, that means working on
		a few SaaS products using <strong>Ruby on Rails</strong> and <strong>SvelteKit</strong>, diving
		into <strong>Go</strong>, and exploring deeper engineering topics like building interpreters and
		writing concurrent applications. I also try to contribute to <strong>open-source</strong> whenever
		I can — PRs, fixes, small features, anything that helps.
	</p>

	<!-- TODO: Find a way to add a book name dynamically -->

	<p>
		When I’m not coding, you’ll usually find me <a
			href="https://www.strava.com/athletes/110074637"
			target="_blank">running, biking, or swimming</a
		>, i.e. basically hustling towards becoming a <strong>triathlete</strong>! I also enjoy reading
		sometimes, and when I’m feeling especially lazy... I just binge-watch YouTube!
	</p>
</div>

<style lang="postcss">
	@reference "../app.css";

	a,
	strong {
		@apply font-medium;
	}

	a {
		@apply text-link underline;
	}
</style>

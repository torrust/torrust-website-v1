<script>
	import GitHubIcon from '$lib/icons/socials/github.svelte';
</script>

<div class="socials">
	<a
		href="https://github.com/torrust/torrust-website"
		target="_blank"
		rel="noopener noreferrer"
		title="See source code on GitHub"
	>
		<GitHubIcon />
	</a>
</div>

<style lang="scss">
	@import '../../scss/breakpoints.scss';
	.socials {
		display: flex;
		align-items: center;
		gap: 20px;

		a {
			transition: all 0.2s ease-in-out;
			width: 24px;
			color: var(--color--text);
			fill: var(--color--text);

			&:hover {
				color: var(--color--primary);
				fill: var(--color--primary);
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}
</style>

<script lang="ts">
	import { page } from '$app/stores';
	import AnimatedHamburger from '$lib/v2/components/singletons/AnimatedHamburger.svelte';
	import Header from '$lib/v2/icons/header.svelte';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	$: currentPath = $page.url.pathname;
</script>

<header>
	<a class="logo" href="/v2" aria-label="Site logo">
		<Header />
	</a>
	<AnimatedHamburger {isMenuOpen} {toggleMenu}>
		<div class="links-wrapper">
			<ul class="links">
				<li>
					<a
						href="/v2/index"
						class={currentPath === '/v2/index' ? 'active' : ''}
						on:click={toggleMenu}>Index</a
					>
				</li>
				<li>
					<a
						href="/v2/tracker"
						class={currentPath === '/v2/tracker' ? 'active' : ''}
						on:click={toggleMenu}>Tracker</a
					>
				</li>
				<li>
					<a
						href="/v2/self-host"
						class={currentPath === '/v2/self-host' ? 'active' : ''}
						on:click={toggleMenu}>Self-host</a
					>
				</li>
				<li>
					<a
						href="/v2/community"
						class={currentPath === '/v2/community' ? 'active' : ''}
						on:click={toggleMenu}>Community</a
					>
				</li>
				<li>
					<a
						href="/v2/blog"
						class={currentPath === '/v2/blog' ? 'active' : ''}
						on:click={toggleMenu}>Blog</a
					>
				</li>
				<li>
					<a
						href="/v2/about"
						class={currentPath === '/v2/about' ? 'active' : ''}
						on:click={toggleMenu}>About</a
					>
				</li>
			</ul>
		</div>
	</AnimatedHamburger>
</header>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	header {
		position: relative;
		padding: 1rem;
		z-index: 1000;
		background-color: rgba(255, 49, 0, 1);
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;

		ul {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: end;
			gap: 5vh;
			margin-top: 2.2vh;
			margin-bottom: 1vh;
			list-style: none;
			font-size: 1.1rem;
		}

		/* navlink animations */
		li > a {
			display: inline-block;
			transition: all 200ms ease-in-out;
			color: rgba(245, 245, 245, 0.96);
		}

		li > a:active {
			border-bottom: 2px solid white;
		}

		@include for-phone-only {
			.links-wrapper {
				padding: 3rem;
				margin: 3.5rem 0rem;
				opacity: 1;
			}

			ul {
				flex-direction: column;
				gap: 2vw;
			}
		}

		.links-wrapper {
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: justify;
			gap: 30px;
			background-color: rgba(255, 49, 0, 1);

			a {
				text-decoration: none;
				text-align: center;

				&:hover {
					filter: drop-shadow(0px 0px 3px var(--color--primary));
				}
			}
		}

		@include for-desktop-up {
			padding-inline: 9rem;
		}
	}
</style>

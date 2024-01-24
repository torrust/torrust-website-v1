<script lang="ts">
	import Logo from '$lib/components/atoms/Logo.svelte';
	import ThemeToggle from '$lib/components/molecules/ThemeToggle.svelte';
	import RssLink from '$lib/components/atoms/RssLink.svelte';
	import Socials from '$lib/components/molecules/Socials.svelte';
	import AnimatedHamburger from '$lib/components/atoms/AnimatedHamburger.svelte';
	import Strap from '$lib/components/atoms/Strap.svelte'
	import {page} from '$app/stores'
	import {onMount} from 'svelte'

	export let showBackground = false;

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}

	let showHoverStrap = true
	let hoverStrapTimeout: any

	function hideHoverStrap(){
		showHoverStrap = false
	}

	onMount(() => {
		hoverStrapTimeout = setTimeout(hideHoverStrap, 10000);
	})
</script>

<header class:has-background={showBackground}>
	{#if $page.url.pathname === '/'}
		<Strap />
	{/if}
	<div class="navbar">
		<a class="logo" href="/" aria-label="Site logo">
			<Logo />
		</a>
		<AnimatedHamburger {isMenuOpen} {toggleMenu}>
			<div class="links-wrapper">
				<ul class="links">
					<li>
						<button on:click={closeMenu}>
							<Socials />
						</button>
					</li>
					<li>
						<button on:click={closeMenu}>
							<RssLink />
						</button>
					</li>
					<li>
						<ThemeToggle />
					</li>
				</ul>
			</div>
		</AnimatedHamburger>
	</div>
</header>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	header {
		position: relative;
		padding: 1rem;
		z-index: 1000;

		.navbar {
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;
		}

		ul {
			display: flex;
			flex-direction: row;
			align-items: end;
			justify-content: end;
			gap: 5vh;
			margin-top: 2vh;
			margin-bottom: 4vh;
			list-style: none;
			font-size: 1.1rem;
		}

		/* navlink animations */
		li > a {
			display: inline-block;
			transition: all 200ms ease-in-out;
		}

		li > a:hover {
			transform: scale(0.9);
		}

		li > a:active {
			transform: scale(0.9);
		}

		button {
			background-color: transparent;
			border: none;
			max-width: 40px;
		}

		@include for-phone-only {
			.links-wrapper {
				background-color: #fbefe5;
				padding: 3rem;
				margin: 3rem 1rem;
				opacity: 1;
				border-radius: 10px;

				:global(:root[data-theme='dark']) & {
					background-color: #5d5f65;
				}
			}

			ul {
				margin: 0;
				flex-direction: column;
				gap: 2vw;
			}
		}

		&.has-background {
			background: linear-gradient(
				60deg,
				var(--color--waves-start) 0%,
				var(--color--waves-end) 100%
			);
		}

		.logo {
			height: 44px;
			flex: 1;
		}

		a {
			color: var(--color--text);
		}

		.links {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: 30px;

			a {
				text-decoration: none;

				&:hover {
					color: var(--color--primary);
					filter: drop-shadow(0px 0px 3px var(--color--primary));
				}
			}
		}
	}

	@include for-desktop-up {
		header {
			padding-inline: 3rem;
		}
	}
</style>

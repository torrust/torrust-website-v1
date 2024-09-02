<script lang="ts">
	export let isMenuOpen: boolean;
	export let toggleMenu: () => void;
</script>

<nav class:open={isMenuOpen}>
	<slot />
</nav>
<button class="burger" on:click={toggleMenu} class:open={isMenuOpen}>
	<div class="bar-1" />
	<div class="bar-2" />
	<div class="bar-3" />
</button>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';
	@import '$lib/scss/themes.scss';

	.burger {
		height: 30px;
		aspect-ratio: 1;
		border: none;
		background-color: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		color: white;
		transition: all 300ms ease-in-out;
	}

	.burger > div {
		height: 1px;
		width: 20px;
		background-color: white;
		position: absolute;
		transition: all 300ms ease-in-out;
	}

	.bar-1 {
		transform: translateY(-5px);
	}

	.bar-3 {
		transform: translateY(5px);
	}

	/* menu icon animations */
	.burger.open .bar-1 {
		transform: rotateZ(45deg);
	}

	.burger.open .bar-2 {
		opacity: 0;
	}

	.burger.open .bar-3 {
		transform: rotateZ(-45deg);
	}

	@include for-phone-only {
		nav {
			display: none;
			opacity: 0;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			transition: all 300ms ease-in-out;
		}

		nav.open {
			display: block;
			opacity: 1;
		}
	}

	@include for-tablet-portrait-up {
		.burger {
			display: none;
		}

		nav {
			display: block;
			position: relative;
		}
	}

	// Set theme-specific colors
	:root[data-theme='light'] {
		--burger-border-color: black;
		--burger-background-color: white;
		--burger-bar-background-color: black; // Bars are black in light mode
	}

	:root[data-theme='dark'] {
		--burger-border-color: white;
		--burger-background-color: black;
		--burger-bar-background-color: white; // Bars are white in dark mode
	}

	:root[data-theme='auto'] {
		@media (prefers-color-scheme: dark) {
			--burger-border-color: white;
			--burger-background-color: black;
			--burger-bar-background-color: white; // Bars are white in dark mode
		}

		@media (prefers-color-scheme: light) {
			--burger-border-color: black;
			--burger-background-color: white;
			--burger-bar-background-color: black; // Bars are black in light mode
		}
	}
</style>

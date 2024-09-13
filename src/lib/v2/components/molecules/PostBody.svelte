<div>
	<slot />
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	div {
		grid-area: 1 / 3 / 6 / 7;
		padding-inline: 1.5rem;
	}
</style>

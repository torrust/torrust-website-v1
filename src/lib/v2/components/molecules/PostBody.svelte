<div>
	<slot />
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	div {
		grid-area: 1 / 3 / 6 / 7;
		margin-inline: 2rem;
	}
</style>

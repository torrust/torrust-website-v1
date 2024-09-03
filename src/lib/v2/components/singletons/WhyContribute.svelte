<script lang="ts">
	import CardContainer from '$lib/v2/components/molecules/CardContainer.svelte';

	import { contribute } from '$lib/v2/constants/constants';
</script>

<div class="container">
	<div class="contribute-container">
		<h2>Why Contribute to Our Project?</h2>
		<p>
			Sapien malesuada massa quam gravida ipsum iaculis nisl massa id. Sit tortor morbi in aenean
			lectus vel nulla dolor. Facilisis rhoncus viverra consequat dictum. Lobortis venenatis morbi
			et tortor feugiat.
		</p>
	</div>
	<div class="card-container">
		<CardContainer titleArr={contribute} />
	</div>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.container {
		display: flex;
		flex-direction: column;
		text-align: center;
		color: rgba(245, 245, 245, 0.8);
		background: rgba(26, 26, 26, 1);
		padding-top: 4rem;
		padding-inline: 1.5rem;

		p {
			margin-top: 1.5rem;
		}

		.card-container {
			margin-top: 3rem;
		}
	}

	@include for-tablet-portrait-up {
		.contribute-container {
			width: 640px;
			margin: 0 auto;
		}
	}
</style>

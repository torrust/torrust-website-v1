<script lang="ts">
	import CardContainer from '$lib/v2/components/molecules/CardContainer.svelte';

	const titleArr = [
		'Written in Rust',
		'Quality code',
		'High test coverage',
		'Good documentation',
		'Long-term projection',
		'Sponsored'
	];
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
		<CardContainer {titleArr} />
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		text-align: center;
		margin-top: 4rem;

		p {
			margin-top: 1.5rem;
		}

		.card-container {
			margin-top: 3rem;
		}
	}
</style>

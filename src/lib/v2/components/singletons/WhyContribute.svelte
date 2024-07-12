<script lang="ts">
	import Card from '$lib/v2/components/atoms/Card.svelte';
</script>

<div class="container">
	<div class="contribute-container">
		<h2>Why Contribute</h2>
		<p>
			Sapien malesuada massa quam gravida ipsum iaculis nisl massa id. Sit tortor morbi in aenean
			lectus vel nulla dolor. Facilisis rhoncus viverra consequat dictum. Lobortis venenatis morbi
			et tortor feugiat.
		</p>
	</div>
	<div class="card-container">
		<Card title={'Written in Rust'} />
		<Card title={'Quality code'} />
		<Card title={'High test coverage'} />
		<Card title={'Good documentation'} />
		<Card title={'Long-term projection'} />
		<Card title={'Sponsored'} />
	</div>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

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

		@include for-tablet-portrait-up {
			.contribute-container {
				margin-inline: 40px;
			}

			.card-container {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				grid-template-rows: repeat(3, 1fr);
				grid-column-gap: 24px;
				grid-row-gap: 24px;
			}
		}

		@include for-tablet-landscape-up {
			.contribute-container {
				margin-inline: 150px;
			}

			.card-container {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				grid-template-rows: repeat(2, 1fr);
				grid-column-gap: 24px;
				grid-row-gap: 24px;
			}
		}
	}
</style>

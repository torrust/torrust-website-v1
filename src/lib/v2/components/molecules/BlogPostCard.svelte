<script lang="ts">
	export let title: string;
	export let description: string = '';
	export let date: string;
</script>

<div class="container">
	<div class="image-container">
		<img
			src="https://images.unsplash.com/photo-1548504769-900b70ed122e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt=""
		/>
	</div>
	<div class="details-container">
		<h3>{title}</h3>
		<p>
			{description}
		</p>
		<p>{date}</p>
	</div>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 3rem;

		.image-container {
			object-fit: cover;
		}

		img {
			height: 140px;
		}

		.details-container {
			margin-top: 1.5rem;
			gap: 0.5rem;
		}

		h3 {
			font-size: 1rem;
		}
	}

	@include for-tablet-portrait-up {
		.container {
			flex-direction: row;
			justify-content: center;
			gap: 1.5rem;
		}

		.image-container {
			flex: 1;
			width: 100%;
			height: auto;
			object-fit: cover;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.details-container {
			flex: 3;
			margin-bottom: 1.5rem;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>

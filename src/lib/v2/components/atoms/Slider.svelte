<script lang="ts">
	export let titleArr: string[];
</script>

<div class="slider-container">
	{#each titleArr as title}
		<div>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<p>{@html title}</p>
		</div>
	{/each}
</div>

<style lang="scss">
	.slider-container {
		display: flex;
		overflow-x: auto;
		margin-top: 3rem;
		gap: 1rem;
		scroll-behavior: smooth;
		padding-bottom: 1rem;
		padding-inline: 1.5rem;

		div {
			flex: 0 0 300px;
			display: flex;
			flex-direction: column;
			text-align: left;
			height: 280px;
			width: 500px;
			padding: 1.5rem;
			border-radius: 1.5rem;
			background-color: rgba(255, 49, 0, 0.8);
		}

		div:hover {
			cursor: pointer;
		}

		p {
			margin-top: auto;
		}
	}
</style>

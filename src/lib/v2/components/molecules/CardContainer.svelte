<script lang="ts">
	import Card from '$lib/v2/components/atoms/Card.svelte';

	export let titleArr;
</script>

<div class="card-container">
	{#each titleArr as title}
		<Card {title} />
	{/each}
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	@include for-tablet-portrait-up {
		.card-container {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(1, 1fr);
			grid-column-gap: 24px;
			grid-row-gap: 24px;
		}
	}

	@include for-tablet-landscape-up {
		.card-container {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-column-gap: 24px;
			grid-row-gap: 24px;
		}
	}
</style>

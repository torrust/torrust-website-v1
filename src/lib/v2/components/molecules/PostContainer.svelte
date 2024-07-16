<script lang="ts">
	let size: number;
</script>

<svelte:window bind:innerWidth={size} />

<div class={size >= 1440 ? 'grid' : 'flex'}>
	<slot />
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(5, 1fr);
		grid-column-gap: 10px;
		grid-row-gap: 0px;
	}

	.flex {
		display: flex;
		flex-direction: column;
	}
</style>

<script lang="ts">
	import { writable } from 'svelte/store';

	// Receive props from the parent component
	export let showSecondUl = writable(false);

	// Function to toggle the visibility of the second <ul>
	function toggleSecondUl() {
		showSecondUl.update((current: boolean) => !current);
	}
</script>

<button on:click={toggleSecondUl}>
	{#if $showSecondUl}
		-
	{:else}
		+
	{/if}
</button>

{#if $showSecondUl}
	<slot />
{/if}

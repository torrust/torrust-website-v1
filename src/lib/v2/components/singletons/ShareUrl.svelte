<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	let currentUrl: string = '';
	let isCopied = writable(false);

	onMount(() => {
		currentUrl = $page.url.origin + $page.url.pathname;
	});

	function copyUrlToClipboard() {
		navigator.clipboard
			.writeText(currentUrl)
			.then(() => {
				isCopied.set(true);
				setTimeout(() => {
					isCopied.set(false);
				}, 3000);
			})
			.catch((error) => {
				console.error('Error copying to clipboard:', error);
			});
	}
</script>

<div>
	<button class:copied={$isCopied} on:click={copyUrlToClipboard}>
		{#if $isCopied}
			<span>
				<Icon icon="charm:tick" color="#6cdb2e" width="24" height="24" />
			</span>
		{:else}
			<span>
				<Icon icon="material-symbols:share-outline" width="24" height="24" style="color: #ffffff" />
			</span>
		{/if}
		<span>{$isCopied ? 'Link copied' : 'Share'}</span>
	</button>
</div>

<style lang="scss">
	button {
		display: flex;
		gap: 0.2rem;
		border-radius: 10px;
		padding: 1.5px 15px;
		border: none;
		background-color: #650000;
		color: #ffffff;
		white-space: nowrap;
	}

	button:hover {
		background-color: #f26f39;
		cursor: pointer;
		color: #ffffff;
	}
</style>

<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
</script>

<Header showBackground />

<div class="contributor-biography">
	<h1>Contributors</h1>
	<slot />
</div>

<Footer />

<style>
	.contributor-biography {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		text-align: center;
		max-width: 700px;
		margin: 0 auto;
		margin-top: 2rem;
		line-height: 1.5;
	}

	h1 {
		margin-bottom: 1rem;
	}
</style>

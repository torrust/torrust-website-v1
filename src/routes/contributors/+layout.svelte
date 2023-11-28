<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
</script>

<Header showBackground />

<div class="contributors">
	<h1>Contributors</h1>
	<slot />
</div>

<Footer />

<style lang="scss">
	h1 {
		margin-block: 1rem;
		text-align: center;
	}
</style>

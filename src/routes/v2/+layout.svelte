<script lang="ts">
	import '$lib/v2/scss/global.scss';
	import Header from '$lib/v2/components/organisms/Header.svelte';
	import Footer from '$lib/v2/components/organisms/Footer.svelte';
</script>

<Header />
<div>
	<slot></slot>
</div>
<Footer />

<style lang="scss">
	div {
		background: rgba(26, 26, 26, 1);
	}
</style>

<script>
	import Image from '$lib/components/atoms/Image.svelte';
</script>

<div class="logo">
	<Image src="/images/full-logo.png" alt="Torrust Logo" />
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.logo {
		transition: filter 0.2s ease-in-out;
		width: auto;
		height: 100%;

		:global(> img) {
			width: auto;
		}

		&:hover {
			filter: brightness(1.1);
		}
	}
</style>

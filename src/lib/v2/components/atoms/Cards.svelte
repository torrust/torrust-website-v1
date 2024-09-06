<script lang="ts">
	import { HttpRegex } from '$lib/utils/regex';

	export let additionalClass: string | undefined = undefined;

	export let href: string | undefined = undefined;
	export let backgroundImage: string | undefined = undefined;
	const isExternalLink = !!href && HttpRegex.test(href);
	export let target: '_self' | '_blank' = isExternalLink ? '_blank' : '_self';
	export let rel = isExternalLink ? 'noopener noreferrer' : undefined;

	$: tag = href ? 'a' : 'article';
	$: linkProps = {
		href,
		target,
		rel
	};
</script>

<svelte:element
	this={tag}
	class="card {additionalClass}"
	{...linkProps}
	data-sveltekit-preload-data
	{...$$restProps}
>
	{#if $$slots.image || backgroundImage}
		<div class="image" style="background-image: url({backgroundImage});">
			<slot name="image" />
		</div>
	{/if}
	<div class="body">
		<div class="content">
			<slot name="content" />
		</div>
	</div>
</svelte:element>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.card {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		height: 312px;
		margin: 1.5rem;
		position: relative;
		border-radius: 1.5rem;
		overflow: hidden;
		text-decoration: none;
		color: inherit;
		width: 100%;
		transition: box-shadow 0.3s ease;

		&:hover {
			background: rgba(0, 0, 0, 0.2);
			box-shadow: 0 0 0 3px rgba(255, 49, 0, 1);
		}
	}

	.image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	.body {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 1.5rem;
		background: rgba(
			0,
			0,
			0,
			0.8
		); /* Optional: Add a semi-transparent background to ensure text readability */
		color: #fff; /* Ensure text is readable over the background */
		height: 100%;
		z-index: 1;

		&:hover {
			/* Optional hover effect for cards */
			background: rgba(0, 0, 0, 0.5);
		}
	}

	.content {
		padding: 1rem;
	}
</style>

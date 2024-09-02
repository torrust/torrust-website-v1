<script lang="ts">
	import type { postContentItem } from '$lib/v2/constants/postContent';

	export let body: postContentItem[];
</script>

<div class="article">
	{#each body as item}
		<h2 id={item.link}>{item.heading}</h2>
		{#if item.body.length > 0}
			{#each item.body as para}
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				<p>{@html para}</p>
			{/each}
		{/if}
		{#each item.subheadings as subheading}
			<h3 id={subheading.link}>{subheading.heading}</h3>
			{#if subheading.body.length > 0}
				{#each subheading.body as body}
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html body}
				{/each}
			{/if}
		{/each}
	{/each}
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	div {
		grid-area: 1 / 3 / 6 / 7;
		padding-inline: 1.5rem;
	}

	.article {
		h2,
		h3 {
			margin-top: 1rem;
		}

		p {
			margin-top: 1rem;
		}
	}
</style>

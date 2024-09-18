<script lang="ts">
	import type { BlogPost } from '$lib/utils/types';
	import RelatedPostCard from '$lib/v2/components/molecules/RelatedPostCard.svelte';
	import ContentSection from '$lib/v2/components/organisms/ContentSection.svelte';

	export let posts: BlogPost[];
</script>

<ContentSection id="related-posts" title="Related Posts">
	<div class="simple-grid">
		{#each posts as post}
			<RelatedPostCard
				slug={post.slug}
				title={post.title}
				excerpt={post.excerpt}
				tags={post.tags}
				readingTime={post.readingTime}
				date={post.date}
			/>
		{/each}
	</div>
</ContentSection>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.simple-grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 20px;

		@media (max-width: 1070px) {
			grid-template-columns: 1fr 1fr;
		}

		@include for-tablet-portrait-down {
			grid-template-columns: 1fr;
		}
	}
</style>

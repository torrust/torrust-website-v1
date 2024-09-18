<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { BlogPost } from '$lib/utils/types';
	import TagCard from '$lib/v2/components/molecules/TagCard.svelte';
	import ContentSection from '$lib/v2/components/organisms/ContentSection.svelte';

	let currentUrl: string | undefined = '';
	let splitUrl: string = '';

	export let data: {
		posts?: BlogPost[];
	};

	let posts: BlogPost[] = data.posts || [];

	onMount(() => {
		currentUrl = $page.url.pathname;
		splitUrl = decodeURIComponent(currentUrl.split('/').pop()! || '');
		console.log(splitUrl);
	});
</script>

<div class="container">
	<ContentSection title={splitUrl}>
		{#if posts && posts.length > 0}
			{#each posts as post}
				{#if post.tags && post.tags.includes(splitUrl)}
					<div class="grid">
						<TagCard
							title={post.title}
							coverImage={post.coverImage}
							excerpt={post.excerpt}
							readingTime={post.readingTime}
							slug={post.slug}
							tags={post.tags}
							date={post.date}
						/>
					</div>
				{/if}
			{/each}
		{:else}
			<p>No posts available</p>
		{/if}
	</ContentSection>
</div>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';

	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-gap: 20px;
		margin-bottom: 2rem;

		@include for-tablet-portrait-down {
			grid-template-columns: 1fr;
		}

		@include for-tablet-landscape-up {
			// Select every 6 elements, starting from position 1
			// And make it take up 6 columns
			> :global(:nth-child(6n + 1)) {
				grid-column: span 6;
			}
			// Select every 6 elements, starting from position 2
			// And make it take up 3 columns
			> :global(:nth-child(6n + 2)) {
				grid-column: span 3;
			}
			// Select every 6 elements, starting from position 3
			// And make it take up 3 columns
			> :global(:nth-child(6n + 3)) {
				grid-column: span 3;
			}
			// Select every 6 elements, starting from position 4, 5 and 6
			// And make it take up 2 columns
			> :global(:nth-child(6n + 4)),
			:global(:nth-child(6n + 5)),
			:global(:nth-child(6n + 6)) {
				grid-column: span 2;
			}
		}
	}
</style>

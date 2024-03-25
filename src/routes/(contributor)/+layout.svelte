<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';

	import Button from '$lib/components/atoms/Button.svelte';
	import BlogPostCard from '$lib/components/molecules/BlogPostCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import type { BlogPost } from '$lib/utils/types';

	export let data: {
		posts: BlogPost[];
	};

	let { posts } = data;

	let currentUrl: string | undefined = '';
	let splitUrl: string | undefined = '';
	let numberOfPosts: number | undefined;

	onMount(() => {
		currentUrl = window.location.href;
		splitUrl = currentUrl.split('/').pop();

		numberOfPosts = posts.filter((post) => post.contributorSlug === splitUrl).length;
	});
</script>

<Header />

<slot />

<div class="container">
	{#if posts && typeof numberOfPosts !== 'undefined' && numberOfPosts > 0}
		<ContentSection title="All Blog Posts">
			<div class="grid">
				{#each posts as post}
					{#if post.contributorSlug === splitUrl}
						<BlogPostCard
							title={post.title}
							coverImage={post.coverImage}
							excerpt={post.excerpt}
							readingTime={post.readingTime}
							slug={post.slug}
							tags={post.tags}
							date={post.date}
						/>
					{/if}
				{/each}
			</div>
		</ContentSection>
	{:else}
		<ContentSection title="There's Nothing Here Yet." description="But check back again soon!">
			<Button href="/contributors">Return to Contributors</Button>
			<div class="empty-space" />
		</ContentSection>
	{/if}
	<div class="contributor-link">
		{#if posts && typeof numberOfPosts !== 'undefined' && numberOfPosts > 0}
			<Button>
				<a href="/contributors" class="contributor-link">Return to Contributors</a>
			</Button>
		{/if}
	</div>
</div>

<Footer />

<style lang="scss">
	@import '$lib/scss/_mixins.scss';

	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-gap: 20px;

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

	.empty-space {
		height: calc(100vh - 700px);
	}

	:global(.waves-container) {
		z-index: -1;
	}

	.contributor-link {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.contributor-link a {
		font-weight: bolder;
		color: #fff;
	}
</style>

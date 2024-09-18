<script lang="ts">
	import { onMount } from 'svelte';
	import Tag from '$lib/v2/components/atoms/Tag.svelte';
	import { formatDate } from '$lib/utils/date';
	import ShareButton from '$lib/v2/components/singletons/ShareButton.svelte';

	import { keywords, siteBaseUrl, title } from '$lib/data/meta';
	import type { BlogPost } from '$lib/utils/types';
	import RelatedPosts from '$lib/v2/components/organisms/RelatedPosts.svelte';
	import Image from '$lib/components/atoms/Image.svelte';
	import PrevNextPost from '$lib/v2/components/singletons/PrevNextPost.svelte';
	import { allPosts } from '$lib/data/blog-posts';

	export let data: { post: BlogPost; allPosts: BlogPost[] };
	let post: BlogPost;

	$: ({ post } = data);

	onMount(() => {
		console.log('Current post:', post);
		console.log('All posts:', allPosts[0]);
	});

	let metaKeywords = keywords;

	$: {
		if (post?.tags?.length) {
			metaKeywords = post.tags.concat(metaKeywords);
		}
		if (post?.keywords?.length) {
			metaKeywords = post.keywords.concat(metaKeywords);
		}
	}
</script>

<svelte:head>
	{#if post}
		<meta name="keywords" content={metaKeywords.join(', ')} />

		<meta name="description" content={post.excerpt} />
		<meta property="og:description" content={post.excerpt} />
		<meta name="twitter:description" content={post.excerpt} />
		<link rel="canonical" href="{siteBaseUrl}/{post.slug}" />

		<title>{post.title} - {title}</title>
		<meta property="og:title" content="{post.title} - {title}" />
		<meta name="twitter:title" content="{post.title} - {title}" />

		{#if post.coverImage}
			<meta property="og:image" content="{siteBaseUrl}{post.coverImage}" />
			<meta name="twitter:image" content="{siteBaseUrl}{post.coverImage}" />
		{/if}
	{/if}
</svelte:head>

<div class="container">
	<main>
		<article id="article-content">
			<div class="header">
				{#if post}
					<h1>{post.title}</h1>
					<div class="note">Published on {formatDate(post.date)}</div>
					{#if post.updated}
						<div class="note">Updated on {formatDate(post.updated)}</div>
					{/if}
					{#if post.readingTime}
						<div class="note">{post.readingTime}</div>
					{/if}
					{#if post.contributor}
						<div>
							<span>By: </span><a class="author" href={'/v2/contributor/' + post.contributorSlug}
								>{post.contributor}</a
							>
						</div>
					{/if}
					<ShareButton slug={post.slug} title={post.title} />
					{#if post.tags?.length}
						<div class="tags">
							{#each post.tags as tag}
								<Tag {tag}>
									{tag}
								</Tag>
							{/each}
						</div>
					{/if}
				{/if}
			</div>
			{#if post && post.coverImage}
				<div class="cover-image">
					<Image src={post.coverImage} alt={post.title} />
				</div>
			{/if}
			<div class="content">
				<slot />
			</div>
		</article>

		<PrevNextPost currentPost={post} {allPosts} />

		{#if post.relatedPosts && post.relatedPosts.length > 0}
			<div class="container">
				<RelatedPosts posts={post.relatedPosts} />
			</div>
		{/if}
	</main>
</div>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';
	@import '$lib/scss/breakpoints.scss';

	.container {
		background: rgba(26, 26, 26, 1);
		color: rgba(245, 245, 245, 0.96);
	}

	#article-content {
		--main-column-width: 65ch;
		position: relative;
		padding-top: 40px;
		padding-bottom: 80px;
		padding-right: 15px;
		padding-left: 15px;

		.cover-image {
			padding-top: 1.5rem;
		}

		@include for-iphone-se {
			padding-left: 0;
			padding-right: 0;
		}

		@include for-tablet-portrait-up {
			padding-right: 20px;
			padding-left: 20px;
		}

		@include for-tablet-landscape-up {
			--main-column-width: 170ch;
			padding-right: 30px;
			padding-left: 30px;
		}

		display: flex;
		flex-direction: column;
		gap: 30px;

		.header {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			gap: 10px;
			width: min(var(--main-column-width), 100%);
			margin: 0 auto;

			.note {
				font-size: 90%;
				color: rgba(245, 245, 245, 0.96);
			}

			.author {
				color: rgba(245, 245, 245, 0.96);
			}

			.author:hover {
				color: rgba(255, 49, 0, 0.96);
			}
		}

		.cover-image {
			width: min(var(--main-column-width), 100%);
			margin: 0 auto;
			max-height: 400px;
			box-shadow: var(--image-shadow);
			border-radius: 6px;
		}

		:global(.cover-image img) {
			max-height: 400px;
			object-fit: cover;
		}

		.content {
			display: grid;
			grid-template-columns:
				1fr
				min(var(--main-column-width), 100%)
				1fr;

			:global(> *) {
				grid-column: 2;
			}

			:global(> .full-bleed) {
				grid-column: 1 / 4;
				width: 100%;
				max-width: 1600px;
				margin-left: auto;
				margin-right: auto;
			}
		}

		.tags {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 5px;
			flex-wrap: wrap;
		}
	}
</style>

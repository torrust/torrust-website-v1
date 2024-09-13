<script lang="ts">
	import type { BlogPost } from '$lib/utils/types';
	import Icon from '@iconify/svelte';

	export let currentPost: BlogPost;
	export let allPosts: BlogPost[];

	let prevPost: BlogPost | null = null;
	let nextPost: BlogPost | null = null;

	$: {
		if (currentPost && allPosts.length) {
			allPosts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

			const currentIndex = allPosts.findIndex((post) => post.slug === currentPost.slug);

			if (currentIndex !== -1) {
				prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
				nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
			}
		}
	}
</script>

<div class="container">
	<div class="previousPost">
		{#if prevPost}
			<a href="/v2/{prevPost.slug}">{prevPost.title}</a>
			<div class="arrow arrowPrevious">
				<Icon
					icon="material-symbols:arrow-left"
					width="44"
					height="44"
					style="color: rgba(255, 49, 0, 0.96)"
				/>
				<p>Previous Post</p>
			</div>
		{:else}
			<h3 class="inactive">You are reading our first post.</h3>
		{/if}
	</div>

	<div class="nextPost">
		{#if nextPost}
			<a href="/v2/{nextPost.slug}">{nextPost.title}</a>
			<div class="arrow arrowNext">
				<p>Next Post</p>
				<Icon
					icon="material-symbols:arrow-right"
					width="44"
					height="44"
					style="color: rgba(255, 49, 0, 0.96)"
				/>
			</div>
		{:else}
			<h3 class="inactive">You're up to date. More to come soon!</h3>
		{/if}
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		justify-content: space-between;
		border-top: 1px solid #979797;
		border-bottom: 1px solid #979797;
	}

	.nextPost,
	.previousPost {
		flex: 1;
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
	}

	.nextPost {
		border-left: 1px solid #979797;
		text-align: right;
	}

	.previousPost {
		text-align: left;
	}

	.arrow {
		display: flex;
		align-items: center;
	}

	.arrowNext {
		justify-content: flex-end;
	}

	.arrowPrevious {
		justify-content: flex-start;
	}

	.inactive {
		color: gray;
	}
</style>

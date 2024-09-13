<script lang="ts">
	import RecentPosts from '$lib/v2/components/singletons/RecentPosts.svelte';
	import type { BlogPost } from '$lib/utils/types';
	import SearchBar from '$lib/v2/components/singletons/SearchBar.svelte';

	export let data: {
		posts: BlogPost[];
	};

	let { posts } = data;

	let searchTerm = '';
</script>

<div class="container">
	<div class="header">
		<h1>Blog</h1>
		<SearchBar {searchTerm} {posts} />
	</div>
	{#if posts && posts.length}
		<RecentPosts {posts} />
	{/if}
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.container {
		display: flex;
		flex-direction: column;
		padding-top: 3rem;
		background: rgba(26, 26, 26, 1);
		color: rgba(245, 245, 245, 0.96);
	}

	.header {
		padding-inline: 1.5rem;

		@include for-tablet-portrait-up {
			display: flex;
			justify-content: space-between;
		}
	}
</style>

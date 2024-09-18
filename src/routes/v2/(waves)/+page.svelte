<script lang="ts">
	import Hero from '$lib/v2/components/organisms/Hero.svelte';
	import WhyContribute from '$lib/v2/components/singletons/WhyContribute.svelte';
	import RecentPosts from '$lib/v2/components/singletons/RecentPosts.svelte';
	import type { BlogPost } from '$lib/v2/utils/types';

	export let data: {
		posts: BlogPost[];
	};

	let { posts } = data;
</script>

<Hero />
<WhyContribute />
{#if posts && posts.length}
	<h2>Latest articles</h2>
	<RecentPosts {posts} />
	<div class="link-container">
		<a href="/v2/blog">All articles</a>
	</div>
{/if}

<style lang="scss">
	h2 {
		text-align: center;
		color: rgba(245, 245, 245, 0.96);
		padding-top: 4rem;
	}

	.link-container {
		text-align: center;
		padding-top: 3rem;
	}

	a {
		color: rgba(245, 245, 245, 0.96);
	}

	a:hover {
		color: rgba(255, 49, 0, 0.96);
	}
</style>

<script lang="ts">
	import Header from '$lib/v2/components/organisms/Header.svelte';
	import Hero from '$lib/v2/components/organisms/Hero.svelte';
	import WhyContribute from '$lib/v2/components/singletons/WhyContribute.svelte';
	import RecentPosts from '$lib/v2/components/singletons/RecentPosts.svelte';
	import Footer from '$lib/v2/components/organisms/Footer.svelte';
	import type { BlogPost } from '$lib/utils/types';

	export let data: {
		posts: BlogPost[];
	};

	let { posts } = data;
</script>

<Header />
<Hero />
<WhyContribute />
{#if posts && posts.length}
	<RecentPosts {posts} />
	<div class="link-container">
		<a href="/v2/blog">All articles</a>
	</div>
{/if}
<Footer />

<style lang="scss">
	.link-container {
		text-align: center;
		padding-top: 3rem;
	}
</style>

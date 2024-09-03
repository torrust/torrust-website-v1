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
{/if}
<Footer />

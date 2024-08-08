<script lang="ts">
	import Header from '$lib/v2/components/organisms/Header.svelte';
	import Hero from '$lib/v2/components/organisms/Hero.svelte';
	import WhyContribute from '$lib/v2/components/singletons/WhyContribute.svelte';
	import RecentPosts from '$lib/components/singletons/RecentPosts.svelte';
	import type { BlogPost } from '$lib/utils/types';

	export let data: {
		posts: BlogPost[];
	};

	let { posts } = data;
</script>

<div>
	<div>
		<Header />
		<Hero />
		<WhyContribute />
		{#if posts && posts.length}
			<RecentPosts {posts} />
		{/if}
	</div>
</div>

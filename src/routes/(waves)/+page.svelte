<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import RecentPosts from '$lib/components/organisms/RecentPosts.svelte';
	import Features from '$lib/components/organisms/Features.svelte';
	import type { Feature, BlogPost } from '$lib/utils/types';
	import AboutTorrust from '$lib/components/organisms/AboutTorrust.svelte';
	import HowToContribute from '$lib/components/organisms/HowToContribute.svelte';

	export let data: {
		features: Feature[];
		posts: BlogPost[];
	};

	let { features, posts } = data;
</script>

<div class="container">
	<Hero hasFeatures={features && features.length > 0} hasPosts={posts && posts.length > 0} />
	<AboutTorrust />
	<HowToContribute />
	{#if posts && posts.length}
		<RecentPosts {posts} />
	{/if}
	{#if features && features.length}
		<Features {features} />
	{/if}
</div>

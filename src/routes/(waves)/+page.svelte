<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import RecentPosts from '$lib/components/organisms/RecentPosts.svelte';
	import Features from '$lib/components/organisms/Features.svelte';
	import type { Feature, BlogPost } from '$lib/utils/types';
	import AboutTorrust from '$lib/components/organisms/AboutTorrust.svelte';
	import ImageContentSection from '$lib/components/organisms/ImageContentSection.svelte';
	import Image from '$lib/components/atoms/Image.svelte';

	export let data: {
		features: Feature[];
		posts: BlogPost[];
	};

	let { features, posts } = data;
</script>

<div class="container">
	<Hero />
	<AboutTorrust />
	{#if posts && posts.length > 0}
		<RecentPosts {posts} />
	{/if}
	<ImageContentSection>
		<h2>How to Contribute</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut amet nesciunt, quibusdam
			nulla quas voluptas impedit consequatur officia error pariatur nobis vero animi cum, qui fugit
			expedita odio et at eligendi exercitationem ea illo atque mollitia? Voluptate, dolorum
			maiores?
		</p>
		<div slot="image">
			<Image src="/images/logo.png" alt="Torrust Logo" />
		</div>
	</ImageContentSection>
	<Features {features} />
</div>

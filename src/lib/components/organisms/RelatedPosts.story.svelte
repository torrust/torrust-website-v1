<script lang="ts">
	import RelatedPosts from './RelatedPosts.svelte';
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import type { BlogPost } from '$lib/utils/types';

	const posts: BlogPost[] = [
		{
			tags: ['Technology', 'Programming'],
			keywords: ['Svelte', 'JavaScript', 'Web Development'],
			hidden: false,
			slug: 'getting-started-with-svelte',
			title: 'Getting Started with Svelte',
			date: '2024-04-28',
			updated: '2024-04-29',
			excerpt: 'Learn the basics of Svelte and start building web applications with ease.',
			html: '<p>Content of the blog post...</p>',
			readingTime: '5 minutes',
			relatedPosts: [],
			coverImage: '/images/svelte-cover.jpg',
			contributorSlug: 'john-doe',
			contributor: 'John Doe'
		}
	];

	export let Hst: HstType;
</script>

<svelte:component this={Hst.Story} title="Related Posts" layout={{ type: 'grid', width: 800 }}>
	<div style="padding: 20px;">
		<svelte:component this={Hst.Variant} title="Default">
			<RelatedPosts {posts} />
		</svelte:component>
	</div>
</svelte:component>

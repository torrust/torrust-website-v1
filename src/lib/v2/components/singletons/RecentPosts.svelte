<script lang="ts">
	import BlogPostCard from '$lib/v2/components/molecules/BlogPostCard.svelte';
	import ContentSection from '$lib/v2/components/organisms/ContentSection.svelte';
	import type { BlogPost } from '$lib/utils/types';
	import Button from '$lib/components/atoms/Button.svelte';

	export let posts: BlogPost[];
</script>

<ContentSection
	id="recent-posts"
	title="Torrust Blog"
	description="Tips on how to get started and use Torrust."
	align="left"
>
	<div slot="button">
		<Button href="/blog">View More</Button>
	</div>
	<div class="grid">
		{#each posts as post}
			<BlogPostCard
				slug={post.slug}
				title={post.title}
				excerpt={post.excerpt}
				tags={post.tags}
				readingTime={post.readingTime}
				showImage={false}
				date={post.date}
			/>
		{/each}
	</div>
</ContentSection>

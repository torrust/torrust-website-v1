<script lang="ts">
	import Card from '$lib/components/atoms/Card.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import Image from '$lib/components/atoms/Image.svelte';
	import { formatDate } from '$lib/utils/date';

	export let title: string;
	export let coverImage: string | undefined = undefined;
	export let excerpt: string;
	export let slug: string;
	export let tags: string[] | undefined;
	export let readingTime: string | undefined = undefined;
	export let date: string;

	export let showImage = true;

	const formattedDate = formatDate(date);
</script>

<Card
	href="/{slug}"
	target="_self"
	additionalClass="blog-post-card {!showImage || !coverImage ? 'no-image' : ''}"
>
	<div class="image" slot="image">
		{#if coverImage}
			<Image src={coverImage} alt="Cover image of this blog post" />
		{/if}
	</div>
	<div class="content" slot="content">
		<p class="title">
			{title}
		</p>
		{#if date}
			<div class="date">Published on {formattedDate}</div>
		{/if}
		{#if readingTime}
			<div class="note">{readingTime}</div>
		{/if}
		{#if excerpt}
			<p class="text">
				{excerpt}
			</p>
		{/if}
	</div>
	<div class="footer" slot="footer">
		{#if tags?.length}
			<div class="tags">
				{#each tags.slice(0, 2) as tag}
					<Tag {tag}><a href="/tags/{tag}">{tag}</a></Tag>
				{/each}
			</div>
		{/if}
	</div>
</Card>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		gap: 0px;
		align-items: flex-start;
	}

	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		font-size: 1.2rem;
		font-family: var(--font--title);
		font-weight: 700;
	}

	.tags {
		display: flex;
		align-items: center;
		gap: 5px;
		flex-wrap: wrap;
	}

	.date,
	.note {
		font-size: 0.8rem;
		color: rgba(var(--color--text-rgb), 0.8);
	}

	.date {
		padding-top: 0.25rem;
	}

	.text {
		margin-top: 5px;
		font-size: 0.9rem;
		text-align: justify;
	}

	.footer {
		margin-top: 20px;
	}

	:global(.blog-post-card .image img) {
		object-fit: cover;
	}

	:global(.blog-post-card.no-image > .image) {
		display: none;
	}
</style>

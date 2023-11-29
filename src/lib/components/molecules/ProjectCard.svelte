<script lang="ts">
	import Card from '$lib/components/atoms/Card.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import Image from '$lib/components/atoms/Image.svelte';
	import GitHubIcon from '$lib/icons/socials/github.svelte';
	import Star from '$lib/icons/star.svelte';

	export let title: string;
	export let coverImage: string | undefined = undefined;
	export let tags: string[] | undefined = undefined;
	export let repo: string | undefined = undefined;

	export let showImage = true;

	import { onMount } from 'svelte';

	export let stars: number | null = null;

	async function getStars() {
		if (repo) {
			try {
				const response = await fetch(`https://api.github.com/repos/${repo}`);
				const data = await response.json();
				if (data.stargazers_count) {
					stars = data.stargazers_count;
				}
			} catch (error) {
				console.error('Error fetching Github stars:', error);
			}
		}
	}

	onMount(getStars);
</script>

<Card additionalClass="project-card {!showImage || !coverImage ? 'no-image' : ''}">
	<div class="image" slot="image">
		{#if coverImage}
			<Image src={coverImage} alt="Image representing {title}" />
		{/if}
	</div>
	<div class="content" slot="content">
		<p class="title">
			{title}
		</p>
		<p class="note">
			<Star /> GitHub Stars: {stars !== null ? stars : 'Loading...'}
		</p>
		{#if repo}
			<a class="note" href={repo} target="_blank" rel="noopener noreferrer">
				<GitHubIcon />
				{repo.replace('https://github.com/', '')}
			</a>
		{/if}
		<div class="text">
			<slot name="content" />
		</div>
	</div>
	<div class="footer" slot="footer">
		{#if tags?.length}
			<div class="tags">
				{#each tags as tag}
					<Tag>{tag}</Tag>
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
		height: 100%;
	}

	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		font-size: 1.6rem;
		font-family: var(--font--title);
		font-weight: 700;
	}

	.tags {
		display: flex;
		align-items: center;
		gap: 5px;
		flex-wrap: wrap;
	}

	.note {
		font-size: 0.9rem;
		color: rgba(var(--color--text-rgb), 0.8);
		margin-bottom: 5px;
		margin-top: 5px;

		&:not(:hover) {
			text-decoration-color: transparent;
		}

		:global(svg) {
			height: 1.2rem;
			width: 1.2rem;
			display: inline;
			vertical-align: middle;
		}
	}

	.text {
		margin-top: 5px;
		font-size: 1rem;
		text-align: justify;
		height: 100%;
	}

	.footer {
		margin-top: 20px;
	}

	:global(.project-card .image img) {
		object-fit: cover;
	}

	:global(.project-card.no-image > .image) {
		display: none;
	}
</style>

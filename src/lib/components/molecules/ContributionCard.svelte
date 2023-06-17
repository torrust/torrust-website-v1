<script lang="ts">
	import Card from '$lib/components/atoms/Card.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';

	export let title: string;
	export let description: string | undefined = undefined;
	export let links: { href: string; label: string }[] | undefined = undefined;
</script>

<Card additionalClass="contribution-card">
	<div class="content" slot="content">
		<p class="title">{title}</p>
		{#if description}
			<p class="text">{description}</p>
		{/if}
	</div>
	<div class="footer" slot="footer">
		{#if links && links.length}
			<div class="links">
				{#each links as link}
					<Tag href={link.href}>{link.label}</Tag>
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

	.links {
		display: flex;
		align-items: center;
		gap: 5px 10px;
		flex-wrap: wrap;
		margin-top: 20px;
	}

	.text {
		margin-top: 5px;
		font-size: 0.9rem;
		text-align: justify;
	}
</style>

<script lang="ts">
	import Email from '$lib/icons/socials/email.svelte';
	import Github from '$lib/icons/socials/github.svelte';
	import Linkedin from '$lib/icons/socials/linkedin.svelte';

	export let name: string;
	export let position: string | undefined = undefined;
	export let img: string;
	export let contributeDate: string;
	export let paras: { para: string }[];
	export let links: { email: string; github: string; linkedIn: string }[];
</script>

<div class="contributor-biography">
	{#if img}
		<img src={img} class="cover-image" alt="Contributor" />
	{:else}
		<img src="/images/contributors/unknown-person-icon.png" class="cover-image" alt="Contributor" />
	{/if}
	<h1 class="contributor-title">{name}</h1>
	<h2 class="contributor-position">{position}</h2>
	<h5 class="contributor-contribute-date">Contributor since: <span>{contributeDate}</span></h5>
	<div class="socials links">
		{#each links as link}
			{#if link.email}
				<a href={link.email}><Email /></a>
			{/if}
		{/each}
		{#each links as link}
			{#if link.github}
				<a href={link.github}><Github /></a>
			{/if}
		{/each}
		{#each links as link}
			{#if link.linkedIn}
				<a href={link.linkedIn}><Linkedin /></a>
			{/if}
		{/each}
	</div>
	<div>
		{#each paras as para}
			<p>{@html para.para}</p>
		{/each}
	</div>
</div>

<style lang="scss">
	.contributor-biography {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		max-width: 600px;
		margin: 0 auto;
		line-height: 1.5;
		padding: 2rem;
	}

	@media screen and (min-width: 768px) {
		.contributor-biography {
			max-width: 1100px;
		}
	}

	.cover-image {
		width: min(var(--main-column-width), 100%);
		margin: 0 auto;
		max-height: 400px;
		box-shadow: var(--image-shadow);
		border-radius: 6px;
		box-shadow:
			0 4px 8px 0 rgba(221, 209, 209, 0.2),
			0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	.contributor-title {
		font-size: 2.5rem;
		margin: 0.5rem 0;
	}

	.contributor-position {
		font-size: 1.5rem;
		font-weight: 500;
	}

	.contributor-contribute-date {
		background-color: #fff;
		padding: 0.7rem 1.2rem;
		border-radius: 0.8rem;
		color: #000;
		margin-top: 0.5rem;
		box-shadow:
			0 2px 6px 0 rgba(0, 0, 0, 0.2),
			0 4px 12px 0 rgba(0, 0, 0, 0.19);
		margin-top: 1rem;
	}

	.socials {
		display: flex;
		gap: 1rem;
		margin-top: 1.5rem;
		align-items: center;
		justify-content: flex-end;
		gap: 30px;

		a {
			text-decoration: none;
			width: 2rem;

			&:hover {
				color: var(--color--primary);
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}

	p {
		font-size: 1rem;
		text-align: justify;
		margin: 1rem 0;
	}
</style>

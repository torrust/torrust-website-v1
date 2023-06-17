<script lang="ts">
	import { HttpRegex } from '$lib/utils/regex';
	import ExternalLinkIcon from '$lib/icons/external-link.svelte';

	export let color: 'primary' | 'secondary' = 'primary';

	export let href: string | undefined = undefined;
	const isExternalLink = !!href && HttpRegex.test(href);
	export let target: '_self' | '_blank' = isExternalLink ? '_blank' : '_self';
	export let rel = isExternalLink ? 'noopener noreferrer' : undefined;

	$: tag = href ? 'a' : 'div';
	$: linkProps = {
		href,
		target,
		rel
	};
</script>

<svelte:element this={tag} class="tag {color}" {...linkProps}>
	<slot />
	{#if isExternalLink}
		<div class="icon">
			<ExternalLinkIcon />
		</div>
	{/if}
</svelte:element>

<style lang="scss">
	.tag {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		padding: 5px 15px;
		border-radius: 10px;
		font-weight: 500;
		font-size: 0.85rem;
		width: fit-content;
		white-space: nowrap;

		&.primary {
			background-color: var(--color--primary-tint);
			color: var(--color--primary);
		}
		&.secondary {
			background-color: var(--color--secondary-tint);
			color: var(--color--secondary);
		}
	}

	.icon {
		width: 16px;
		height: 16px;
	}

	a.tag {
		text-decoration-thickness: 1px;
		&:not(:hover) {
			text-decoration-color: transparent;
		}
	}
</style>

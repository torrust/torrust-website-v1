<script lang="ts">
	import Icon from '@iconify/svelte';
	import { siteBaseUrl } from '$lib/data/meta';
	import ShareUrl from '$lib/v2/components/singletons/ShareUrl.svelte';

	export let slug: string;
	export let title: string;

	const encodedSubject = encodeURIComponent('I wanted you to see this blog post');
	const encodedBody = encodeURIComponent(
		`${title} is a really interesting blog post from Torrust. Check it out here: ${siteBaseUrl}/${slug}`
	);
	const encodedSlug = encodeURIComponent(slug);

	const unescapedHref = (href: string) => {
		return href;
	};

	const socialLinks = [
		{
			icon: 'devicon:linkedin',
			href: `http://www.linkedin.com/shareArticle?mini=true&url=${siteBaseUrl}/${encodedSlug}`
		},
		{
			icon: 'devicon:facebook',
			href: `https://www.facebook.com/sharer.php?u=${siteBaseUrl}/${encodedSlug}`
		},
		{
			icon: 'ri:twitter-x-fill',
			href: `https://twitter.com/share?url=${siteBaseUrl}/${encodedSlug}&text=${title}`,
			color: '#ffffff'
		},
		{
			icon: 'ic:outline-mail',
			href: `mailto:?subject=${encodedSubject}&body=${encodedBody}`,
			color: '#ffffff'
		}
	];
</script>

<div class="link-container">
	{#each socialLinks as { icon, href, color }}
		<a href={unescapedHref(href)} target="_blank" rel="noopener noreferrer">
			<Icon {icon} width="30" height="30" {color} />
		</a>
	{/each}
	<ShareUrl />
</div>

<style lang="scss">
	.link-container {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}
</style>

<script>
	import { description, image, keywords, title, siteBaseUrl } from '$lib/data/meta';
</script>

<svelte:head>
	<link rel="“canonical”" href={siteBaseUrl} />
	<meta name="keywords" content={keywords.join(', ')} />

	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />

	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />

	<meta property="og:image" content={image} />
	<meta name="twitter:image" content={image} />

	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main>
	<slot />
</main>

<style lang="scss">
	main {
		background-color: rgba(26, 26, 26, 1);
	}
</style>

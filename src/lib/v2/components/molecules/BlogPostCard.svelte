<script lang="ts">
	import Cards from '$lib/v2/components/atoms/Cards.svelte';
	import Image from '$lib/components/atoms/Image.svelte';
	import { formatDate } from '$lib/utils/date';

	export let title: string;
	export let coverImage: string | undefined = undefined;
	export let slug: string;
	export let date: string;
	export let contributor: string;

	export let showImage = true;

	const formattedDate = formatDate(date);
</script>

<Cards
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
		<h3 class="title">
			{title}
		</h3>
		{#if date}
			<p class="date">{contributor ? contributor + ' - ' : ''}{formattedDate}</p>
		{/if}
	</div>
	<div class="footer" slot="footer"></div>
</Cards>

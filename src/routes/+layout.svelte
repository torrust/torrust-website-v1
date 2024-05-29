<script lang="ts">
	import '$lib/scss/global.scss';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import type { BlogPost } from '$lib/utils/types';

	export let data: {
		posts: BlogPost[];
	};

	let { posts } = data;
</script>

<Header showBackground={true} {posts} />
<slot />
<Footer />

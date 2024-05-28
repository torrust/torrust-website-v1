<script lang="ts">
	import '$lib/scss/global.scss';
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Header from './Header.svelte';
	import type { BlogPost } from '$lib/utils/types';

	export let posts: BlogPost[];

	export let Hst: HstType;
</script>

<svelte:component
	this={Hst.Story}
	title="Organisms/Header"
	layout={{ type: 'single', iframe: true }}
>
	<svelte:component this={Hst.Variant} title="Transparent Background">
		<Header {posts} />
	</svelte:component>

	<svelte:component this={Hst.Variant} title="With Background">
		<Header showBackground {posts} />
	</svelte:component>
</svelte:component>

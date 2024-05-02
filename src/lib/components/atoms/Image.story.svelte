<script lang="ts">
	import '$lib/scss/global.scss';
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Image from './Image.svelte';

	export let Hst: HstType;

	let src = 'https://placedog.net/500';
	let alt = 'A cute dog';
	let fullBleed: boolean | undefined = undefined;
</script>

<svelte:component this={Hst.Story} title="Atoms/Image">
	<div style="padding: 10px;">
		<svelte:component this={Hst.Variant} title="Default">
			<Image {src} {alt} {fullBleed} />
		</svelte:component>
	</div>
</svelte:component>

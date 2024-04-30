<script lang="ts">
	import '$lib/scss/global.scss';
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Image from './Image.svelte';

	export let Hst: HstType;

	let src = 'https://placedog.net/500';
	let alt = 'A cute dog';
	let fullBleed: boolean | undefined = undefined;

	let formats: string[] = ['avif', 'webp', 'png'];
	let widths: string[] | undefined = undefined;

	function buildSrcset() {
		let srcset = '';
		const fileName = src.split('.')[0];
		const fileExtension = src.split('.').pop() || '';

		if (widths) {
			for (let i = 0; i < widths.length; i++) {
				srcset += `${fileName}-${widths[i]}.${fileExtension} ${widths[i]}w`;

				if (i < widths.length - 1) {
					srcset += ', ';
				}
			}
		} else {
			for (let i = 0; i < formats.length; i++) {
				srcset += `${fileName}.${formats[i]}`;

				if (i < formats.length - 1) {
					srcset += ', ';
				}
			}
		}

		return srcset;
	}
</script>

<svelte:component this={Hst.Story} title="Atoms/Image">
	<div style="padding: 10px;">
		<svelte:component this={Hst.Variant} title="Default">
			<Image {src} {alt} {fullBleed} />
		</svelte:component>
	</div>
</svelte:component>

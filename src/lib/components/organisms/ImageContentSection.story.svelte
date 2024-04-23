<script lang="ts">
	import '$lib/scss/global.scss';
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import ImageContentSection from './ImageContentSection.svelte';

	export let Hst: HstType;
</script>

<svelte:component
	this={Hst.Story}
	title="Organisms/Image Content Section"
	layout={{ type: 'single', iframe: true }}
>
	<svelte:component this={Hst.Variant} title="Default">
		<ImageContentSection>
			<h2>Image Content Section</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt laboriosam vero omnis hic
				impedit voluptatibus cum illo amet perspiciatis voluptates?
			</p>
			<div slot="image">
				<img src="https://placedog.net/500" alt="A cute dog" />
			</div>
		</ImageContentSection>
	</svelte:component>

	<svelte:component this={Hst.Variant} title="Image Before Content">
		<ImageContentSection imagePosition="before">
			<h2>Image Content Section</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt laboriosam vero omnis hic
				impedit voluptatibus cum illo amet perspiciatis voluptates?
			</p>
			<div slot="image">
				<img src="https://placedog.net/500" alt="A cute dog" />
			</div>
		</ImageContentSection>
	</svelte:component>
</svelte:component>

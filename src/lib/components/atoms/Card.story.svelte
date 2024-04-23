<script lang="ts">
	import '$lib/scss/global.scss';
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Card from './Card.svelte';

	export let Hst: HstType;
</script>

<svelte:component this={Hst.Story} title="Atoms/Card" layout={{ type: 'grid', width: 400 }}>
	<div style="padding: 10px;">
		<svelte:component this={Hst.Variant} title="Default">
			<Card>
				<div slot="content">Card Content</div>
				<div slot="footer">Footer</div>
			</Card>
		</svelte:component>

		<svelte:component this={Hst.Variant} title="With Image">
			<Card>
				<img slot="image" src="https://placedog.net/500" alt="A cute dog" />
				<div slot="content">
					Cards with images will automatically adapt between showing the image on top or bottom
					depending on how wide it is.
				</div>
			</Card>
		</svelte:component>

		<svelte:component this={Hst.Variant} title="With Link">
			<Card href="#">
				<img slot="image" src="https://placedog.net/500" alt="A cute dog" />
				<div slot="content">Card Content</div>
				<div slot="footer">Footer</div>
			</Card>
		</svelte:component>
	</div>
</svelte:component>

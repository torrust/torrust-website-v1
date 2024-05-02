<script lang="ts">
	import ShareButton from './ShareButton.svelte';
	import type { Hst as HstType } from '@histoire/plugin-svelte';

	export let Hst: HstType;
</script>

<svelte:component this={Hst.Story} title="Atoms/ShareButton">
	<div style="padding: 10px;">
		<svelte:component this={Hst.Variant} title="Default">
			<ShareButton slug="sample-slug" title="Sample Title" />
		</svelte:component>
	</div>
</svelte:component>

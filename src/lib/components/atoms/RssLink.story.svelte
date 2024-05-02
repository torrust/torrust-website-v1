<script lang="ts">
	import RssLink from './RssLink.svelte';
	import type { Hst as HstType } from '@histoire/plugin-svelte';

	export let Hst: HstType;
</script>

<svelte:component this={Hst.Story} title="Atoms/RssLink">
	<div style="padding: 10px;">
		<svelte:component this={Hst.Variant} title="Default">
			<RssLink />
		</svelte:component>
	</div>
</svelte:component>

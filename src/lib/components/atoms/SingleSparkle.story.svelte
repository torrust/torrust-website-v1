<script lang="ts">
	import SingleSparkle from './SingleSparkle.svelte';
	import type { Hst as HstType } from '@histoire/plugin-svelte';

	export let Hst: HstType;
</script>

<svelte:component this={Hst.Story} title="Atoms/SingleSparkle">
	<div style="padding: 10px;">
		<svelte:component this={Hst.Variant} title="Default">
			<SingleSparkle color="yellow" size="20px" style={{ top: '50px', left: '50px' }} />
		</svelte:component>
	</div>
</svelte:component>

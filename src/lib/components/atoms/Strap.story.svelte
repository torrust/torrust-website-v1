<script lang="ts">
	import Strap from './Strap.svelte';
	import type { Hst as HstType } from '@histoire/plugin-svelte';

	export let Hst: HstType;
</script>

<svelte:component this={Hst.Story} title="Atoms/Strap">
	<div style="padding: 10px;">
		<svelte:component this={Hst.Variant} title="Default">
			<Strap />
		</svelte:component>
	</div>
</svelte:component>

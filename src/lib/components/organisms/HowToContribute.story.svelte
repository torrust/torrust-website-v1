<script lang="ts">
	import HowToContribute from './HowToContribute.svelte';
	import type { Hst as HstType } from '@histoire/plugin-svelte';

	export let Hst: HstType;
</script>

<svelte:component this={Hst.Story} title="How to Contribute" layout={{ type: 'grid', width: 800 }}>
	<div style="padding: 20px;">
		<svelte:component this={Hst.Variant} title="Default">
			<HowToContribute />
		</svelte:component>
	</div>
</svelte:component>

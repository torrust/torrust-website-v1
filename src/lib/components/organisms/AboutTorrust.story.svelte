<script lang="ts">
	import AboutTorrust from './AboutTorrust.svelte';
	import type { Hst as HstType } from '@histoire/plugin-svelte';

	export let Hst: HstType;
</script>

<svelte:component this={Hst.Story} title="About Torrust" layout={{ type: 'grid', width: 600 }}>
	<div style="padding: 20px;">
		<svelte:component this={Hst.Variant} title="Default">
			<AboutTorrust />
		</svelte:component>
	</div>
</svelte:component>

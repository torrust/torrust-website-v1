<script lang="ts">
	import Footer from './Footer.svelte';
	import type { Hst as HstType } from '@histoire/plugin-svelte';

	export let Hst: HstType;
</script>

<svelte:component this={Hst.Story} title="Footer" layout={{ type: 'grid', width: 800 }}>
	<div style="padding: 20px;">
		<svelte:component this={Hst.Variant} title="Default">
			<Footer />
		</svelte:component>
	</div>
</svelte:component>

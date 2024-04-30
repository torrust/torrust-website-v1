<script lang="ts">
	import PostTable from './PostTable.svelte';

	import type { Hst as HstType } from '@histoire/plugin-svelte';

	export let Hst: HstType;
</script>

<svelte:component this={Hst.Story} title="Molecules/PostTable">
	<PostTable>
		<p>This is a PostTable component!</p>
	</PostTable>
</svelte:component>

<script lang="ts">
	import '$lib/scss/global.scss';
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Waves from './Waves.svelte';

	export let Hst: HstType;
</script>

<svelte:component
	this={Hst.Story}
	title="Organisms/Waves"
	layout={{ type: 'single', iframe: true }}
>
	<Waves />
</svelte:component>

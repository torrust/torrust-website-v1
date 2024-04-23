<script lang="ts">
	import '$lib/scss/global.scss';
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Header from './Header.svelte';

	export let Hst: HstType;
</script>

<svelte:component
	this={Hst.Story}
	title="Organisms/Header"
	layout={{ type: 'single', iframe: true }}
>
	<svelte:component this={Hst.Variant} title="Transparent Background">
		<Header />
	</svelte:component>

	<svelte:component this={Hst.Variant} title="With Background">
		<Header showBackground />
	</svelte:component>
</svelte:component>

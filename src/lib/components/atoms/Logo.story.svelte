<script lang="ts">
	import '$lib/scss/global.scss';
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Logo from '$lib/components/atoms/Logo.svelte';

	export let Hst: HstType;
</script>

<svelte:component this={Hst.Story} title="Atoms/Logo" layout={{ type: 'grid', width: 400 }}>
	<svelte:component this={Hst.Variant} title="Default">
		<Logo />
	</svelte:component>
</svelte:component>

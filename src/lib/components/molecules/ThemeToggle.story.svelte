<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';

	import type { Hst as HstType } from '@histoire/plugin-svelte';

	export let Hst: HstType;
</script>

<svelte:component this={Hst.Story} title="Molecules/ThemeToggle">
	<ThemeToggle />
</svelte:component>

<script lang="ts">
	import '$lib/scss/global.scss';
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Socials from './Socials.svelte';

	export let Hst: HstType;
</script>

<Hst.Story title="Molecules/Socials" layout={{ type: 'single', iframe: true }}>
	<Socials />
</Hst.Story>

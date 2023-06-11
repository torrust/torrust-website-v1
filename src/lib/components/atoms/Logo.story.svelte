<script lang="ts">
	import '$lib/scss/global.scss';
	import type { Hst } from '@histoire/plugin-svelte';
	import Logo from '$lib/components/atoms/Logo.svelte';

	export let Hst: Hst;
</script>

<Hst.Story title="Atoms/Logo" layout={{ type: 'grid', width: 400 }}>
	<Hst.Variant title="Default">
		<Logo />
	</Hst.Variant>
</Hst.Story>

<script lang="ts">
	import '$lib/scss/global.scss';
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Tag from './Tag.svelte';

	export let Hst: HstType;
</script>

<svelte:component this={Hst.Story} title="Atoms/Tag" layout={{ type: 'grid', width: 200 }}>
	<svelte:component this={Hst.Variant} title="Primary">
		<Tag tag="example-tag">This is a Tag</Tag>
	</svelte:component>

	<svelte:component this={Hst.Variant} title="Secondary">
		<Tag color="secondary" tag="example-tag">This is a Tag</Tag>
	</svelte:component>
</svelte:component>

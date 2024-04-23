<script lang="ts">
	import '$lib/scss/global.scss';
	import type { ComponentProps } from 'svelte';
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Callout from './Callout.svelte';
	import type { NoUndefinedField } from '$lib/utils/types';

	export let Hst: HstType;

	let props: NoUndefinedField<ComponentProps<Callout>> = {
		type: 'info'
	};
</script>

<svelte:component this={Hst.Story} title="Molecules/Callout">
	<svelte:fragment slot="controls">
		<svelte:component
			this={Hst.Select}
			bind:value={props.type}
			title="color"
			options={['info', 'warning', 'error', 'success']}
		/>
	</svelte:fragment>

	<div style="padding: 12px;">
		<svelte:component this={Hst.Variant} title="Default">
			<Callout {...props}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien mi, euismod eu
				ipsum eget, faucibus maximus erat. Integer nisl tellus, interdum sit amet nunc vel,
				ullamcorper suscipit odio.
			</Callout>
		</svelte:component>
	</div>
</svelte:component>

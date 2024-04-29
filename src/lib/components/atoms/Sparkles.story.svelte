<script lang="ts">
	import '$lib/scss/global.scss';
	import type { ComponentProps } from 'svelte';
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Sparkles from './Sparkles.svelte';
	import type { NoUndefinedField } from '$lib/utils/types';
	import Button from '$lib/components/atoms/Button.svelte';

	export let Hst: HstType;

	let props: NoUndefinedField<ComponentProps<Sparkles>> = {
		color: 'default'
	};
</script>

<svelte:component this={Hst.Story} title="Atoms/Sparkles">
	<svelte:fragment slot="controls">
		<svelte:component
			this={Hst.Select}
			bind:value={props.color}
			title="color"
			options={['default', 'primary', 'secondary']}
		/>
	</svelte:fragment>

	<div style="padding: 12px;">
		<svelte:component this={Hst.Variant} title="Default">
			<Sparkles {...props}>
				<Button>Sparkles can be added anywhere</Button>
			</Sparkles>
		</svelte:component>
	</div>
</svelte:component>

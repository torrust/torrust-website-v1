<script lang="ts">
	import '$lib/scss/global.scss';
	import type { ComponentProps } from 'svelte';
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import SparklingHighlight from './SparklingHighlight.svelte';
	import type { NoUndefinedField } from '$lib/utils/types';

	export let Hst: HstType;

	let props: NoUndefinedField<ComponentProps<SparklingHighlight>> = {
		color: 'default',
		sparkleColor: 'default'
	};

	let text = 'Sparkling Text';
</script>

<svelte:component this={Hst.Story} title="Molecules/Sparkling Highlight">
	<svelte:fragment slot="controls">
		<svelte:component this={Hst.Text} bind:value={text} title="Text" />
		<svelte:component
			this={Hst.Select}
			bind:value={props.color}
			title="color"
			options={['default', 'primary', 'secondary']}
		/>
		<svelte:component
			this={Hst.Select}
			bind:value={props.sparkleColor}
			title="sparkle color"
			options={['default', 'primary', 'secondary']}
		/>
	</svelte:fragment>

	<div style="padding: 12px;">
		<svelte:component this={Hst.Variant} title="Default">
			<SparklingHighlight {...props}>
				{text}
			</SparklingHighlight>
		</svelte:component>
	</div>
</svelte:component>

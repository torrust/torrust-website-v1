<script lang="ts">
	import Features from './Features.svelte';
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import type { Feature } from '$lib/utils/types';
	import type { NoUndefinedField } from '$lib/utils/types';

	const features: NoUndefinedField<Feature>[] = [
		{
			name: 'Feature 1',
			description: 'Description of feature 1',
			image: '/images/feature1.jpg',
			tags: [{ label: 'Tag 1', color: 'primary' }]
		},
		{
			name: 'Feature 2',
			description: 'Description of feature 2',
			image: '/images/feature2.jpg',
			tags: [{ label: 'Tag 2', color: 'secondary' }]
		}
	];

	export let Hst: HstType;
</script>

<svelte:component this={Hst.Story} title="Features" layout={{ type: 'grid', width: 800 }}>
	<div style="padding: 20px;">
		<svelte:component this={Hst.Variant} title="Default">
			<Features {features} />
		</svelte:component>
	</div>
</svelte:component>

<script lang="ts">
	import '$lib/scss/global.scss';
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import ContributionCard from './ContributionCard.svelte';

	export let Hst: HstType;
</script>

<svelte:component this={Hst.Story} title="Molecules/Contribution Card">
	<div style="padding: 12px;">
		<svelte:component this={Hst.Variant} title="Default">
			<ContributionCard
				title="Bug reports and feature requests"
				description="You can report any bugs or request features by opening an issue in the appropriate repository:"
				links={[
					{
						href: 'https://github.com/torrust/torrust-tracker/issues',
						label: 'Torrust Tracker'
					},
					{
						href: 'https://github.com/torrust/torrust-index-backend/issues',
						label: 'Torrust Index (Backend)'
					},
					{
						href: 'https://github.com/torrust/torrust-index-frontend/issues',
						label: 'Torrust Index (Frontend)'
					}
				]}
			/>
		</svelte:component>
	</div>
</svelte:component>

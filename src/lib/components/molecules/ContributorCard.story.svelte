<script lang="ts">
	import ContributorCard from './ContributorCard.svelte';
	import type { Hst as HstType } from '@histoire/plugin-svelte';

	export let Hst: HstType;

	const sampleContributor = {
		name: 'John Doe',
		position: 'Software Engineer',
		img: '/images/contributors/john_doe.jpg',
		contributeDate: '2023-01-01',
		paras: [
			{
				para: 'John Doe is a talented software engineer with a passion for building scalable applications.'
			},
			{
				para: 'He joined our team in January 2023 and has been making valuable contributions ever since.'
			}
		],
		links: [
			{
				email: 'mailto:john.doe@example.com',
				github: 'https://github.com/johndoe',
				linkedIn: 'https://www.linkedin.com/in/johndoe'
			}
		]
	};
</script>

<svelte:component this={Hst.Story} title="Molecules/ContributorCard">
	<div style="padding: 10px;">
		<svelte:component this={Hst.Variant} title="Default">
			<ContributorCard {...sampleContributor} />
		</svelte:component>
	</div>
</svelte:component>

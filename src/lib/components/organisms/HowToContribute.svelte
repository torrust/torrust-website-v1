<script lang="ts">
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import ContributionCard from '../molecules/ContributionCard.svelte';
</script>

<ContentSection
	id="contributing"
	title="How to Contribute"
	description="We welcome contributions from the community! There are many ways in which you can contribute."
>
	<div class="wrapper">
		<div class="grid">
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

			<ContributionCard
				title="Code contributions"
				description="You can start by looking at the issues in each repository labeled &quot;good first issues&quot;."
				links={[
					{
						href: 'https://github.com/torrust/torrust-tracker/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22',
						label: 'Torrust Tracker'
					},
					{
						href: 'https://github.com/torrust/torrust-index-backend/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22',
						label: 'Torrust Index (Backend)'
					},
					{
						href: 'https://github.com/torrust/torrust-index-frontend/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22',
						label: 'Torrust Index (Frontend)'
					}
				]}
			/>

			<ContributionCard
				title="Documentation improvements"
				description="Check the documentation for typos, errors, or missing information."
				links={[
					{
						href: 'https://docs.rs/torrust-tracker/',
						label: 'Torrust Tracker'
					},
					{
						href: 'https://docs.rs/torrust-tracker/newest/torrust_tracker/servers/apis/v1',
						label: 'Torrust Tracker API'
					}
				]}
			/>

			<ContributionCard
				title="Participation in the community"
				description="You can help by answering questions in the discussions."
				links={[
					{
						href: 'https://github.com/torrust/torrust-tracker/discussions',
						label: 'Torrust Tracker'
					},
					{
						href: 'https://github.com/torrust/torrust-index-backend/discussions',
						label: 'Torrust Index (Backend)'
					},
					{
						href: 'https://github.com/torrust/torrust-index-frontend/discussions',
						label: 'Torrust Index (Frontend)'
					}
				]}
			/>
		</div>
	</div>
</ContentSection>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;

		@include for-phone-only {
			grid-template-columns: 1fr;
		}
	}
</style>

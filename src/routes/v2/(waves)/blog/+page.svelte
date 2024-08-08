<script lang="ts">
	import BlogPostCardRecent from '$lib/v2/components/molecules/BlogPostCardRecent.svelte';
</script>

<div class="container">
	<div class="header">
		<h1>Blog</h1>
		<p>Search & filters</p>
	</div>
	<div class="recent-posts">
		<BlogPostCardRecent
			title={'Habitant ultrices tempor ut mi adipiscing imperdiet in tincidunt cras'}
			author={'Author'}
			date={'May 13, 2024'}
		/>
		<BlogPostCardRecent
			title={'Tincidunt morbi sed facilisi hendrerit lacus elementum commodo in proin'}
			author={'Author'}
			date={'May 13, 2024'}
		/>
		<BlogPostCardRecent
			title={'Tempor volutpat pretium nibh praesent tortor eget etiam'}
			author={'Author'}
			date={'May 13, 2024'}
		/>
		<BlogPostCardRecent
			title={'Arcu euismod massa mattis quam gravida'}
			author={'Author'}
			date={'May 13, 2024'}
		/>
		<div>
			<BlogPostCardRecent
				title={'Velit integer egestas viverra eget pretium tortor gravida ac'}
				author={'Author'}
				date={'May 13, 2024'}
			/>
		</div>
	</div>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.recent-posts {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	@include for-tablet-portrait-up {
		.recent-posts {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(3, auto);
			grid-column-gap: auto;
			grid-row-gap: 1.5rem;
		}

		.recent-posts > :nth-child(5) {
			grid-column: 1 / -1;
		}
	}
</style>

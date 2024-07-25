<script lang="ts">
	import BlogPostCard from '$lib/v2/components/molecules/BlogPostCard.svelte';
</script>

<div class="container">
	<h2>Latest Blog Posts</h2>
	<div>
		<BlogPostCard
			title="Luctus enim et risus pulvinar consectetur adipiscing diam amet"
			description="Pellentesque gravida sed id arcu tempor sed donec. Tortor praesent justo egestas vitae vestibulum consequat convallis dia..."
			date={'May 13, 2024'}
		/>
		<BlogPostCard
			title="Luctus enim et risus pulvinar consectetur adipiscing diam amet"
			description="Pellentesque gravida sed id arcu tempor sed donec. Tortor praesent justo egestas vitae vestibulum consequat convallis dia..."
			date={'May 13, 2024'}
		/>
		<BlogPostCard
			title="Luctus enim et risus pulvinar consectetur adipiscing diam amet"
			description="Pellentesque gravida sed id arcu tempor sed donec. Tortor praesent justo egestas vitae vestibulum consequat convallis dia..."
			date={'May 13, 2024'}
		/>
	</div>
	<a href="/">All Articles</a>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 4rem;

		a {
			margin-top: 3rem;
		}
	}
</style>

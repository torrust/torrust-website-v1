<script lang="ts">
	import PostContainer from '$lib/v2/components/molecules/PostContainer.svelte';
	import PostTable from '$lib/v2/components/molecules/PostTable.svelte';
	import PostBody from '$lib/v2/components/molecules/PostBody.svelte';
	import { aboutTable } from '$lib/v2/constants/constants';
	import { aboutContent } from '$lib/v2/constants/postContent';
</script>

<div class="container">
	<PostContainer>
		<PostTable table={aboutTable} />
		<PostBody body={aboutContent} />
	</PostContainer>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.container {
		background: rgba(26, 26, 26, 1);
		color: rgba(245, 245, 245, 0.96);
	}
</style>

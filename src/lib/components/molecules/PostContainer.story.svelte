<script lang="ts">
	import PostContainer from './PostContainer.svelte';

	import type { Hst as HstType } from '@histoire/plugin-svelte';

	export let Hst: HstType;
</script>

<svelte:component this={Hst.Story} title="Molecules/PostContainer">
	<PostContainer />
</svelte:component>

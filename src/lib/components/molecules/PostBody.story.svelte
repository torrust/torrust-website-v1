<script lang="ts">
	import PostBody from './PostBody.svelte';

	import type { Hst as HstType } from '@histoire/plugin-svelte';

	export let Hst: HstType;
</script>

<svelte:component this={Hst.Story} title="Molecules/PostBody">
	<PostBody>
		<p>This is a sample post body.</p>
		<p>It can contain multiple paragraphs of text.</p>
		<p>You can insert any content inside the slot.</p>
	</PostBody>
</svelte:component>

<script lang="ts">
	import '$lib/scss/global.scss';
	import type { ComponentProps } from 'svelte';
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import CodeBlock from './CodeBlock.svelte';
	import type { NoUndefinedField } from '$lib/utils/types';

	export let Hst: HstType;

	let props: NoUndefinedField<ComponentProps<CodeBlock>> = {
		filename: '+page.svelte',
		lang: 'svelte',
		fullBleed: false
	};
</script>

<Hst.Story title="Molecules/Code Block">
	<svelte:fragment slot="controls">
		<svelte:component this={Hst.Text} bind:value={props.filename} title="File Name" />
		<svelte:component this={Hst.Text} bind:value={props.lang} title="Language" />
	</svelte:fragment>

	<div style="padding: 12px;">
		<svelte:component this={Hst.Variant} title="Default">
			<CodeBlock {...props}>
				<pre class="language-svelte"><code class="language-svelte"
						><span class="token tag"
							><span class="token tag"><span class="token punctuation">&lt;</span>Header</span
							> <span class="token punctuation">/&gt;</span></span
						>

          <span class="token tag"
							><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span
								class="token punctuation">&gt;</span
							></span
						>
            <span class="token tag"
							><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span
								class="token punctuation">/&gt;</span
							></span
						>
          <span class="token tag"
							><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span
								class="token punctuation">&gt;</span
							></span
						>
          
          <span class="token tag"
							><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span
							> <span class="token punctuation">/&gt;</span></span
						></code
					></pre>
			</CodeBlock>
		</svelte:component>
	</div>
</Hst.Story>

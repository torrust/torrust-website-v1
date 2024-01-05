<script lang="ts">
	import Icon from '@iconify/svelte'
	export let filename: string;
	export let lang: string;
	export let fullBleed: boolean | undefined = undefined;
	let codeBlockElement: HTMLDivElement;
	let showCheckmark: boolean = false;

	async function copyToClipboard() {
        try {
            const codeContent = codeBlockElement.textContent || '';
            await navigator.clipboard.writeText(codeContent);
			showCheckmark = true

			setTimeout(() => showCheckmark = false, 1000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
</script>

<div class="code-block" class:full-bleed={fullBleed} bind:this={codeBlockElement}>
	{#if filename}
		<div class="filename">{filename}</div>
	{/if}
	{#if lang}
		<div class="lang">{lang}</div>
	{/if}
	<button
		class={`copy-button ${showCheckmark ? 'copy-button-green' : 'copy-button-gray'}`}
		on:click={copyToClipboard}
	>
		{#if showCheckmark}
			<Icon icon='charm:tick' color='#6cdb2e' />
		{:else}
			<Icon icon='ion:copy-outline' color='#FFFFFF' />
		{/if}
	</button>
	<div class="code-content">
	    <slot />
	</div>
</div>

<style lang="scss">
	.code-block {
		display: block;
		position: relative;
		background-color: var(--color--code-background);
		color: var(--color--code-text);
		font-family: var(--font--mono);
		font-size: 1rem;
		line-height: 1.33em;
		border-radius: 8px;
		box-shadow: var(--card-shadow);

		padding: 30px 15px;
		margin: 30px 0;

		:global(pre) {
			overflow-x: auto;
			scrollbar-color: var(--color--primary) var(--color--primary-tint);
			scrollbar-width: thin;
			padding-bottom: 5px;

			&::-webkit-scrollbar {
				height: 8px;
			}
			&::-webkit-scrollbar-thumb {
				background: var(--color--primary);
				&:hover {
					background: var(--color--primary-shade);
				}
			}
		}

		.lang {
			position: absolute;
			right: 0;
			top: -15px;
			background: inherit;
			border-radius: 8px;
			padding: 5px 10px;
			z-index: 2;
			font-size: 0.85em;
		}

		.filename {
			background: inherit;
			border-top-left-radius: 8px;
			border-top-right-radius: 8px;
			margin-bottom: -2px;
			padding: 5px 10px;
			position: absolute;
			left: 0px;
			top: -15px;
			z-index: 1;
		}

		.copy-button {
			position: absolute;
			top: 1.5rem;
			right: 1.5rem;
			padding: 0.25rem;
			border-radius: 0.375rem;
			box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
			cursor: pointer;
		}

		.copy-button-green {
			background-color: #047857;
		}

		.copy-button-green:hover {
			background-color: #065f67;
		}

		.copy-button-gray {
			background-color: #4a5568;
		}

		.copy-button-gray:hover {
			background-color: #2d3748;
		}
	}
</style>

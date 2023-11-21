<script lang="ts">
	export let filename: string;
	export let lang: string;
	export let id: string;
	export let fullBleed: boolean | undefined = undefined;

	let buttonMessage = 'Copy Code';

	async function copyCode(code: string) {
		try {
			await navigator.clipboard.writeText(code || '');

			buttonMessage = 'Copied!';

			setTimeout(() => {
				buttonMessage = 'Copy Code';
			}, 2000);
		} catch (err) {
			console.error('Unable to copy code to clipboard: ', err);
		}
	}

	async function btnClicked(id: string) {
		const codeSnippets = document.querySelectorAll('.code-block pre') as NodeListOf<Element>;

		const codeContents: string[] = [];

		codeSnippets.forEach((codeSnippet) => {
			codeContents.push(codeSnippet.textContent || '');
		});

		if (id === 'firstCodeBlock') {
			copyCode(codeContents[0]);
		} else if (id === 'secondCodeBlock') {
			copyCode(codeContents[1]);
		} else if (id === 'thirdCodeBlock') {
			copyCode(codeContents[2]);
		} else if (id === 'fourthCodeBlock') {
			copyCode(codeContents[3]);
		} else if (id === 'fifthCodeBlock') {
			copyCode(codeContents[4]);
		} else if (id === 'sixthCodeBlock') {
			copyCode(codeContents[5]);
		} else if (id === 'seventhCodeBlock') {
			copyCode(codeContents[6]);
		} else if (id === 'eighthCodeBlock') {
			copyCode(codeContents[7]);
		} else if (id === 'ninthCodeBlock') {
			copyCode(codeContents[8]);
		} else if (id === 'tenthCodeBlock') {
			copyCode(codeContents[9]);
		} else if (id === 'eleventhCodeBlock') {
			copyCode(codeContents[10]);
		} else if (id === 'twelfthCodeBlock') {
			copyCode(codeContents[11]);
		} else if (id === 'thirteenthCodeBlock') {
			copyCode(codeContents[12]);
		} else if (id === 'fourteenthCodeBlock') {
			copyCode(codeContents[13]);
		} else if (id === 'fifteenthCodeBlock') {
			copyCode(codeContents[14]);
		} else if (id === 'sixteenthCodeBlock') {
			copyCode(codeContents[15]);
		} else if (id === 'seventeenthCodeBlock') {
			copyCode(codeContents[16]);
		} else if (id === 'eighteenthCodeBlock') {
			copyCode(codeContents[17]);
		} else if (id === 'nineteenthCodeBlock') {
			copyCode(codeContents[18]);
		} else if (id === 'twentiethCodeBlock') {
			copyCode(codeContents[19]);
		} else if (id === 'twentyFirstCodeBlock') {
			copyCode(codeContents[20]);
		} else if (id === 'twentySecondCodeBlock') {
			copyCode(codeContents[21]);
		} else if (id === 'twentyThirdCodeBlock') {
			copyCode(codeContents[22]);
		} else if (id === 'twentyFourthCodeBlock') {
			copyCode(codeContents[23]);
		} else if (id === 'twentyFifthCodeBlock') {
			copyCode(codeContents[24]);
		} else if (id === 'twentySixthCodeBlock') {
			copyCode(codeContents[25]);
		} else if (id === 'twentySeventhCodeBlock') {
			copyCode(codeContents[26]);
		} else if (id === 'twentyEighthCodeBlock') {
			copyCode(codeContents[27]);
		}
	}
</script>

<div class="code-block" class:full-bleed={fullBleed}>
	<div class="btn-container">
		<button on:click={() => btnClicked(id)} class="copy-btn">{buttonMessage}</button>
	</div>
	{#if filename}
		<div class="filename">{filename}</div>
	{/if}
	{#if lang}
		<div class="lang">{lang}</div>
	{/if}
	<slot />
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

		.btn-container {
			display: flex;
			justify-content: flex-end;
		}

		.copy-btn {
			cursor: pointer;
			background-color: transparent;
			border: none;
			color: grey;
		}

		.copy-btn:hover {
			color: white;
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
	}
</style>

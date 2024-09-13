<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import type { TableItem } from '$lib/v2/constants/constants';

	let size: number;
	let divStyle: string;
	export let table: TableItem[];

	const updateStyles = () => {
		if (size >= 1440) {
			divStyle = 'position: sticky; top: 0;';
		} else {
			divStyle = 'position: relative;';
		}
	};

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	onMount(updateStyles);

	afterUpdate(updateStyles);

	$: {
		updateStyles();
	}
</script>

<svelte:window bind:innerWidth={size} />

<div class={size >= 1440 ? 'scroll-container' : ''} style={divStyle}>
	<div>
		<ul>
			{#each table as item}
				<li>
					<a
						href="#{item.link}"
						on:click|preventDefault={() => {
							scrollToSection(item.link.substring(0));
							console.log(item.link);
						}}
					>
						{item.heading}
					</a>
				</li>
				{#if item.subheadings.length > 0}
					{#each item.subheadings as subheading}
						<ul>
							<li>
								<a
									href="#{subheading.link}"
									on:click|preventDefault={() => {
										scrollToSection(item.link.substring(0));
										console.log(subheading.link);
									}}
								>
									{subheading.heading}
								</a>
							</li>
						</ul>
					{/each}
				{/if}
			{/each}
		</ul>
	</div>
</div>

<style lang="scss">
	.scroll-container {
		height: 100vh;
		overflow-y: auto;
	}

	div {
		grid-area: 1 / 1 / 6 / 3;
		background-color: transparent;
		padding-inline: 1.5rem;

		a {
			color: rgba(245, 245, 245, 0.96);
		}
	}
</style>

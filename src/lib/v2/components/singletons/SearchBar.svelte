<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { BlogPost } from '$lib/utils/types';
	import { onMount, afterUpdate } from 'svelte';
	import { createPostsIndex, searchPostsIndex } from '$lib/utils/search';
	import Icon from '@iconify/svelte';

	export let searchTerm = '';
	export let posts: BlogPost[] = [];

	const dispatch = createEventDispatcher();
	let showInput = true;
	let searchInput: HTMLInputElement;

	interface SearchResult {
		slug: string;
		title: string;
		content: string[];
		tags: string[];
	}

	function handleInput(event: Event) {
		const input = event.target as HTMLInputElement;
		searchTerm = input.value;
		dispatch('search', searchTerm);
	}

	let search: 'loading' | 'ready' = 'loading';
	let results: SearchResult[] = [];

	onMount(async () => {
		createPostsIndex(posts);
		search = 'ready';
	});

	$: if (search === 'ready') {
		results = searchPostsIndex(searchTerm);
	}

	function clearSearch() {
		searchTerm = '';
		showInput = false;
	}

	afterUpdate(() => {
		if (showInput && searchInput) {
			searchInput.focus();
		}
	});
</script>

<div class="search-bar-container">
	<button class="icon-wrapper" on:click={() => (showInput = true)} class:show-input={showInput}>
		{#if !showInput}
			<Icon
				icon="heroicons:magnifying-glass-16-solid"
				width="28"
				height="28"
				style="color: #000000"
			/>
		{/if}
	</button>
	{#if showInput}
		<div class="input-wrapper">
			<Icon
				icon="heroicons:magnifying-glass-16-solid"
				width="28"
				height="28"
				style="color: #000000"
			/>
			<input
				type="text"
				placeholder="Search"
				bind:this={searchInput}
				bind:value={searchTerm}
				on:input={handleInput}
			/>
			{#if searchTerm}
				<button class="clear-button" on:click={clearSearch}>
					<Icon icon="material-symbols:close" width="24" height="24" style="color: #000000" />
				</button>
			{/if}
		</div>
	{:else}
		<div class="input-placeholder"></div>
	{/if}

	{#if search === 'ready' && searchTerm}
		<div class="dropdown">
			{#if results.length > 0}
				<ul>
					{#each results as result}
						<li>
							<a href="/v2/{result.slug}" on:click={clearSearch}>
								<div>
									<div>
										<!-- eslint-disable-next-line svelte/no-at-html-tags -->
										{@html result.title}
									</div>
									<div>
										<!-- eslint-disable-next-line svelte/no-at-html-tags -->
										<p>{@html result.content}</p>
									</div>
								</div>
								<div class="tag-container">
									{#each result.tags as tag}
										{#if tag.toLowerCase().includes(searchTerm.toLowerCase())}
											<!-- eslint-disable-next-line svelte/no-at-html-tags -->
											<p class="tag" style="color: black;">{@html tag}</p>
										{/if}
									{/each}
								</div>
							</a>
						</li>
					{/each}
				</ul>
			{:else}
				<p class="no-result">No results found for query "{searchTerm}"</p>
			{/if}
		</div>
	{/if}
</div>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';
	.search-bar-container {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		background-color: white;
	}

	.icon-wrapper {
		cursor: pointer;
		padding: 0.5rem;
		background-color: transparent;
		border: none;
	}

	.input-wrapper {
		display: flex;
		align-items: center;
		border-radius: 5px;
		padding: 0.5rem;
		border: none;
		background-color: transparent;
	}

	.input-wrapper input {
		border: none;
		outline: none;
		flex-grow: 1;
		padding: 0.1rem;
		font-size: 1rem;
		background-color: transparent;
	}

	.clear-button {
		border: none;
		background-color: transparent;
		cursor: pointer;
	}

	.input-placeholder {
		height: 3.2rem;
	}

	.dropdown {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		max-height: 300px;
		overflow-y: auto;
		background-color: hsl(220, 10%, 14%);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		border-radius: 0 0 4px 4px;
		z-index: 10;
		border-radius: 4px;
	}

	.dropdown ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.dropdown li {
		padding: 0.5rem;
		border-bottom: 1px solid hsl(220, 10%, 20%);
	}

	.dropdown li:last-child {
		border-bottom: none;
	}

	.dropdown a {
		text-decoration: none;
		color: #ffffff;
		display: block;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.dropdown a:hover {
		background-color: hsl(220, 10%, 20%);
	}

	.dropdown p {
		margin: 0;
		font-size: 0.875rem;
		color: #ffffff;
	}

	.tag-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tag {
		padding: 5px 15px;
		border-radius: 10px;
		font-weight: 500;
		font-size: 0.85rem;
		width: fit-content;
		background-color: var(--color--secondary-tint);
	}

	.no-result {
		color: #ffffff;
		padding: 0.5rem;
	}
</style>

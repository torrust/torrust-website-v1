<script lang="ts">
	export let id: string | undefined = undefined;
	export let title: string | undefined = undefined;
	export let description: string | undefined = undefined;

	export let align: 'left' | 'top' | 'right' = 'top';
</script>

<section {id} class="content-section {align}">
	<div class="title-area">
		{#if title || description}
			<div class="text">
				{#if title}
					<h2>
						{title}
					</h2>
				{/if}
				{#if description}
					<p>
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						{@html description}
					</p>
				{/if}
			</div>
		{/if}
		{#if $$slots['button']}
			<div class="button">
				<slot name="button" />
			</div>
		{/if}
	</div>
	<div class="content-area">
		<slot />
	</div>
</section>

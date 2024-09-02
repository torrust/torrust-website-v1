<script lang="ts">
	export let title;
</script>

<div class="container">
	<span>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html title.icon}
	</span>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<h2>{@html title.title}</h2>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<p>{@html title.para}</p>
</div>

<style lang="scss">
	.container {
		margin-top: 1.5rem;
		text-align: left;
		border: 1px solid rgba(245, 245, 245, 0.08);
		padding: 1.5rem;
		border-radius: 1.5rem;

		span {
			width: 24px;
			display: inline-block;
		}

		h2 {
			font-size: 20px;
			color: rgba(245, 245, 245, 0.96);
		}

		p {
			color: rgba(245, 245, 245, 0.8);
			font-size: 16px;
			padding-top: 1rem;
		}
	}
</style>

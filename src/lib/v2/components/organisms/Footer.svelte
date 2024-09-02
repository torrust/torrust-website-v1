<script lang="ts">
	import Nautilus from '$lib/v2/icons/nautilus.svelte';
</script>

<footer>
	<div>
		<Nautilus />
	</div>
	<div>
		<p>CC-BY-SA 4.0</p>
		<p>Nautilus Cyberneering S.L.U. 2024</p>
	</div>
</footer>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	footer {
		background-color: rgba(26, 26, 26, 1);
		color: rgba(245, 245, 245, 0.96);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 4rem 1.5rem;
		border-bottom: 16px solid rgba(255, 49, 0, 1);

		div {
			font-size: 16px;
			text-align: center;
		}
	}

	footer div:nth-of-type(2) p:first-of-type {
		margin-top: 1.5rem;
	}

	@include for-tablet-portrait-up {
		footer {
			flex-direction: row;
			justify-content: flex-start;
			gap: 1.5rem;
		}

		footer div:nth-of-type(2) p:first-of-type {
			margin-top: 0rem;
		}

		p {
			text-align: left;
		}
	}
</style>

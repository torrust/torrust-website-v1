<script lang="ts">
	export let imagePosition: 'before' | 'after' = 'after';
	export let id: string | undefined = undefined;
</script>

<section {id} class:image-before={imagePosition === 'before'}>
	<div class="info">
		<slot />
	</div>
	<div class="image">
		<slot name="image" />
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	section {
		position: relative;
		display: grid;
		grid-template-columns: 500px 250px;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 50px;

		@include for-phone-only {
			grid-template-columns: 1fr;
			justify-items: center;
			gap: 20px;
		}

		.info {
			order: 1;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 10px;
			:global(h2) {
				@include for-phone-only {
					text-align: center;
				}
			}

			:global(p) {
				@include for-phone-only {
					text-align: justify;
				}
			}

			@include for-phone-only {
				gap: 20px;
			}
		}

		.image {
			order: 2;
			width: 220px;
			height: 220px;
		}

		&.image-before {
			grid-template-columns: 250px 500px;
			@include for-phone-only {
				grid-template-columns: 1fr;
			}

			.info {
				order: 2;
			}
			.image {
				order: 1;
			}
		}
	}
</style>

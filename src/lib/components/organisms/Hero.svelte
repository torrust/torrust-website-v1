<script>
	import FeaturesIcon from '$lib/icons/features.svelte';
	import BlogIcon from '$lib/icons/blog.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
</script>

<section id="hero">
	<h1 class="hello">Modern and Private BitTorrent Index and Tracker</h1>
	<p class="intro">
		<!-- Built with Rust -->
		<!-- <span class="left">Open Source</span>
		<span class="right">and built with Rust.</span> -->
	</p>
	<div class="ctas">
		<Button href="#features">
			<FeaturesIcon slot="icon" />
			Features
		</Button>
		<Button color="secondary" href="#recent-posts">
			<BlogIcon slot="icon" />
			Get Started
		</Button>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 15px;
		position: relative;
		padding: 80px 0;

		@include for-phone-only {
			padding: 40px 0 50px;
		}

		.hello {
			text-align: center;
			max-width: 30ch;
		}

		.intro {
			font-weight: 400;
			font-size: 1.4rem;
			width: min(100%, 440px);
			display: flex;
			flex-direction: column;
			text-align: center;

			.left {
				text-align: left;
			}
			.right {
				text-align: right;
			}

			@include for-phone-only {
				display: none;
			}
		}

		.ctas {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			gap: 10px;
			width: 100%;
		}
	}
</style>

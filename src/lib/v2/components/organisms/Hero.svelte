<script lang="ts">
	import MiniLogo from '$lib/v2/icons/miniLogo.svelte';
</script>

<div class="container">
	<div class="svg-container">
		<div class="svg-content">
			<h1 class="hero-heading">Modern BitTorrent index and tracker</h1>
			<p class="hero-para">
				Torrust is an open source project that aims to provide you with the tools you need to host
				your own torrent indexes with ease.
			</p>
			<div class="details">
				<div class="details-card">
					<div class="details-info">
						<div>
							<MiniLogo />
							<p>index</p>
						</div>
						<p>v 3.0.0</p>
					</div>
					<p>
						The Index is a feature-rich torrent indexing site split between an API (backend) built
						with Rust, and our reference web app that consumes the API, built with Vue 3.
					</p>
					<div class="details-info">
						<button>Live demo</button>
						<button class="learn-btn">Learn more</button>
					</div>
				</div>
				<div class="details-card">
					<div class="details-info">
						<div>
							<MiniLogo />
							<p>tracker</p>
						</div>
						<p>v 3.0.0</p>
					</div>
					<p>
						A lightweight Rust-based BitTorrent tracker for efficient torrent serving to many peers
						with high performance, robustness, security, and community support.
					</p>
					<div class="details-info">
						<button>Live demo</button>
						<button class="learn-btn">Learn more</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.container {
		display: flex;
		flex-direction: column;
		text-align: center;
		background-color: rgba(255, 49, 0, 1);
		color: rgba(245, 245, 245, 0.96);
		padding: 0;
	}

	.svg-container {
		width: 100%;
		background-image: url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width='768' height='480' viewBox='0 0 768 480' fill='rgb(254, 74, 30)'><path d='M1005.2 123.646C1027.43 11.7464 953.881 -97.3506 843.527 -126.92L138.041 -315.954C40.5775 -342.07 -63.6767 -288.152 -91.5498 -191.16C-119.946 -92.2144 -61.7805 10.2473 37.2454 36.7812L306.002 108.794L55.7571 263.014C-106.71 363.089 -70.6249 608.894 113.559 658.246C170.006 673.371 230.427 665.068 280.715 635.209L900.796 267.959C954.822 237.428 993.036 184.656 1005.25 123.451L1005.2 123.646Z' fill='rgb(254, 74, 30)' fill-opacity='1'/></svg>");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-color: rgb(255, 50, 1);
		color: white;
		padding-inline: 1.5rem;

		@include for-tablet-portrait-up {
			.hero-heading,
			.hero-para {
				width: 640px;
				margin: 0 auto;
			}

			.hero-heading {
				padding-top: 4rem;
			}

			.hero-para {
				padding-top: 1.5rem;
			}
		}
	}

	.svg-content {
		text-align: center;

		h1 {
			font-size: 48px;
			margin-top: 4rem;
		}

		p {
			margin-top: 1.5rem;
		}
	}

	.details {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		text-align: left;
		align-items: stretch;
		margin-block: 4rem;

		div {
			flex: 1;
			border-radius: 1.5rem;
		}

		p {
			margin-top: 0.5rem;
		}

		@include for-tablet-portrait-up {
			flex-direction: row;
		}
	}

	.details-card {
		background-color: rgba(26, 26, 26, 0.48);
		padding: 1.5rem;
	}

	.details-card > p:nth-child(2) {
		margin-top: 28px;
	}

	.details-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-block: 1.5rem;
		flex-wrap: nowrap;

		div {
			display: flex;
			flex-direction: row;
			align-items: center;
		}

		div p {
			font-size: 32px;
		}

		button {
			border: 1px solid rgba(245, 245, 245, 0.96);
			border-radius: 1.5rem;
			background-color: rgba(255, 49, 0, 1);
			color: rgba(245, 245, 245, 0.96);
			padding: 12px 16px;
			white-space: nowrap;
		}

		.learn-btn {
			background-color: transparent;
			border: none;
			padding-left: 6px;
			text-decoration: underline;
			white-space: nowrap;
		}
	}
</style>

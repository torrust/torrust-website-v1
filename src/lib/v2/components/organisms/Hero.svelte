<div class="container">
	<div class="hero">
		<h1>Modern BitTorrent index and tracker</h1>
		<p>
			Torrust is an open source project that aims to provide you with the tools you need to host
			your own torrent indexes with ease.
		</p>
		<p>Torrust has two main components: the tracker and the index.</p>
	</div>
	<div class="details">
		<div>
			<h2>Torrust Index</h2>
			<p>The Index is a feature-rich torrent indexing site.</p>
			<p>
				It is split between an API (backend) built with <a href="https://www.rust-lang.org/">Rust</a
				>, and our reference web app that consumes the API, built with
				<a href="https://vuejs.org/">Vue 3</a>.
			</p>
		</div>
		<div>
			<h2>Torrust Tracker</h2>
			<p>
				The Tracker is a lightweight but incredible high-performance and feature-rich BitTorrent
				tracker written in <a href="https://www.rust-lang.org/">Rust</a>.
			</p>
			<p>
				It aims to provide a reliable and efficient solution for serving torrents to a vast number
				of peers while maintaining a high level of performance, robustness, extensibility, security,
				usability and with community driven support.
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.container {
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	.hero {
		padding-top: 4rem;

		p {
			margin-top: 1.5rem;
		}
	}

	.details {
		display: flex;
		flex-direction: column;
		margin-top: 2.5rem;
		gap: 0.5rem;
		text-align: left;

		div {
			flex: 1;
			background-color: rgba(245, 245, 245, 1);
			padding: 1.5rem;
		}

		p {
			margin-top: 0.5rem;
		}

		@include for-tablet-portrait-up {
			flex-direction: row;
		}
	}
</style>

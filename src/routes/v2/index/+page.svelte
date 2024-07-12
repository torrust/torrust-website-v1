<script lang="ts">
	import CardContainer from '$lib/v2/components/molecules/CardContainer.svelte';
	import Table from '$lib/v2/components/atoms/Table.svelte';

	const titleArr1 = [
		'High quality and modern Rust codebase',
		'Documentation generated from code comments',
		'Comprehensive suite of functional tests',
		'Good performance in busy conditions',
		'Native IPv4 and IPv6 support',
		'Persistent SQLite3 or MySQL databases',
		'Comprehensive API'
	];

	const titleArr2 = [
		'SQLite and MySQL support',
		'Rust (Axum) for the REST API',
		'Nuxt (VUE) for the frontend'
	];
</script>

<div class="container">
	<div class="features">
		<h1>Key Features</h1>
		<p>
			Sapien malesuada massa quam gravida ipsum iaculis nisl massa id. Sit tortor morbi in aenean
			lectus vel nulla dolor. Facilisis rhoncus viverra consequat dictum. Lobortis venenatis morbi
			et tortor feugiat.
		</p>
	</div>
	<div>
		<CardContainer titleArr={titleArr1} />
	</div>
	<div class="stack">
		<h2>Stack</h2>
		<p>
			Sapien malesuada massa quam gravida ipsum iaculis nisl massa id. Sit tortor morbi in aenean
			lectus vel nulla dolor. Facilisis rhoncus viverra consequat dictum. Lobortis venenatis morbi
			et tortor feugiat.
		</p>
		<div>
			<CardContainer titleArr={titleArr2} />
		</div>
	</div>
	<div>
		<h2>Comparison to other products</h2>
		<p>
			Sapien malesuada massa quam gravida ipsum iaculis nisl massa id. Sit tortor morbi in aenean
			lectus vel nulla dolor. Facilisis rhoncus viverra consequat dictum. Lobortis venenatis morbi
			et tortor feugiat.
		</p>
		<Table />
	</div>
	<div class="article">
		<div>
			<ul>
				<li>Installation</li>
				<ul>
					<li>Software requirements</li>
					<li>Build from sources (Rust)</li>
					<li>Docker</li>
				</ul>
				<li>Licenses</li>
				<li>Roadmap</li>
			</ul>
		</div>
		<div>
			<h2>Installation</h2>
			<p>
				Massa sit tempor massa blandit suscipit. Vestibulum in faucibus suspendisse enim at sit.
				Velit eget at cursus vel adipiscing. Tristique feugiat aliquam risus etiam. Auctor
				scelerisque dignissim facilisi faucibus.
			</p>
			<h2>Software requirements</h2>
			<ul>
				<li>SQLite 3 or MySQL 8.0.</li>
				<li>Rust Stable 1.68 if you compile from sources.</li>
				<li>
					A running Torrust Tracker. You can check the Tracker page for installation instructions.
				</li>
			</ul>
			<p>See https://docs.rs/torrust-index/latest/torrust_index/#prerequisites for details.</p>
			<p>You can install the Index from sources or using docker.</p>
			<h2>Build from sources (Rust)</h2>
			<p>
				Commodo ullamcorper blandit massa odio mauris odio ornare. Adipiscing imperdiet neque
				convallis nisl quisque quisque. Fringilla bibendum sit lectus tellus ut urna condimentum
				tristique. Nisi lectus malesuada consectetur morbi id fringilla et. Blandit mus senectus a
				elit nisl.
			</p>
			<p>
				Mauris ut dolor dolor nam. Dolor viverra tincidunt egestas ac vulputate. Phasellus sed massa
				facilisis rhoncus in. Ipsum fermentum est diam justo nibh quis. Libero rutrum quam donec
				tellus at et.
			</p>
			<p>
				Sed quis enim amet tempor aliquet eget. Phasellus sem vel tincidunt pellentesque non
				hendrerit cras magna. Volutpat convallis aliquet non lectus quam enim. Nunc ut augue urna
				vitae venenatis. Pellentesque congue blandit facilisi lectus ac libero.
			</p>
			<h2>Docker</h2>
			<p>
				Interdum augue mattis tortor ornare in. Feugiat phasellus integer massa mauris. Leo sit
				tempus leo eu tellus feugiat malesuada purus. Metus erat eleifend ante sed sem gravida nunc
				lobortis et. Arcu elit faucibus eget egestas aliquet vivamus consectetur.
			</p>
			<p>
				Laoreet id nisl pharetra sed ut massa dis interdum. Eget eu lacus fringilla sem dignissim
				cras ridiculus. Potenti cras diam nunc ultricies. Ut metus amet faucibus quam nibh mattis
				at. Cras in rhoncus ipsum ut id sit id.
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.features,
	.stack {
		text-align: center;
		margin-top: 4rem;

		p {
			margin-top: 1.4rem;
		}
	}

	.article {
		margin-top: 4rem;
	}

	@include for-tablet-landscape-up {
		.article {
			display: flex;
			gap: 1.5rem;
		}
	}
</style>

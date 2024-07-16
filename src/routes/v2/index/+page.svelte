<script lang="ts">
	import CardContainer from '$lib/v2/components/molecules/CardContainer.svelte';
	import Table from '$lib/v2/components/atoms/Table.svelte';
	import PostContainer from '$lib/v2/components/molecules/PostContainer.svelte';
	import PostTable from '$lib/v2/components/molecules/PostTable.svelte';
	import PostBody from '$lib/v2/components/molecules/PostBody.svelte';

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

	<PostContainer>
		<PostTable>
			<div>
				<ul>
					<li>
						<a href="#installation">Installation</a>
					</li>
					<ul>
						<li>
							<a href="#softwareRequirements">Software requirements</a>
						</li>
						<li>
							<a href="#buildSources">Build from sources (Rust)</a>
						</li>
						<li>
							<a href="#docker">Docker</a>
						</li>
					</ul>
					<li>
						<a href="licenses">Licenses</a>
					</li>
					<li>
						<a href="roadmap">Roadmap</a>
					</li>
				</ul>
			</div>
		</PostTable>
		<PostBody>
			<div>
				<h2 id="installation">Installation</h2>
				<p>
					Massa sit tempor massa blandit suscipit. Vestibulum in faucibus suspendisse enim at sit.
					Velit eget at cursus vel adipiscing. Tristique feugiat aliquam risus etiam. Auctor
					scelerisque dignissim facilisi faucibus.
				</p>

				<h3 id="softwareRequirements">Software requirements</h3>
				<ul>
					<li>SQLite 3 or MySQL 8.0.</li>
					<li>Rust Stable 1.68 if you compile from sources.</li>
					<li>
						A running Torrust Tracker. You can check the Tracker page for installation instructions.
					</li>
				</ul>
				<p>See https://docs.rs/torrust-index/latest/torrust_index/#prerequisites for details.</p>
				<p>You can install the Index from sources or using docker.</p>

				<h3 id="buildSources">Build from sources (Rust)</h3>
				<p>
					Commodo ullamcorper blandit massa odio mauris odio ornare. Adipiscing imperdiet neque
					convallis nisl quisque quisque. Fringilla bibendum sit lectus tellus ut urna condimentum
					tristique. Nisi lectus malesuada consectetur morbi id fringilla et. Blandit mus senectus a
					elit nisl.
				</p>
				<p>
					Mauris ut dolor dolor nam. Dolor viverra tincidunt egestas ac vulputate. Phasellus sed
					massa facilisis rhoncus in. Ipsum fermentum est diam justo nibh quis. Libero rutrum quam
					donec tellus at et.
				</p>
				<p>
					Sed quis enim amet tempor aliquet eget. Phasellus sem vel tincidunt pellentesque non
					hendrerit cras magna. Volutpat convallis aliquet non lectus quam enim. Nunc ut augue urna
					vitae venenatis. Pellentesque congue blandit facilisi lectus ac libero.
				</p>

				<h3 id="docker">Docker</h3>
				<p>
					Interdum augue mattis tortor ornare in. Feugiat phasellus integer massa mauris. Leo sit
					tempus leo eu tellus feugiat malesuada purus. Metus erat eleifend ante sed sem gravida
					nunc lobortis et. Arcu elit faucibus eget egestas aliquet vivamus consectetur.
				</p>
				<p>
					Laoreet id nisl pharetra sed ut massa dis interdum. Eget eu lacus fringilla sem dignissim
					cras ridiculus. Potenti cras diam nunc ultricies. Ut metus amet faucibus quam nibh mattis
					at. Cras in rhoncus ipsum ut id sit id.
				</p>
			</div>
		</PostBody>
	</PostContainer>
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
</style>

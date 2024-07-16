<script lang="ts">
	import CardContainer from '$lib/v2/components/molecules/CardContainer.svelte';
	import Table from '$lib/v2/components/atoms/Table.svelte';
	import PostContainer from '$lib/v2/components/molecules/PostContainer.svelte';
	import PostTable from '$lib/v2/components/molecules/PostTable.svelte';
	import PostBody from '$lib/v2/components/molecules/PostBody.svelte';
	import Accordion from '$lib/v2/components/molecules/Accordion.svelte';

	import { trackerTitleArr1, trackerTitleArr2 } from '$lib/v2/constants/constants';
</script>

<div class="container">
	<div class="inner-container">
		<h1>Key Features</h1>
		<p>
			Sapien malesuada massa quam gravida ipsum iaculis nisl massa id. Sit tortor morbi in aenean
			lectus vel nulla dolor. Facilisis rhoncus viverra consequat dictum. Lobortis venenatis morbi
			et tortor feugiat.
		</p>
		<div>
			<CardContainer titleArr={trackerTitleArr1} />
		</div>
	</div>
	<div class="inner-container">
		<h2>Stack</h2>
		<p>
			Sapien malesuada massa quam gravida ipsum iaculis nisl massa id. Sit tortor morbi in aenean
			lectus vel nulla dolor. Facilisis rhoncus viverra consequat dictum. Lobortis venenatis morbi
			et tortor feugiat.
		</p>
		<div>
			<CardContainer titleArr={trackerTitleArr2} />
		</div>
	</div>
	<div class="inner-container">
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
						<a href="#performance">Performance</a>
					</li>
					<li>
						<a href="#installation">Installation</a>
						<Accordion>
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
						</Accordion>
					</li>
					<li>
						<a href="#licences">Licences</a>
						<Accordion>
							<ul>
								<li>
									<a href="#copyright">Copyright (c) 2023 The Torrust Developers.</a>
								</li>
								<li>
									<a href="#legacy">Legacy Exception</a>
								</li>
							</ul>
						</Accordion>
					</li>
					<li>
						<a href="#roadmap">Roadmap</a>
						<Accordion>
							<ul>
								<li>
									<a href="#core">Core</a>
								</li>
								<li>
									<a href="#persistence">Persistence</a>
								</li>
								<li>
									<a href="#performance">Performance</a>
								</li>
								<li>
									<a href="#protocols">Protocols</a>
								</li>
								<li>
									<a href="#integrations">Integrations</a>
								</li>
								<li>
									<a href="#tils">Utils</a>
								</li>
								<li>
									<a href="#others">Others</a>
								</li>
							</ul>
						</Accordion>
					</li>
				</ul>
			</div>
		</PostTable>

		<PostBody>
			<div class="article">
				<h2 id="performance">Performance</h2>
				<p>
					It's important to outline the compromises made during the Torrust Tracker's development.
					Our aim was to create a tracker that is not only quick and reliable but also feature-rich
					and maintainable. Often, these two sets of goals conflict with each other. We acknowledge
					that achieving the highest speed comes with certain limitations.
				</p>
				<p>Generally, our approach has been:</p>
				<p>
					<em>
						“Accepting a minor reduction in speed for significant gains highlights our dedication to
						offering a tracker that excels in features and user-friendliness, not just in speed.”
					</em>
				</p>
				<p>
					We are using the aquatic <a
						href="https://github.com/greatest-ape/aquatic/tree/master/crates/bencher">"bencher"</a
					> tool for benchmarking.
				</p>
				<p>
					You can also read our blog article about <a
						href="https://torrust.com/benchmarking-the-torrust-bittorrent-tracker"
						>"benchmarking for the tracker"</a
					>.
				</p>

				<h2 id="installation">Installation</h2>
				<p>
					Massa sit tempor massa blandit suscipit. Vestibulum in faucibus suspendisse enim at sit.
					Velit eget at cursus vel adipiscing. Tristique feugiat aliquam risus etiam. Auctor
					scelerisque dignissim facilisi faucibus.
				</p>

				<h2 id="softwareRequirements">Software requirements</h2>
				<ul>
					<li>Optional: SQLite 3 or MySQL 8.0. Only if persistence is enabled.</li>
					<li>Rust Stable 1.68 if you compile from sources.</li>
				</ul>
				<p>
					See <a href="https://docs.rs/torrust-index/latest/torrust_index/#prerequisites">here</a> for
					details.
				</p>
				<p>You can install the Index from sources or using docker.</p>

				<h2 id="buildSources">Build from sources (Rust)</h2>
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

				<h2 id="docker">Docker</h2>
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

				<h2 id="licences">Licences</h2>
				<h3 id="copyright">Copyright (c) 2023 The Torrust Developers.</h3>
				<p>
					This program is free software: you can redistribute it and/or modify it under the terms of
					the GNU Affero General Public License as published by the Free Software Foundation,
					version 3.
				</p>
				<p>
					This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
					without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
					See the GNU Affero General Public License for more details.
				</p>
				<p>
					You should have received a copy of the GNU Affero General Public License along with this
					program. If not, see https://www.gnu.org/licenses/. Some files include explicit copyright
					notices and/or license notices.
				</p>

				<h3 id="legacy">Legacy Exception</h3>
				<p>
					For prosperity, versions of Torrust Tracker that are older than five years are
					automatically granted the MIT-0 license in addition to the existing AGPL-3.0-only license.
				</p>

				<h2 id="roadmap">Roadmap:</h2>
				<h3>Future Features:</h3>

				<h3 id="core">Core</h3>
				<ul>
					<li>
						New option `want_ip_from_query_string`. See <a
							href="https://github.com/torrust/torrust-tracker/discussions/532#issuecomment-1836642956"
							>here</a
						>.
					</li>
					<li>
						Permanent keys. See <a href="https://github.com/torrust/torrust-tracker/discussions/244"
							>here</a
						>.
					</li>
					<li>
						Peer and torrents specific statistics. See <a
							href="https://github.com/torrust/torrust-tracker/discussions/139">here</a
						>.
					</li>
				</ul>

				<h3 id="persistence">Persistence</h3>
				<ul>
					<li>Support other databases</li>
					<li>Support for PostgreSQL</li>
				</ul>

				<h3 id="performance">Performance</h3>
				<ul>
					<li>Concurrent write torrents repository (DashMap)</li>
				</ul>

				<h3 id="protocols">Protocols</h3>
				<ul>
					<li>WebTorrent</li>
				</ul>

				<h3 id="integrations">Integrations</h3>
				<ul>
					<li>Monitoring (Prometheus)</li>
				</ul>

				<h3 id="utils">Utils</h3>
				<ul>
					<li>Tracker client</li>
					<li>Tracker checker</li>
				</ul>

				<h3 id="others">Others</h3>
				<ul>
					<li>Support Windows</li>
					<li>Docker images for other architectures</li>
				</ul>
				<li>
					Roadmap:
					<a
						href="https://github.com/orgs/torrust/projects/10/views/6
"
					>
						https://github.com/orgs/torrust/projects/10/views/6
					</a>
				</li>
			</div>
		</PostBody>
	</PostContainer>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.inner-container {
		text-align: center;
		margin-top: 4rem;

		p {
			margin-top: 1.4rem;
		}
	}

	.article {
		h2,
		h3 {
			margin-top: 1rem;
		}

		p {
			margin-top: 1rem;
		}
	}
</style>

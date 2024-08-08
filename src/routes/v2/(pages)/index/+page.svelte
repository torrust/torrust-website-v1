<script lang="ts">
	import CardContainer from '$lib/v2/components/molecules/CardContainer.svelte';
	import Table from '$lib/v2/components/atoms/Table.svelte';
	import PostContainer from '$lib/v2/components/molecules/PostContainer.svelte';
	import PostTable from '$lib/v2/components/molecules/PostTable.svelte';
	import PostBody from '$lib/v2/components/molecules/PostBody.svelte';
	import Accordion from '$lib/v2/components/molecules/Accordion.svelte';

	import {
		indexTitleArr1,
		indexTitleArr2,
		indexTableHeadings,
		indexTableData
	} from '$lib/v2/constants/constants';
</script>

<div class="container">
	<div class="inner-container">
		<h1>Key Features</h1>
		<p>
			Sapien malesuada massa quam gravida ipsum iaculis nisl massa id. Sit tortor morbi in aenean
			lectus vel nulla dolor. Facilisis rhoncus viverra consequat dictum. Lobortis venenatis morbi
			et tortor feugiat.
		</p>
	</div>
	<div>
		<CardContainer titleArr={indexTitleArr1} />
	</div>
	<div class="inner-container">
		<h2>Stack</h2>
		<p>
			Sapien malesuada massa quam gravida ipsum iaculis nisl massa id. Sit tortor morbi in aenean
			lectus vel nulla dolor. Facilisis rhoncus viverra consequat dictum. Lobortis venenatis morbi
			et tortor feugiat.
		</p>
		<div>
			<CardContainer titleArr={indexTitleArr2} />
		</div>
	</div>
	<div class="inner-container">
		<h2>Comparison to other products</h2>
		<p>
			Sapien malesuada massa quam gravida ipsum iaculis nisl massa id. Sit tortor morbi in aenean
			lectus vel nulla dolor. Facilisis rhoncus viverra consequat dictum. Lobortis venenatis morbi
			et tortor feugiat.
		</p>
		<Table tableHeading={indexTableHeadings} tableData={indexTableData} />
	</div>

	<PostContainer>
		<PostTable>
			<div>
				<ul>
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
						<a href="#licences">Licenses</a>
					</li>
					<li>
						<a href="#roadmap">Roadmap</a>
						<Accordion>
							<ul>
								<li>
									<a href="#futureFeatures">Future Features</a>
								</li>
							</ul>
						</Accordion>
					</li>
				</ul>
			</div>
		</PostTable>
		<PostBody>
			<div class="article">
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

				<h2 id="licences">Licences</h2>
				<h3>Copyright (c) 2023 The Torrust Developers.</h3>
				<p>
					This program is free software: you can redistribute it and/or modify it under the terms of
					the <a
						href="https://github.com/torrust/torrust-index/blob/develop/docs/licenses/LICENSE-AGPL_3_0"
						>GNU Affero General Public License</a
					>
					as published by the <a href="https://www.fsf.org/">Free Software Foundation</a>, version
					3.
				</p>
				<p>
					This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
					without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
					See the <a
						href="https://github.com/torrust/torrust-index/blob/develop/docs/licenses/LICENSE-AGPL_3_0"
						>GNU Affero General Public License</a
					> for more details.
				</p>
				<p>
					You should have received a copy of the GNU Affero General Public License along with this
					program. If not, see <a href="https://www.gnu.org/licenses/"
						>https://www.gnu.org/licenses/</a
					>. Some files include explicit copyright notices and/or license notices.
				</p>

				<h3>Legacy Exception</h3>
				<p>
					For prosperity, versions of Torrust Tracker that are older than five years are
					automatically granted the <a
						href="https://github.com/torrust/torrust-index/blob/develop/docs/licenses/LICENSE-MIT_0"
						>MIT-0</a
					>
					license in addition to the existing
					<a
						href="https://github.com/torrust/torrust-index/blob/develop/docs/licenses/LICENSE-AGPL_3_0"
						>AGPL-3.0-only</a
					> license.
				</p>

				<h2 id="roadmap">Roadmap</h2>
				<h3 id="futureFeatures">Future Features:</h3>
				<ul>
					<li>Persistence:</li>
					<ul>
						<li>Support other databases</li>
					</ul>
					<li>Integrations:</li>
					<ul>
						<li>Webhooks</li>
					</ul>
					<li>Administration:</li>
					<ul>
						<li>Improve categories and tag management</li>
						<li>User management: list, ban users</li>
						<li>Full-private mode</li>
						<li>User statistics</li>
					</ul>
					<li>Users:</li>
					<ul>
						<li>Reset or change password</li>
						<li>User profile</li>
						<li>Invitation system</li>
						<li>User moderation</li>
						<li>Add torrent providing only infohash</li>
						<li>
							Improve search: Import Torrent Index Entries as Documents and Provide Real Searching
							Capabilites
						</li>
					</ul>
					<li>Torrents:</li>
					<ul>
						<li>Change source field</li>
						<li>Change creator field</li>
						<li>Implement BEP 19: WebSeed - HTTP/FTP Seeding (GetRight style)</li>
						<li>Implement BEP 32: BitTorrent DHT Extensions for IPv6</li>
					</ul>
					<li>Others:</li>
					<ul>
						<li>Multi-tracker</li>
						<li>Multi-language</li>
					</ul>
					<li>
						<a href="https://github.com/orgs/torrust/projects/10/views/6">
							https://github.com/orgs/torrust/projects/10/views/6
						</a>
					</li>
				</ul>
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

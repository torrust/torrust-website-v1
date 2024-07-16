<script lang="ts">
	import PostContainer from '$lib/v2/components/molecules/PostContainer.svelte';
	import PostTable from '$lib/v2/components/molecules/PostTable.svelte';
	import PostBody from '$lib/v2/components/molecules/PostBody.svelte';
	import Accordion from '$lib/v2/components/molecules/Accordion.svelte';
</script>

<div class="container">
	<PostContainer>
		<PostTable>
			<div>
				<ul>
					<li>
						<a href="#contribute">Why Contribute?</a>
						<Accordion>
							<ul>
								<li>
									<a href="#embraceRust">Embrace Rust: a language of choice</a>
								</li>
								<li>
									<a href="#codeQuality">Code quality above all</a>
								</li>
								<li>
									<a href="#welcomingCommunity">A welcoming community for newcomers</a>
								</li>
								<li>
									<a href="#influenceDirection">Influence the project’s direction</a>
								</li>
								<li>
									<a href="#joinUs">Join us today</a>
								</li>
							</ul>
						</Accordion>
					</li>
					<li>How to contribute?</li>
					<li>
						<a href="#knowledgeBase">Knowledge Base</a>
						<Accordion>
							<ul>
								<li>
									<a href="#whatAreTorrents">What are Torrents?</a>
								</li>
								<li>
									<a href="#whatIsTracker">What Is a Tracker</a>
								</li>
								<li>
									<a href="#whatIsTorrentIndex">What Is a Torrent Index</a>
								</li>
								<li>
									<a href="#listOfProjects">List of projects using BitTorrent</a>
								</li>
							</ul>
						</Accordion>
					</li>
					<li>Resources</li>
				</ul>
			</div>
		</PostTable>

		<PostBody>
			<div class="article">
				<h2 id="contribute">Why Contribute?</h2>
				<p>
					Short intro. Eu proin ultricies nunc turpis purus dui ultrices mattis. Amet platea fames
					orci adipiscing pharetra auctor eget arcu adipiscing. Aliquam ipsum mattis ipsum malesuada
					aliquet ipsum. Convallis tortor rhoncus cursus porttitor tellus sed.
				</p>
				<ul class="list">
					<li>Rust</li>
					<li>Good documentation</li>
					<li>Quality code</li>
					<li>High test coverage</li>
					<li>Sponsored</li>
					<li>Long-term projection</li>
					<li>Full-time employment opportunities</li>
					<li>Link</li>
				</ul>

				<h3 id="embraceRust">Embrace Rust: a language of choice</h3>
				<p>
					Why Rust? We've chosen Rust for its unparalleled safety, performance, and reliability. If
					you share our enthusiasm for writing code in Rust, you'll find a like-minded community
					here. Our project offers a playground for Rust aficionados to push the boundaries of
					what's possible.
				</p>

				<h3 id="codeQuality">Code quality above all</h3>
				<p>
					Our Commitment to Excellence: For us, quality trumps quantity every time. We're dedicated
					to building on a robust foundation, preferring to perfect our existing features over
					piling on new ones. Every change undergoes meticulous review, and we're perpetually
					refining and refactoring to elevate our code.
				</p>
				<p>
					A Testament to Stability: With an extensive suite of automated tests, we ensure our
					software remains stable and regression-free for the long haul. Your contributions will
					uphold and extend this legacy of quality.
				</p>

				<h3 id="welcomingCommunity">A welcoming community for newcomers</h3>
				<p>
					Kickstart Your Contribution: Never contributed to an open-source project before? No
					worries! We pride ourselves on being exceptionally welcoming to newcomers. You'll find
					comprehensive documentation, thorough explanations of complex concepts, and a supportive
					community ready to guide you.
				</p>
				<p>
					Learn, Grow, and Teach: Our project is a hub for continuous learning and knowledge
					sharing. Whether you're here to improve your Rust skills, understand open-source
					development, or contribute your expertise, there's a place for you.
				</p>

				<h3 id="influenceDirection">Influence the project’s direction</h3>
				<p>
					Your Voice Matters: Have ideas or specific needs for an index or tracker? As a
					community-driven project, we're all ears. Your contributions and insights can
					significantly influence the project's roadmap, ensuring it evolves in ways that benefit
					everyone involved.
				</p>
				<p>
					Shape the Future Together: Joining our project means you're not just a contributor; you're
					a key player in shaping its future. Whether it's through code, documentation, or sharing
					insights, your input is invaluable
				</p>

				<h3 id="joinUs">Join us today</h3>
				<p>
					By contributing to our project, you're not just writing code; you're joining a movement
					dedicated to creating something truly outstanding with Rust. Together, we can build
					software that's not only powerful and efficient but also accessible and enjoyable for
					everyone in the open-source community.
				</p>
				<p>
					Feel free to customize and expand upon these points to align with your project's ethos and
					goals. This framework is designed to appeal to potential contributors' motivations and
					showcase the unique benefits of joining your project.
				</p>

				<h2 id="knowledgeBase">Knowledge Base</h2>
				<h3 id="whatAreTorrents">What Are Torrents</h3>
				<p>
					A <strong>torrent</strong> is a small file that contains metadata about the files and folders
					to be shared and information about the network of computers that share these files. It's used
					with BitTorrent protocol, which enables fast and efficient distribution of large files over
					the internet by allowing users to connect directly to each other to download and upload portions
					of the file simultaneously. This decentralized method of sharing files reduces the load on
					any single server and can lead to faster download speeds for the users involved. Torrents themselves
					do not contain the actual content being shared, only the information needed to find and download
					the content from peers in the BitTorrent network.
				</p>

				<h3 id="whatIsTracker">What Is a Tracker</h3>
				<p>
					A <strong>BitTorrent tracker</strong> is a server that facilitates communication between peers
					using the BitTorrent protocol. When you open a torrent file with a BitTorrent client, the tracker
					is contacted to help find other users who are sharing the same files. It does not store or
					distribute the content itself but keeps track of the IP addresses of the peers in the swarm
					(the group of computers involved in sharing a particular file). The tracker responds to requests
					from clients with a list of peers, allowing them to connect directly to each other to start
					downloading and uploading pieces of the file. Essentially, the tracker acts as a central hub
					that enables peers to find each other, significantly improving the efficiency and speed of
					file distribution.
				</p>

				<h3 id="whatIsTorrentIndex">What Is a Torrent Index</h3>
				<p>
					A <strong>BitTorrent index</strong> site is a website that lists torrent files for download.
					These sites serve as search engines or directories for finding specific files or content within
					the BitTorrent network. Users can search for and download torrent files based on various categories
					such as movies, music, software, games, and more. Each torrent file listed on an index site
					contains metadata about the content it represents, such as the file name, size, and the address
					of the tracker managing the distribution of the content.
				</p>
				<p>
					BitTorrent index sites do not host the content files themselves; instead, they provide the
					torrent files which users can then open with their BitTorrent clients to download the
					actual content from other peers in the network. These sites play a crucial role in the
					BitTorrent ecosystem by making it easier for users to find and access content distributed
					via BitTorrent.
				</p>

				<h3 id="listOfProjects">List of projects using BitTorrent</h3>
				<ul>
					<li>WebTorrent:</li>
					<ul>
						<li>
							<a href="https://webtorrent.io/faq">https://webtorrent.io/faq</a>
						</li>
					</ul>
					<li>Others:</li>
					<ul>
						<li>
							<a href="https://github.com/urbanguacamole/torrent-paradise">torrent-paradise</a>
						</li>
						<li>
							<a href="https://academictorrents.com/">https://academictorrents.com/</a>
						</li>
						<li>
							<a href="https://github.com/bigscience-workshop/petals"
								>https://github.com/bigscience-workshop/petals</a
							>
						</li>
					</ul>
				</ul>
			</div>
		</PostBody>
	</PostContainer>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.list {
		list-style-type: none;
	}

	@include for-tablet-portrait-up {
		.list {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 10px;
			list-style-type: none;
			padding: 0;
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

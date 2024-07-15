<script lang="ts">
	import PostContainer from '$lib/v2/components/molecules/PostContainer.svelte';
	import PostTable from '$lib/v2/components/molecules/PostTable.svelte';
	import PostBody from '$lib/v2/components/molecules/PostBody.svelte';

	import { writable } from 'svelte/store';

	// Initialize a writable store to manage visibility state
	let showSecondUl = writable(false);

	// Function to toggle the visibility of the second <ul>
	function toggleSecondUl() {
		showSecondUl.update((current) => !current);
	}
</script>

<div class="container">
	<PostContainer>
		<PostTable>
			<div>
				<ul>
					<li>
						<a href="#bitTorrent">Why BitTorrent?</a>
						<button on:click={toggleSecondUl}>
							{#if $showSecondUl}
								-
							{:else}
								+
							{/if}
						</button>
					</li>
					{#if $showSecondUl}
						<ul>
							<li>
								<a href="#bitTorrentProtocol">Why does the BitTorrent protocol still matter? </a>
							</li>
							<li>
								<a href="#efficiency">Efficiency and scalability </a>
							</li>
							<li>
								<a href="#currentUses">Current use cases </a>
							</li>
							<li>
								<a href="#futureUses">Future use cases </a>
							</li>
							<li>
								<a href="#btIpfs">BT vs. IPFS </a>
							</li>
							<li>
								<a href="#btCs">BT vs. centralized solutions </a>
							</li>
							<li>
								<a href="#conclusion">Conclusion </a>
							</li>
						</ul>
					{/if}
					<li>
						<a href="#torrust">Why Torrust?</a>
					</li>
					<li>
						<a href="#team">The team?</a>
					</li>
					<li>
						<a href="#collaborators">Collaborators?</a>
					</li>
					<li><a href="#sponsors">Sponsors?</a></li>
				</ul>
			</div>
		</PostTable>

		<PostBody>
			<div>
				<h2 id="bitTorrent">Why BitTorrent?</h2>
				<p>
					Short intro. Eu proin ultricies nunc turpis purus dui ultrices mattis. Amet platea fames
					orci adipiscing pharetra auctor eget arcu adipiscing. Aliquam ipsum mattis ipsum malesuada
					aliquet ipsum. Convallis tortor rhoncus cursus porttitor tellus sed.
				</p>

				<h3 id="bitTorrentProtocol">Why does the BitTorrent protocol still matter?</h3>
				<p>
					In the rapidly evolving landscape of digital technology, the BitTorrent protocol remains a
					cornerstone for distributed file sharing. Despite the emergence of newer technologies like
					the InterPlanetary File System (IPFS) and centralized cloud storage solutions such as
					Dropbox, Google Drive, and Amazon S3, BitTorrent continues to hold significant relevance.
					Here's why maintaining and enhancing BitTorrent is not just worthwhile but essential.
				</p>

				<h3 id="efficiency">Efficiency and scalability</h3>
				<p>
					BitTorrent excels in efficiently distributing large files across the internet. By allowing
					users to download and upload pieces of files simultaneously from multiple sources, it
					minimizes server load and avoids bottlenecks. This peer-to-peer approach scales naturally
					with the number of users, making it exceptionally effective for sharing large datasets,
					media files, and software distributions.
				</p>

				<h3 id="currentUses">Current use cases</h3>
				<p>
					Media Distribution: Independent creators and open-source projects often use BitTorrent to
					distribute content without incurring high bandwidth costs.
				</p>
				<p>
					Software Updates: Some companies distribute updates and patches for their software via
					BitTorrent to reduce the strain on their servers.
				</p>
				<p>
					Data Archiving: Academic and research institutions use BitTorrent for archiving and
					sharing large datasets and publications.
				</p>

				<h3 id="futureUses">Future use cases</h3>
				<p>
					Decentralized Internet: BitTorrent can play a crucial role in the development of a
					decentralized web, where content is distributed and accessed without centralized control.
				</p>
				<p>
					Blockchain and Cryptocurrency: Integrating BitTorrent with blockchain technology could
					lead to innovative content distribution models, rewarding content creators and sharers
					directly.
				</p>
				<p>
					Emergency Communications: In scenarios where traditional communication infrastructures
					fail, BitTorrent can facilitate the sharing of information and emergency updates.
				</p>

				<h3 id="btIpfs">BT vs. IPFS</h3>
				<p>
					While both BitTorrent and IPFS facilitate decentralized file sharing, they operate
					differently. IPFS addresses content by hashes, ensuring that users access the exact
					content regardless of its location. This approach is ideal for immutable content
					distribution but might not be as efficient as BitTorrent for mutable or dynamically
					updated content.
				</p>

				<h3 id="btCs">BT vs. centralized solutions</h3>
				<p>
					Centralized cloud storage services like Dropbox, Google Drive, and Amazon S3 offer
					convenience and integration with various applications. However, they rely on central
					servers, which can become points of failure or targets for censorship. BitTorrent's
					decentralized nature inherently protects against these issues, offering resilience and
					freedom from control by any single entity.
				</p>

				<h3 id="conclusion">Conclusion</h3>
				<p>
					The continued relevance of BitTorrent lies in its unparalleled efficiency, scalability,
					and its foundation for a more decentralized internet. While newer technologies like IPFS
					offer compelling advancements, BitTorrent's unique strengths in supporting dynamic content
					and its established infrastructure make it irreplaceable. As digital content continues to
					grow in size and volume, the importance of efficient, decentralized distribution networks
					becomes ever more critical. Investing in the maintenance and improvement of BitTorrent is
					not just about preserving a technology; it's about sustaining a vision for an open,
					scalable, and resilient internet.
				</p>
			</div>
		</PostBody>
	</PostContainer>
</div>

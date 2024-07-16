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
						<a href="#bitTorrent">Why BitTorrent?</a>
						<Accordion>
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
						</Accordion>
					</li>
					<li>
						<a href="#whyTorrust">Why Torrust?</a>
						<Accordion>
							<ul>
								<li>
									<a href="#performanceEfficiency">Performance & Efficiency</a>
								</li>
								<li>
									<a href="#securityReliability">Security & Reliability</a>
								</li>
								<li>
									<a href="#userExperience">User Experience & Accessibility</a>
								</li>
								<li>
									<a href="#futureProofing">Future-Proofing and Innovation</a>
								</li>
								<li>
									<a href="#integration">Integration & Interoperability</a>
								</li>
							</ul>
						</Accordion>
					</li>
					<li>The team?</li>
					<li>Collaborators?</li>
					<li>
						<a href="#sponsors">Sponsors</a>
					</li>
				</ul>
			</div>
		</PostTable>

		<PostBody>
			<div class="article">
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

				<h2 id="whyTorrust">Why Torrust</h2>
				<p>
					Developing new tools for BitTorrent in modern programming languages like Rust, along with
					more contemporary interfaces, is essential for several reasons. These developments not
					only align with current technological trends but also address evolving user needs and
					security concerns. Here are some key points illustrating the necessity of these
					advancements:
				</p>

				<h3 id="performanceEfficiency">Performance & Efficiency</h3>
				<ul>
					<li>
						<strong>High Performance:</strong> Rust offers exceptional speed and efficiency, which can
						significantly improve the performance of BitTorrent tools. Its focus on concurrency and memory
						safety allows for the development of high-speed data transmission tools without the common
						pitfalls of memory leaks and crashes.
					</li>
					<li>
						<strong>Resource Optimisation:</strong> Modern devices vary widely in their capabilities.
						Developing new tools in Rust can help optimize resource use, making BitTorrent more accessible
						on a wider range of devices, from high-end servers to low-powered IoT devices.
					</li>
				</ul>

				<h3 id="securityReliability">Security & Reliability</h3>
				<ul>
					<li>
						<strong>Memory Safety: </strong> Rust's emphasis on memory safety without a garbage collector
						minimizes common security vulnerabilities found in other languages, such as buffer overflows
						and dangling pointers. This is crucial for peer-to-peer networks that are inherently exposed
						to data from untrusted sources.
					</li>
					<li>
						<strong>Dependability: </strong> By leveraging Rust's type system and ownership model, developers
						can build more reliable applications that are less prone to crashes and unexpected behavior,
						enhancing the user experience.
					</li>
				</ul>

				<h3 id="userExperience">User Experience & Accessibility</h3>
				<ul>
					<li>
						<strong>Modern Interfaces: </strong> Updating BitTorrent clients with modern, user-friendly
						interfaces can make the technology more accessible to a broader audience, encouraging adoption.
						Simplifying the user experience without compromising on advanced features appeals to both
						novice and experienced users.
					</li>
					<li>
						<strong>Cross-Platform Compatibility: </strong>Developing with modern frameworks and
						languages supports better cross-platform compatibility, ensuring a consistent and
						functional experience across various operating systems and devices.
					</li>
				</ul>

				<h3 id="futureProofing">Future-Proofing & Innovation</h3>
				<ul>
					<li>
						<strong>Adapting to Technological Advances: </strong> The digital landscape is constantly
						evolving. Developing new tools with modern languages ensures compatibility with the latest
						technologies and standards, making BitTorrent more adaptable and future-proof.
					</li>
					<li>
						<strong>Encouraging Innovation: </strong>By embracing modern programming paradigms and
						languages, the BitTorrent ecosystem can stimulate innovation, leading to the development
						of new features, improved efficiency, and potentially new use cases for distributed file
						sharing.
					</li>
				</ul>

				<h3 id="integration">Integration & Interoperability</h3>
				<ul>
					<li>
						<strong>Blockchain & Beyond: </strong>The integration of BitTorrent with emerging
						technologies like blockchain and decentralized finance (DeFi) requires a modern approach
						to ensure seamless interoperability and to unlock new functionalities and business
						models.
					</li>
					<li>
						<strong>Ecosystem Synergy: </strong>Developing tools in languages like Rust promotes
						synergy within the ecosystem, as Rust is increasingly used in networked applications,
						cryptocurrency platforms, and other areas relevant to BitTorrent's growth and
						integration.
					</li>
				</ul>
				<p>
					In conclusion, the development of new BitTorrent tools in Rust and the focus on modern
					interfaces is not merely a pursuit of technological modernization. It's a strategic move
					to enhance performance, security, user experience, and future readiness, ensuring that
					BitTorrent remains a vital part of the internet's infrastructure.
				</p>

				<h2 id="sponsors">Sponsors</h2>
				<p>
					Nautilus Cyberneering is dedicated to creating new Open Source Ecosystems. They define
					Open Source Ecosystems as vibrant communities of users and creators who collaboratively
					develop open source software that is secure, respectful, and adds value for future
					generations. This approach is what they term Cyberneering. With a focus on software and
					hardware development within these ecosystems, their aim is to produce technology that
					adheres to these principles.
				</p>
				<p>
					Their activities encompass developing open source software with an emphasis on security,
					community engagement, and long-term value. This includes a commitment to software that
					respects user privacy and is designed with future generations in mind. Nautilus
					Cyberneering's approach combines innovation in the cybernetic field with open source
					philosophy, fostering environments where collaborative development can thrive .
				</p>
			</div>
		</PostBody>
	</PostContainer>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

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

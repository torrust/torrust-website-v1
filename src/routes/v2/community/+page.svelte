<script lang="ts">
	import PostContainer from '$lib/v2/components/molecules/PostContainer.svelte';
	import PostTable from '$lib/v2/components/molecules/PostTable.svelte';
	import PostBody from '$lib/v2/components/molecules/PostBody.svelte';
</script>

<div class="container">
	<PostContainer>
		<PostTable>
			<div>
				<ul>
					<li>
						<a href="#contribute">Why Contribute?</a>
					</li>
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
					<li>
						<a href="howContribute">How to contribute?</a>
					</li>
					<li>
						<a href="knowledgeBase">Knowledge base</a>
					</li>
					<li>
						<a href="resources">Resources</a>
					</li>
				</ul>
			</div>
		</PostTable>

		<PostBody>
			<div>
				<h2 id="contribute">Why Contribute?</h2>
				<p>
					Short intro. Eu proin ultricies nunc turpis purus dui ultrices mattis. Amet platea fames
					orci adipiscing pharetra auctor eget arcu adipiscing. Aliquam ipsum mattis ipsum malesuada
					aliquet ipsum. Convallis tortor rhoncus cursus porttitor tellus sed.
				</p>

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
			</div>
		</PostBody>
	</PostContainer>
</div>

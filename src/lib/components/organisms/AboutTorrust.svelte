<script>
	import Image from '$lib/components/atoms/Image.svelte';
	import ContentSection from './ContentSection.svelte';
	import ImageContentSection from '../singletons/ImageContentSection.svelte';
	import GitHubIcon from '$lib/icons/socials/github.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import ProjectCard from '../molecules/ProjectCard.svelte';
</script>

<ImageContentSection id="about-torrust">
	<h2>What is Torrust?</h2>
	<p>
		Torrust (<strong>Tor</strong>rent + <strong>Rust</strong>) is an open source project that aims
		to provide you with the tools you need to host your own torrent indexes with ease.
	</p>
	<p>
		Torrust has two main components: the <strong>tracker</strong> and the <strong>index</strong>.
	</p>
	<div slot="image">
		<Image src="/images/logo.png" alt="Torrust Logo" />
	</div>
</ImageContentSection>

<ContentSection id="project-structure" title="Project Structure">
	<div class="grid">
		<ProjectCard
			title="Torrust Tracker"
			repoURL="https://github.com/torrust/torrust-tracker"
			repoName="torrust/torrust-tracker"
		>
			<div class="project-content" slot="content">
				<p>
					Torrust Tracker is a lightweight but incredibly high-performance and feature-rich
					BitTorrent tracker written in <a
						href="https://www.rust-lang.org/"
						target="_blank"
						rel="noopener noreferrer">Rust</a
					>.
				</p>
				<p>
					It aims to provide a reliable and efficient solution for serving torrents to a vast number
					of peers while maintaining a high level of performance, robustness, extensibility,
					security, usability and with community-driven development.
				</p>
				<div class="buttons">
					<Button href="https://github.com/torrust/torrust-tracker" color="secondary">
						<GitHubIcon slot="icon" />
						torrust-tracker
					</Button>
				</div>
			</div>
		</ProjectCard>

		<ProjectCard
			title="Torrust Index"
			repoURL="https://github.com/torrust/torrust-index"
			repoName="torrust/torrust-index"
		>
			<div class="project-content" slot="content">
				<p>
					The Torrust Index is a feature-rich torrent indexing website and API for the Torrust
					Tracker.
				</p>
				<p>
					It is split between an API (backend) built with Rust, and our reference web application
					that consumes the API, built with Vue 3.
				</p>
				<div class="buttons">
					<Button href="https://github.com/torrust/torrust-index-gui" color="secondary">
						<GitHubIcon slot="icon" />
						index-gui
					</Button>
					<Button href="https://github.com/torrust/torrust-index" color="primary">
						<GitHubIcon slot="icon" />
						index
					</Button>
				</div>
			</div>
		</ProjectCard>
	</div>
</ContentSection>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;

		@include for-phone-only {
			grid-template-columns: 1fr;
		}
	}

	.project-content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		gap: 10px;
		height: 100%;
	}

	.buttons {
		margin-top: 20px;
		display: flex;
		align-items: flex-end;
		gap: 10px 5px;
		flex-wrap: wrap;
		height: 100%;
	}
</style>

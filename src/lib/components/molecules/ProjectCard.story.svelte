<script lang="ts">
	import '$lib/scss/global.scss';
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import ProjectCard from './ProjectCard.svelte';
	import GitHubIcon from '$lib/icons/socials/github.svelte';
	import Button from '$lib/components/atoms/Button.svelte';

	export let Hst: HstType;
</script>

<Hst.Story title="Molecules/Project Card">
	<div style="padding: 12px;">
		<Hst.Variant title="Default">
			<ProjectCard title="Torrust Tracker" repo="https://github.com/torrust/torrust-tracker">
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
						It aims to provide a reliable and efficient solution for serving torrents to a vast
						number of peers while maintaining a high level of performance, robustness,
						extensibility, security, usability and with community-driven development.
					</p>
					<div class="buttons">
						<Button href="https://github.com/torrust/torrust-tracker" color="secondary">
							<GitHubIcon slot="icon" />
							torrust-tracker
						</Button>
					</div>
				</div>
			</ProjectCard>
		</Hst.Variant>
	</div>
</Hst.Story>

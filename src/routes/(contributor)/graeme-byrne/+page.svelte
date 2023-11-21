<script lang="ts">
	import Email from '$lib/icons/socials/email.svelte';
	import Github from '$lib/icons/socials/github.svelte';
	import Linkedin from '$lib/icons/socials/linkedin.svelte';
</script>

<div class="contributor-biography">
	<img src="/images/contributors/graeme-byrne.jpg" alt="Contributor" class="cover-image" />
	<h1 class="contributor-title">Graeme Byrne</h1>
	<h2 class="contributor-position">Software Developer</h2>
	<h5 class="contributor-contribute-date">Contributor since: <span>2023</span></h5>
	<div class="socials links">
		<a href="mailto:grmbrn89@gmail.com"><Email /></a>
		<a href="https://github.com/grmbyrn"><Github /></a>
		<a href="https://www.linkedin.com/in/graeme-byrne/"><Linkedin /></a>
	</div>
	<div>
		<p>
			Graeme is a software developer from Ireland who lives in Barcelona. He is currently developing
			in SvelteKit and is working on the Torrust website among other projects for Nautilus
			Cyberneering. He has been mostly self-taught since events during the Covid-19 pandemic led to
			a career change from teaching English as a second language.
		</p>
		<p>
			He has always had an interest in diving deep into learning new things and discovering how to
			improve on what he currently knows. From wanting to master a new language to reading more
			about Irish mythology or how to be a little better in 5-a-side football games, he has taken
			this approach into working with Nautilus Cyberneering. He strives to know more than he did
			yesterday, even when there is much more to learn.
		</p>
		<a href="/contributors">Return to Contributors</a>
	</div>
</div>

<style lang="scss">
	.contributor-biography {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		max-width: 600px;
		margin: 0 auto;
		margin-top: 2rem;
		line-height: 1.5;
		padding: 2rem;
	}

	.cover-image {
		width: min(var(--main-column-width), 100%);
		margin: 0 auto;
		max-height: 400px;
		box-shadow: var(--image-shadow);
		border-radius: 6px;
		box-shadow:
			0 4px 8px 0 rgba(0, 0, 0, 0.2),
			0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	.contributor-title {
		font-size: 2.5rem;
		margin: 0.5rem 0;
	}

	.contributor-position {
		font-size: 1.5rem;
		font-weight: 500;
	}

	.contributor-contribute-date {
		background-color: #fff;
		padding: 0.7rem 1.2rem;
		border-radius: 0.8rem;
		color: #000;
		margin-top: 0.5rem;
		box-shadow:
			0 2px 6px 0 rgba(0, 0, 0, 0.2),
			0 4px 12px 0 rgba(0, 0, 0, 0.19);
		margin-top: 1rem;
	}

	.socials {
		display: flex;
		gap: 1rem;
		margin-top: 1.5rem;
		align-items: center;
		justify-content: flex-end;
		gap: 30px;

		a {
			text-decoration: none;

			&:hover {
				color: var(--color--primary);
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}

	a {
		width: 2rem;
	}

	p {
		font-size: 1rem;
		text-align: justify;
		margin: 1rem 0;
	}
</style>

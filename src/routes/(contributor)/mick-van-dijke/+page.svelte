<script lang="ts">
	import Github from '$lib/icons/socials/github.svelte';
</script>

<div class="contributor-biography">
	<img src="/images/contributors/unknown-person-icon.png" alt="Contributor" class="cover-image" />
	<h1 class="contributor-title">Mick van Dijke</h1>
	<h2 class="contributor-position">Fullstack Software Engineer</h2>
	<h5 class="contributor-contribute-date">Contributor since: <span>2023</span></h5>
	<div class="socials links">
		<a href="https://github.com/WarmBeer"><Github /></a>
	</div>
	<div>
		<p>
			Mick van Dijke is a fullstack software engineer from The Netherlands with a love for high
			performance and efficient software. His expertise is <a href="https://www.rust-lang.org/"
				>Rust</a
			>
			and <a href="https://vuejs.org/">Vue</a>/<a href="https://nodejs.org/en/">Node</a>.
		</p>
		<p>
			Besides being a developer, he is also very interested in investing and blockchain technology.
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

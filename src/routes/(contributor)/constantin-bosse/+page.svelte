<script lang="ts">
	import Email from '$lib/icons/socials/email.svelte';
	import Github from '$lib/icons/socials/github.svelte';
	import Linkedin from '$lib/icons/socials/linkedin.svelte';
</script>

<div class="contributor-biography">
	<img src="/images/contributors/constantin-bosse.jpeg" alt="Contributor" class="cover-image" />
	<h1 class="contributor-title">Constantin Bosse</h1>
	<h2 class="contributor-position">General Manager</h2>
	<h5 class="contributor-contribute-date">Contributor since: <span>2023</span></h5>
	<div class="socials links">
		<a href="mailto:cb@constantinbosse.com"><Email /></a>
		<a href="https://github.com/cgbosse"><Github /></a>
		<a href="https://www.linkedin.com/in/constantin-bosse/"><Linkedin /></a>
	</div>
	<div>
		<p>
			Constantin’s background is in business. He is currently Nautilus Cyberneering SLU’s general
			manager and the Blockfinance company group’s expert in business operations. He has over 23
			years of experience in different industries, companies, and roles.
		</p>
		<p>
			Given that he has worked as a consultant for many years, if somebody asks him what he does, he
			simply replies that he mostly helps with projects, usually creating, optimizing, or closing
			companies. He is creative, pragmatic and honest and is centered on helping others. If you ask
			him about something he does not know, he will tell you and either research it or look for
			someone who does.
		</p>
		<p>
			Regarding his passions and what he loves to write about are business and technology for their
			potential and importance to create lasting change and value for society, but also values and
			ethics for their importance in organizations and society.
		</p>
		<p>
			Lastly, since his involvement in Open-Source projects and his exposure to decentralized
			technologies, he has become a strong advocate of their philosophy and values since they
			resonate with his own.
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

<div class="contributors">
	<div class="contributor">
		<a href="/v2/contributor/jose-celano">
			<img
				src="/images/contributors/jose-celano.jpeg"
				class="contributor-image"
				alt="Contributor"
			/>
			Jose Celano
		</a>
	</div>
	<div class="contributor">
		<a href="/v2/contributor/constantin-bosse">
			<img
				src="/images/contributors/constantin-bosse.jpeg"
				class="contributor-image"
				alt="Contributor"
			/>Constantin Bosse</a
		>
	</div>
	<div class="contributor">
		<a href="/v2/contributor/mario-melchor">
			<img
				src="/images/contributors/unknown-person-icon.png"
				class="contributor-image"
				alt="Contributor"
			/>
			Mario Melchor
		</a>
	</div>
	<div class="contributor">
		<a href="/v2/contributor/cameron-garnham"
			><img
				src="/images/contributors/unknown-person-icon.png"
				class="contributor-image"
				alt="Contributor"
			/>
			Cameron Garnham
		</a>
	</div>
	<div class="contributor">
		<a href="/v2/contributor/graeme-byrne">
			<img
				src="/images/contributors/graeme-byrne.jpg"
				class="contributor-image"
				alt="Contributor"
			/>
			Graeme Byrne
		</a>
	</div>
	<div class="contributor">
		<a href="/v2/contributor/mick-van-dijke">
			<img
				src="/images/contributors/unknown-person-icon.png"
				class="contributor-image"
				alt="Contributor"
			/>
			Mick van Dijke
		</a>
	</div>
</div>

<style>
	.contributors {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		text-align: center;
		max-width: 700px;
		margin: 0 auto;
		margin-top: 2rem;
		line-height: 1.5;
	}

	.contributor {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 1rem;
	}

	.contributor-image {
		width: min(var(--main-column-width), 100%);
		max-height: 200px;
		box-shadow: var(--image-shadow);
		border-radius: 6px;
		box-shadow:
			0 4px 8px 0 rgba(0, 0, 0, 0.2),
			0 6px 20px 0 rgba(0, 0, 0, 0.19);
		margin-bottom: 0.8rem;
	}

	.contributor-image:hover {
		filter: brightness(0.9);
	}

	@media (min-width: 768px) {
		.contributors {
			flex-direction: row;
			flex-wrap: wrap;
		}
	}
</style>

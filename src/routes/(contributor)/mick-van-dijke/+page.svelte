<script lang="ts">
	import ContributorCard from '$lib/components/molecules/ContributorCard.svelte';
</script>

<ContributorCard
	name="Mick van Dijke"
	position="Fullstack Software Engineer"
	img=""
	contributeDate="2023"
	paras={[
		{
			para: 'Mick van Dijke is a fullstack software engineer from The Netherlands with a love for high performance and efficient software. His expertise is <a href="https://www.rust-lang.org/">Rust</a> and <a href="https://vuejs.org/">Vue</a>/<a href="https://nodejs.org/en/">Node</a>.'
		},
		{
			para: 'Besides being a developer, he is also very interested in investing and blockchain technology.'
		}
	]}
	links={[
		{
			email: '',
			github: 'https://github.com/WarmBeer',
			linkedIn: ''
		}
	]}
/>

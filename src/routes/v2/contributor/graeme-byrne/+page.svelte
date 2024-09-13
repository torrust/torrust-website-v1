<script lang="ts">
	import ContributorCard from '$lib/components/molecules/ContributorCard.svelte';
</script>

<ContributorCard
	name="Graeme Byrne"
	position="Software Developer"
	img="/images/contributors/graeme-byrne.jpg"
	contributeDate="2023"
	paras={[
		{
			para: 'Graeme is a software developer from Ireland who lives in Barcelona. He is currently developing in SvelteKit and is working on the Torrust website among other projects for Nautilus Cyberneering. He has been mostly self-taught since events during the Covid-19 pandemic led to a career change from teaching English as a second language.'
		},
		{
			para: 'He has always had an interest in diving deep into learning new things and discovering how to improve on what he currently knows. From wanting to master a new language to reading more about Irish mythology or how to be a little better in 5-a-side football games, he has taken this approach into working with Nautilus Cyberneering. He strives to know more than he did yesterday, even when there is much more to learn.'
		}
	]}
	links={[
		{
			email: 'mailto:grmbrn89@gmail.com',
			github: 'https://github.com/grmbyrn',
			linkedIn: 'https://www.linkedin.com/in/graeme-byrne/'
		}
	]}
/>

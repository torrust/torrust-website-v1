<script lang="ts">
	import ContributorCard from '$lib/components/molecules/ContributorCard.svelte';
</script>

<ContributorCard
	name="Jose Celano"
	position="Senior Developer"
	img="/images/contributors/jose-celano.jpeg"
	contributeDate="2023"
	paras={[
		{
			para: 'Jose is a senior developer with a focus on backend development. His expertise used to be <a href="https://www.php.net/">PHP</a>, although he has also been enjoying doing things with <a href="https://www.typescriptlang.org/">TypeScript.</a> He is now working full-time with <a href="https://www.rust-lang.org/">Rust</a>. He lives in Gran Canaria (Spain) and works remotely.'
		},
		{
			para: 'Jose is currently working as a developer on open-source projects, for example: <a href="https://github.com/torrust">BitTorrent Tracker in Rust.</a>'
		},
		{
			para: 'From 2016 to 2021 he worked for <a href="https://www.hyve.net/en/">HYVE</a> as a manager and developer. HYVE is an innovation company which was founded over 20 years ago and is located in Munich.'
		},
		{
			para: 'For a couple of years (2014-2016) he was very involved in Bitcoin projects.'
		},
		{
			para: 'He founded a company called iQ Ingenieros together with <a href="https://github.com/medinarribas">Emilio Medina</a>. They built desktop apps with C# and web apps with C# and PHP for 10 years.'
		},
		{
			para: 'He started working professionally in a gaming company working on a game called <a href="https://www.imdb.com/title/tt1893240/">Free Wheel</a>. It was an isometric driving strategy game taking place in a future world inhabited by zombies.'
		},
		{
			para: 'In 2003 he used a PHP framework called <a href="https://sourceforge.net/projects/phpmvc/">PHP.MVC</a>. It was a port to PHP from the popular Java framework <a href="https://struts.apache.org/">Apache Struts</a>. More info about that project, in Spanish, <a href="https://www.scribd.com/document/4421660/Proyecto-Fin-de-Carrera-Jose-Celano">here</a>.'
		}
	]}
	links={[
		{
			email: 'mailto:josecelano@gmail.com',
			github: 'https://github.com/josecelano',
			linkedIn: 'https://www.linkedin.com/in/josecelano'
		}
	]}
/>

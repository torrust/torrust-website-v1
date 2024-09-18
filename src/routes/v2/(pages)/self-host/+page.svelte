<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import Toc from 'svelte-toc';
	import PostContainer from '$lib/v2/components/molecules/PostContainer.svelte';
	import PostTable from '$lib/components/molecules/PostTable.svelte';
	import PostBody from '$lib/v2/components/molecules/PostBody.svelte';

	let isLargeScreen = writable(window.matchMedia('(min-width: 1000px)').matches);

	onMount(() => {
		const mediaQueryList = window.matchMedia('(min-width: 1000px)');
		const updateScreenSize = (event: MediaQueryListEvent) => {
			isLargeScreen.set(event.matches);
		};
		mediaQueryList.addEventListener('change', updateScreenSize);
		return () => mediaQueryList.removeEventListener('change', updateScreenSize);
	});
</script>

<div class="container">
	<PostContainer>
		{#if $isLargeScreen}
			<PostTable>
				<Toc
					title=""
					--toc-active-color="rgba(255, 49, 0, 0.96)"
					--toc-li-hover-color="rgba(255, 49, 0, 0.96)"
					--toc-active-bg="transparent"
				/>
			</PostTable>
		{:else}
			<PostTable>
				<ul class="toc">
					<li>
						<a href="#torrustSolution">Torrent solution (Index + Tracker)</a>
					</li>
					<li><a href="#buildSources">Build from sources (Rust)</a></li>
					<li><a href="#docker">Docker</a></li>
					<li><a href="#tutorials">Tutorials</a></li>
					<li><a href="#torrustTracker">Torrust tracker</a></li>
				</ul>
			</PostTable>
		{/if}
		<PostBody>
			<h2 id="torrustSolution">Torrent solution (Index + Tracker)</h2>

			<p>
				The Torrust Solution is a complete installation of bot a BitTorrent Index which is
				associated to one Torrust Tracker. Downloaded torrents will include the the associated
				tracker in the list of trackers.
			</p>
			<p>
				In our tutorial we explain how to install both in the same server using a single docker
				compose configiration, but if you need more resources you could install the tracker and the
				index in different servers. You just need to spits the docker compose configuration and
				change the tracker configiration in the index to connect to the external tracker.
			</p>
			<h2 id="buildSources">Build from sources (Rust)</h2>
			<p>
				Commodo ullamcorper blandit massa odio mauris odio ornare. Adipiscing imperdiet neque
				convallis nisl quisque quisque. Fringilla bibendum sit lectus tellus ut urna condimentum
				tristique. Nisi lectus malesuada consectetur morbi id fringilla et. Blandit mus senectus a
				elit nisl.
			</p>
			<p>
				Mauris ut dolor dolor nam. Dolor viverra tincidunt egestas ac vulputate. Phasellus sed massa
				facilisis rhoncus in. Ipsum fermentum est diam justo nibh quis. Libero rutrum quam donec
				tellus at et.
			</p>
			<p>
				Sed quis enim amet tempor aliquet eget. Phasellus sem vel tincidunt pellentesque non
				hendrerit cras magna. Volutpat convallis aliquet non lectus quam enim. Nunc ut augue urna
				vitae venenatis. Pellentesque congue blandit facilisi lectus ac libero.
			</p>
			<h2 id="docker">Docker</h2>

			<p>
				Interdum augue mattis tortor ornare in. Feugiat phasellus integer massa mauris. Leo sit
				tempus leo eu tellus feugiat malesuada purus. Metus erat eleifend ante sed sem gravida nunc
				lobortis et. Arcu elit faucibus eget egestas aliquet vivamus consectetur.
			</p>
			<p>
				Laoreet id nisl pharetra sed ut massa dis interdum. Eget eu lacus fringilla sem dignissim
				cras ridiculus. Potenti cras diam nunc ultricies. Ut metus amet faucibus quam nibh mattis
				at. Cras in rhoncus ipsum ut id sit id.
			</p>
			<h2 id="tutorials">Tutorials</h2>

			<p>
				Nisi interdum iaculis cursus tellus tincidunt pharetra turpis arcu eget. Nibh in
				pellentesque risus vestibulum. Dolor interdum dictum ac feugiat nulla gravida scelerisque
				tellus. Sit diam vestibulum eu quis. Curabitur lectus porta nisi convallis.
			</p>

			<h2 id="torrustTracker">Torrust tracker</h2>
		</PostBody>
	</PostContainer>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.container {
		background: rgba(26, 26, 26, 1);
		color: rgba(245, 245, 245, 0.96);
	}

	h2,
	p {
		padding-top: 1.2rem;
	}

	.toc li a {
		color: white;
	}

	.toc li a:hover {
		color: rgba(255, 49, 0, 0.96);
	}
</style>

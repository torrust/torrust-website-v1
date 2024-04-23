<script lang="ts">
	import AnimatedHamburger from './AnimatedHamburger.svelte';
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import { writable } from 'svelte/store';

	export let Hst: HstType;
	let isMenuOpen = writable(false);

	const toggleMenu = () => {
		isMenuOpen.update((value) => !value);
	};
</script>

<svelte:component
	this={Hst.Story}
	title="Atoms/AnimatedHamburger"
	layout={{ type: 'grid', width: 400 }}
>
	<svelte:fragment slot="controls">
		<label>
			<input type="checkbox" bind:checked={$isMenuOpen} /> isMenuOpen
		</label>
	</svelte:fragment>

	<div style="padding: 12px;">
		<svelte:component this={Hst.Variant} title="Default">
			<AnimatedHamburger isMenuOpen={$isMenuOpen} {toggleMenu} />
		</svelte:component>
	</div>
</svelte:component>

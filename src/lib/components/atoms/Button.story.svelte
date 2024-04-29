<script lang="ts">
	import '$lib/scss/global.scss';
	import type { Hst as HstType } from '@histoire/plugin-svelte';
	import Button from './Button.svelte';
	import type { NoUndefinedField } from '$lib/utils/types';
	import Icon from '$lib/icons/chat.svelte';

	export let Hst: HstType;

	let props: NoUndefinedField<{
		color?: 'primary' | 'secondary';
		style?: 'solid' | 'understated' | 'clear';
		size?: 'small' | 'medium' | 'large';
		href?: string;
		additionalClass?: string;
		target?: '_self' | '_blank';
		rel?: string;
	}> = {
		color: 'primary',
		style: 'solid',
		size: 'medium',
		href: '',
		target: '_blank',
		rel: 'noopener noreferrer',
		additionalClass: ''
	};

	let text = 'This is a Button';
</script>

<svelte:component this={Hst.Story} title="Atoms/Button" layout={{ type: 'grid', width: 400 }}>
	<svelte:fragment slot="controls">
		<svelte:component this={Hst.Text} bind:value={text} title="Text" />
		<svelte:component
			this={Hst.Select}
			bind:value={props.color}
			title="color"
			options={['primary', 'secondary']}
		/>
		<svelte:component
			this={Hst.Select}
			bind:value={props.style}
			title="Style"
			options={['solid', 'understated', 'clear']}
		/>
		<svelte:component
			this={Hst.Select}
			bind:value={props.size}
			title="Size"
			options={['small', 'medium', 'large']}
		/>
		<svelte:component this={Hst.Text} bind:value={props.href} title="Href" />
		<svelte:component
			this={Hst.Select}
			bind:value={props.target}
			title="Target"
			options={['_self', '_blank']}
		/>
		<svelte:component this={Hst.Text} bind:value={props.rel} title="Rel" />
	</svelte:fragment>

	<div style="padding: 12px;">
		<svelte:component this={Hst.Variant} title="No Icon">
			<Button {...props}>
				{text}
			</Button>
		</svelte:component>
		<svelte:component this={Hst.Variant} title="With Icon">
			<Button {...props}>
				<Icon slot="icon" />
				{text}
			</Button>
		</svelte:component>
	</div>
</svelte:component>

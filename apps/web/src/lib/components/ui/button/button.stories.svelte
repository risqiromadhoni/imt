<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from './button.svelte';
	import { fn } from 'storybook/test';
	import Icon from '@iconify/svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'UI/Button',
		component: Button,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: { type: 'select' },
				options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
				defaultValue: 'default'
			},
			size: {
				control: { type: 'select' },
				options: ['default', 'sm', 'lg', 'icon'],
				defaultValue: 'default'
			},
			radius: {
				control: { type: 'select' },
				options: ['default', 'full'],
				defaultValue: 'full'
			},
			fullWidth: {
				control: {
					type: 'boolean'
				},
				defaultValue: false
			},
			disabled: {
				control: {
					type: 'boolean'
				},
				defaultValue: false
			}
		},
		args: {
			onclick: fn()
		}
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Default">Click me!</Story>
<Story name="WithIconStart">
	<Icon icon="lucide:search" />
	Search
</Story>
<Story name="WithIconEnd">
	Send Mail
	<Icon icon="lucide:send" />
</Story>
<Story name="WithIcon">
	<Icon icon="lucide:coins" />
	Pay
	<Icon icon="lucide:chevron-right" />
</Story>
<Story name="IconOnly" args={{ size: 'icon' }}>
	<Icon icon="lucide:chevron-up" />
</Story>

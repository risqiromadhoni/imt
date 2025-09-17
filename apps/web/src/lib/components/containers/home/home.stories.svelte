<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import HomeLayout from './home.layout.svelte';
    import HomePage from './home.page.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Containers/Home',
        component: HomeLayout,
		tags: ['autodocs'],
        parameters: {
			// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
			layout: 'fullscreen'
		}
	});
</script>

<Story name="Default">
    <HomePage />
</Story>
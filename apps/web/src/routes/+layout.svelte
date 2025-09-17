<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { HomeLayout } from '$lib/components/containers/home';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<HomeLayout>
	{@render children?.()}
</HomeLayout>

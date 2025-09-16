<script lang="ts">
	import { Ripple, rippleStore } from '$lib/components/animate/ripple';
	import { cn } from '$lib/utils';
	import { buttonVariants } from './theme';
	import type { ButtonProps } from './type';

	const ripples = rippleStore()

	let {
		class: className,
		variant = 'default',
		size = 'default',
		radius = 'default',
		fullWidth = false,
		ref = $bindable(null),
		href = undefined,
		type = 'button',
		disabled = false,
		onclick: onClick,
		children,
		...restProps
	}: ButtonProps = $props();
	let btnClass = $derived(
		cn(buttonVariants({ variant, size, radius, fullWidth, disabled }), className)
	);

	let onclick = (e: MouseEvent) => {
		ripples.onCreateRipples(e);
		onClick?.(e as MouseEvent & { currentTarget: EventTarget & HTMLButtonElement });
	};
</script>

{#if href}
	<a
		bind:this={ref}
		data-slot="button"
		class={btnClass}
		href={disabled ? undefined : href}
		aria-disabled={disabled}
		role={disabled ? 'link' : undefined}
		tabindex={disabled ? -1 : undefined}
		{onclick}
		{...restProps}
	>
		{@render children?.()}
		<Ripple ripples={$ripples} rippleColor="var(--color-bluebonnet-50)" />
	</a>
{:else}
	<button
		bind:this={ref}
		data-slot="button"
		class={btnClass}
		{type}
		{disabled}
		{onclick}
		{...restProps}
	>
		{@render children?.()}
		<Ripple ripples={$ripples} rippleColor="var(--color-bluebonnet-50)" />
	</button>
{/if}

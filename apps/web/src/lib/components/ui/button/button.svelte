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
		radius = 'full',
		fullWidth = false,
		ref = $bindable(null),
		href = undefined,
		type = 'button',
		disabled = false,
		onclick: onClick,
		onpointerup: onPointerup,
		onpointerdown: onPointerdown,
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
	let onpointerup = (e: PointerEvent) => {
		onPointerup && ripples.onCreateRipples(e);
		onPointerup?.(e as PointerEvent & { currentTarget: EventTarget & HTMLButtonElement })
	}
	let onpointerdown = (e: PointerEvent) => {
		onPointerdown && ripples.onCreateRipples(e);
		onPointerdown?.(e as PointerEvent & { currentTarget: EventTarget & HTMLButtonElement })
	}
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
		{onpointerup}
		{onpointerdown}
		{...restProps}
	>
		{@render children?.()}
		<Ripple ripples={$ripples} />
	</a>
{:else}
	<button
		bind:this={ref}
		data-slot="button"
		class={btnClass}
		{type}
		{disabled}
		{onclick}
		{onpointerup}
		{onpointerdown}
		{...restProps}
	>
		{@render children?.()}
		<Ripple ripples={$ripples} />
	</button>
{/if}

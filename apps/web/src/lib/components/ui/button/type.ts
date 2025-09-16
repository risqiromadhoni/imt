import type { WithElementRef } from '$lib/utils';
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants/lite';
import type { buttonVariants } from './theme';

export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
	WithElementRef<HTMLAnchorAttributes> &
	VariantProps<typeof buttonVariants>;

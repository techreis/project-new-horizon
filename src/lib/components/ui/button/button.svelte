<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { type VariantProps } from 'tailwind-variants';
	import { buttonVariants } from './index.js';

	type Variant = VariantProps<typeof buttonVariants>['variant'];
	type Size = VariantProps<typeof buttonVariants>['size'];

	interface Props extends HTMLButtonAttributes {
		variant?: Variant;
		size?: Size;
		children?: Snippet;
	}

	let { variant = 'default', size = 'default', class: className, children, ...restProps }: Props =
		$props();
</script>

<button class={cn(buttonVariants({ variant, size }), className)} type="button" {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</button>

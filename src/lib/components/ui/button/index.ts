import type { Button as ButtonPrimitive } from 'bits-ui';
import { type VariantProps, tv } from 'tailwind-variants';
import Root from './button.svelte';

const buttonVariants = tv({
	base: 'ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-[1.25rem] font-normal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:bg-primary/50',
	variants: {
		variant: {
			default: 'bg-primary text-primary-foreground hover:bg-secondary',
			destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
			outline: 'border-input bg-background hover:bg-accent hover:text-accent-foreground border',
			secondary:
				'bg-secondary text-secondary-foreground hover:bg-secondary-foreground hover:text-black',
			ghost: 'hover:bg-accent hover:text-accent-foreground',
			link: 'text-primary underline-offset-4 hover:underline'
		},
		size: {
			default: 'px-[20px] py-[16px]',
			sm: 'h-9 rounded-md px-3',
			lg: 'h-11 rounded-md px-8',
			icon: 'h-10 w-10'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});

type Variant = VariantProps<typeof buttonVariants>['variant'];
type Size = VariantProps<typeof buttonVariants>['size'];

type Props = ButtonPrimitive.Props & {
	variant?: Variant;
	size?: Size;
};

type Events = ButtonPrimitive.Events;

export {
	//
	Root as Button,
	Root,
	buttonVariants,
	type Events as ButtonEvents,
	type Props as ButtonProps,
	type Events,
	type Props
};
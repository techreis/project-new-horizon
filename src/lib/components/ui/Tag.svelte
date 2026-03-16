<script lang="ts">
	type TagVariant = 'default' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'ghost' | 'outline';

	interface TagProps {
		text: string;
		variant?: TagVariant;
		size?: 'xs' | 'sm' | 'md' | 'lg';
		outline?: boolean;
	}

	let { text, variant = 'default', size = 'md', outline = false }: TagProps = $props();

	const variantClasses: Record<TagVariant, string> = {
		default: '',
		primary: 'badge-primary',
		secondary: 'badge-secondary',
		accent: 'badge-accent',
		info: 'badge-info',
		success: 'badge-success',
		warning: 'badge-warning',
		error: 'badge-error',
		ghost: 'badge-ghost',
		outline: 'badge-outline'
	};

	const sizeClasses: Record<string, string> = {
		xs: 'badge-xs',
		sm: 'badge-sm',
		md: '',
		lg: 'badge-lg'
	};

	const classes = $derived(
		[
			'badge',
			variantClasses[variant],
			sizeClasses[size],
			outline && variant !== 'outline' ? 'badge-outline' : ''
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<span class={classes}>{text}</span>

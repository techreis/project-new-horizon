<script>
	import { page } from '$app/stores';
	import Footer from '$lib/components/ui/Footer/Footer.svelte';
	import '../app.css';
	import Navigation from './_components/Navigation.svelte';
	let { children } = $props();
</script>

<Navigation />
<div class="mb-auto pt-[80px] md:pt-[100px]">
	{@render children()}
</div>
{#if $page.url.pathname !== '/contact'}
	<Footer />
{/if}

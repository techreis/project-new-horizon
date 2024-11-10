<script>
	import '../app.css';
	import Navigation from './_components/Navigation.svelte';
	let { children } = $props();
</script>

<Navigation />
<div class="pt-[80px] md:pt-[100px]">
	{@render children()}
</div>

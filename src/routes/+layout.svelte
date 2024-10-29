<script>
	import '../app.css';
	import Footer from './_components/Footer.svelte';
	import Navigation from './_components/Navigation.svelte';
</script>

<Navigation />
<div class="pt-[80px] md:pt-[100px]">
	<slot />
</div>
<Footer />

<script>
	import '../app.css';
	import Navigation from './_components/Navigation.svelte';
</script>

<Navigation></Navigation>
<div class="pt-[80px] md:pt-[100px]">
	<slot></slot>
</div>

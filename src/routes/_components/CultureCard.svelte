<script lang="ts">
	import type { Component } from 'svelte';

	interface Props {
		title: string;
		description: string;
		Icon: Component;
	}

	let { title, description, Icon }: Props = $props();
</script>

<div class="flex gap-x-[25px] p-[10px] text-white">
	<Icon class="h-[100px] w-[100px] stroke-1 text-white" />
	<div class="flex flex-1 flex-col gap-y-[10px]">
		<h3 class="text-white">{title}</h3>
		<p>{description}</p>
	</div>
</div>

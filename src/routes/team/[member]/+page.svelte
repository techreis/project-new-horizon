<script lang="ts">
	import { page } from '$app/stores';
	import Tabs from './_components/Tabs.svelte';

	let { data } = $props();
	let memberSlug = $derived($page.params.member);
	let member = $derived(data.profiles[memberSlug]);
</script>

<section class="flex w-full flex-col gap-y-4">
	<div class="flex gap-x-[25px]">
		<div class="bg-red bg-grey h-[80px] w-[80px] rounded-full bg-slate-500"></div>
		<div class="flex flex-col">
			<h3>{member.basic.name}</h3>
			<h4 class="font-semibold opacity-50">{member.basic.role}</h4>
		</div>
	</div>
	<Tabs {member} />
</section>

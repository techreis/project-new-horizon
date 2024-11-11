<script lang="ts">
	import { goto } from '$app/navigation';
	import Tag from '$lib/components/ui/Tag.svelte';

	export let member: {
		name: string;
		role: string;
		skills: string[];
		slug: string;
	};

	function handleClick() {
		goto(`/team/${member.slug}`);
	}
</script>

<div
	class="flex flex-col gap-[10px] rounded-[12px] p-[25px] shadow-xl hover:cursor-pointer hover:bg-primary"
	onclick={handleClick}
	onkeydown={(e) => e.key === 'Enter' && handleClick()}
	role="button"
	tabindex="0"
>
	<div class="flex gap-x-[10px]">
		<div class="bg-red bg-grey h-[40px] w-[40px] rounded-full bg-slate-500"></div>
		<div class="flex flex-col">
			<p>{member.name}</p>
			<p class="font-semibold opacity-50">{member.role}</p>
		</div>
	</div>
	<div class="flex gap-x-[10px]">
		{#each member.skills as skill}
			<Tag text={skill} />
		{/each}
	</div>
</div>

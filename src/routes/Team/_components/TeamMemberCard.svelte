<script lang="ts">
	import { goto } from '$app/navigation';
	import Tag from '$lib/components/ui/Tag.svelte';
	import type { EngineerProfile } from '$lib/types';

	type TeamMemberCardProps = {
		engineerData: EngineerProfile;
	};

	let { engineerData }: TeamMemberCardProps = $props();
	console.log(engineerData.skills.programming_languages[0]);

	function handleClick() {
		goto(`/team/${engineerData.basic.slug}`);
	}
</script>

<div
	class="flex flex-col gap-[10px] rounded-[12px] border border-slate-500/20 p-[12px] hover:cursor-pointer hover:bg-primary"
	onclick={handleClick}
	onkeydown={(e) => e.key === 'Enter' && handleClick()}
	role="button"
	tabindex="0"
>
	<div class="flex gap-x-[10px]">
		<div class="bg-red bg-grey h-[40px] w-[40px] rounded-full bg-slate-500"></div>
		<div class="flex flex-col">
			<p>{engineerData.basic.name}</p>
			<p class="font-semibold opacity-50">{engineerData.basic.role}</p>
		</div>
	</div>
	<div class="flex gap-x-[10px]">
		{#each engineerData.basic.top_skills as skill}
			<Tag text={skill} />
		{/each}
	</div>
</div>

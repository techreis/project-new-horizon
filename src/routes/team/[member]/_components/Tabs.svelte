<script lang="ts">
	import type { EngineerProfile } from '$lib/types';

	type TabsProps = {
		member: EngineerProfile;
	};

	let { member }: TabsProps = $props();
</script>

<div role="tablist" class="tabs tabs-lifted">
	<input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Profile" checked />
	<div role="tabpanel" class="tab-content w-full p-4">{member.profile.introduction}</div>

	<input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Skills" />
	<div role="tabpanel" class="tab-content">
		<div class="flex flex-col gap-y-8 p-4">
			<section class="space-y-2">
				<p class="text-base font-semibold">Spoken Languages</p>
				<div class="flex flex-wrap gap-x-2">
					{#each member.skills.spoken_languages as spoken_language}
						<div class="badge">{spoken_language}</div>
					{/each}
				</div>
			</section>
			<section class="space-y-2">
				<p class="text-base font-semibold">Programming Languages</p>
				<div class="flex flex-wrap gap-x-2">
					{#each member.skills.programming_languages as programming_language}
						<div class="badge">{programming_language}</div>
					{/each}
				</div>
			</section>
			<section class="space-y-2">
				<p class="text-base font-semibold">Frameworks</p>
				<div class="flex flex-wrap gap-x-2">
					{#each member.skills.frameworks as framework}
						<div class="badge">{framework}</div>
					{/each}
				</div>
			</section>
			<section class="space-y-2">
				<p class="text-base font-semibold">Databases</p>
				<div class="flex flex-wrap gap-x-2">
					{#each member.skills.databases as database}
						<div class="badge">{database}</div>
					{/each}
				</div>
			</section>
			<section class="space-y-2">
				<p class="text-base font-semibold">Cloud Platforms</p>
				<div class="flex flex-wrap gap-x-2">
					{#each member.skills.cloud_platforms as cloud_platform}
						<div class="badge">{cloud_platform}</div>
					{/each}
				</div>
			</section>
			<section class="space-y-2">
				<p class="text-base font-semibold">Tools</p>
				<div class="flex flex-wrap gap-x-2">
					{#each member.skills.tools as tool}
						<div class="badge">{tool}</div>
					{/each}
				</div>
			</section>
		</div>
	</div>

	<input
		type="radio"
		name="my_tabs_1"
		role="tab"
		class="tab whitespace-nowrap"
		aria-label="Work History"
	/>
	<div role="tabpanel" class="tab-content w-full">
		<div class="flex flex-col gap-y-8 p-4">
			{#each member.work_history as work_history}
				<section class="space-y-2 border-b border-gray-300 pb-4 last:border-b-0">
					<p class="text-base font-semibold">
						{new Date(work_history.start_date).toLocaleDateString()} - {work_history.end_date === ''
							? 'Present'
							: new Date(work_history.end_date).toLocaleDateString()}
					</p>
					<p class="text-xl font-semibold">
						{work_history.name} <span class="opacity-50">| {work_history.role}</span>
					</p>
					<p class="text-xs">{work_history.team_size} Team Members</p>
					<p class="pt-2 text-sm">{work_history.description}</p>
					<div class="flex flex-wrap gap-x-2">
						{#each work_history.technologies as technology}
							<div class="badge">{technology}</div>
						{/each}
					</div>
				</section>
			{/each}
		</div>
	</div>
</div>

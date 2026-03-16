<script lang="ts">
	import type { EngineerProfile, SearchTag, SkillCategory } from '$lib/types';
	import { Briefcase, Cloud, Code, Database, Globe, Layers, Wrench } from 'lucide-svelte';
	import { getContext } from 'svelte';

	type TabsProps = {
		member: EngineerProfile;
	};

	let { member }: TabsProps = $props();

	// Get selected search tags from parent context
	const getSelectedTags = getContext<() => SearchTag[]>('team-search-tags');
	const selectedTags = $derived(getSelectedTags?.() ?? []);

	// Check if a skill value matches any selected tag in a specific category
	function isSkillHighlighted(value: string, category: SkillCategory): boolean {
		return selectedTags.some(
			(tag) => tag.category === category && tag.value.toLowerCase() === value.toLowerCase()
		);
	}

	// Check if a technology matches any selected tag (across all relevant categories)
	function isTechHighlighted(tech: string): boolean {
		const techLower = tech.toLowerCase();
		return selectedTags.some((tag) => tag.value.toLowerCase() === techLower);
	}

	// Check if a work history entry matches any selected tag (role or technologies)
	function isWorkHighlighted(work: EngineerProfile['work_history'][0]): boolean {
		return selectedTags.some((tag) => {
			if (tag.category === 'roles') {
				return work.role.toLowerCase() === tag.value.toLowerCase();
			}
			// Check technologies against ANY tag value (not just 'technologies' category)
			return work.technologies?.some((t) => t.toLowerCase() === tag.value.toLowerCase());
		});
	}

	// Sort work history: highlighted entries first, then by original order
	const sortedWorkHistory = $derived.by(() => {
		if (selectedTags.length === 0) return member.work_history;

		const highlighted: typeof member.work_history = [];
		const others: typeof member.work_history = [];

		member.work_history.forEach((work) => {
			if (isWorkHighlighted(work)) {
				highlighted.push(work);
			} else {
				others.push(work);
			}
		});

		return [...highlighted, ...others];
	});
</script>

<div role="tablist" class="tabs tabs-lifted">
	<input type="radio" name="member_tabs" role="tab" class="tab" aria-label="Profile" checked />
	<div role="tabpanel" class="tab-content rounded-box border-base-300 bg-base-100 p-6">
		<div class="prose max-w-none">
			<p class="text-base leading-relaxed">{member.profile.introduction}</p>
		</div>
	</div>

	<input type="radio" name="member_tabs" role="tab" class="tab" aria-label="Skills" />
	<div role="tabpanel" class="tab-content rounded-box border-base-300 bg-base-100 p-6">
		<div class="grid gap-6 md:grid-cols-2">
			<section class="space-y-3">
				<div class="flex items-center gap-2">
					<Globe class="h-5 w-5 text-base-content/60" />
					<h3 class="text-sm font-semibold">Spoken Languages</h3>
				</div>
				<div class="flex flex-wrap gap-2">
					{#each member.skills.spoken_languages as language}
						<span
							class="badge px-3 py-2.5"
							class:badge-outline={!isSkillHighlighted(language, 'spoken_languages')}
							class:bg-primary={isSkillHighlighted(language, 'spoken_languages')}
							class:text-white={isSkillHighlighted(language, 'spoken_languages')}
							class:border-primary={isSkillHighlighted(language, 'spoken_languages')}
							>{language}</span
						>
					{/each}
				</div>
			</section>

			<section class="space-y-3">
				<div class="flex items-center gap-2">
					<Code class="h-5 w-5 text-base-content/60" />
					<h3 class="text-sm font-semibold">Programming Languages</h3>
				</div>
				<div class="flex flex-wrap gap-2">
					{#each member.skills.programming_languages as language}
						<span
							class="badge px-3 py-2.5"
							class:badge-outline={!isSkillHighlighted(language, 'programming_languages')}
							class:bg-primary={isSkillHighlighted(language, 'programming_languages')}
							class:text-white={isSkillHighlighted(language, 'programming_languages')}
							class:border-primary={isSkillHighlighted(language, 'programming_languages')}
							>{language}</span
						>
					{/each}
				</div>
			</section>

			<section class="space-y-3">
				<div class="flex items-center gap-2">
					<Layers class="h-5 w-5 text-base-content/60" />
					<h3 class="text-sm font-semibold">Frameworks</h3>
				</div>
				<div class="flex flex-wrap gap-2">
					{#each member.skills.frameworks as framework}
						<span
							class="badge px-3 py-2.5"
							class:badge-outline={!isSkillHighlighted(framework, 'frameworks')}
							class:bg-primary={isSkillHighlighted(framework, 'frameworks')}
							class:text-white={isSkillHighlighted(framework, 'frameworks')}
							class:border-primary={isSkillHighlighted(framework, 'frameworks')}>{framework}</span
						>
					{/each}
				</div>
			</section>

			<section class="space-y-3">
				<div class="flex items-center gap-2">
					<Database class="h-5 w-5 text-base-content/60" />
					<h3 class="text-sm font-semibold">Databases</h3>
				</div>
				<div class="flex flex-wrap gap-2">
					{#each member.skills.databases as database}
						<span
							class="badge px-3 py-2.5"
							class:badge-outline={!isSkillHighlighted(database, 'databases')}
							class:bg-primary={isSkillHighlighted(database, 'databases')}
							class:text-white={isSkillHighlighted(database, 'databases')}
							class:border-primary={isSkillHighlighted(database, 'databases')}>{database}</span
						>
					{/each}
				</div>
			</section>

			<section class="space-y-3">
				<div class="flex items-center gap-2">
					<Cloud class="h-5 w-5 text-base-content/60" />
					<h3 class="text-sm font-semibold">Cloud Platforms</h3>
				</div>
				<div class="flex flex-wrap gap-2">
					{#each member.skills.cloud_platforms as platform}
						<span
							class="badge px-3 py-2.5"
							class:badge-outline={!isSkillHighlighted(platform, 'cloud_platforms')}
							class:bg-primary={isSkillHighlighted(platform, 'cloud_platforms')}
							class:text-white={isSkillHighlighted(platform, 'cloud_platforms')}
							class:border-primary={isSkillHighlighted(platform, 'cloud_platforms')}
							>{platform}</span
						>
					{/each}
				</div>
			</section>

			<section class="space-y-3">
				<div class="flex items-center gap-2">
					<Wrench class="h-5 w-5 text-base-content/60" />
					<h3 class="text-sm font-semibold">Tools</h3>
				</div>
				<div class="flex flex-wrap gap-2">
					{#each member.skills.tools as tool}
						<span
							class="badge px-3 py-2.5"
							class:badge-outline={!isSkillHighlighted(tool, 'tools')}
							class:bg-primary={isSkillHighlighted(tool, 'tools')}
							class:text-white={isSkillHighlighted(tool, 'tools')}
							class:border-primary={isSkillHighlighted(tool, 'tools')}>{tool}</span
						>
					{/each}
				</div>
			</section>
		</div>
	</div>

	<input
		type="radio"
		name="member_tabs"
		role="tab"
		class="tab whitespace-nowrap"
		aria-label="Work History"
	/>
	<div role="tabpanel" class="tab-content rounded-box border-base-300 bg-base-100 p-6">
		<div class="flex flex-col">
			{#each sortedWorkHistory as work, index}
				{@const highlighted = isWorkHighlighted(work)}
				<div class="flex gap-4">
					<!-- Timeline column -->
					<div class="flex flex-col items-center">
						<div
							class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white"
						>
							<Briefcase class="h-5 w-5" />
						</div>
						{#if index < sortedWorkHistory.length - 1}
							<div class="w-0.5 flex-1 bg-primary/30"></div>
						{/if}
					</div>

					<!-- Content column -->
					<div class="flex-1 pb-8">
						<div
							class="card relative bg-base-200/30"
							class:border-2={highlighted}
							class:border-primary={highlighted}
							class:border={!highlighted}
							class:border-base-300={!highlighted}
						>
							{#if highlighted}
								<span
									class="absolute -top-2.5 right-3 rounded bg-primary px-2 py-0.5 text-xs font-medium text-white"
								>
									Recommended
								</span>
							{/if}
							<div class="card-body p-5">
								<div class="flex flex-wrap items-start justify-between gap-2">
									<div>
										<h3 class="text-lg font-semibold">{work.name}</h3>
										<p class="text-base-content/70">{work.role}</p>
									</div>
									<div class="text-right text-sm text-base-content/60">
										<p>
											{new Date(work.start_date).toLocaleDateString('en-US', {
												month: 'short',
												year: 'numeric'
											})} - {work.end_date === ''
												? 'Present'
												: new Date(work.end_date).toLocaleDateString('en-US', {
														month: 'short',
														year: 'numeric'
													})}
										</p>
										<p>{work.team_size} team members</p>
									</div>
								</div>
								<p class="mt-2 text-sm text-base-content/80">{work.description}</p>
								<div class="mt-3 flex flex-wrap gap-1.5">
									{#each work.technologies as tech}
										{@const techHighlighted = isTechHighlighted(tech)}
										<span
											class="badge px-2.5 py-2"
											class:badge-outline={!techHighlighted}
											class:bg-primary={techHighlighted}
											class:text-white={techHighlighted}
											class:border-primary={techHighlighted}>{tech}</span
										>
									{/each}
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

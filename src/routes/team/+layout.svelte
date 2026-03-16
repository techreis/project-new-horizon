<script lang="ts">
	import type { SearchTag } from '$lib/types';
	import { setContext } from 'svelte';
	import TeamMemberCard from './_components/TeamMemberCard.svelte';
	import SearchInput from './_components/SearchInput.svelte';

	let { data, children } = $props();

	const comingSoon = true; // Set to false to enable the team page

	let selectedTags = $state<SearchTag[]>([]);
	let textQuery = $state('');

	// Provide selected tags to child components via context
	setContext('team-search-tags', () => selectedTags);

	function handleTagsChange(tags: SearchTag[]) {
		selectedTags = tags;
	}

	function handleTextQueryChange(query: string) {
		textQuery = query;
	}

	// Filter profiles based on selected tags and text query
	const filteredProfiles = $derived(
		Object.entries(data.profiles).filter(([_, profile]) => {
			// Text query filter (name search)
			const matchesText =
				!textQuery.trim() ||
				profile.basic.name.toLowerCase().includes(textQuery.toLowerCase());

			// Tag filter
			const matchesTags =
				selectedTags.length === 0 ||
				selectedTags.some((tag) => {
					switch (tag.category) {
						case 'programming_languages':
							return profile.skills.programming_languages?.some(
								(s) => s.toLowerCase() === tag.value.toLowerCase()
							);
						case 'spoken_languages':
							return profile.skills.spoken_languages?.some(
								(s) => s.toLowerCase() === tag.value.toLowerCase()
							);
						case 'frameworks':
							return profile.skills.frameworks?.some(
								(s) => s.toLowerCase() === tag.value.toLowerCase()
							);
						case 'databases':
							return profile.skills.databases?.some(
								(s) => s.toLowerCase() === tag.value.toLowerCase()
							);
						case 'cloud_platforms':
							return profile.skills.cloud_platforms?.some(
								(s) => s.toLowerCase() === tag.value.toLowerCase()
							);
						case 'tools':
							return profile.skills.tools?.some(
								(s) => s.toLowerCase() === tag.value.toLowerCase()
							);
						case 'roles':
							return profile.work_history?.some(
								(w) => w.role.toLowerCase() === tag.value.toLowerCase()
							);
						case 'technologies':
							return profile.work_history?.some((w) =>
								w.technologies?.some((t) => t.toLowerCase() === tag.value.toLowerCase())
							);
						default:
							return false;
					}
				});

			return matchesText && matchesTags;
		})
	);
</script>

{#if comingSoon}
	<div class="flex min-h-[800px] items-center justify-center">
		<p class="text-xl font-semibold">Coming Soon</p>
	</div>
{:else}
<main class="mx-auto flex min-h-[800px] max-w-[1400px] gap-x-8 overflow-visible p-6">
	<section class="flex max-h-[800px] w-[380px] min-w-[380px] flex-col gap-y-5">
		<div class="card bg-base-200/50 p-4">
			<SearchInput
				profiles={data.profiles}
				{selectedTags}
				{textQuery}
				onTagsChange={handleTagsChange}
				onTextQueryChange={handleTextQueryChange}
			/>
		</div>

		<div class="flex flex-1 flex-col gap-y-3 overflow-y-auto pr-2">
			{#if filteredProfiles.length === 0}
				<div class="card bg-base-200/30 p-8 text-center">
					<p class="text-base-content/60">No team members found</p>
					{#if selectedTags.length > 0 || textQuery}
						<p class="mt-2 text-sm text-base-content/40">
							Try adjusting your search or removing some filters
						</p>
					{/if}
				</div>
			{:else}
				{#each filteredProfiles as [filename, content]}
					<TeamMemberCard engineerData={content} />
				{/each}
			{/if}
		</div>
	</section>

	<section class="flex-1">
		{@render children()}
	</section>
</main>
{/if}

<script lang="ts">
	import type { EngineerProfile, SkillCategory, SearchTag, SkillSuggestion } from '$lib/types';
	import { X } from 'lucide-svelte';

	type SearchInputProps = {
		profiles: Record<string, EngineerProfile>;
		selectedTags: SearchTag[];
		textQuery: string;
		onTagsChange: (tags: SearchTag[]) => void;
		onTextQueryChange: (query: string) => void;
	};

	let { profiles, selectedTags, textQuery, onTagsChange, onTextQueryChange }: SearchInputProps =
		$props();

	let inputValue = $state('');
	let showDropdown = $state(false);
	let inputRef: HTMLInputElement | undefined = $state();

	const categoryLabels: Record<SkillCategory, string> = {
		programming_languages: 'Programming Languages',
		spoken_languages: 'Spoken Languages',
		frameworks: 'Frameworks',
		databases: 'Databases',
		cloud_platforms: 'Cloud Platforms',
		tools: 'Tools',
		roles: 'Roles',
		technologies: 'Technologies'
	};

	// Helper to check if a value should be excluded
	function isValidValue(value: string): boolean {
		const excludeValues = ['none', 'n/a', ''];
		return !excludeValues.includes(value.toLowerCase().trim());
	}

	// Build skill index from all profiles dynamically
	const allSuggestions = $derived.by(() => {
		const suggestions: SkillSuggestion[] = [];
		const seen = new Set<string>();

		Object.values(profiles).forEach((profile) => {
			// Add skills from each category
			const skillCategories: { key: keyof typeof profile.skills; category: SkillCategory }[] = [
				{ key: 'programming_languages', category: 'programming_languages' },
				{ key: 'spoken_languages', category: 'spoken_languages' },
				{ key: 'frameworks', category: 'frameworks' },
				{ key: 'databases', category: 'databases' },
				{ key: 'cloud_platforms', category: 'cloud_platforms' },
				{ key: 'tools', category: 'tools' }
			];

			skillCategories.forEach(({ key, category }) => {
				profile.skills[key]?.forEach((skill) => {
					if (!isValidValue(skill)) return;

					const uniqueKey = `${category}:${skill.toLowerCase()}`;
					if (!seen.has(uniqueKey)) {
						seen.add(uniqueKey);
						suggestions.push({
							value: skill,
							category,
							label: categoryLabels[category]
						});
					}
				});
			});

			// Add roles and technologies from work history
			profile.work_history?.forEach((work) => {
				// Add role
				if (work.role && isValidValue(work.role)) {
					const roleKey = `roles:${work.role.toLowerCase()}`;
					if (!seen.has(roleKey)) {
						seen.add(roleKey);
						suggestions.push({
							value: work.role,
							category: 'roles',
							label: categoryLabels.roles
						});
					}
				}

				// Add technologies
				work.technologies?.forEach((tech) => {
					if (!isValidValue(tech)) return;

					const techKey = `technologies:${tech.toLowerCase()}`;
					if (!seen.has(techKey)) {
						seen.add(techKey);
						suggestions.push({
							value: tech,
							category: 'technologies',
							label: categoryLabels.technologies
						});
					}
				});
			});
		});

		return suggestions.sort((a, b) => a.value.localeCompare(b.value));
	});

	// Filter suggestions based on input and already selected tags
	const filteredSuggestions = $derived.by(() => {
		// Filter out already selected tags
		const available = allSuggestions.filter(
			(s) => !selectedTags.some((t) => t.value.toLowerCase() === s.value.toLowerCase() && t.category === s.category)
		);

		if (!inputValue.trim()) return available;

		const query = inputValue.toLowerCase();
		return available.filter((s) => s.value.toLowerCase().includes(query));
	});

	// Group suggestions by category
	const groupedSuggestions = $derived.by(() => {
		const groups: Record<SkillCategory, SkillSuggestion[]> = {
			programming_languages: [],
			spoken_languages: [],
			frameworks: [],
			databases: [],
			cloud_platforms: [],
			tools: [],
			roles: [],
			technologies: []
		};

		filteredSuggestions.forEach((s) => {
			groups[s.category].push(s);
		});

		return groups;
	});

	function addTag(suggestion: SkillSuggestion) {
		const newTag: SearchTag = {
			value: suggestion.value,
			category: suggestion.category
		};
		onTagsChange([...selectedTags, newTag]);
		inputValue = '';
		onTextQueryChange(''); // Clear text query when adding a tag
		inputRef?.focus();
	}

	function removeTag(index: number) {
		const newTags = selectedTags.filter((_, i) => i !== index);
		onTagsChange(newTags);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Backspace' && inputValue === '' && selectedTags.length > 0) {
			removeTag(selectedTags.length - 1);
		} else if (e.key === 'Escape') {
			showDropdown = false;
		}
	}

	function handleInputChange() {
		onTextQueryChange(inputValue);
	}

	function handleFocus() {
		showDropdown = true;
	}

	function handleBlur() {
		// Delay to allow click on dropdown items
		setTimeout(() => {
			showDropdown = false;
		}, 200);
	}
</script>

<div class="relative w-full">
	<div
		class="flex min-h-12 flex-wrap items-center gap-2 rounded-lg border border-base-300 bg-base-100 px-3 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary"
	>
		{#each selectedTags as tag, index}
			<span class="badge badge-outline gap-1 px-3 py-3">
				{tag.value}
				<button
					type="button"
					class="hover:text-base-content/70"
					onclick={() => removeTag(index)}
					aria-label="Remove {tag.value}"
				>
					<X size={14} />
				</button>
			</span>
		{/each}
		<input
			bind:this={inputRef}
			type="text"
			bind:value={inputValue}
			oninput={handleInputChange}
			onkeydown={handleKeydown}
			onfocus={handleFocus}
			onblur={handleBlur}
			placeholder={selectedTags.length === 0 ? 'Search by name, skills, or role...' : 'Add more...'}
			class="min-w-[120px] flex-1 bg-transparent text-sm outline-none placeholder:text-base-content/50"
		/>
	</div>

	{#if showDropdown && filteredSuggestions.length > 0}
		<div
			class="absolute z-50 mt-1 max-h-80 w-full overflow-y-auto rounded-lg border border-base-300 bg-base-100 shadow-lg"
		>
			{#each Object.entries(groupedSuggestions) as [category, suggestions]}
				{#if suggestions.length > 0}
					<div class="border-b border-base-200 last:border-b-0">
						<div class="bg-base-200/50 px-3 py-1.5 text-xs font-semibold text-base-content/70">
							{categoryLabels[category as SkillCategory]}
						</div>
						<div class="p-1">
							{#each suggestions.slice(0, 5) as suggestion}
								<button
									type="button"
									class="w-full rounded px-3 py-1.5 text-left text-sm hover:bg-base-200"
									onclick={() => addTag(suggestion)}
								>
									{suggestion.value}
								</button>
							{/each}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	{/if}
</div>

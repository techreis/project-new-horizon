<script lang="ts">
	let { data, children } = $props();
	import TeamMemberCard from './_components/TeamMemberCard.svelte';

	let searchQuery = $state('');

	const filteredProfiles = $derived(
		Object.entries(data.profiles).filter(([_, content]) =>
			content.basic.name.toLowerCase().includes(searchQuery.toLowerCase())
		)
	);
</script>

<main class="mx-auto flex min-h-[800px] max-w-[1200px] gap-x-[50px] overflow-visible p-[25px]">
	<section class="flex max-h-[800px] min-w-[350px] flex-col gap-y-[20px]">
		<form>
			<input
				type="text"
				bind:value={searchQuery}
				placeholder="Search members, skills, or other keywords..."
				class="w-full rounded-full border border-gray-300 px-4 py-2 text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary"
			/>
		</form>

		<div class="flex max-h-[800px] flex-col gap-y-4 overflow-y-auto">
			{#each filteredProfiles as [filename, content]}
				<TeamMemberCard engineerData={content} />
			{/each}
		</div>
	</section>

	{@render children()}
</main>

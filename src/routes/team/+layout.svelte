<script lang="ts">
	let { data, children } = $props();
	import TeamMemberCard from './_components/TeamMemberCard.svelte';
</script>

<main class="flex min-h-[800px] gap-x-[50px] overflow-visible p-[25px]">
	<!-- SEARCH BAR -->
	<section class=" flex max-h-[800px] min-w-[350px] flex-col gap-y-[20px]">
		<form>
			<input
				type="text"
				placeholder="Search members, skills, or other keywords..."
				class="w-full rounded-full border border-gray-300 px-4 py-2 text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary"
			/>
		</form>

		<!-- RESULTS -->
		<!-- TODO: Refactor into a separate component -->
		<div class="flex max-h-[800px] flex-col gap-y-4 overflow-y-auto">
			{#each Object.entries(data.profiles) as [filename, content]}
				<TeamMemberCard engineerData={content} />
			{/each}
		</div>
	</section>

	<!-- DETAIL VIEW -->
	{@render children()}
</main>

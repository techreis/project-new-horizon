<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/components/ui/Footer/Footer.svelte';
	import TeamMemberCard from './_components/TeamMemberCard.svelte';

	// Example team members data - in practice, this might come from an API or store
	const teamMembers = [
		{
			name: 'Yuta Shimogoshi',
			role: 'CEO - Tech Reis',
			skills: ['AWS', 'GCP', 'React', 'Windows'],
			slug: 'yuta-shimogoshi',
			description:
				'Our distributed team collaborates seamlessly across time zones. We provide flexible work arrangements and robust digital infrastructure to support remote success.'
		},
		{
			name: 'Samuel Short',
			role: 'Global SE',
			skills: ['AWS', 'GCP', 'React', 'Windows'],
			slug: 'samuel-short',
			description: 'Global SE focusing on cloud infrastructure and modern web technologies.'
		}
	];

	// Get the current member from the URL
	$: currentMember =
		teamMembers.find((member) => member.slug === $page.params.slug) || teamMembers[0];
</script>

<main class="flex gap-x-[50px] p-[25px]">
	<!-- SEARCH BAR -->
	<section class="flex w-[500px] flex-col gap-y-[20px]">
		<form>
			<input
				type="text"
				placeholder="Search members, skills, or other keywords..."
				class="w-full rounded-full border border-gray-300 px-4 py-2 text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary"
			/>
		</form>

		<!-- RESULTS -->
		{#each teamMembers as member}
			<TeamMemberCard {member} />
		{/each}
	</section>

	<!-- DETAIL VIEW -->
	<section>
		<div class="flex gap-x-[25px]">
			<div class="bg-red bg-grey h-[80px] w-[80px] rounded-full bg-slate-500" />
			<div class="flex flex-col">
				<h3>{currentMember.name}</h3>
				<h4 class="font-semibold opacity-50">{currentMember.role}</h4>
				<!-- <MarkdownRenderer content="#Hello, world!" /> -->
			</div>
		</div>
		<p>{currentMember.description}</p>
		<div class="grid grid-cols-1 gap-y-[50px] md:grid-cols-3" />
	</section>
</main>

<Footer />

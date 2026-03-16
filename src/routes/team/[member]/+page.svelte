<script lang="ts">
	import { page } from '$app/stores';
	import Tabs from './_components/Tabs.svelte';

	let { data } = $props();
	let memberSlug = $derived($page.params.member ?? '');
	let member = $derived(memberSlug ? data.profiles[memberSlug] : undefined);

	// Generate initials from name
	const initials = $derived(
		member?.basic.name
			.split(' ')
			.map((n) => n[0])
			.join('')
			.toUpperCase()
			.slice(0, 2) ?? ''
	);
</script>

{#if member}
	<section class="flex w-full flex-col gap-y-6">
		<div class="card bg-base-100 p-6 shadow-sm">
			<div class="flex items-start gap-6">
				<div class="avatar placeholder">
					<div class="w-20 rounded-full bg-primary text-white">
						<span class="text-2xl font-bold">{initials}</span>
					</div>
				</div>
				<div class="flex flex-col gap-1">
					<h1 class="text-2xl font-bold">{member.basic.name}</h1>
					<p class="text-lg text-base-content/70">{member.basic.role}</p>
				</div>
			</div>
		</div>
		<Tabs {member} />
	</section>
{:else}
	<section class="flex w-full flex-col items-center justify-center gap-y-4 py-16">
		<div class="text-6xl">?</div>
		<h2 class="text-xl font-semibold">Member not found</h2>
		<p class="text-base-content/60">The team member you're looking for doesn't exist.</p>
	</section>
{/if}

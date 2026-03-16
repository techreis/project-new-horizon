<script lang="ts">
	import { goto } from '$app/navigation';
	import type { EngineerProfile } from '$lib/types';

	type TeamMemberCardProps = {
		engineerData: EngineerProfile;
	};

	let { engineerData }: TeamMemberCardProps = $props();

	function handleClick() {
		goto(`/team/${engineerData.basic.slug}`);
	}

	// Generate initials from name
	const initials = $derived(
		engineerData.basic.name
			.split(' ')
			.map((n) => n[0])
			.join('')
			.toUpperCase()
			.slice(0, 2)
	);

</script>

<div
	class="card card-compact cursor-pointer border border-base-300 bg-base-100 shadow-sm transition-all hover:border-primary hover:shadow-md"
	onclick={handleClick}
	onkeydown={(e) => e.key === 'Enter' && handleClick()}
	role="button"
	tabindex="0"
>
	<div class="card-body">
		<div class="flex items-center gap-3">
			<div class="avatar placeholder">
				<div class="w-12 rounded-full bg-primary text-white">
					<span class="text-lg font-medium">{initials}</span>
				</div>
			</div>
			<div class="flex flex-col">
				<h3 class="card-title text-base">{engineerData.basic.name}</h3>
				<p class="text-sm text-base-content/60">{engineerData.basic.role}</p>
			</div>
		</div>
	</div>
</div>

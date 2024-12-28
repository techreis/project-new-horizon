<script lang="ts">
	let activeTab = 'Profile';
	const tabs = ['Profile', 'Skills', 'Work History'];
</script>

<div class="tabs">
	{#each tabs as tab}
		<div class="tab {tab === activeTab ? 'active' : ''}" on:click={() => (activeTab = tab)}>
			{tab}
		</div>
	{/each}
</div>

<div class="content">
	{#if activeTab === 'Profile'}
		<div>
			<h3>Introduction</h3>
			<p>
				Hello! I’m Samuel Short, a software engineer and consultant with 5 years of experience
				across various industries including healthcare, finance, and logistics. I specialize in
				automating processes, improving UX/UI, and delivering efficient solutions tailored to
				business needs.
			</p>
			<p>
				I’m passionate about helping clients achieve their goals and pride myself on building
				strong, collaborative relationships with team members and clients alike.
			</p>
		</div>
	{:else if activeTab === 'Skills'}
		<div>
			<h3>Skills</h3>
			<ul>
				<li>Frontend Development: HTML, CSS, JavaScript, React, NextJS</li>
				<li>Backend Development: NodeJS, .NET (C#), Azure Functions</li>
				<li>UX/UI: Figma, Storybook, Framer Motion</li>
				<li>Project Management: Agile, Scrum, Client Consultation</li>
			</ul>
		</div>
	{:else if activeTab === 'Work History'}
		<div>
			<h3>Work History</h3>
			<p>2021-Present: Tech Reis - Software Engineer/Consultant</p>
			<p>2018-2021: Freelance - Process Automation Specialist</p>
			<p>2017-2018: XYZ Corp - Junior Developer</p>
		</div>
	{/if}
</div>

<style>
	.tabs {
		display: flex;
		gap: 1rem;
		font-weight: bold;
	}
	.tab {
		cursor: pointer;
	}
	.active {
		text-decoration: underline;
	}
	.content {
		margin-top: 1rem;
	}
</style>

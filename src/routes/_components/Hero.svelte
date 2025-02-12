<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<section class="my-20 grid justify-center align-middle lg:my-0 lg:max-h-[958px]">
	<video
		class="col-start-1 row-start-1 hidden max-h-[958px] w-full object-cover lg:block"
		autoplay
		loop
		muted
	>
		<source src="TechReisPRVideo.mp4" type="video/mp4" />
	</video>
	<div class="z-10 col-start-1 row-start-1 bg-black/0 lg:bg-black/60">
		<div
			class="mx-auto flex h-full max-w-[75rem] flex-col justify-center gap-y-[1.5rem] px-[25px] text-white"
		>
			<h1 class="lg:font-lg text-center font-normal text-black lg:text-left lg:text-white">
				Engineering Excellence,<br />
				From Japan to the World...
			</h1>
			<p class="relative text-center text-black lg:text-left lg:text-white">
				Tech Reis is a modern, innovative technology consultancy based in Tokyo, Japan,
				<br />blending the best of Japanese service and engineering into IT solutions for the 21st
				century.
				<img
					src="japan.webp"
					alt="Stylised dot graphic of map of Japan"
					class="tech-glow-strong absolute -right-[50px] -top-[350px] hidden h-[43.75rem] w-[43.75rem] lg:block"
				/>
			</p>
			<div class="flex justify-center gap-[25px] lg:justify-start">
				<Button
					variant="secondary"
					onclick={() => {
						goto('/team');
					}}>Meet Our Team</Button
				>
				<Button
					variant="secondary"
					onclick={() => {
						goto('/team');
					}}>Our Projects</Button
				>
			</div>
		</div>
	</div>
</section>

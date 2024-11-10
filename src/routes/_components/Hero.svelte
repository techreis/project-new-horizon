<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<section class="grid max-h-[958px]">
	<video class="col-start-1 row-start-1 max-h-[958px] w-full object-cover" autoplay loop muted>
		<source src="TechReisPRVideo.mp4" type="video/mp4" />
	</video>
	<div class="z-10 col-start-1 row-start-1 bg-black/60">
		<div
			class="mx-auto flex h-full max-w-[75rem] flex-col justify-center gap-y-[1.5rem] px-[25px] text-white"
		>
			<h1 class="font-normal">
				Engineering Excellence,<br />
				From Japan to the World...
			</h1>
			<p class="relative">
				Tech Reis is a modern, innovative technology consultancy based in Tokyo, Japan,
				<br />blending the best of Japanese service and engineering into IT solutions for the 21st
				century.
				<img
					src="japan.webp"
					alt="Stylised dot graphic of map of Japan"
					class="tech-glow-strong absolute -right-[50px] -top-[350px] h-[43.75rem] w-[43.75rem]"
				/>
			</p>
			<div class="flex gap-[25px]">
				<Button variant="secondary">Meet Our Team</Button>
				<Button variant="secondary">Our Projects</Button>
			</div>
		</div>
	</div>
</section>

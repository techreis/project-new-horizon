<script lang="ts">
	import ComparisonCard from "./_components/ComparisonCard.svelte";
	import Hero from "./_components/Hero.svelte";
</script>

<Hero />
<main class="max-w-[1200px] mx-auto">
	<section class="flex flex-col items-center py-[100px] gap-y-[50px]">
		<h2>Who are we?</h2>
		<p class="text-center">
			Specialising in a complete suite of full-stack development, UX/UI, and project management,<br/>
			our mission is to blend the long-respected principles of Japanese service and engineering precision into modern,<br/>cutting-edge technology solutions for the 21st century.
		</p>

		<h2>The Tech Reis Difference</h2>
		<div class="flex flex-col lg:flex-row">
			<ComparisonCard title="Our Approach" type="positive" items={[
				{ title: "Japanese Service", description: "We pride ourselves on our commitment to customer service, ensuring that our clients are always satisfied with our work." },
				{ title: "Engineering Excellence", description: "Our team of engineers are some of the best in the industry, with a proven track record of delivering high-quality solutions." },
				{ title: "Innovative Solutions", description: "We are always looking for new ways to improve our services, and are constantly innovating to stay ahead of the curve." }
			]} />
			<ComparisonCard title="Our Approach" type="positive" items={[
				{ title: "Japanese Service", description: "We pride ourselves on our commitment to customer service, ensuring that our clients are always satisfied with our work." },
				{ title: "Engineering Excellence", description: "Our team of engineers are some of the best in the industry, with a proven track record of delivering high-quality solutions." },
				{ title: "Innovative Solutions", description: "We are always looking for new ways to improve our services, and are constantly innovating to stay ahead of the curve." }
			]} />
		</div>
	</section>
</main>
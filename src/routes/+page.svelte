<script lang="ts">
	import { Earth, Rocket, Sprout, Users } from 'lucide-svelte';
	import ComparisonCard from './_components/ComparisonCard.svelte';
	import CultureCard from './_components/CultureCard.svelte';
	import Hero from './_components/Hero.svelte';
</script>

<Hero />
<main>
	<!-- Who are we? -->
	<section class="mx-auto flex max-w-[1200px] flex-col items-center gap-y-[50px] py-[100px]">
		<h2>Who are we?</h2>
		<p class="text-center">
			Specialising in a complete suite of full-stack development, UX/UI, and project management,<br
			/>
			our mission is to blend the long-respected principles of Japanese service and engineering precision
			into modern,<br />cutting-edge technology solutions for the 21st century.
		</p>

		<h2 class="text-center">The Tech Reis Difference</h2>
		<div class="flex flex-col lg:flex-row">
			<ComparisonCard
				title="Standard"
				type="negative"
				items={[
					{
						title: 'Months To Onboard',
						description:
							'Outstanding contracts, notice agreements, or lack of resources mean you could be waiting months to onboard new engineers.'
					},
					{
						title: 'Long-term Commitment',
						description:
							'Internal Employment and company outsourcing typically lock you into long-term inflexible commitments.'
					},
					{
						title: 'Static working schedule',
						description:
							'With all engineers in the same region or timezone, it can reduce flexibility to fix and monitor issues around the clock.'
					}
				]}
			/>
			<ComparisonCard
				title="Tech Reis"
				type="positive"
				items={[
					{
						title: 'Onboard Within Weeks',
						description:
							'Our team members’ are typically available to begin work the following month.'
					},
					{
						title: 'Flexible Commitment',
						description:
							'Once a project is completed or the need for extra resource no longer required, you can end your contract flexibly.'
					},
					{
						title: 'Global Asynchronous Working',
						description:
							'Time zones allow for work to continue around the clock, bug fixes and new features delivered even when your teams are asleep!'
					},
					{
						title: 'Tax Free Development',
						description: '0% Consumption Tax on contracted development.'
					},
					{
						title: 'Broad Specialisations',
						description:
							'Our team specialises across a large range of languages, skills, and technologies, providing you the perfect skills for any job.'
					},
					{
						title: 'Simple Bank Transfer Payments',
						description:
							'Simplified through the use of wise, handled like regular local bank transactions.'
					}
				]}
			/>
		</div>
	</section>

	<!-- Culture Section -->
	<div class="bg-primary">
		<section class="mx-auto flex max-w-[1200px] flex-col items-center gap-y-[50px] py-[100px]">
			<h2 class="text-white">Our Culture</h2>

			<div class="grid gap-[50px] lg:grid-cols-2">
				<!-- Culture Cards -->
				<CultureCard
					title="Agile Development"
					description="We embrace agile methodologies to deliver value quickly. Our development process adapts to changing requirements while maintaining high quality standards and efficient delivery timelines."
					Icon={Rocket}
				/>
				<CultureCard
					title="Fully Remote"
					description="Our distributed team collaborates seamlessly across time zones. We provide flexible work arrangements and robust digital infrastructure to support remote success."
					Icon={Earth}
				/>
				<CultureCard
					title="Growth and Retention"
					description="We invest in our team's professional development through mentorship, training programs, and opportunities to work on challenging projects that expand technical expertise."
					Icon={Sprout}
				/>
				<CultureCard
					title="Technical Support & Consulting"
					description="Our experienced team provides comprehensive technical guidance and solutions, ensuring clients receive expert support throughout their project lifecycle."
					Icon={Users}
				/>
			</div>
		</section>
	</div>

	<!-- Testimonials, Customers, Achievements -->
	<section class="mx-auto flex max-w-[1200px] flex-col items-center gap-y-[50px] p-4 py-[100px]">
		<!-- <h2 class="text-center">Testimonials</h2>
		<div class="mx-auto flex max-w-3xl gap-x-[25px] rounded-lg bg-white p-[25px] shadow-lg">
			<Quote class="h-[24px] w-[24px]" />
			<blockquote class="flex flex-1 flex-col gap-y-[10px]">
				<p class="italic">
					“Specialising in a complete suite of full-stack development, UX/UI, and project
					management, our mission is to blend the long-respected principles of Japanese service and
					engineering precision into modern, cutting-edge technology solutions for the 21st
					century.”
				</p>
				<p class="text-base">
					<span>Yuta Shimogishi</span>
					<br />
					<span class="text-gray-600">CEO - Tech Reis</span>
				</p>
			</blockquote>
		</div> -->

		<!-- Customers -->
		<h2 class="text-center">Customers</h2>
		<div class="flex flex-wrap items-center justify-center gap-8 px-4 lg:grid-cols-6">
			<img
				src="/logos/cellpromote.webp"
				alt="Cell Promote Logo"
				loading="lazy"
				decoding="async"
				class="w-[150px]"
			/>
			<img src="/logos/DXO.webp" alt="DXO Logo" loading="lazy" decoding="async" class="w-[150px]" />
			<img
				src="/logos/edzeal.webp"
				alt="Edzeal Logo"
				loading="lazy"
				decoding="async"
				class="w-[150px]"
			/>
			<img
				src="/logos/joint-crew.webp"
				alt="JointCrew Logo"
				loading="lazy"
				decoding="async"
				class="w-[150px]"
			/>
			<img
				src="/logos/link.webp"
				alt="Link Logo"
				loading="lazy"
				decoding="async"
				class="w-[150px]"
			/>
			<img
				src="/logos/marvel.webp"
				alt="Marvel Logo"
				loading="lazy"
				decoding="async"
				class="w-[150px]"
			/>
			<img
				src="/logos/tj-micro.webp"
				alt="TJ-Mirco Logo"
				loading="lazy"
				decoding="async"
				class="w-[150px]"
			/>
			<img
				src="/logos/zeronetworks.webp"
				alt="ZeroNetworks Logo"
				loading="lazy"
				decoding="async"
				class="w-[150px]"
			/>
		</div>
	</section>
</main>

<script lang="ts">
	import ComparisonCard from "./_components/ComparisonCard.svelte";
	import Hero from "./_components/Hero.svelte";
	import { Rocket, Earth, Sprout, Users } from 'lucide-svelte';
	import CultureCard from "./_components/CultureCard.svelte";
</script>

<Hero />
<main>
  <!-- Who are we? -->
	<section class="max-w-[1200px] mx-auto flex flex-col items-center py-[100px] gap-y-[50px]">
		<h2>Who are we?</h2>
		<p class="text-center">
			Specialising in a complete suite of full-stack development, UX/UI, and project management,<br/>
			our mission is to blend the long-respected principles of Japanese service and engineering precision into modern,<br/>cutting-edge technology solutions for the 21st century.
		</p>

		<h2>The Tech Reis Difference</h2>
		<div class="flex flex-col lg:flex-row">
			<ComparisonCard title="Standard" type="negative" items={[
				{ title: "Months To Onboard", description: "Members are typically available to begin work the following month." },
				{ title: "Long-term Commitment", description: "Members are typically available to begin work the following month." },
				{ title: "Static working schedule", description: "Members are typically available to begin work the following month." }
			]} />
			<ComparisonCard title="Tech Reis" type="positive" items={[
				{ title: "Onboard Within Weeks", description: "Our team members’ are typically available to begin work the following month." },
				{ title: "Flexible Commitment", description: "Once a project is completed or the need for extra resource no longer required, you can end your contract flexibly." },
				{ title: "Global Asynchronous Working", description: "Time zones allow for work to continue around the clock, bug fixes and new features delivered even when your teams are asleep!" },
        { title: "Tax Free Development", description: "0% Consumption Tax on contracted development." },
        { title: "Broad Specialisations", description: "Our team specialises across a large range of languages, skills, and technologies, providing you the perfect skills for any job." },
        { title: "Simple Bank Transfer Payments", description: "Simplified through the use of wise, handled like regular local bank transactions." },
			]} />
		</div>
	</section>

  <!-- Culture Section -->
  <div class="bg-primary">
    <section class="max-w-[1200px] mx-auto flex flex-col items-center py-[100px] gap-y-[50px]">
      <h2 class="text-4xl font-bold text-center mb-12">Our Culture</h2>
      
      <div class="grid md:grid-cols-2 gap-8">
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
  
  <!-- Testimonials -->
  <section class="mb-20">
    <h2 class="text-4xl font-bold text-center mb-12">Testimonials</h2>
    <div class="max-w-3xl mx-auto">
      <blockquote class="bg-white p-8 rounded-lg shadow-lg">
        <p class="text-gray-600 italic mb-4">
          "Our team specializes in full-stack development and project management, delivering modern solutions with precision and innovation."
        </p>
        <footer class="font-semibold">
          - Technical Director
        </footer>
      </blockquote>
    </div>
  </section>

  <!-- Customers -->
  <section class="mb-20">
    <h2 class="text-4xl font-bold text-center mb-12">Customers</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
      <div class="w-32 h-16 bg-gray-100 rounded flex items-center justify-center">Logo 1</div>
      <div class="w-32 h-16 bg-gray-100 rounded flex items-center justify-center">Logo 2</div>
      <div class="w-32 h-16 bg-gray-100 rounded flex items-center justify-center">Logo 3</div>
      <div class="w-32 h-16 bg-gray-100 rounded flex items-center justify-center">Logo 4</div>
      <div class="w-32 h-16 bg-gray-100 rounded flex items-center justify-center">Logo 5</div>
      <div class="w-32 h-16 bg-gray-100 rounded flex items-center justify-center">Logo 6</div>
    </div>
  </section>

  <!-- Achievements -->
  <section class="mb-20">
    <h2 class="text-4xl font-bold text-center mb-12">Achievements</h2>
    <div class="flex justify-center gap-8">
      <div class="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">Badge 1</div>
      <div class="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">Badge 2</div>
      <div class="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">Badge 3</div>
    </div>
  </section>

  <!-- Contact Form -->
  <section class="bg-navy-900 text-white p-8 rounded-lg">
    <h2 class="text-2xl font-bold mb-6">Yes! I want to know more...</h2>
    <p class="mb-6">Get in touch with our friendly team of experts.</p>
    
    <form class="grid md:grid-cols-2 gap-4">
      <input type="text" placeholder="Name *" class="p-2 rounded text-gray-800">
      <input type="email" placeholder="Email *" class="p-2 rounded text-gray-800">
      <input type="text" placeholder="Phone Number *" class="p-2 rounded text-gray-800">
      <input type="text" placeholder="Company *" class="p-2 rounded text-gray-800">
      <textarea placeholder="Comments/Questions" class="md:col-span-2 p-2 rounded text-gray-800"></textarea>
      
      <div class="md:col-span-2">
        <label class="flex items-center gap-2">
          <input type="checkbox" class="rounded">
          <span class="text-sm">I consent to my submitted data being collected and stored</span>
        </label>
      </div>
      
      <button type="submit" class="md:col-span-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  </section>
</main>
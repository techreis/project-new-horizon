<script lang="ts">
	let hasConsented = $state(false);
</script>

<footer class="w-full bg-primary py-[100px]">
	<section class="mx-auto grid w-[1200px] grid-cols-2 p-[10px] text-white">
		<div>
			<h3 class="font-semibold text-white">Yes! I want to know more...</h3>
			<h4 class="mb-6">
				Get in touch with our friendly team of experts.<br />
				Start your digital transformation journey today.
			</h4>
			<div class="flex flex-col gap-y-3">
				<p>
					<span class="font-semibold">Call:</span> (+81)00 0000 0000
				</p>
				<p>
					<span class="font-semibold">Email:</span> enquiries@techreis.co.jp
				</p>
				<p class="font-semibold">
					502 The Prestige Gran, 17-7 Hikawa-cho, Chuo-ku,<br />
					Sagamihara-shi, Kanagawa, Japan
				</p>
			</div>
		</div>

		<form class="grid gap-4 md:grid-cols-2">
			<input type="text" placeholder="Name *" class="rounded p-2 text-gray-800" />
			<input type="email" placeholder="Email *" class="rounded p-2 text-gray-800" />
			<input type="text" placeholder="Phone Number *" class="rounded p-2 text-gray-800" />
			<input type="text" placeholder="Company *" class="rounded p-2 text-gray-800" />
			<input type="text" placeholder="Subject *" class="rounded p-2 text-gray-800 md:col-span-2" />
			<textarea placeholder="Comments/Questions" class="rounded p-2 text-gray-800 md:col-span-2"
			></textarea>

			<div class="md:col-span-2">
				<label class="flex items-center gap-2">
					<input bind:checked={hasConsented} type="checkbox" class="rounded" />
					<span class="text-sm">I consent to my submitted data being collected and stored</span>
				</label>
			</div>

			<button
				type="submit"
				disabled={!hasConsented}
				class="btn btn-primary rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-blue-700/50 disabled:text-white/50 md:col-span-2"
			>
				Submit
			</button>
		</form>
	</section>
</footer>

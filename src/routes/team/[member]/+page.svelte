<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<section>
	<div class="flex gap-x-[25px]">
		<div class="bg-red bg-grey h-[80px] w-[80px] rounded-full bg-slate-500"></div>
		<div class="flex flex-col">
			<h3>{data.member}</h3>
			<h4 class="font-semibold opacity-50">{data.member}</h4>
			<!-- <MarkdownRenderer content="#Hello, world!" /> -->
		</div>
	</div>
	<p>{data.member}</p>
	<div class="grid grid-cols-1 gap-y-[50px] md:grid-cols-3"></div>
</section>

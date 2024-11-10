<script lang="ts">
	interface TagProps {
		text: string;
	}

	let { text }: TagProps = $props();
</script>

<div>
	<span class="inline-block rounded-full bg-white px-[10px] text-black ring-1 ring-primary"
		>{text}</span
	>
</div>

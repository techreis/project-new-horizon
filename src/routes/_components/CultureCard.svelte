<script lang="ts">
	import type { Component } from "svelte";

  interface Props {
    title: string;
    description: string;
    Icon: Component;
  }

  let {title, description, Icon}: Props = $props();
</script>

<div class="p-6 space-y-4 text-white">
  <Icon class="w-[100px] h-[100px] text-white stroke-1"/>
  <h3 class="text-white">{title}</h3>
  <p>{description}</p>
</div>
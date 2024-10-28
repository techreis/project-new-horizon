<script lang="ts">
  import { X, Check } from "lucide-svelte";

  interface Props {
    title: string;
    items: { title: string, description: string }[];
    type: "positive" | "negative";
  }

  let {title, items, type}: Props = $props();
</script>

<div class="flex flex-col p-[25px] gap-y-[25px] flex-1">
  <h3 class="text-center">{title}</h3>
  <div class="flex flex-col gap-y-[25px] p-[10px]">
    {#each items as item}
      <div class="flex">
        {#if type === "positive"}
          <Check class="text-[#35BE32]" />
        {:else if type === "negative"}
          <X class="text-[#BA3F3F]"/>
        {/if}
        <div class="flex flex-col">
          <span class="font-bold">{item.title}</span>
          <p>{item.description}</p>
        </div>
      </div>
      
    {/each}
  </div>
</div>
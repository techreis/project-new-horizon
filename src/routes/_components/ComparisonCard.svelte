<script lang="ts">
  import { X, Check } from "lucide-svelte";

  interface Props {
    title: string;
    items: { title: string, description: string }[];
    type: "positive" | "negative";
  }

  let {title, items, type}: Props = $props();
</script>

<div>
  <h3>{title}</h3>
  <div>
    {#each items as item}
      <div class="flex">
        {#if type === "positive"}
          <Check />
        {:else if type === "negative"}
          <X />
        {/if}
        <div class="flex flex-col">
          <span class="font-bold">{item.title}</span>
          <p>{item.description}</p>
        </div>
      </div>
      
    {/each}
  </div>
</div>
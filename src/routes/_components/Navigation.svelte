<script lang="ts">
  import { Menu, X } from "lucide-svelte/icons";
  import { slide } from 'svelte/transition';
  
  let isMenuOpen = $state(false);
  
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/Company", label: "Tech Reis" },
    { href: "/Team", label: "Our Team" },
    { href: "/Blog", label: "Blog" },
    { href: "/Contact", label: "Let's Talk" }
  ];
  
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav class="fixed w-full flex items-center justify-between p-5 bg-white shadow-md">
  <img src="TechReisLogo.webp" alt="TechReis Company Logo" />
  <ul class="hidden md:flex gap-[2.5rem] pr-[1.5625rem]">
    {#each navItems as item}
      <li><a href={item.href}>{item.label}</a></li>
    {/each}
  </ul>
  <button 
    onclick={toggleMenu}
    class="md:hidden p-2"
    aria-expanded={isMenuOpen}
    aria-controls="mobile-menu"
    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
  >
    {#if isMenuOpen}
      <X />
    {:else}
      <Menu />
    {/if}
  </button>
</nav>

{#if isMenuOpen}
  <div 
    id="mobile-menu"
    class="fixed top-[6.25rem] left-0 w-full bg-white shadow-md md:hidden"
    transition:slide
  >
    <ul class="flex flex-col p-5">
      {#each navItems as item}
        <li class="py-2">
          <a 
            href={item.href} 
            class="block w-full hover:bg-gray-100 p-2 rounded"
            onclick={() => isMenuOpen = false}
          >
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>
{/if}
<script lang="ts">
	import { page } from '$app/stores';
	import { Menu, X } from 'lucide-svelte/icons';
	import { slide } from 'svelte/transition';

	let isMenuOpen = $state(false);

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/company', label: 'Tech Reis' },
		{ href: '/team', label: 'Our Team' },
		{ href: '#', label: 'Blog' },
		{ href: '/contact', label: "Let's Talk" }
	];

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};
</script>

<nav class="fixed z-50 flex w-full items-center justify-between bg-white p-5 shadow-md">
	<img src="/TechReisLogo.webp" alt="TechReis Company Logo" width="200" />
	<ul class="hidden gap-[2.5rem] pr-[1.5625rem] md:flex">
		{#each navItems as item}
			<li>
				<a href={item.href} class={$page.url.pathname === item.href ? 'font-bold' : ''}
					>{item.label}</a
				>
			</li>
		{/each}
	</ul>
	<button
		onclick={toggleMenu}
		class="p-2 md:hidden"
		aria-expanded={isMenuOpen}
		aria-controls="mobile-menu"
		aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
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
		class="fixed left-0 top-[6.25rem] z-50 w-full bg-white shadow-md md:hidden"
		transition:slide
	>
		<ul class="flex flex-col p-5">
			{#each navItems as item}
				<li class="py-2">
					<a
						href={item.href}
						class={`block w-full rounded p-2 hover:bg-gray-100 ${$page.url.pathname === item.href ? 'font-bold' : ''}`}
						onclick={() => (isMenuOpen = false)}
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}

<script lang="ts">
	import { page } from '$app/stores';
	import { ChevronDown, Menu, X } from 'lucide-svelte/icons';
	import { slide } from 'svelte/transition';

	let isMenuOpen = $state(false);
	let isBlogOpen = $state(false);

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/company', label: 'Tech Reis' },
		// { href: '/team', label: 'Our Team' },
		{
			href: '#',
			label: 'Blog',
			submenu: [
				{ href: 'https://note.com/techreis', label: 'Note' },
				{ href: 'https://qiita.com/organizations/techreis', label: 'Qiita' }
			]
		},
		{ href: '/contact', label: "Let's Talk" }
	];

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};
</script>

<nav class="fixed z-50 flex w-full items-center justify-between bg-white p-5 shadow-md">
	<img src="/TechReisLogo.webp" alt="TechReis Company Logo" width="200" />
	<ul class="hidden items-center gap-[2.5rem] pr-[1.5625rem] md:flex">
		{#each navItems as item}
			{#if item.submenu}
				<li class="group relative">
					<button class="flex items-center gap-1">
						{item.label}
						<ChevronDown size={14} class="transition-transform duration-200 group-hover:rotate-180" />
					</button>
					<ul class="invisible absolute left-0 top-full z-10 pt-1 min-w-[140px] rounded-md bg-white shadow-lg group-hover:visible">
						{#each item.submenu as sub}
							<li>
								<a
									href={sub.href}
									target="_blank"
									rel="noopener noreferrer"
									class="block px-4 py-2 text-sm hover:bg-gray-100"
								>{sub.label}</a
								>
							</li>
						{/each}
					</ul>
				</li>
			{:else}
				<li>
					<a href={item.href} class={$page.url.pathname === item.href ? 'font-bold' : ''}
						>{item.label}</a
					>
				</li>
			{/if}
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
					{#if item.submenu}
						<button
							class="flex w-full items-center justify-between rounded p-2 hover:bg-gray-100"
							onclick={() => (isBlogOpen = !isBlogOpen)}
						>
							{item.label}
							<ChevronDown
								size={14}
								class={`transition-transform duration-200${isBlogOpen ? ' rotate-180' : ''}`}
							/>
						</button>
						{#if isBlogOpen}
							<ul transition:slide>
								{#each item.submenu as sub}
									<li>
										<a
											href={sub.href}
											target="_blank"
											rel="noopener noreferrer"
											class="block w-full rounded p-2 pl-6 text-sm hover:bg-gray-100"
											onclick={() => {
												isMenuOpen = false;
												isBlogOpen = false;
											}}
										>
											{sub.label}
										</a>
									</li>
								{/each}
							</ul>
						{/if}
					{:else}
						<a
							href={item.href}
							class={`block w-full rounded p-2 hover:bg-gray-100 ${$page.url.pathname === item.href ? 'font-bold' : ''}`}
							onclick={() => (isMenuOpen = false)}
						>
							{item.label}
						</a>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
{/if}

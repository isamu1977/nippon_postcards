<script lang="ts">
	import { onMount } from "svelte";
	import { tick } from "svelte";
	import favicon from "$lib/assets/favicon.svg";
	import "../app.css";

	import { loadTranslations } from "$lib/translations/translations";

	const defaultLanguage = "fr";

	let navOpen = false;
	const currentYear = new Date().getFullYear();

	onMount(async () => {
		await loadTranslations(defaultLanguage, "/");
	});

	function closeNav() {
		navOpen = false;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="bg-white/80 border-b border-gray-100 backdrop-blur sticky top-0 z-40">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<!-- Logo -->
			<a href="/" class="flex items-center space-x-3 text-gray-900">
				<span class="text-lg font-semibold">Nippon Postcards</span>
				<span class="inline-flex items-center justify-center w-3 h-3 bg-red-600 rounded-full ring-1 ring-red-100"></span>
			</a>

			<!-- Desktop nav -->
			<nav class="hidden md:flex items-center space-x-6 text-sm text-gray-700">
				<a href="/" class="hover:text-gray-900">Home</a>
				<a href="/#how-it-works" class="hover:text-gray-900">How it works</a>
				<a href="/#pricing" class="hover:text-gray-900">Pricing</a>
				<a href="/#faq" class="hover:text-gray-900">FAQ</a>
				<a href="/contact" class="hover:text-gray-900">Contact</a>
			</nav>

			<div class="flex items-center space-x-3">
				<a href="/#pricing" class="hidden md:inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium">
					Choose a postcard
				</a>

				<!-- Mobile menu button -->
				<button class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100" aria-label="Open menu" on:click={() => (navOpen = !navOpen)}>
					{#if navOpen}
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	{#if navOpen}
		<!-- Mobile panel -->
		<div class="md:hidden">
			<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
				<div class="bg-white shadow-md rounded-lg mt-2 p-4">
					<nav class="flex flex-col space-y-2 text-base">
						<a href="/" on:click={closeNav} class="py-2 px-3 rounded hover:bg-gray-50">Home</a>
						<a href="/#how-it-works" on:click={closeNav} class="py-2 px-3 rounded hover:bg-gray-50">How it works</a>
						<a href="/#pricing" on:click={closeNav} class="py-2 px-3 rounded hover:bg-gray-50">Pricing</a>
						<a href="/#faq" on:click={closeNav} class="py-2 px-3 rounded hover:bg-gray-50">FAQ</a>
						<a href="/contact" on:click={closeNav} class="py-2 px-3 rounded hover:bg-gray-50">Contact</a>
						<a href="/#pricing" on:click={closeNav} class="mt-2 inline-block w-full text-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg">Choose a postcard</a>
					</nav>
				</div>
			</div>
		</div>
	{/if}
</header>

<main class="bg-gray-50">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<slot />
	</div>
</main>

<footer class="bg-gray-900 text-gray-300 mt-12">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div>
				<h3 class="text-white font-semibold">Nippon Postcards</h3>
				<p class="mt-3 text-sm text-gray-400">Nippon Postcards – Japanese postcards mailed from Aichi to the world.</p>
			</div>

			<div>
				<h4 class="text-sm font-semibold text-white">Navigate</h4>
				<ul class="mt-3 space-y-2 text-sm">
					<li><a href="/" class="hover:text-white">Home</a></li>
					<li><a href="/#how-it-works" class="hover:text-white">How it works</a></li>
					<li><a href="/#pricing" class="hover:text-white">Pricing</a></li>
					<li><a href="/#faq" class="hover:text-white">FAQ</a></li>
					<li><a href="/contact" class="hover:text-white">Contact</a></li>
				</ul>
			</div>

			<div>
				<h4 class="text-sm font-semibold text-white">Legal</h4>
				<ul class="mt-3 space-y-2 text-sm">
					<li><a href="/privacy" class="hover:text-white">Privacy Policy</a></li>
					<li><a href="/cookies" class="hover:text-white">Cookies Policy</a></li>
					<li><a href="/terms" class="hover:text-white">Terms of Service</a></li>
					<li><a href="/legal/tokushoho" class="hover:text-white">特定商取引法に基づく表記</a></li>
				</ul>
			</div>
		</div>

		<div class="mt-8 border-t border-gray-800 pt-6 text-sm text-gray-400">
			<p>© {currentYear} Nippon Postcards. All rights reserved.</p>
		</div>
	</div>
</footer>

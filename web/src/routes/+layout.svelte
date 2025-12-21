<script lang="ts">
	import { onMount } from "svelte";
	import favicon from "$lib/assets/favicon.svg";
	import "../app.css";

	import { loadTranslations } from "$lib/translations/translations";
	import Header from "$lib/components/layout/Header.svelte";
	import Footer from "$lib/components/layout/Footer.svelte";

	const defaultLanguage = "en";

	onMount(async () => {
		// Ensure default translations are loaded on first render.
		await loadTranslations(defaultLanguage, "/");
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

<main class="bg-gray-50">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<slot />
	</div>
</main>

<Footer />

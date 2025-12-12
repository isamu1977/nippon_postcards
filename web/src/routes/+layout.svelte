<script lang="ts">
	import { onMount } from "svelte";
	import favicon from "$lib/assets/favicon.svg";
	import "../app.css";

	import { loadTranslations } from "$lib/translations/translations";

	const defaultLanguage = "fr";

	onMount(async () => {
		await loadTranslations(defaultLanguage, "/");
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<slot />

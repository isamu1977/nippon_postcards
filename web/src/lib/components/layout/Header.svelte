<script lang="ts">
  import { t, loadTranslations, locale } from "$lib/translations/translations";
  import { totalItems } from "$lib/stores/cart";

  const defaultLanguage = "en";

  let navOpen = false;

  // Ensure default translations are loaded if header used standalone
  // (the root layout also loads translations; this is idempotent)
  (async () => {
    await loadTranslations(defaultLanguage, "/");
  })();

  function closeNav() {
    navOpen = false;
  }

  function handleLocaleChange(e: Event) {
    const v = (e.target as HTMLSelectElement).value;
    locale.set(v);
    loadTranslations(v, "/");
  }
</script>

<header class="bg-white/80 border-b border-gray-100 backdrop-blur sticky top-0 z-40">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="/" class="flex items-center space-x-3 text-gray-900">
        <img src="/images/nippon-logo-colored.png" alt="Logo" class="h-12 w-auto" />
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center space-x-6 text-sm text-gray-700">
        <a href="/" class="hover:text-gray-900">{$t("layout.nav.home")}</a>
        <a href="/#how-it-works" class="hover:text-gray-900">{$t("layout.nav.howItWorks")}</a>
        <a href="/shop" class="hover:text-gray-900">{$t("layout.nav.pricing")}</a>
        <a href="/#faq" class="hover:text-gray-900">{$t("layout.nav.faq")}</a>
        <a href="/contact" class="hover:text-gray-900">{$t("layout.nav.contact")}</a>
      </nav>

      <div class="flex items-center space-x-3">
        <a href="/cart" class="hidden md:inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7h12l-2-7M16 21a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0z"/></svg>
          <span class="text-sm">{$t("layout.nav.cart")}</span>
          {#if $totalItems > 0}
            <span class="ml-1 inline-flex items-center justify-center w-5 h-5 text-xs bg-red-600 text-white rounded-full">{$totalItems}</span>
          {/if}
        </a>

        <a href="/shop" class="hidden md:inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium">
          {$t("layout.nav.choosePostcard")}
        </a>

        <!-- Locale selector -->
        <select aria-label="Language" class="hidden md:inline-flex rounded border px-2 py-1 text-sm" on:change={handleLocaleChange}>
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
          <option value="de">Deutsch</option>
          <option value="it">Italiano</option>
          <option value="pt">Português</option>
        </select>

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
            <a href="/" on:click={closeNav} class="py-2 px-3 rounded hover:bg-gray-50">{$t("layout.nav.home")}</a>
            <a href="/#how-it-works" on:click={closeNav} class="py-2 px-3 rounded hover:bg-gray-50">{$t("layout.nav.howItWorks")}</a>
            <a href="/shop" on:click={closeNav} class="py-2 px-3 rounded hover:bg-gray-50">{$t("layout.nav.pricing")}</a>
            <a href="/#faq" on:click={closeNav} class="py-2 px-3 rounded hover:bg-gray-50">{$t("layout.nav.faq")}</a>
            <a href="/contact" on:click={closeNav} class="py-2 px-3 rounded hover:bg-gray-50">{$t("layout.nav.contact")}</a>
            <a href="/request-deletion" on:click={closeNav} class="py-2 px-3 rounded hover:bg-gray-50">{$t("layout.legal.requestDeletion")}</a>
            <a href="/shop" on:click={closeNav} class="mt-2 inline-block w-full text-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg">{$t("layout.nav.choosePostcard")}</a>
          </nav>
        </div>
      </div>
    </div>
  {/if}
</header>

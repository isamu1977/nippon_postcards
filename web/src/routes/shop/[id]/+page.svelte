<script lang="ts">
  import { page } from "$app/stores";
  import { postcards } from "$lib/data/postcards";
  import { addToCart } from "$lib/stores/cart";
  import { goto } from "$app/navigation";
  import { t } from "$lib/translations/translations";

  $: id = $page.params.id;
  $: postcard = postcards.find((p) => p.id === id) ?? null;

  $: content = postcard ? getCollectionContent(postcard.id) : null;

  function getCollectionContent(collectionId: string) {
    switch (collectionId) {
      case "mount-fuji":
        return {
          longKey: "shopPage.detail.about.collections.mountFuji.long",
          highlightsKey:
            "shopPage.detail.about.collections.mountFuji.highlights",
          perfectForKey:
            "shopPage.detail.about.collections.mountFuji.perfectFor",
        };

      case "japanese-castles":
        return {
          longKey: "shopPage.detail.about.collections.japaneseCastles.long",
          highlightsKey:
            "shopPage.detail.about.collections.japaneseCastles.highlights",
          perfectForKey:
            "shopPage.detail.about.collections.japaneseCastles.perfectFor",
        };

      case "world-heritage":
        return {
          longKey: "shopPage.detail.about.collections.worldHeritage.long",
          highlightsKey:
            "shopPage.detail.about.collections.worldHeritage.highlights",
          perfectForKey:
            "shopPage.detail.about.collections.worldHeritage.perfectFor",
        };

      default:
        return {
          longKey: "shopPage.detail.about.collections.default.long",
          highlightsKey: "shopPage.detail.about.collections.default.highlights",
          perfectForKey: "shopPage.detail.about.collections.default.perfectFor",
        };
    }
  }

  function add() {
    if (postcard) {
      addToCart(postcard);
      goto("/cart");
    }
  }
</script>

{#if postcard}
  <section class="py-12 sm:py-16 lg:py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900">
          {postcard.title}
        </h1>
        <p class="mt-3 text-gray-600">{postcard.description}</p>

        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <div
              class="relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden"
            >
              {#if postcard.image}
                <img
                  src={postcard.image}
                  alt={postcard.imageAlt ?? postcard.title}
                  class="absolute inset-0 h-full w-full object-cover"
                />
              {:else}
                <div class="h-full w-full flex items-center justify-center">
                  <span class="text-gray-400">
                    {$t("shopPage.detail.imagePlaceholder")}
                  </span>
                </div>
              {/if}
            </div>

            <div
              class="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700"
            >
              <div class="font-semibold text-gray-900">
                {$t("shopPage.detail.quickTrust.title")}
              </div>
              <div class="mt-1 text-gray-600">
                {$t("shopPage.detail.quickTrust.description")}
              </div>
            </div>
          </div>

          <div>
            <div class="text-2xl font-extrabold text-gray-900">
              US$ {postcard.price}
            </div>

            <div
              class="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700"
            >
              <span class="font-semibold text-gray-900">
                {$t("shopPage.detail.randomSelection.label")}
              </span>
              {$t("shopPage.detail.randomSelection.text")}
            </div>

            <div class="mt-6 flex items-center space-x-3">
              <button
                class="inline-flex items-center justify-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                on:click={add}
              >
                {$t("shopPage.detail.cta.addToCart")}
              </button>

              <button
                class="inline-flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg text-sm"
                on:click={() => goto("/shop")}
              >
                {$t("shopPage.detail.cta.backToShop")}
              </button>
            </div>

            {#if content}
              <div class="mt-10">
                <h2 class="text-lg font-bold text-gray-900">
                  {$t("shopPage.detail.about.headlineDefault")}
                </h2>

                <p class="mt-2 text-gray-600 leading-relaxed">
                  {$t(content.longKey)}
                </p>

                <h3
                  class="mt-6 text-sm font-semibold text-gray-900 uppercase tracking-wide"
                >
                  {$t("shopPage.detail.about.sections.whatYouReceive")}
                </h3>

                <ul class="mt-3 space-y-2 text-sm text-gray-700">
                  {#each $t(content.highlightsKey) as h}
                    <li class="flex items-start gap-2">
                      <span
                        class="mt-1 h-1.5 w-1.5 rounded-full bg-red-600 shrink-0"
                      ></span>
                      <span>{h}</span>
                    </li>
                  {/each}
                </ul>

                <h3
                  class="mt-6 text-sm font-semibold text-gray-900 uppercase tracking-wide"
                >
                  {$t("shopPage.detail.about.sections.perfectFor")}
                </h3>

                <div class="mt-3 flex flex-wrap gap-2">
                  {#each $t(content.perfectForKey) as tag}
                    <span
                      class="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                    >
                      {tag}
                    </span>
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </section>
{:else}
  <section class="py-12 sm:py-16 lg:py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-xl font-semibold text-gray-900">
          {$t("shopPage.detail.notFound.title")}
        </h2>
        <p class="text-gray-600 mt-2">
          {$t("shopPage.detail.notFound.description")}
        </p>
        <div class="mt-4">
          <button
            class="px-4 py-2 border border-gray-200 rounded-lg"
            on:click={() => goto("/shop")}
          >
            {$t("shopPage.detail.notFound.ctaBackToShop")}
          </button>
        </div>
      </div>
    </div>
  </section>
{/if}

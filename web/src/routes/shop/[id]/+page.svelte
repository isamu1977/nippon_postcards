<script lang="ts">
  import { page } from "$app/stores";
  import { postcards } from "$lib/data/postcards";
  import { addToCart } from "$lib/stores/cart";
  import { goto } from "$app/navigation";

  $: id = $page.params.id;
  $: postcard = postcards.find((p) => p.id === id) ?? null;

  // Collection-specific richer content
  $: content = postcard
    ? getCollectionContent(postcard.id, postcard.title)
    : null;

  function getCollectionContent(collectionId: string, title: string) {
    switch (collectionId) {
      case "mount-fuji":
        return {
          headline: "About this collection",
          long: "Mount Fuji is Japan’s most iconic silhouette. This collection features postcard designs inspired by Fuji across different moods—calm mornings, dramatic skies, and timeless landscapes. Each order is a small surprise selected from the Mount Fuji collection, depending on what’s available.",
          highlights: [
            "1 physical postcard from the Mount Fuji collection",
            "Random design selection (based on stock)",
            "Your message transcribed onto the card",
            "Mailed from Japan with real Japanese stamps",
          ],
          perfectFor: [
            "Japan lovers",
            "Travel dreamers",
            "Minimalist vibes",
            "Collectors",
          ],
        };

      case "japanese-castles":
        return {
          headline: "About this collection",
          long: "Japanese castles are a window into Japan’s history—stone walls, layered roofs, and dramatic silhouettes. This collection celebrates that atmosphere with designs inspired by famous castles around Japan. We select one design at random from the Castles collection based on stock.",
          highlights: [
            "1 physical postcard from the Castles collection",
            "Random design selection (based on stock)",
            "Your message transcribed onto the card",
            "Mailed from Japan with real Japanese stamps",
          ],
          perfectFor: [
            "History fans",
            "Architecture lovers",
            "Japan culture",
            "Gift sending",
          ],
        };

      case "world-heritage":
        return {
          headline: "About this collection",
          long: "Japan’s UNESCO World Heritage sites include both cultural landmarks and breathtaking natural scenery. This collection rotates through designs inspired by World Heritage locations across Japan. Your postcard design is selected at random within the World Heritage collection depending on stock.",
          highlights: [
            "1 physical postcard from the World Heritage collection",
            "Random design selection (based on stock)",
            "Your message transcribed onto the card",
            "Mailed from Japan with real Japanese stamps",
          ],
          perfectFor: [
            "World Heritage fans",
            "Nature + culture",
            "Thoughtful gifts",
            "Pen pals",
          ],
        };

      default:
        return {
          headline: "About this collection",
          long: "You’re choosing a postcard collection. We’ll pick a design at random from this collection depending on stock, then mail it from Japan.",
          highlights: [
            "1 physical postcard from this collection",
            "Random design selection (based on stock)",
            "Your message transcribed onto the card",
            "Mailed from Japan with real Japanese stamps",
          ],
          perfectFor: ["Gifts", "Pen pals", "Japan fans"],
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
                  <span class="text-gray-400">Image placeholder</span>
                </div>
              {/if}
            </div>

            <!-- Optional: quick trust strip -->
            <div
              class="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700"
            >
              <div class="font-semibold text-gray-900">Mailed from Japan</div>
              <div class="mt-1 text-gray-600">
                Stamped with real Japanese stamps and mailed from Aichi
                Prefecture.
              </div>
            </div>
          </div>

          <div>
            <div class="text-2xl font-extrabold text-gray-900">
              US$ {postcard.price}
            </div>

            <!-- Random selection disclosure near CTA -->
            <div
              class="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700"
            >
              <span class="font-semibold text-gray-900">Random selection:</span>
              You’re choosing a collection, not a specific design. We’ll pick a postcard
              design at random from this collection depending on stock.
            </div>

            <div class="mt-6 flex items-center space-x-3">
              <button
                class="inline-flex items-center justify-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                on:click={add}
              >
                Add to cart
              </button>

              <button
                class="inline-flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg text-sm"
                on:click={() => goto("/shop")}
              >
                Back to shop
              </button>
            </div>

            <!-- About + bullets -->
            {#if content}
              <div class="mt-10">
                <h2 class="text-lg font-bold text-gray-900">
                  {content.headline}
                </h2>
                <p class="mt-2 text-gray-600 leading-relaxed">
                  {content.long}
                </p>

                <h3
                  class="mt-6 text-sm font-semibold text-gray-900 uppercase tracking-wide"
                >
                  What you’ll receive
                </h3>
                <ul class="mt-3 space-y-2 text-sm text-gray-700">
                  {#each content.highlights as h}
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
                  Perfect for
                </h3>
                <div class="mt-3 flex flex-wrap gap-2">
                  {#each content.perfectFor as tag}
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
          Collection not found
        </h2>
        <p class="text-gray-600 mt-2">
          The requested collection could not be found.
        </p>
        <div class="mt-4">
          <button
            class="px-4 py-2 border border-gray-200 rounded-lg"
            on:click={() => goto("/shop")}
          >
            Back to shop
          </button>
        </div>
      </div>
    </div>
  </section>
{/if}

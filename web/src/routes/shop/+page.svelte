<script lang="ts">
  import { postcards } from "$lib/data/postcards";
  import { addToCart } from "$lib/stores/cart";
  import { goto } from "$app/navigation";

  let recentlyAddedId: string | null = null;

  function handleAdd(p: (typeof postcards)[number]) {
    addToCart(p);
    recentlyAddedId = p.id;

    setTimeout(() => {
      if (recentlyAddedId === p.id) recentlyAddedId = null;
    }, 5000);
  }
</script>

<section class="py-12 sm:py-16 lg:py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto text-center mb-8">
      <h1 class="text-3xl sm:text-4xl font-bold text-gray-900">
        Choose a Postcard
      </h1>
      <p class="text-gray-600 mt-2">
        Browse our postcard designs and add them to your cart.
      </p>
    </div>

    <div
      class="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700"
    >
      <span class="font-semibold text-gray-900">Random selection:</span>
      You’re choosing a collection, not a specific design. We’ll pick a postcard
      design at random from the selected collection depending on stock.
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each postcards as p}
        <div
          class="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
        >
          <div
            class="relative aspect-[4/3] bg-gray-100 rounded-xl mb-4 overflow-hidden"
          >
            {#if p.image}
              <img
                src={p.image}
                alt={p.imageAlt ?? p.title}
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"
              ></div>
            {:else}
              <div class="h-full w-full flex items-center justify-center">
                <span class="text-gray-400">Image</span>
              </div>
            {/if}
          </div>

          <h3 class="text-lg font-semibold text-gray-900">{p.title}</h3>
          <p class="text-sm text-gray-600 mt-2">{p.description}</p>

          <p class="mt-1 text-xs text-gray-500">
            Random design within the collection (based on stock).
          </p>

          <div class="mt-4 flex items-center justify-between">
            <div class="text-lg font-semibold text-gray-900">US$ {p.price}</div>

            <div class="flex items-center space-x-2">
              <button
                class="text-sm text-red-600 border border-red-600 rounded px-3 py-2 hover:bg-red-50"
                on:click={() => goto(`/shop/${p.id}`)}
              >
                View
              </button>

              <button
                class="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded"
                on:click={() => handleAdd(p)}
              >
                Add to cart
              </button>
            </div>
          </div>

          {#if recentlyAddedId === p.id}
            <div class="mt-3 text-center">
              <a
                href="/cart"
                class="inline-flex items-center justify-center px-10 py-2 bg-red-600 hover:bg-red-40 rounded-lg text-white font-semibold"
              >
                Go to cart
              </a>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

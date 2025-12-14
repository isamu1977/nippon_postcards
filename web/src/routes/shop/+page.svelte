<script lang="ts">
  import { postcards } from "$lib/data/postcards";
  import { addToCart } from "$lib/stores/cart";
  import { goto } from "$app/navigation";
</script>

<section class="py-12 sm:py-16 lg:py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto text-center mb-8">
      <h1 class="text-3xl sm:text-4xl font-bold text-gray-900">Shop postcards</h1>
      <p class="text-gray-600 mt-2">Browse our postcard designs and add them to your cart.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each postcards as p}
        <div class="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-transform">
          <div class="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
            <span class="text-gray-400">Image</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900">{p.title}</h3>
          <p class="text-sm text-gray-600 mt-2">{p.description}</p>
          <div class="mt-4 flex items-center justify-between">
            <div class="text-lg font-semibold text-gray-900">US$ {p.price}</div>
            <div class="flex items-center space-x-2">
              <button class="text-sm text-red-600 border border-red-600 rounded px-3 py-2 hover:bg-red-50" on:click={() => goto(`/shop/${p.id}`)}>View</button>
              <button class="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded" on:click={() => addToCart(p, 1)}>Add to cart</button>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

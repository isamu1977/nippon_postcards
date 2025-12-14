<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { postcards } from "$lib/data/postcards";
  import { addToCart } from "$lib/stores/cart";
  import { goto } from "$app/navigation";

  let postcard = null;
  let qty = 1;

  $: id = $page.params.id;

  onMount(() => {
    postcard = postcards.find((p) => p.id === id) ?? null;
  });

  function add() {
    if (postcard) {
      addToCart(postcard, +qty || 1);
      goto("/cart");
    }
  }
</script>

{#if postcard}
<section class="py-12 sm:py-16 lg:py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-3xl sm:text-4xl font-bold text-gray-900">{postcard.title}</h1>
      <p class="mt-4 text-gray-600">{postcard.description}</p>

      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="h-72 bg-gray-100 rounded-2xl flex items-center justify-center">
          <span class="text-gray-400">Image placeholder</span>
        </div>

        <div>
          <div class="text-2xl font-extrabold text-gray-900">US$ {postcard.price}</div>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700">Quantity</label>
            <input type="number" min="1" bind:value={qty} class="mt-1 block w-24 rounded-md border border-gray-200 px-3 py-2 text-sm" />
          </div>

          <div class="mt-6 flex items-center space-x-3">
            <button class="inline-flex items-center justify-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg" on:click={add}>Add to cart</button>
            <button class="inline-flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg text-sm" on:click={() => goto("/shop")}>Back to shop</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{:else}
<section class="py-12 sm:py-16 lg:py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-xl font-semibold text-gray-900">Postcard not found</h2>
      <p class="text-gray-600 mt-2">The requested postcard could not be found.</p>
      <div class="mt-4">
        <button class="px-4 py-2 border border-gray-200 rounded-lg" on:click={() => goto("/shop")}>Back to shop</button>
      </div>
    </div>
  </div>
</section>
{/if}

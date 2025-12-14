<script lang="ts">
  import { cart, totalItems, totalPrice } from "$lib/stores/cart";
  import { goto } from "$app/navigation";
  let $cart = [];
  cart.subscribe(v => $cart = v);
  let loading = false;

  async function proceed() {
    if ($cart.length === 0) return;
    loading = true;
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ items: $cart })
      });
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        alert("Unable to create checkout session.");
      }
    } catch (err) {
      console.error(err);
      alert("Error creating checkout session.");
    } finally {
      loading = false;
    }
  }
</script>

<section class="py-12 sm:py-16 lg:py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-3xl sm:text-4xl font-bold text-gray-900">Checkout</h1>
      <p class="text-gray-600 mt-2">Review your order and continue to payment.</p>

      <div class="mt-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        {#if $cart.length === 0}
          <div class="text-gray-600">Your cart is empty.</div>
        {:else}
          <div class="space-y-3">
            {#each $cart as item}
              <div class="flex items-center justify-between">
                <div>
                  <div class="font-medium text-gray-900">{item.title} <span class="text-sm text-gray-600">x {item.quantity}</span></div>
                </div>
                <div class="font-semibold text-gray-900">US$ {(item.price * item.quantity).toFixed(2)}</div>
              </div>
            {/each}
          </div>

          <div class="mt-6 text-right">
            <div class="text-sm text-gray-600">Items: {$totalItems}</div>
            <div class="text-2xl font-extrabold text-gray-900">Total: US$ {$totalPrice.toFixed(2)}</div>
          </div>

          <div class="mt-6">
            <button class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg" on:click={proceed} disabled={loading}>
              {#if loading}Processing...{:else}Proceed to Checkout{/if}
            </button>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>

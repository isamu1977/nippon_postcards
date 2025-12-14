<script lang="ts">
  import {
    cart,
    totalItems,
    totalPrice,
    updateQuantity,
    removeFromCart,
    updateItemDetails,
    clearCart,
  } from "$lib/stores/cart";
  import { goto } from "$app/navigation";
</script>

<section class="py-12 sm:py-16 lg:py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-3xl sm:text-4xl font-bold text-gray-900">Your cart</h1>
      <p class="text-gray-600 mt-2">Review items and proceed to checkout.</p>

      {#if $cart.length === 0}
        <div class="mt-8 text-center text-gray-600">Your cart is empty.</div>
        <div class="mt-6 text-center">
          <button
            class="px-4 py-2 bg-red-600 text-white rounded-lg"
            on:click={() => goto("/shop")}>Browse postcards</button
          >
        </div>
      {:else}
        <div class="mt-6 space-y-4">
          {#each $cart as item}
            <div
              class="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
            >
              <div class="flex-1 w-full sm:pr-6">
                <div class="font-semibold text-gray-900">{item.title}</div>
                <div class="text-sm text-gray-600">US$ {item.price} each</div>

                <div class="mt-3">
                  <label class="text-sm text-gray-600 block">Recipient address</label>
                  <input
                    type="text"
                    value={item.recipientAddress ?? ""}
                    on:change={(e) =>
                      updateItemDetails(item.id, {
                        recipientAddress: (e.target as HTMLInputElement).value,
                      })}
                    class="w-full mt-1 rounded-md border border-gray-200 px-2 py-1 text-sm"
                  />
                </div>

                <div class="mt-3">
                  <label class="text-sm text-gray-600 block">Message</label>
                  <textarea
                    rows="3"
                    on:change={(e) =>
                      updateItemDetails(item.id, {
                        message: (e.target as HTMLTextAreaElement).value,
                      })}
                    class="w-full mt-1 rounded-md border border-gray-200 px-2 py-1 text-sm"
                  >{item.message ?? ""}</textarea>
                </div>
              </div>

              <div class="mt-4 sm:mt-0 flex items-center space-x-3">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  on:change={(e) =>
                    updateQuantity(
                      item.id,
                      +(e.target as HTMLInputElement).value,
                    )}
                  class="w-20 rounded-md border border-gray-200 px-2 py-1 text-sm"
                />
                <div class="font-medium text-gray-900">
                  US$ {(item.price * item.quantity).toFixed(2)}
                </div>
                <button
                  class="text-sm text-red-600"
                  on:click={() => removeFromCart(item.id)}>Remove</button
                >
              </div>
            </div>
          {/each}

          <div class="text-right mt-4">
            <div class="text-sm text-gray-600">Items: {$totalItems}</div>
            <div class="text-xl font-extrabold text-gray-900">
              Total: US$ {$totalPrice.toFixed(2)}
            </div>
          </div>

          <div class="mt-6 flex items-center gap-3">
            <button
              class="px-4 py-2 bg-red-600 text-white rounded-lg"
              on:click={() => goto("/checkout")}>Proceed to checkout</button
            >
            <button
              class="px-4 py-2 border border-gray-200 rounded-lg text-sm"
              on:click={clearCart}>Clear cart</button
            >
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>

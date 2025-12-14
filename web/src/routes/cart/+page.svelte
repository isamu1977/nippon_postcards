<script lang="ts">
  import {
    cart,
    totalItems,
    subtotal,
    discountRate,
    discountAmount,
    totalPrice,
    updateQuantity,
    removeFromCart,
    updateItemDetails,
    clearCart,
    coupon,
    applyCoupon,
    clearCoupon,
  } from "$lib/stores/cart";
  import { goto } from "$app/navigation";
  import { onDestroy } from "svelte";

  // Local reactive copies via manual subscription (keeps parity with existing patterns)
  let $cart: any[] = [];
  let $totalItems = 0;
  let $subtotal = 0;
  let $discountRate = 0;
  let $discountAmount = 0;
  let $totalPrice = 0;
  let $coupon: string | null = null;

  const unsubCart = cart.subscribe((v) => ($cart = v));
  const unsubTotalItems = totalItems.subscribe((v) => ($totalItems = v));
  const unsubSubtotal = subtotal.subscribe((v) => ($subtotal = v));
  const unsubDiscountRate = discountRate.subscribe((v) => ($discountRate = v));
  const unsubDiscountAmount = discountAmount.subscribe((v) => ($discountAmount = v));
  const unsubTotalPrice = totalPrice.subscribe((v) => ($totalPrice = v));
  const unsubCoupon = coupon.subscribe((v) => ($coupon = v));

  onDestroy(() => {
    unsubCart();
    unsubTotalItems();
    unsubSubtotal();
    unsubDiscountRate();
    unsubDiscountAmount();
    unsubTotalPrice();
    unsubCoupon();
  });

  // Detect whether prices are stored in cents by inspecting the cart.
  // Heuristic: if any item has an integer price >= 100, treat prices as cents.
  function pricesLookLikeCents(): boolean {
    return $cart.some((i) => Number.isInteger(i.price) && i.price >= 100);
  }

  // Format a price (optionally multiplied by qty) into a dollar string with 2 decimals.
  // If prices are in cents, divide by 100.
  function formatMoney(price: number, qty = 1) {
    const isCents = pricesLookLikeCents();
    const value = isCents ? (price * qty) / 100 : price * qty;
    return value.toFixed(2);
  }

  function formatUnitPrice(price: number) {
    return formatMoney(price, 1);
  }

  // Mirror recipient details from first item to all others when enabled
  let mirrorRecipient = false;

  $: if (mirrorRecipient && $cart.length > 0) {
    const first = $cart[0];
    // apply first's recipient info to the rest
    $cart.slice(1).forEach((it) => {
      updateItemDetails(it.id, {
        recipientName: first.recipientName ?? first.recipientName,
        recipientAddress: first.recipientAddress ?? first.recipientAddress,
      });
    });
  }

  // Coupon form
  let couponInput = $coupon ?? "";

  function applyCouponHandler() {
    const ok = applyCoupon(couponInput);
    if (!ok) {
      alert("Invalid coupon code.");
    } else {
      alert("Coupon applied.");
    }
  }

  function removeCouponHandler() {
    clearCoupon();
    couponInput = "";
  }

  function proceedToCheckout() {
    if ($cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    const missing = $cart.find(
      (i) =>
        !i.recipientAddress ||
        String(i.recipientAddress).trim() === "" ||
        !i.recipientName ||
        String(i.recipientName).trim() === ""
    );
    if (missing) {
      alert("Please provide a recipient name and address for all items before checkout.");
      return;
    }
    goto("/checkout");
  }
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
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <input id="mirror" type="checkbox" bind:checked={mirrorRecipient} class="rounded" />
              <label for="mirror" class="text-sm text-gray-600">Use same recipient for all cards</label>
            </div>

            <div class="flex items-center gap-3">
              <input
                type="text"
                placeholder="Coupon code"
                bind:value={couponInput}
                class="rounded-md border border-gray-200 px-2 py-1 text-sm"
              />
              <button class="px-3 py-1 bg-gray-100 rounded" on:click={applyCouponHandler}>Apply</button>
              <button class="px-3 py-1 rounded border" on:click={removeCouponHandler}>Remove</button>
            </div>
          </div>

          {#each $cart as item}
            <div
              class="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
            >
              <div class="flex-1 w-full sm:pr-6">
                <div class="font-semibold text-gray-900">{item.title}</div>
                <div class="text-sm text-gray-600">US$ {formatUnitPrice(item.price)} each</div>

                <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label class="text-sm text-gray-600 block">Recipient name</label>
                    <input
                      type="text"
                      value={item.recipientName ?? ""}
                      on:input={(e) =>
                        updateItemDetails(item.id, {
                          recipientName: (e.target as HTMLInputElement).value,
                        })}
                      class="w-full mt-1 rounded-md border border-gray-200 px-2 py-1 text-sm"
                    />
                  </div>

                  <div>
                    <label class="text-sm text-gray-600 block">Recipient address</label>
                    <input
                      type="text"
                      value={item.recipientAddress ?? ""}
                      on:input={(e) =>
                        updateItemDetails(item.id, {
                          recipientAddress: (e.target as HTMLInputElement).value,
                        })}
                      class="w-full mt-1 rounded-md border border-gray-200 px-2 py-1 text-sm"
                    />
                  </div>
                </div>

                <div class="mt-3">
                  <label class="text-sm text-gray-600 block">Message</label>
                  <textarea
                    rows="3"
                    value={item.message ?? ""}
                    on:input={(e) =>
                      updateItemDetails(item.id, {
                        message: (e.target as HTMLTextAreaElement).value,
                      })}
                    class="w-full mt-1 rounded-md border border-gray-200 px-2 py-1 text-sm"
                  ></textarea>
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
                  US$ {formatMoney(item.price, item.quantity)}
                </div>
                <button
                  class="text-sm text-red-600"
                  on:click={() => removeFromCart(item.id)}>Remove</button
                >
              </div>
            </div>
          {/each}

          <div class="text-right mt-4 space-y-1">
            <div class="text-sm text-gray-600">Items: {$totalItems}</div>
            <div class="text-sm text-gray-600">Subtotal: US$ {$subtotal.toFixed(2)}</div>
            {#if $discountAmount > 0}
              <div class="text-sm text-gray-600">Discount ({($discountRate * 100).toFixed(0)}%): -US$ {$discountAmount.toFixed(2)}</div>
            {/if}
            <div class="text-xl font-extrabold text-gray-900">
              Total: US$ {$totalPrice.toFixed(2)}
            </div>
          </div>

          <div class="mt-6 flex items-center gap-3">
            <button
              class="px-4 py-2 bg-red-600 text-white rounded-lg"
              on:click={proceedToCheckout}>Proceed to checkout</button
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

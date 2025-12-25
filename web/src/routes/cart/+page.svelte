<script lang="ts">
  import {
    cart,
    totalItems,
    subtotal,
    discountRate,
    discountAmount,
    totalPrice,
    removeFromCart,
    updateItemDetails,
    clearCart,
    coupon,
    applyCoupon,
    clearCoupon,
  } from "$lib/stores/cart";
  import { goto } from "$app/navigation";
  import { get } from "svelte/store";

  // Local UI state (do NOT name any variables starting with $)
  let mirrorRecipient = false;
  let couponInput = (get(coupon) ?? "") as string;

  // Detect whether prices are stored in cents by inspecting the cart.
  // Heuristic: if any item has an integer price >= 100, treat prices as cents.
  function pricesLookLikeCents(): boolean {
    const items = get(cart);
    return items.some((i) => Number.isInteger(i.price) && i.price >= 100);
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

  // When mirrorRecipient is enabled, copy the first item's recipient info to others.
  function onMirrorChange() {
    if (!mirrorRecipient) return;
    const items = get(cart);
    if (!items || items.length <= 1) return;
    const first = items[0];
    items.slice(1).forEach((it) =>
      updateItemDetails(it.id, {
        recipientName: first.recipientName ?? first.recipientName,
        recipientAddress: first.recipientAddress ?? first.recipientAddress,
      }),
    );
  }

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
    const items = get(cart);
    if (!items || items.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    const missing = items.find(
      (i) =>
        !i.recipientAddress ||
        String(i.recipientAddress).trim() === "" ||
        !i.recipientName ||
        String(i.recipientName).trim() === "",
    );
    if (missing) {
      alert(
        "Please provide a recipient name and address for all items before checkout.",
      );
      return;
    }
    goto("/checkout");
  }
</script>

<script lang="ts">
  import { t } from "$lib/translations/translations";
</script>

<section class="py-12 sm:py-16 lg:py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-3xl sm:text-4xl font-bold text-gray-900">
        {$t("cartPage.header.title")}
      </h1>
      <p class="text-gray-600 mt-2">{$t("cartPage.header.subtitle")}</p>

      <!-- Random selection disclosure (short, non-scary) -->
      <div
        class="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700"
      >
        <span class="font-semibold text-gray-900">
          {$t("cartPage.randomSelection.label")}
        </span>
        {$t("cartPage.randomSelection.text")}
      </div>

      {#if $cart.length === 0}
        <div class="mt-8 text-center text-gray-600">
          {$t("cartPage.emptyState.message")}
        </div>
        <div class="mt-6 text-center">
          <button
            class="px-4 py-2 bg-red-600 text-white rounded-lg"
            on:click={() => goto("/shop")}
          >
            {$t("cartPage.emptyState.cta")}
          </button>
        </div>
      {:else}
        <div class="mt-6 space-y-4">
          <div
            class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div class="flex items-center gap-3">
              <input
                id="mirror"
                type="checkbox"
                bind:checked={mirrorRecipient}
                class="rounded"
                on:change={onMirrorChange}
              />
              <label for="mirror" class="text-sm text-gray-600">
                {$t("cartPage.controls.mirrorRecipient")}
              </label>
            </div>

            <div class="flex items-center gap-3">
              <input
                type="text"
                placeholder={$t("cartPage.coupon.placeholder")}
                bind:value={couponInput}
                class="rounded-md border border-gray-200 px-2 py-1 text-sm"
              />
              <button
                class="px-3 py-1 bg-gray-100 rounded"
                on:click={applyCouponHandler}
              >
                {$t("cartPage.coupon.apply")}
              </button>
              <button
                class="px-3 py-1 rounded border"
                on:click={removeCouponHandler}
              >
                {$t("cartPage.coupon.remove")}
              </button>
            </div>
          </div>

          {#each $cart as item}
            <div
              class="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
            >
              <div class="flex-1 w-full sm:pr-6">
                <!-- Header row: image + title -->
                <div class="flex items-start gap-4">
                  {#if item.image}
                    <img
                      src={item.image}
                      alt={item.imageAlt ?? item.title}
                      class="h-20 w-20 rounded-lg object-cover border border-gray-200 bg-gray-50"
                      loading="lazy"
                    />
                  {:else}
                    <div
                      class="h-20 w-20 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center"
                    >
                      <span class="text-xs text-gray-400">
                        {$t("cartPage.item.noImage")}
                      </span>
                    </div>
                  {/if}

                  <div class="min-w-0 flex-1">
                    <div class="font-semibold text-gray-900 truncate">
                      {item.title}
                    </div>
                    <div class="text-sm text-gray-600">
                      {$t("cartPage.item.pricePrefix")}
                      {formatUnitPrice(item.price)}
                      {$t("cartPage.item.priceSuffix")}
                    </div>
                  </div>
                </div>

                <div class="mt-3 grid grid-cols-1 gap-3">
                  <div>
                    <label class="text-sm text-gray-600 block">
                      {$t("cartPage.form.recipientName")}
                    </label>
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
                    <label class="text-sm text-gray-600 block">
                      {$t("cartPage.form.recipientAddress")}
                    </label>
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
                  <label class="text-sm text-gray-600 block">
                    {$t("cartPage.form.message")}
                  </label>
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
                <div class="font-medium text-gray-900">
                  {$t("cartPage.summary.currencyPrefix")}
                  {formatMoney(item.price)}
                </div>
                <button
                  class="text-sm text-red-600"
                  on:click={() => removeFromCart(item.id)}
                >
                  {$t("cartPage.item.remove")}
                </button>
              </div>
            </div>
          {/each}

          <div class="text-right mt-4 space-y-1">
            <div class="text-sm text-gray-600">
              {$t("cartPage.summary.items")}: {$totalItems}
            </div>
            <div class="text-sm text-gray-600">
              {$t("cartPage.summary.subtotal")}:
              {$t("cartPage.summary.currencyPrefix")}
              {$subtotal.toFixed(2)}
            </div>

            {#if $discountAmount > 0}
              <div class="text-sm text-gray-600">
                {$t("cartPage.summary.discount")}
                ({($discountRate * 100).toFixed(0)}%):
                {$t("cartPage.summary.discountPrefix")}
                {$t("cartPage.summary.currencyPrefix")}
                {$discountAmount.toFixed(2)}
              </div>
            {/if}

            <div class="text-xl font-extrabold text-gray-900">
              {$t("cartPage.summary.total")}:
              {$t("cartPage.summary.currencyPrefix")}
              {$totalPrice.toFixed(2)}
            </div>
          </div>

          <div class="mt-6 flex items-center gap-3">
            <button
              class="px-4 py-2 bg-red-600 text-white rounded-lg"
              on:click={proceedToCheckout}
            >
              {$t("cartPage.actions.proceedToCheckout")}
            </button>
            <button
              class="px-4 py-2 border border-gray-200 rounded-lg text-sm"
              on:click={clearCart}
            >
              {$t("cartPage.actions.clearCart")}
            </button>
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>

<script lang="ts">
  import { onMount } from "svelte";
  import {
    cart,
    totalItems,
    subtotal,
    discountRate,
    discountAmount,
    totalPrice,
    coupon,
  } from "$lib/stores/cart";
  import { goto } from "$app/navigation";
  import { t } from "$lib/translations/translations";

  let loading = false;
  let error: string | null = null;

  async function proceed() {
    if ($cart.length === 0) {
      goto("/cart");
      return;
    }

    loading = true;
    error = null;

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          items: $cart,
          coupon: $coupon,
        }),
      });

      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        error = 'checkoutPage.error.unableCreate';
        alert($t(error));
      }
    } catch (err) {
      console.error(err);
      error = 'checkoutPage.error.creating';
      alert($t(error));
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    if ($cart.length === 0) {
      goto("/cart");
      return;
    }
    proceed();
  });
</script>

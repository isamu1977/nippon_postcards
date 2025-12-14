<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { clearCart } from "$lib/stores/cart";

  let sessionId = null;
  $: params = $page.url.searchParams;

  onMount(() => {
    sessionId = params.get("session_id");
    // Clear cart after successful checkout (UI-only)
    clearCart();
  });
</script>

<section class="py-16 sm:py-20 lg:py-24 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-3xl sm:text-4xl font-bold text-gray-900">Thank you — your order is confirmed</h1>
      <p class="mt-4 text-gray-600">We have processed your order. A confirmation will be sent to you by email (when available).</p>

      <div class="mt-6 text-sm text-gray-600">Session: {sessionId}</div>

      <div class="mt-8">
        <a href="/" class="inline-flex items-center justify-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg">Back to homepage</a>
      </div>
    </div>
  </div>
</section>

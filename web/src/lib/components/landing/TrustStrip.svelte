<script lang="ts">
  export let items = [
    "US$ 15 per postcard",
    "Mailed within 24 hours (business days) from Aichi, Japan",
    "Secure payments with Stripe"
  ];
</script>

<section id="trust" class="py-8 sm:py-12 bg-gradient-to-b from-white to-gray-50 border-t border-b border-gray-100">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {#each items as item}
        <div class="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-md">
          <div class="text-sm sm:text-base font-medium text-gray-900">{item}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

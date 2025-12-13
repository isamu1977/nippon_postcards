<script lang="ts">
  export let items = [
    "US$ 15 per postcard",
    "Mailed within 24 hours (business days) from Aichi, Japan",
    "Secure payments with Stripe"
  ];
</script>

<section id="trust" class="py-6 sm:py-8 bg-gray-50">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {#each items as item}
        <div class="bg-white border border-gray-100 rounded-lg p-4 text-center shadow-sm">
          <div class="text-sm font-medium text-gray-900">{item}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

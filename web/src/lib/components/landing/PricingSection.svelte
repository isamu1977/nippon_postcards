<script lang="ts">
  export let pricingInfo = {
    title: "Simple, transparent pricing",
    description: "Each postcard costs US$ 15 with mailing included.",
    discount: "20% off your first order",
    additionalNotes: [
      "Postcards are mailed within 24 business hours from Aichi Prefecture, Japan.",
      "Delivery time depends on the destination country and local postal services."
    ]
  };
</script>

<section id="pricing" class="py-12 sm:py-16 bg-gray-50">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mx-auto text-center mb-8">
      <h2 class="text-2xl font-bold text-gray-900">{pricingInfo.title}</h2>
      <p class="text-gray-600 mt-2">{pricingInfo.description}</p>
    </div>

    <div class="max-w-md mx-auto">
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
        <div class="text-sm text-gray-500">Price</div>
        <div class="mt-3 text-3xl font-extrabold text-gray-900">US$ 15 <span class="text-sm font-medium text-gray-600">per postcard</span></div>

        <div class="mt-6 text-sm text-gray-600">
          <ul class="list-disc list-inside space-y-2">
            {#each pricingInfo.additionalNotes as note}
              <li>{note}</li>
            {/each}
          </ul>
        </div>

        <div class="mt-6">
          <a href="/#hero" class="inline-flex items-center justify-center w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg">Choose a postcard</a>
        </div>

        <div class="mt-4 text-red-600 font-medium">{pricingInfo.discount}</div>
      </div>
    </div>
  </div>
</section>

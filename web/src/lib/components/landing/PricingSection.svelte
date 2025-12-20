<script lang="ts">
  import { t } from "$lib/translations/translations";
</script>

<section id="pricing" class="py-16 sm:py-20 bg-gray-500">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mx-auto text-center mb-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-white">
        {$t("homePage.pricingSection.title")}
      </h2>
      <p class="text-white mt-2 font-semibold">
        {$t("homePage.pricingSection.description")}
      </p>
    </div>

    <div class="max-w-2xl mx-auto">
      <div class="bg-white rounded-2xl shadow-lg border border-gray-900 p-10 text-center">
        <div class=" text-gray-600">
          {$t("homePage.pricingSection.card.label")}
        </div>

        <div class="mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900">
          {$t("homePage.pricingSection.card.price")}
          <span class="text-sm font-medium text-gray-600">
            {$t("homePage.pricingSection.card.unit")}
          </span>
        </div>

        <div class="mt-6 text-sm text-gray-600">
          <ul class="list-disc list-inside space-y-2">
            {#each Array.from({ length: 2 }) as _, i}
              <li>{$t(`homePage.pricingSection.additionalNotes.${i}`)}</li>
            {/each}
          </ul>
        </div>

        <div class="mt-6">
          <a
            href="/shop"
            class="inline-flex items-center justify-center w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold"
          >
            {$t("homePage.pricingSection.card.cta.primary")}
          </a>
        </div>

        <div class="mt-4 text-red-600 font-medium">
          <p>{@html $t("homePage.pricingSection.card.discount")}</p>
          <p class="font-semibold text-xl">{$t("homePage.pricingSection.card.couponName")}</p>
        
        </div>
      </div>
    </div>
  </div>
</section>
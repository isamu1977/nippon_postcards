<script lang="ts">
  import { t } from "$lib/translations/translations";

  // Quantidade de FAQs no JSON
  const faqCount = 6;
</script>

<section id="faq" class="py-16 sm:py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto text-center mb-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">
        {$t("homePage.faqSection.title")}
      </h2>

      <p class="text-gray-600 mt-2">
        {$t("homePage.faqSection.description")}
      </p>
    </div>

    <div class="max-w-3xl mx-auto">
      {#each Array.from({ length: faqCount }) as _, i}
        <div class="border-b border-gray-200 py-5">
          <h4 class="text-sm sm:text-base font-semibold text-gray-900">
            {$t(`homePage.faqSection.items.${i}.question`)}
          </h4>

          <p class="mt-2 text-sm text-gray-600 leading-relaxed">
            {$t(`homePage.faqSection.items.${i}.answer`)}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
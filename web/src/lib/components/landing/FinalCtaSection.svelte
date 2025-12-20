<script lang="ts">
  import { t } from "$lib/translations/translations";
</script>

<section class="py-16 sm:py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto text-center">
      <div class="bg-red-700/95 rounded-2xl p-10 shadow-xl">
        <h2 class="text-3xl sm:text-4xl font-bold">
          {$t("homePage.finalCtaSection.title")}
        </h2>

        <p class="mt-3 text-sm sm:text-base text-red-100">
          {$t("homePage.finalCtaSection.description")}
        </p>

        <div class="mt-6">
          <a
            href="/shop"
            class="inline-flex items-center justify-center px-6 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100"
          >
            {$t("homePage.finalCtaSection.cta.primary")}
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
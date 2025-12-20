<script lang="ts">
  import { t } from "$lib/translations/translations"
  const reasonsCount = 3;
</script>

<section class="py-16 sm:py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">
          {$t("homePage.whyPhysicalSection.title")}
        </h2>

        <p class="mt-4 text-gray-600">
          {$t("homePage.whyPhysicalSection.description")}
        </p>

        <ul class="mt-6 space-y-3 text-gray-600">
          {#each Array.from({ length: reasonsCount }) as _, i}
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></span>
              <span>{$t(`homePage.whyPhysicalSection.reasons.${i}`)}</span>
            </li>
          {/each}
        </ul>
      </div>

      <div>
        <div
          class="w-full aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm"
        >
          <span class="text-gray-400">
            <img src="/images/happy-card02.jpg" alt="Happy card" class="rounded-2xl" />
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
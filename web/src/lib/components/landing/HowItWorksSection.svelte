<script lang="ts">
  import { Images, MapPin, PenTool, Mail } from "@lucide/svelte"

  import { t } from "$lib/translations/translations"

    const steps = [
    { icon: Images },
    { icon: MapPin },
    { icon: PenTool },
    { icon: Mail },
  ];
</script>

<section id="how-it-works" class="py-20 sm:py-28 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="text-sm font-semibold text-red-600 uppercase tracking-wide">
        {$t('homePage.howItWorksSection.eyebrow')}
      </h2>
      <h3 class="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
        {$t('homePage.howItWorksSection.title')}
      </h3>
      <p class="mt-4 text-xl text-gray-500">
        {$t('homePage.howItWorksSection.description')}
      </p>
    </div>

    <div class="relative">
      <!-- Connecting line for desktop -->
      <div
        class="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"
      ></div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">

        {#each steps as step, i}
          <div
            class="relative flex flex-col items-center text-center bg-white md:bg-transparent"
          >
            <div
              class="flex items-center justify-center w-24 h-24 rounded-full bg-red-50 text-red-600 mb-6 border-4 border-white shadow-sm"
            >
              <svelte:component this={step.icon} size={32} strokeWidth={1.5} />
            </div>

            <h4 class="text-lg font-bold text-gray-900 mb-2">
              {$t(`homePage.howItWorksSection.steps.${i}.title`)}
            </h4>

            <p class="text-base text-gray-500 leading-relaxed max-w-xs mx-auto">
              {$t(`homePage.howItWorksSection.steps.${i}.description`)}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

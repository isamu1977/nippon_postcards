<script lang="ts">
  import { ArrowRight } from "@lucide/svelte";
  import { t } from "$lib/translations/translations";

  type CategoryUI = {
    color: string;
    image: string;
    delay: string;
  };

  // Só o "UI" fica aqui (não traduzível)
  const categoriesUI: CategoryUI[] = [
    {
      color: "from-orange-400 to-red-500",
      image: "/images/himeji-castle.png",
      delay: "0",
    },
    {
      color: "from-blue-400 to-indigo-500",
      image: "/images/itsukushima-jinja.png",
      delay: "100",
    },
    {
      color: "from-emerald-400 to-teal-500",
      image: "/images/mount-fuji.png",
      delay: "200",
    },
  ];
</script>

<section class="py-24 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
      <div>
        <h2 class="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          {$t("homePage.categoriesSection.title")}
        </h2>

        <p class="mt-4 text-lg text-gray-500 max-w-2xl">
          {$t("homePage.categoriesSection.description")}
        </p>
      </div>

      <div class="mt-4 md:mt-0">
        <a
          href="/shop"
          class="hidden md:inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors"
        >
          {$t("homePage.categoriesSection.cta.viewAll")}
          <ArrowRight class="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each categoriesUI as category, i}
        <a
          href="/shop"
          class="group relative h-96 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 cursor-pointer bg-white block focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
          aria-label={$t("homePage.categoriesSection.cta.aria.viewCollectionPrefix") +
            $t(`homePage.categoriesSection.categories.${i}.title`)}
        >
          <!-- Image layer -->
          <img
            src={category.image}
            alt={$t(`homePage.categoriesSection.categories.${i}.title`)}
            class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          <div class="absolute inset-0 bg-black/35"></div>

          <div
            class={"absolute inset-0 bg-gradient-to-br " +
              category.color +
              " opacity-55 transition-opacity duration-300 group-hover:opacity-45"}
          ></div>

          <div
            class="absolute inset-0 opacity-10"
            style="background-image: radial-gradient(white 2px, transparent 2px); background-size: 24px 24px;"
          ></div>

          <div class="absolute inset-0 p-8 flex flex-col justify-end">
            <h3 class="text-2xl font-bold text-white mb-2 drop-shadow">
              {$t(`homePage.categoriesSection.categories.${i}.title`)}
            </h3>

            <p class="text-white/90 font-medium mb-6 drop-shadow">
              {$t(`homePage.categoriesSection.categories.${i}.description`)}
            </p>

            <span
              class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white group-hover:bg-white group-hover:text-gray-900 transition-all duration-300"
            >
              <ArrowRight class="w-6 h-6" />
            </span>
          </div>
        </a>
      {/each}
    </div>

    <div class="mt-8 md:hidden text-center">
      <a
        href="/shop"
        class="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors"
      >
        {$t("homePage.categoriesSection.cta.viewAll")}
        <ArrowRight class="ml-2 h-5 w-5" />
      </a>
    </div>
  </div>
</section>
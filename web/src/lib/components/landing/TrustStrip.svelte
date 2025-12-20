<script lang="ts">
  import { Banknote, Clock, ShieldCheck } from "@lucide/svelte";

  import { t } from "$lib/translations/translations";

  export let items = [
    { key: "homePage.trustStrip.items.[0].text", icon: Banknote },
    { key: "homePage.trustStrip.items.[1].text", icon: Clock },
    { key: "homePage.trustStrip.items.[2]text", icon: ShieldCheck },
  ];
</script>

<section id="trust" class="bg-gray-800 border-y border-gray-100">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200"
    >
      {#each items as item}
        <div class="flex flex-col items-center justify-center p-4">
          <div class="text-red-600 font-semibold mb-2 text-2xl">
            <svelte:component this={item.icon} size={28} strokeWidth={1.5} />
          </div>
          <div class="text-base font-medium text-white">{$t(item.key)}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

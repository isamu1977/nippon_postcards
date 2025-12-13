<script lang="ts">
  export let reasons = [
    "A real physical gesture in a digital world.",
    "Real Japanese postage and cancellation marks.",
    "Perfect for Japan lovers, collectors and special occasions."
  ];
</script>

<section class="py-16 sm:py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">Why physical postcards?</h2>
        <p class="mt-4 text-gray-600">A short note on why a real postcard still makes an impact in a digital world.</p>

        <ul class="mt-6 space-y-3 text-gray-600">
          {#each reasons as reason}
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></span>
              <span>{reason}</span>
            </li>
          {/each}
        </ul>
      </div>

      <div>
        <div class="w-full aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm">
          <span class="text-gray-400">Image placeholder</span>
        </div>
      </div>
    </div>
  </div>
</section>

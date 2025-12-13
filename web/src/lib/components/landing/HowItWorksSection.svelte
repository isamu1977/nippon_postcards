<script lang="ts">
  export let steps = [
    { title: "You choose the postcard", description: "Pick a design from our categories: Japanese Castles, Japan World Heritage Sites or Mount Fuji." },
    { title: "We print the address for you", description: "You provide the recipient's address and we print it for maximum legibility and safety." },
    { title: "Your message, personal or suggested", description: "Write your own message or let us use one of our suggested texts." },
    { title: "Stamped and mailed from Japan", description: "We stamp the postcard and mail it from Aichi Prefecture, Japan." }
  ];
</script>

<section id="how-it-works" class="py-12 sm:py-16 lg:py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto text-center mb-8">
      <h2 class="text-2xl font-bold text-gray-900">How it works</h2>
      <p class="text-gray-600 mt-2">A simple flow: you choose, we prepare and mail from Japan.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each steps as step, i}
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div class="flex items-center mb-3">
            <div class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-red-600 font-semibold mr-3">{i + 1}</div>
            <h3 class="text-lg font-semibold text-gray-900">{step.title}</h3>
          </div>
          <p class="text-sm text-gray-600">{step.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

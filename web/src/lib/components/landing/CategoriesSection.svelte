<script lang="ts">
  export let categories = [
    { title: "Japanese Castles", description: "Postcards featuring historic castles across Japan." },
    { title: "Japan World Heritage Sites", description: "Scenes from UNESCO World Heritage sites in Japan." },
    { title: "Mount Fuji", description: "Iconic views of Mount Fuji in different seasons and moods." }
  ];
</script>

<section class="py-16 sm:py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto text-center mb-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">Categories</h2>
      <p class="text-gray-600 mt-2">Explore our postcard collections.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each categories as category}
        <div class="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-transform">
          <h3 class="text-lg font-semibold text-gray-900">{category.title}</h3>
          <p class="text-sm text-gray-600 mt-2">{category.description}</p>
          <div class="mt-4">
            <button class="text-sm text-red-600 border border-red-600 rounded px-3 py-2 hover:bg-red-50">View postcards in this category</button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<script lang="ts">
  export let categories = [
    { title: "Japanese Castles", description: "Postcards featuring historic castles across Japan." },
    { title: "Japan World Heritage Sites", description: "Scenes from UNESCO World Heritage sites in Japan." },
    { title: "Mount Fuji", description: "Iconic views of Mount Fuji in different seasons and moods." }
  ];
</script>

<div class="categories-section">
  {#each categories as category}
    <div class="category-card">
      <h3>{category.title}</h3>
      <p>{category.description}</p>
      <button>View postcards in this category</button>
    </div>
  {/each}
</div>

<style>
  .categories-section {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .category-card {
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
  }
</style>

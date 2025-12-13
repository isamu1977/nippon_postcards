<script lang="ts">
  export let steps = [
    { title: "You choose the postcard", description: "Pick a design from our categories: Japanese Castles, Japan World Heritage Sites or Mount Fuji." },
    { title: "We print the address for you", description: "You provide the recipient's address and we print it for maximum legibility and safety." },
    { title: "Your message, personal or suggested", description: "Write your own message or let us use one of our suggested texts." },
    { title: "Stamped and mailed from Japan", description: "We stamp the postcard and mail it from Aichi Prefecture, Japan." }
  ];
</script>

<div class="how-it-works">
  {#each steps as step}
    <div class="step-card">
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </div>
  {/each}
</div>

<style>
  .how-it-works {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .step-card {
    flex: 1 1 45%;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
  }
</style>

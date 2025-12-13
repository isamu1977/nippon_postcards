<script lang="ts">
  export let reasons = [
    "A real physical gesture in a digital world.",
    "Real Japanese postage and cancellation marks.",
    "Perfect for Japan lovers, collectors and special occasions."
  ];
</script>

<div class="why-physical">
  {#each reasons as reason}
    <div class="reason">{reason}</div>
  {/each}
</div>

<style>
  .why-physical {
    display: flex;
    justify-content: space-around;
  }
  .reason {
    margin: 10px;
  }
</style>

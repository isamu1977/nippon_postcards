<script lang="ts">
  export let items = [
    "US$ 15 per postcard",
    "Mailed within 24 hours (business days) from Aichi, Japan",
    "Secure payments with Stripe"
  ];
</script>

<div class="trust-strip">
  {#each items as item}
    <div class="trust-item">{item}</div>
  {/each}
</div>

<style>
  .trust-strip {
    display: flex;
    justify-content: space-around;
    background-color: #f7f7f7;
    padding: 10px;
  }
  .trust-item {
    margin: 0 10px;
  }
</style>

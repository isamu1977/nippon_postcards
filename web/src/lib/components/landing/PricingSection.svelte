<script lang="ts">
  export let pricingInfo = {
    title: "Simple, transparent pricing",
    description: "Each postcard costs US$ 15 with mailing included.",
    discount: "20% off your first order",
    additionalNotes: [
      "Postcards are mailed within 24 business hours from Aichi Prefecture, Japan.",
      "Delivery time depends on the destination country and local postal services."
    ]
  };
</script>

<div class="pricing-section">
  <h2>{pricingInfo.title}</h2>
  <p>{pricingInfo.description}</p>
  <div class="highlight">{pricingInfo.discount}</div>
  {#each pricingInfo.additionalNotes as note}
    <p>{note}</p>
  {/each}
</div>

<style>
  .pricing-section {
    background-color: #f7f7f7;
    padding: 10px;
  }
  .highlight {
    font-weight: bold;
    color: red;
  }
</style>

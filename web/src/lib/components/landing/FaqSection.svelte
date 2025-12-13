<script lang="ts">
  export let faqs = [
    { question: "Is the postcard sent directly to the recipient?", answer: "Yes. You provide the recipient's address and we mail the postcard directly from Japan." },
    { question: "Can I send the postcard to myself?", answer: "Yes. You can enter your own address and receive the postcard at home." },
    { question: "Is the address handwritten or printed?", answer: "We print the address to ensure maximum legibility and reduce delivery errors." },
    { question: "Who writes the message?", answer: "You can write your own message or choose to use one of our suggested texts." },
    { question: "How long does delivery take?", answer: "It depends on the destination country and postal services, but typically ranges from X to Y weeks." },
    { question: "Does the US$ 15 price include mailing?", answer: "Yes. The price is per postcard, with mailing included." }
  ];
</script>

<div class="faq-section">
  {#each faqs as faq}
    <div class="faq-item">
      <h4>{faq.question}</h4>
      <p>{faq.answer}</p>
    </div>
  {/each}
</div>

<style>
  .faq-section {
    margin: 20px 0;
  }
  .faq-item {
    margin-bottom: 10px;
  }
</style>

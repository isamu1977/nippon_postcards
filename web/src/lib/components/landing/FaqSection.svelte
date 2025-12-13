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

<section id="faq" class="py-12 sm:py-16 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto text-center mb-8">
      <h2 class="text-2xl font-bold text-gray-900">Frequently asked questions</h2>
      <p class="text-gray-600 mt-2">Answers to the most common questions.</p>
    </div>

    <div class="max-w-3xl mx-auto">
      {#each faqs as faq}
        <div class="border-b border-gray-200 py-4">
          <h4 class="text-sm font-semibold text-gray-900">{faq.question}</h4>
          <p class="mt-2 text-sm text-gray-600">{faq.answer}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

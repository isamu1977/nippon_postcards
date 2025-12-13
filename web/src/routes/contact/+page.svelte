<script lang="ts">
  let name = "";
  let email = "";
  let message = "";
  let submitted = false;

  function submitForm() {
    submitted = true;
    // UI-only form for now — no backend attached.
  }
</script>

<section class="py-12 sm:py-16 lg:py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-2xl font-bold text-gray-900">Contact</h1>
      <p class="mt-4 text-gray-600">Have questions or need help? Send us a message and we'll get back to you.</p>

      {#if submitted}
        <div class="mt-6 p-4 bg-green-50 border border-green-100 text-green-800 rounded">Thanks — your message has been noted (UI only).</div>
      {/if}

      <form class="mt-6 space-y-4" on:submit|preventDefault={submitForm}>
        <div>
          <label class="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" bind:value={name} class="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 text-sm" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" bind:value={email} class="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 text-sm" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Message</label>
          <textarea rows="5" bind:value={message} class="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 text-sm"></textarea>
        </div>

        <div>
          <button type="submit" class="inline-flex items-center justify-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg">Send message</button>
        </div>
      </form>
    </div>
  </div>
</section>

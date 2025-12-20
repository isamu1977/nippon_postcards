<script lang="ts">
  const TO_EMAIL = "cyberjapanservices@gmail.com";

  let name = "";
  let fromEmail = "";
  let subject = "";
  let message = "";

  // Honeypot simples (anti-spam básico). Humanos não preenchem.
  let website = "";

  function buildMailto() {
    const cleanSubject = subject?.trim() || "Contact — Nippon Postcards";
    const lines = [
      `Name: ${name || "-"}`,
      `Email: ${fromEmail || "-"}`,
      ``,
      `Message:`,
      message || "-",
      ``,
      `---`,
      `Sent from: https://www.nipponpostcards.com/contact`,
    ];

    const body = lines.join("\n");

    return `mailto:${TO_EMAIL}?subject=${encodeURIComponent(cleanSubject)}&body=${encodeURIComponent(body)}`;
  }

  function handleSend() {
    // se o bot preencher o honeypot, não faz nada
    if (website.trim().length > 0) return;

    // abre cliente de email do usuário
    window.location.href = buildMailto();
  }
</script>

<section class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
  <header class="mb-8">
    <h1
      class="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900"
    >
      Contact
    </h1>
    <p class="mt-3 text-gray-700 leading-relaxed">
      Send us a message. Clicking “Open Email App” will open your email client
      (Gmail/Outlook/Apple Mail) with a pre-filled email.
    </p>
  </header>

  <div
    class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-5"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <label class="space-y-2">
        <span class="text-sm font-semibold text-gray-700">Your name</span>
        <input
          class="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          type="text"
          bind:value={name}
          placeholder="Your name"
          autocomplete="name"
        />
      </label>

      <label class="space-y-2">
        <span class="text-sm font-semibold text-gray-700">Your email</span>
        <input
          class="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          type="email"
          bind:value={fromEmail}
          placeholder="you@example.com"
          autocomplete="email"
        />
      </label>
    </div>

    <label class="space-y-2 block">
      <span class="text-sm font-semibold text-gray-700">Subject</span>
      <input
        class="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
        type="text"
        bind:value={subject}
        placeholder="How can we help?"
      />
    </label>

    <label class="space-y-2 block">
      <span class="text-sm font-semibold text-gray-700">Message</span>
      <textarea
        class="w-full min-h-[140px] rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
        bind:value={message}
        placeholder="Write your message..."
      />
      <p class="text-xs text-gray-500">
        Note: This form does not send messages directly. It opens your email app
        with the message pre-filled.
      </p>
    </label>

    <!-- Honeypot (hidden) -->
    <div class="hidden">
      <label>
        Website
        <input
          type="text"
          bind:value={website}
          tabindex="-1"
          autocomplete="off"
        />
      </label>
    </div>

    <div class="flex flex-col sm:flex-row gap-3 pt-2">
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-lg bg-red-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
        on:click={handleSend}
      >
        Open Email App
      </button>

      <a
        class="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
        href={buildMailto()}
      >
        Open pre-filled email
      </a>
    </div>

    <div class="text-sm text-gray-600">
      Or email us directly:
      <a
        class="text-red-700 underline decoration-red-300 underline-offset-4 hover:text-red-800 font-semibold"
        href="mailto:cyberjapanservices@gmail.com"
      >
        cyberjapanservices@gmail.com
      </a>
    </div>
  </div>
</section>

<script lang="ts">
  import { t } from "$lib/translations/translations";
</script>

<section class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
  <header class="mb-8">
    <h1
      class="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900"
    >
      {$t("contactPage.header.title")}
    </h1>
    <p class="mt-3 text-gray-700 leading-relaxed">
      {$t("contactPage.header.description")}
    </p>
  </header>

  <div
    class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-5"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <label class="space-y-2">
        <span class="text-sm font-semibold text-gray-700">
          {$t("contactPage.form.name.label")}
        </span>
        <input
          class="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          type="text"
          bind:value={name}
          placeholder={$t("contactPage.form.name.placeholder")}
          autocomplete="name"
        />
      </label>

      <label class="space-y-2">
        <span class="text-sm font-semibold text-gray-700">
          {$t("contactPage.form.email.label")}
        </span>
        <input
          class="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          type="email"
          bind:value={fromEmail}
          placeholder={$t("contactPage.form.email.placeholder")}
          autocomplete="email"
        />
      </label>
    </div>

    <label class="space-y-2 block">
      <span class="text-sm font-semibold text-gray-700">
        {$t("contactPage.form.subject.label")}
      </span>
      <input
        class="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
        type="text"
        bind:value={subject}
        placeholder={$t("contactPage.form.subject.placeholder")}
      />
    </label>

    <label class="space-y-2 block">
      <span class="text-sm font-semibold text-gray-700">
        {$t("contactPage.form.message.label")}
      </span>
      <textarea
        class="w-full min-h-[140px] rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
        bind:value={message}
        placeholder={$t("contactPage.form.message.placeholder")}
      />
      <p class="text-xs text-gray-500">
        {$t("contactPage.form.message.note")}
      </p>
    </label>

    <!-- Honeypot (hidden) -->
    <div class="hidden">
      <label>
        {$t("contactPage.honeypot.label")}
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
        {$t("contactPage.actions.openEmailApp")}
      </button>

      <a
        class="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
        href={buildMailto()}
      >
        {$t("contactPage.actions.openPrefilledEmail")}
      </a>
    </div>

    <div class="text-sm text-gray-600">
      {$t("contactPage.footer.orEmailUsDirectly")}
      <a
        class="text-red-700 underline decoration-red-300 underline-offset-4 hover:text-red-800 font-semibold"
        href="mailto:cyberjapanservices@gmail.com"
      >
        cyberjapanservices@gmail.com
      </a>
    </div>
  </div>
</section>

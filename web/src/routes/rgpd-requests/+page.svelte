<script lang="ts">
  import { t } from "$lib/translations/translations";

  const email = "cyberjapanservices@gmail.com";

  type RequestType = "Access" | "Deletion" | "Rectification" | "Unsubscribe";

  function mailtoHref(type: RequestType) {
    const subject = `RGPD Request — ${type}`;
    const body = [
      $t("rgpdRequestsPage.mail.body.greeting"),
      ``,
      $t("rgpdRequestsPage.mail.body.intro"),
      ``,
      `${$t("rgpdRequestsPage.mail.body.requestTypeLabel")} ${type}`,
      ``,
      $t("rgpdRequestsPage.mail.body.emailUsed"),
      $t("rgpdRequestsPage.mail.body.orderNumber"),
      $t("rgpdRequestsPage.mail.body.countryRegion"),
      ``,
      $t("rgpdRequestsPage.mail.body.requestDetails"),
      $t("rgpdRequestsPage.mail.body.bulletPlaceholder"),
      ``,
      $t("rgpdRequestsPage.mail.body.notes"),
      $t("rgpdRequestsPage.mail.body.verifyNote"),
      ``,
      $t("rgpdRequestsPage.mail.body.thanks"),
      $t("rgpdRequestsPage.mail.body.yourName"),
    ].join("\n");

    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const cards: Array<{
    type: RequestType;
    title: string;
    description: string;
    bullets: string[];
    extraLink?: { href: string; label: string };
  }> = [
    {
      type: "Access",
      title: $t("rgpdRequestsPage.cards.access.title"),
      description: $t("rgpdRequestsPage.cards.access.description"),
      bullets: [
        $t("rgpdRequestsPage.cards.access.bullets.0"),
        $t("rgpdRequestsPage.cards.access.bullets.1"),
      ],
    },
    {
      type: "Deletion",
      title: $t("rgpdRequestsPage.cards.deletion.title"),
      description: $t("rgpdRequestsPage.cards.deletion.description"),
      bullets: [
        $t("rgpdRequestsPage.cards.deletion.bullets.0"),
        $t("rgpdRequestsPage.cards.deletion.bullets.1"),
      ],
      extraLink: {
        href: "/request-deletion",
        label: $t("rgpdRequestsPage.cards.deletion.extraLink.label"),
      },
    },
    {
      type: "Rectification",
      title: $t("rgpdRequestsPage.cards.rectification.title"),
      description: $t("rgpdRequestsPage.cards.rectification.description"),
      bullets: [
        $t("rgpdRequestsPage.cards.rectification.bullets.0"),
        $t("rgpdRequestsPage.cards.rectification.bullets.1"),
      ],
    },
    {
      type: "Unsubscribe",
      title: $t("rgpdRequestsPage.cards.unsubscribe.title"),
      description: $t("rgpdRequestsPage.cards.unsubscribe.description"),
      bullets: [
        $t("rgpdRequestsPage.cards.unsubscribe.bullets.0"),
        $t("rgpdRequestsPage.cards.unsubscribe.bullets.1"),
      ],
    },
  ];
</script>

<section class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
  <header class="mb-8">
    <h1
      class="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900"
    >
      {$t("rgpdRequestsPage.header.title")}
    </h1>

    <p class="mt-3 text-gray-700 leading-relaxed max-w-3xl">
      {$t("rgpdRequestsPage.header.description")}
    </p>

    <div
      class="mt-5 rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700"
    >
      <p>
        <span class="font-semibold text-gray-900">
          {$t("rgpdRequestsPage.header.contactEmailLabel")}
        </span>
        <a
          class="text-red-700 underline decoration-red-300 underline-offset-4 hover:text-red-800 font-semibold"
          href={"mailto:" + email}
        >
          {email}
        </a>
      </p>

      <p class="mt-2">
        {$t("rgpdRequestsPage.header.relatedPagesLabel")}
        <a
          class="text-red-700 underline decoration-red-300 underline-offset-4 hover:text-red-800 font-semibold"
          href="/privacy"
        >
          {$t("rgpdRequestsPage.header.relatedPages.privacyPolicy")}
        </a>
        <span class="mx-2 text-gray-400">•</span>
        <a
          class="text-red-700 underline decoration-red-300 underline-offset-4 hover:text-red-800 font-semibold"
          href="/cookies"
        >
          {$t("rgpdRequestsPage.header.relatedPages.cookiePolicy")}
        </a>
        <span class="mx-2 text-gray-400">•</span>
        <a
          class="text-red-700 underline decoration-red-300 underline-offset-4 hover:text-red-800 font-semibold"
          href="/terms"
        >
          {$t("rgpdRequestsPage.header.relatedPages.termsOfUse")}
        </a>
      </p>
    </div>
  </header>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    {#each cards as c}
      <article
        class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
      >
        <div class="flex items-start justify-between gap-4">
          <div>
            <h2 class="text-xl font-bold text-gray-900">{c.title}</h2>
            <p class="mt-2 text-gray-700 leading-relaxed">{c.description}</p>
          </div>

          <span
            class="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700"
          >
            {c.type}
          </span>
        </div>

        <ul class="mt-4 list-disc pl-5 space-y-2 text-sm text-gray-600">
          {#each c.bullets as b}
            <li>{b}</li>
          {/each}
        </ul>

        {#if c.extraLink}
          <p class="mt-4 text-sm">
            <a
              class="text-red-700 underline decoration-red-300 underline-offset-4 hover:text-red-800 font-semibold"
              href={c.extraLink.href}
            >
              {c.extraLink.label}
            </a>
          </p>
        {/if}

        <div class="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            class="inline-flex items-center justify-center rounded-lg bg-red-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
            href={mailtoHref(c.type)}
          >
            {$t("rgpdRequestsPage.cta.emailThisRequest")}
          </a>

          <a
            class="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            href={"mailto:" + email}
          >
            {$t("rgpdRequestsPage.cta.openBlankEmail")}
          </a>
        </div>
      </article>
    {/each}
  </div>

  <footer class="mt-10 text-sm text-gray-600">
    <p class="font-semibold text-gray-900">
      {$t("rgpdRequestsPage.footer.title")}
    </p>
    <ul class="mt-2 list-disc pl-5 space-y-1">
      <li>{$t("rgpdRequestsPage.footer.bullets.0")}</li>
      <li>{$t("rgpdRequestsPage.footer.bullets.1")}</li>
      <li>{$t("rgpdRequestsPage.footer.bullets.2")}</li>
    </ul>
  </footer>
</section>

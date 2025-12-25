<script lang="ts">
  import { t } from "$lib/translations/translations";
</script>

<section class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
  <!-- Header -->
  <header class="mb-8">
    <h1
      class="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900"
    >
      {$t("termsUsePage.header.title")}
    </h1>
    <p class="mt-2 text-sm text-gray-500">
      <span class="font-semibold text-gray-700"
        >{$t("termsUsePage.header.lastUpdated.label")}</span
      >
      {$t("termsUsePage.header.lastUpdated.date")}
    </p>
  </header>

  <!-- Content -->
  <div class="space-y-8 text-gray-800 leading-relaxed">
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("termsUsePage.sections.1.title")}
      </h2>

      <p>
        {$t("termsUsePage.sections.1.p1_beforeSite")}
        <span class="font-semibold"
          >{$t("termsUsePage.sections.1.p1_site")}</span
        >
        {$t("termsUsePage.sections.1.p1_afterSite_beforeTerms")}
        <span class="font-semibold"
          >{$t("termsUsePage.sections.1.p1_terms")}</span
        >
        {$t("termsUsePage.sections.1.p1_afterTerms_beforeService")}
        <span class="font-semibold"
          >{$t("termsUsePage.sections.1.p1_service")}</span
        >
        {$t("termsUsePage.sections.1.p1_afterService")}
      </p>

      <p>
        {$t("termsUsePage.sections.1.p2_beforePrivacy")}
        <span class="font-semibold"
          >{$t("termsUsePage.sections.1.p2_privacyPolicy")}</span
        >{$t("termsUsePage.sections.1.p2_afterPrivacy")}
      </p>

      <p>
        {$t("termsUsePage.sections.1.p3_beforeWeUsOur")}
        <span class="font-semibold"
          >{$t("termsUsePage.sections.1.p3_weUsOur")}</span
        >
        {$t("termsUsePage.sections.1.p3_afterWeUsOur_beforeLocation")}
        <span class="font-semibold"
          >{$t("termsUsePage.sections.1.p3_location")}</span
        >
        {$t("termsUsePage.sections.1.p3_afterLocation_beforeYou")}
        <span class="font-semibold">{$t("termsUsePage.sections.1.p3_you")}</span
        >
        {$t("termsUsePage.sections.1.p3_afterYou")}
      </p>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("termsUsePage.sections.2.title")}
      </h2>
      <ul class="pl-5 list-disc space-y-2">
        {#each Array(4) as _, i}
          <li>{$t(`termsUsePage.sections.2.bullets.${i}`)}</li>
        {/each}
      </ul>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("termsUsePage.sections.3.title")}
      </h2>
      <div class="rounded-xl border border-gray-200 bg-white p-5">
        <ul class="pl-5 list-disc space-y-2">
          {#each Array(5) as _, i}
            <li>{$t(`termsUsePage.sections.3.bullets.${i}`)}</li>
          {/each}
        </ul>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("termsUsePage.sections.4.title")}
      </h2>

      <div class="space-y-6">
        <div class="rounded-xl border border-gray-200 bg-white p-5 space-y-3">
          <h3 class="text-lg font-bold text-gray-900">
            {$t("termsUsePage.sections.4.cards.placingOrders.title")}
          </h3>
          <p>{$t("termsUsePage.sections.4.cards.placingOrders.p")}</p>
        </div>

        <div class="rounded-xl border border-gray-200 bg-white p-5 space-y-3">
          <h3 class="text-lg font-bold text-gray-900">
            {$t("termsUsePage.sections.4.cards.recipientAddress.title")}
          </h3>
          <p>{$t("termsUsePage.sections.4.cards.recipientAddress.p")}</p>
        </div>

        <div class="rounded-xl border border-gray-200 bg-white p-5 space-y-3">
          <h3 class="text-lg font-bold text-gray-900">
            {$t("termsUsePage.sections.4.cards.personalizedMessage.title")}
          </h3>
          <p>{$t("termsUsePage.sections.4.cards.personalizedMessage.p")}</p>
        </div>

        <div class="rounded-xl border border-gray-200 bg-white p-5 space-y-3">
          <h3 class="text-lg font-bold text-gray-900">
            {$t("termsUsePage.sections.4.cards.orderAcceptance.title")}
          </h3>
          <p>{$t("termsUsePage.sections.4.cards.orderAcceptance.p")}</p>
        </div>

        <div class="rounded-xl border border-gray-200 bg-white p-5 space-y-3">
          <h3 class="text-lg font-bold text-gray-900">
            {$t("termsUsePage.sections.4.cards.pricing.title")}
          </h3>
          <p>{$t("termsUsePage.sections.4.cards.pricing.p")}</p>
        </div>

        <div class="rounded-xl border border-gray-200 bg-white p-5 space-y-3">
          <h3 class="text-lg font-bold text-gray-900">
            {$t("termsUsePage.sections.4.cards.payment.title")}
          </h3>
          <p>{$t("termsUsePage.sections.4.cards.payment.p")}</p>
        </div>

        <div class="rounded-xl border border-gray-200 bg-white p-5 space-y-3">
          <h3 class="text-lg font-bold text-gray-900">
            {$t("termsUsePage.sections.4.cards.taxesAndDuties.title")}
          </h3>
          <p>{$t("termsUsePage.sections.4.cards.taxesAndDuties.p")}</p>
        </div>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("termsUsePage.sections.5.title")}
      </h2>
      <ul class="pl-5 list-disc space-y-2">
        <li>
          {$t("termsUsePage.sections.5.bullets.0").replace(
            "1-2 business days",
            $t("termsUsePage.sections.5.businessDaysStrong"),
          )}
        </li>
        <li>{$t("termsUsePage.sections.5.bullets.1")}</li>
        <li>{$t("termsUsePage.sections.5.bullets.2")}</li>
        <li>{$t("termsUsePage.sections.5.bullets.3")}</li>
      </ul>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("termsUsePage.sections.6.title")}
      </h2>
      <div class="rounded-xl border border-gray-200 bg-white p-5">
        <ul class="pl-5 list-disc space-y-2">
          {#each Array(3) as _, i}
            <li>{$t(`termsUsePage.sections.6.bullets.${i}`)}</li>
          {/each}
        </ul>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("termsUsePage.sections.7.title")}
      </h2>
      <p>{$t("termsUsePage.sections.7.p1")}</p>
      <p>{$t("termsUsePage.sections.7.p2")}</p>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("termsUsePage.sections.8.title")}
      </h2>
      <p>{$t("termsUsePage.sections.8.intro")}</p>
      <div class="rounded-xl border border-gray-200 bg-white p-5">
        <ul class="pl-5 list-disc space-y-2">
          {#each Array(9) as _, i}
            <li>{$t(`termsUsePage.sections.8.bullets.${i}`)}</li>
          {/each}
        </ul>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("termsUsePage.sections.9.title")}
      </h2>
      <div class="rounded-xl border border-gray-200 bg-white p-5 space-y-3">
        <p>
          {$t("termsUsePage.sections.9.p1_beforeAsIs")}
          <span class="font-semibold"
            >{$t("termsUsePage.sections.9.p1_asIs")}</span
          >
          {$t("termsUsePage.sections.9.p1_middle")}
          <span class="font-semibold"
            >{$t("termsUsePage.sections.9.p1_asAvailable")}</span
          >
          {$t("termsUsePage.sections.9.p1_after")}
        </p>
        <p>{$t("termsUsePage.sections.9.p2")}</p>
        <p>{$t("termsUsePage.sections.9.p3")}</p>
        <p>{$t("termsUsePage.sections.9.p4")}</p>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("termsUsePage.sections.10.title")}
      </h2>
      <div class="rounded-xl border border-gray-200 bg-white p-5 space-y-3">
        <p>{$t("termsUsePage.sections.10.p")}</p>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("termsUsePage.sections.11.title")}
      </h2>
      <div class="rounded-xl border border-gray-200 bg-white p-5">
        <p>{$t("termsUsePage.sections.11.p")}</p>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("termsUsePage.sections.12.title")}
      </h2>
      <div class="rounded-xl border border-gray-200 bg-white p-5 space-y-3">
        <p>
          {$t("termsUsePage.sections.12.p1_beforeJapan")}
          <span class="font-semibold"
            >{$t("termsUsePage.sections.12.p1_japan")}</span
          >{$t("termsUsePage.sections.12.p1_afterJapan")}
        </p>
        <p>
          {$t("termsUsePage.sections.12.p2_beforeToyohashi")}
          <span class="font-semibold"
            >{$t("termsUsePage.sections.12.p2_toyohashi")}</span
          >{$t("termsUsePage.sections.12.p2_afterToyohashi")}
        </p>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("termsUsePage.sections.13.title")}
      </h2>
      <p>{$t("termsUsePage.sections.13.p")}</p>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("termsUsePage.sections.14.title")}
      </h2>
      <div class="rounded-xl border border-gray-200 bg-white p-5 space-y-3">
        <p>{$t("termsUsePage.sections.14.p1")}</p>
        <p>{$t("termsUsePage.sections.14.p2")}</p>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("termsUsePage.sections.15.title")}
      </h2>
      <p>
        {$t("termsUsePage.sections.15.p_beforeEmail")}
        <a
          class="text-red-700 underline decoration-red-300 underline-offset-4 hover:text-red-800 font-semibold"
          href="mailto:cyberjapanservices@gmail.com"
        >
          {$t("termsUsePage.sections.15.emailText")}
        </a>
        .
      </p>
    </section>
  </div>
</section>

<script lang="ts">
  import { t } from "$lib/translations/translations";
</script>

<section class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
  <!-- Header -->
  <header class="mb-8">
    <h1
      class="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900"
    >
      {$t("cookiesPolicyPage.header.title")}
    </h1>
    <p class="mt-2 text-sm text-gray-500">
      <span class="font-semibold text-gray-700">
        {$t("cookiesPolicyPage.header.lastUpdatedLabel")}
      </span>
      {$t("cookiesPolicyPage.header.lastUpdatedDate")}
    </p>
  </header>

  <!-- Content -->
  <div class="space-y-8 text-gray-800 leading-relaxed">
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("cookiesPolicyPage.sections.introduction.title")}
      </h2>
      <p>{$t("cookiesPolicyPage.sections.introduction.p1")}</p>
      <p>{$t("cookiesPolicyPage.sections.introduction.p2")}</p>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("cookiesPolicyPage.sections.whatAreCookies.title")}
      </h2>
      <p>{$t("cookiesPolicyPage.sections.whatAreCookies.p1")}</p>
      <p>{$t("cookiesPolicyPage.sections.whatAreCookies.p2")}</p>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("cookiesPolicyPage.sections.howWeUseCookies.title")}
      </h2>
      <p>{$t("cookiesPolicyPage.sections.howWeUseCookies.intro")}</p>

      <ul class="mt-2 space-y-3 pl-5 list-disc">
        <li>
          {$t("cookiesPolicyPage.sections.howWeUseCookies.items.essential")}
        </li>
        <li>
          {$t("cookiesPolicyPage.sections.howWeUseCookies.items.analytics")}
        </li>
        <li>
          {$t("cookiesPolicyPage.sections.howWeUseCookies.items.functionality")}
        </li>
        <li>
          {$t("cookiesPolicyPage.sections.howWeUseCookies.items.marketing")}
        </li>
      </ul>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("cookiesPolicyPage.sections.types.title")}
      </h2>
      <p>{$t("cookiesPolicyPage.sections.types.intro")}</p>

      <div class="space-y-6">
        <div class="rounded-xl border border-gray-200 bg-white p-5">
          <h3 class="text-lg font-bold text-gray-900">
            {$t("cookiesPolicyPage.sections.types.strict.title")}
          </h3>
          <p>{$t("cookiesPolicyPage.sections.types.strict.p1")}</p>
          <p>{$t("cookiesPolicyPage.sections.types.strict.p2")}</p>
        </div>

        <div class="rounded-xl border border-gray-200 bg-white p-5">
          <h3 class="text-lg font-bold text-gray-900">
            {$t("cookiesPolicyPage.sections.types.analytics.title")}
          </h3>
          <p>{$t("cookiesPolicyPage.sections.types.analytics.p1")}</p>
          <p>{$t("cookiesPolicyPage.sections.types.analytics.p2")}</p>
          <p>{$t("cookiesPolicyPage.sections.types.analytics.p3")}</p>
        </div>

        <div class="rounded-xl border border-gray-200 bg-white p-5">
          <h3 class="text-lg font-bold text-gray-900">
            {$t("cookiesPolicyPage.sections.types.functionality.title")}
          </h3>
          <p>{$t("cookiesPolicyPage.sections.types.functionality.p1")}</p>
          <p>{$t("cookiesPolicyPage.sections.types.functionality.p2")}</p>
        </div>

        <div class="rounded-xl border border-gray-200 bg-white p-5">
          <h3 class="text-lg font-bold text-gray-900">
            {$t("cookiesPolicyPage.sections.types.marketing.title")}
          </h3>
          <p>{$t("cookiesPolicyPage.sections.types.marketing.p1")}</p>
          <p>{$t("cookiesPolicyPage.sections.types.marketing.p2")}</p>
          <p>{$t("cookiesPolicyPage.sections.types.marketing.p3")}</p>
        </div>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("cookiesPolicyPage.sections.thirdParty.title")}
      </h2>
      <p>{$t("cookiesPolicyPage.sections.thirdParty.p1")}</p>
      <p>{$t("cookiesPolicyPage.sections.thirdParty.p2")}</p>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("cookiesPolicyPage.sections.duration.title")}
      </h2>
      <p>{$t("cookiesPolicyPage.sections.duration.p1")}</p>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("cookiesPolicyPage.sections.manage.title")}
      </h2>
      <p>{$t("cookiesPolicyPage.sections.manage.intro")}</p>

      <div class="rounded-xl border border-gray-200 bg-white p-5 space-y-4">
        <h3 class="text-lg font-bold text-gray-900">
          {$t("cookiesPolicyPage.sections.manage.consentTool.title")}
        </h3>
        <ul class="pl-5 list-disc space-y-2">
          <li>{$t("cookiesPolicyPage.sections.manage.consentTool.li1")}</li>
          <li>{$t("cookiesPolicyPage.sections.manage.consentTool.li2")}</li>
        </ul>
      </div>

      <div class="rounded-xl border border-gray-200 bg-white p-5 space-y-4">
        <h3 class="text-lg font-bold text-gray-900">
          {$t("cookiesPolicyPage.sections.manage.browser.title")}
        </h3>
        <p>{$t("cookiesPolicyPage.sections.manage.browser.p1")}</p>
        <p>{$t("cookiesPolicyPage.sections.manage.browser.p2")}</p>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("cookiesPolicyPage.sections.changes.title")}
      </h2>
      <p>{$t("cookiesPolicyPage.sections.changes.p1")}</p>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("cookiesPolicyPage.sections.contact.title")}
      </h2>
      <p>
        {$t("cookiesPolicyPage.sections.contact.p1")}
        <a
          class="text-red-700 underline decoration-red-300 underline-offset-4 hover:text-red-800 font-semibold"
          href="mailto:cyberjapanservices@gmail.com"
        >
          cyberjapanservices@gmail.com
        </a>
      </p>
    </section>
  </div>
</section>

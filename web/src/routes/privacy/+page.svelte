<script lang="ts">
  import { t } from "$lib/translations/translations";
</script>

<section class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
  <!-- Header -->
  <header class="mb-8">
    <h1
      class="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900"
    >
      {$t("privacyPolicyPage.header.title")}
    </h1>
    <p class="mt-2 text-sm text-gray-500">
      <span class="font-semibold text-gray-700">
        {$t("privacyPolicyPage.header.lastUpdatedLabel")}
      </span>
      {$t("privacyPolicyPage.header.lastUpdatedDate")}
    </p>
  </header>

  <!-- Content -->
  <div class="space-y-8 text-gray-800 leading-relaxed">
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("privacyPolicyPage.sections.introduction.title")}
      </h2>
      <p>{$t("privacyPolicyPage.sections.introduction.p1")}</p>
      <p>{$t("privacyPolicyPage.sections.introduction.p2")}</p>
      <p>{$t("privacyPolicyPage.sections.introduction.p3")}</p>
      <p>{$t("privacyPolicyPage.sections.introduction.p4")}</p>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("privacyPolicyPage.sections.informationCollected.title")}
      </h2>
      <p>{$t("privacyPolicyPage.sections.informationCollected.intro")}</p>

      <div class="rounded-xl border border-gray-200 bg-white p-5 space-y-4">
        <h3 class="text-lg font-bold text-gray-900">
          {$t("privacyPolicyPage.sections.informationCollected.direct.title")}
        </h3>
        <ul class="pl-5 list-disc space-y-2">
          <li>
            {$t(
              "privacyPolicyPage.sections.informationCollected.direct.contact",
            )}
          </li>
          <li>
            {$t(
              "privacyPolicyPage.sections.informationCollected.direct.recipient",
            )}
          </li>
          <li>
            {$t(
              "privacyPolicyPage.sections.informationCollected.direct.message",
            )}
          </li>
          <li>
            {$t(
              "privacyPolicyPage.sections.informationCollected.direct.payment",
            )}
          </li>
          <li>
            {$t(
              "privacyPolicyPage.sections.informationCollected.direct.account",
            )}
          </li>
          <li>
            {$t(
              "privacyPolicyPage.sections.informationCollected.direct.communication",
            )}
          </li>
        </ul>
      </div>

      <div class="rounded-xl border border-gray-200 bg-white p-5 space-y-4">
        <h3 class="text-lg font-bold text-gray-900">
          {$t(
            "privacyPolicyPage.sections.informationCollected.automatic.title",
          )}
        </h3>
        <ul class="pl-5 list-disc space-y-2">
          <li>
            {$t(
              "privacyPolicyPage.sections.informationCollected.automatic.logs",
            )}
          </li>
          <li>
            {$t(
              "privacyPolicyPage.sections.informationCollected.automatic.cookies",
            )}
          </li>
        </ul>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("privacyPolicyPage.sections.useOfInformation.title")}
      </h2>
      <p>{$t("privacyPolicyPage.sections.useOfInformation.intro")}</p>
      <ul class="pl-5 list-disc space-y-2">
        <li>
          {$t("privacyPolicyPage.sections.useOfInformation.items.service")}
        </li>
        <li>
          {$t("privacyPolicyPage.sections.useOfInformation.items.payments")}
        </li>
        <li>
          {$t(
            "privacyPolicyPage.sections.useOfInformation.items.communication",
          )}
        </li>
        <li>
          {$t("privacyPolicyPage.sections.useOfInformation.items.marketing")}
        </li>
        <li>
          {$t("privacyPolicyPage.sections.useOfInformation.items.improvement")}
        </li>
        <li>
          {$t("privacyPolicyPage.sections.useOfInformation.items.security")}
        </li>
        <li>{$t("privacyPolicyPage.sections.useOfInformation.items.legal")}</li>
      </ul>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("privacyPolicyPage.sections.legalBasis.title")}
      </h2>
      <p>{$t("privacyPolicyPage.sections.legalBasis.intro")}</p>
      <ul class="pl-5 list-disc space-y-2">
        <li>{$t("privacyPolicyPage.sections.legalBasis.contract")}</li>
        <li>{$t("privacyPolicyPage.sections.legalBasis.consent")}</li>
        <li>
          {$t("privacyPolicyPage.sections.legalBasis.legitimateInterest")}
        </li>
        <li>{$t("privacyPolicyPage.sections.legalBasis.legalObligation")}</li>
      </ul>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("privacyPolicyPage.sections.sharing.title")}
      </h2>
      <p>{$t("privacyPolicyPage.sections.sharing.intro")}</p>
      <ul class="pl-5 list-disc space-y-2">
        <li>{$t("privacyPolicyPage.sections.sharing.postal")}</li>
        <li>{$t("privacyPolicyPage.sections.sharing.payment")}</li>
        <li>{$t("privacyPolicyPage.sections.sharing.providers")}</li>
        <li>{$t("privacyPolicyPage.sections.sharing.legal")}</li>
        <li>{$t("privacyPolicyPage.sections.sharing.business")}</li>
      </ul>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("privacyPolicyPage.sections.internationalTransfers.title")}
      </h2>
      <p>{$t("privacyPolicyPage.sections.internationalTransfers.p1")}</p>
      <p>{$t("privacyPolicyPage.sections.internationalTransfers.p2")}</p>
      <p>{$t("privacyPolicyPage.sections.internationalTransfers.p3")}</p>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("privacyPolicyPage.sections.security.title")}
      </h2>
      <p>{$t("privacyPolicyPage.sections.security.p1")}</p>
      <p>{$t("privacyPolicyPage.sections.security.p2")}</p>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("privacyPolicyPage.sections.retention.title")}
      </h2>
      <p>{$t("privacyPolicyPage.sections.retention.p1")}</p>
      <p>{$t("privacyPolicyPage.sections.retention.p2")}</p>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("privacyPolicyPage.sections.rights.title")}
      </h2>
      <p>{$t("privacyPolicyPage.sections.rights.intro")}</p>
      <ul class="pl-5 list-disc space-y-2">
        <li>{$t("privacyPolicyPage.sections.rights.access")}</li>
        <li>{$t("privacyPolicyPage.sections.rights.rectification")}</li>
        <li>{$t("privacyPolicyPage.sections.rights.erasure")}</li>
        <li>{$t("privacyPolicyPage.sections.rights.restriction")}</li>
        <li>{$t("privacyPolicyPage.sections.rights.objection")}</li>
        <li>{$t("privacyPolicyPage.sections.rights.portability")}</li>
        <li>{$t("privacyPolicyPage.sections.rights.withdraw")}</li>
        <li>{$t("privacyPolicyPage.sections.rights.complaint")}</li>
      </ul>
      <p>{$t("privacyPolicyPage.sections.rights.note")}</p>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("privacyPolicyPage.sections.cookies.title")}
      </h2>
      <p>{$t("privacyPolicyPage.sections.cookies.p1")}</p>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("privacyPolicyPage.sections.children.title")}
      </h2>
      <p>{$t("privacyPolicyPage.sections.children.p1")}</p>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("privacyPolicyPage.sections.changes.title")}
      </h2>
      <p>{$t("privacyPolicyPage.sections.changes.p1")}</p>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        {$t("privacyPolicyPage.sections.contact.title")}
      </h2>
      <p>{$t("privacyPolicyPage.sections.contact.p1")}</p>
      <p>
        <span class="font-semibold text-gray-900">
          {$t("privacyPolicyPage.sections.contact.byEmail")}
        </span>
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

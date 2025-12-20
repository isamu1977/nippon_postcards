<script lang="ts">
  const email = "cyberjapanservices@gmail.com";

  type RequestType = "Access" | "Deletion" | "Rectification" | "Unsubscribe";

  function mailtoHref(type: RequestType) {
    const subject = `RGPD Request — ${type}`;
    const body = [
      `Hello Nippon Postcards team,`,
      ``,
      `I would like to submit a privacy request under applicable data protection laws.`,
      ``,
      `Request type: ${type}`,
      ``,
      `Email used on the website (if different):`,
      `Order number (if available):`,
      `Country/Region:`,
      ``,
      `Request details:`,
      `- `,
      ``,
      `Notes:`,
      `- I understand you may need to verify my identity before processing this request.`,
      ``,
      `Thank you,`,
      `[Your name]`,
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
      title: "Data Access Request",
      description: "Request a copy of the personal data we hold about you.",
      bullets: [
        "Best if you include your order number",
        "We may ask for identity verification",
      ],
    },
    {
      type: "Deletion",
      title: "Data Deletion Request",
      description:
        "Request deletion of your personal data (“Right to Erasure”).",
      bullets: [
        "Some records may be retained for legal/tax reasons",
        "We’ll explain if exceptions apply",
      ],
      extraLink: {
        href: "/request-deletion",
        label: "Read the deletion policy",
      },
    },
    {
      type: "Rectification",
      title: "Rectify Data Request",
      description:
        "Request correction of inaccurate or incomplete personal information.",
      bullets: [
        "Tell us exactly what is wrong",
        "Provide the correct information",
      ],
    },
    {
      type: "Unsubscribe",
      title: "Unsubscribe Request",
      description: "Stop receiving marketing emails and promotional messages.",
      bullets: [
        "Use the email address you subscribed with",
        "Transactional emails may still be sent",
      ],
    },
  ];
</script>

<section class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
  <header class="mb-8">
    <h1
      class="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900"
    >
      Privacy Requests (RGPD/GDPR)
    </h1>

    <p class="mt-3 text-gray-700 leading-relaxed max-w-3xl">
      Use the options below to contact us by email with a pre-filled template.
      We may need to verify your identity before processing certain requests.
    </p>

    <div
      class="mt-5 rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700"
    >
      <p>
        <span class="font-semibold text-gray-900">Contact email:</span>
        <a
          class="text-red-700 underline decoration-red-300 underline-offset-4 hover:text-red-800 font-semibold"
          href={"mailto:" + email}
        >
          {email}
        </a>
      </p>

      <p class="mt-2">
        Related pages:
        <a
          class="text-red-700 underline decoration-red-300 underline-offset-4 hover:text-red-800 font-semibold"
          href="/privacy"
        >
          Privacy Policy
        </a>
        <span class="mx-2 text-gray-400">•</span>
        <a
          class="text-red-700 underline decoration-red-300 underline-offset-4 hover:text-red-800 font-semibold"
          href="/cookies"
        >
          Cookie Policy
        </a>
        <span class="mx-2 text-gray-400">•</span>
        <a
          class="text-red-700 underline decoration-red-300 underline-offset-4 hover:text-red-800 font-semibold"
          href="/terms"
        >
          Terms of Use
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
            Email this request
          </a>

          <a
            class="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            href={"mailto:" + email}
          >
            Open blank email
          </a>
        </div>
      </article>
    {/each}
  </div>

  <footer class="mt-10 text-sm text-gray-600">
    <p class="font-semibold text-gray-900">Tips to speed up processing</p>
    <ul class="mt-2 list-disc pl-5 space-y-1">
      <li>
        Include the email used during checkout (and order number if available).
      </li>
      <li>
        Be specific about what you want (what data, what correction, etc.).
      </li>
      <li>
        For deletion requests, note that some transaction records may be
        retained for legal/tax compliance.
      </li>
    </ul>
  </footer>
</section>

<script lang="ts">
  import { t } from "$lib/translations/translations";
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-gray-900 text-gray-300 mt-12">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 class="text-white font-semibold">{$t("siteTitle")}</h3>
        <p class="mt-3 text-sm text-gray-400">{$t("footer.tagline")}</p>
      </div>

      <div>
        <h4 class="text-sm font-semibold text-white">{$t("footer.navigateTitle")}</h4>
        <ul class="mt-3 space-y-2 text-sm">
          <li><a href="/" class="hover:text-white">{$t("nav.home")}</a></li>
          <li><a href="/#how-it-works" class="hover:text-white">{$t("nav.howItWorks")}</a></li>
          <li><a href="/#pricing" class="hover:text-white">{$t("nav.pricing")}</a></li>
          <li><a href="/#faq" class="hover:text-white">{$t("nav.faq")}</a></li>
          <li><a href="/contact" class="hover:text-white">{$t("nav.contact")}</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-sm font-semibold text-white">{$t("footer.legalTitle")}</h4>
        <ul class="mt-3 space-y-2 text-sm">
          <li><a href="/privacy" class="hover:text-white">{$t("legal.privacy")}</a></li>
          <li><a href="/cookies" class="hover:text-white">{$t("legal.cookies")}</a></li>
          <li><a href="/terms" class="hover:text-white">{$t("legal.terms")}</a></li>
          <li><a href="/rgpd-requests" class="hover:text-white">{$t("legal.requests")}</a></li>
          <li><a href="/request-deletion" class="hover:text-white">{$t("legal.requestDeletion")}</a></li>
          <li><a href="/legal/tokushoho" class="hover:text-white">{$t("legal.tokushoho")}</a></li>
        </ul>
      </div>
    </div>

    <div class="mt-8 border-t border-gray-800 pt-6 text-sm text-gray-400">
      <p>© {currentYear} {$t("siteTitle")}. {$t("footer.rights")}</p>
    </div>
  </div>
</footer>

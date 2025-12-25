import i18n from 'sveltekit-i18n';

const localesList = ['de', 'en', 'es', 'fr', 'it', 'pt'] as const;

// Ignore common.json
const keys = [
  'homePage',
  'layout',
  'cartPage',
  'contactPage',
  'cookiesPolicyPage',
  'orderSuccessPage',
  'privacyPolicyPage',
  'requestDeletionPage',
  'rgpdRequestsPage',
  'shopPage',
  'termsUsePage',
  'tokushohoPage',
  'checkoutPage',
] as const;

type Locale = typeof localesList[number];
type Key = typeof keys[number];

function createLoaders(locales: readonly Locale[], pageKeys: readonly Key[]) {
  return locales.flatMap((locale) =>
    pageKeys.map((key) => ({
      locale,
      key,
      loader: async () => (await import(`./${locale}/${key}.json`)).default,
    }))
  );
}

/** @type {import('sveltekit-i18n').Config} */
const config = {
  loaders: createLoaders(localesList, keys),
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
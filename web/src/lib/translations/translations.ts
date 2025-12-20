import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = ({
  loaders: [
    {
      locale: 'de',
      key: 'common',
      loader: async () => (
        await import('./de/common.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'common',
      loader: async () => (
        await import('./en/common.json')
      ).default,
    },
    {
      locale: 'es',
      key: 'common',
      loader: async () => (
        await import('./es/common.json')
      ).default,
    },
    {
      locale: 'fr',
      key: 'common',
      loader: async () => (
        await import('./fr/common.json')
      ).default,
    },
    {
      locale: 'it',
      key: 'common',
      loader: async () => (
        await import('./it/common.json')
      ).default,
    },
    {
      locale: 'pt',
      key: 'common',
      loader: async () => (
        await import('./pt/common.json')
      ).default,
    },
  ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config)

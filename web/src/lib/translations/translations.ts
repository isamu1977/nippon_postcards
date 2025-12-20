import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = ({
  loaders: [
    {
      locale: 'de',
      key: 'homePage',
      loader: async () => (
        await import('./de/homePage.json')
      ).default,
    },
    {
      locale: 'de',
      key: 'layout',
      loader: async () => (
        await import('./de/layout.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'homePage',
      loader: async () => (
        await import('./en/homePage.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'layout',
      loader: async () => (
        await import('./en/layout.json')
      ).default,
    },
    {
      locale: 'es',
      key: 'homePage',
      loader: async () => (
        await import('./es/homePage.json')
      ).default,
    },
    {
      locale: 'fr',
      key: 'homePage',
      loader: async () => (
        await import('./fr/homePage.json')
      ).default,
    },
    {
      locale: 'it',
      key: 'homePage',
      loader: async () => (
        await import('./it/homePage.json')
      ).default,
    },
    {
      locale: 'pt',
      key: 'homePage',
      loader: async () => (
        await import('./pt/homePage.json')
      ).default,
    },
  
  
  
  
  ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config)

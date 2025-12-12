# Change: Initial Landing Page for Nippon Postcards

## Why

We need a clear, focused landing page that introduces Nippon Postcards, showcases a curated selection of Japanese postcards, and guides visitors toward exploring the catalog and starting an order. This is the primary entry point for the product.

## What Changes

- Add a localized landing page at route `/` in the `web` SvelteKit app.
- Implement a hero section with title, subtitle, and primary CTA.
- Implement a featured postcard grid section with example postcards.
- Implement a footer with basic navigation and language selector.
- Wire the page to use the existing i18n setup (`sveltekit-i18n`) and translation keys.

## Impact

- **Specs affected**
  - `frontend/landing-page`
- **Code affected (expected)**
  - `web/src/routes/+layout.svelte` (if needed for layout structure and i18n)
  - `web/src/routes/+page.svelte` (landing page content)
  - `web/src/lib/translations/...` (translation JSON files or config)
  - Optional shared UI components under `web/src/lib/components/*` for hero, grid, footer

## Notes

- This change focuses only on static content and navigation, not on full e‑commerce flows (cart, checkout, user accounts).
- Styling should use Tailwind CSS 4 and existing design tokens defined in `web/src/app.css`.
- The default language can be `en`, but the page must be ready for multiple locales (fr, pt, etc.).
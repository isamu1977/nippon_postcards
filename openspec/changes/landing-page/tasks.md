## 1. Specification & i18n Keys

- [ ] 1.1 Ensure `frontend/landing-page` spec file exists under `openspec/specs` after archive.
- [ ] 1.2 Define translation keys for the landing page:
  - `common.heroTitle`
  - `common.heroSubtitle`
  - `common.heroCtaPrimary`
  - `common.heroCtaSecondary` (optional)
  - `landing.featuredSectionTitle`
  - `landing.featuredSectionSubtitle`
  - `landing.footerAbout`
  - `landing.footerContact`
  - `landing.footerLanguageLabel`
- [ ] 1.3 Add these keys at least for `en` and one additional language (e.g. `fr` or `pt`).

## 2. SvelteKit Routing & Layout

- [ ] 2.1 Keep the root route `/` as the main landing page using `web/src/routes/+page.svelte`.
- [ ] 2.2 Ensure `+layout.svelte` correctly loads translations for the default language on mount.
- [ ] 2.3 Confirm that `$t(...)` can be used inside `+page.svelte` without runtime errors.

## 3. Landing Page Layout

- [ ] 3.1 Implement a hero section at the top of `+page.svelte`:
  - Large localized headline (uses `common.heroTitle`).
  - Localized subtitle (uses `common.heroSubtitle`).
  - Primary CTA button (uses `common.heroCtaPrimary`).
- [ ] 3.2 Implement a featured postcard grid section:
  - Show at least 6 sample postcards.
  - Each card shows image placeholder (can be static for now), localized title, and price.
- [ ] 3.3 Implement a footer:
  - Localized “About” and “Contact” links or text.
  - Label for language selector (e.g. `landing.footerLanguageLabel`).

## 4. Styling & Responsiveness

- [ ] 4.1 Use Tailwind CSS 4 utilities and existing design tokens from `app.css`.
- [ ] 4.2 Ensure mobile‑first design:
  - Hero content readable on small screens.
  - Grid becomes single‑column on narrow viewports.
- [ ] 4.3 On large screens, postcard grid uses at least 3 columns.

## 5. Validation & Cleanup

- [ ] 5.1 Run `npm run check` in `web/` and ensure 0 errors.
- [ ] 5.2 Run `npm run dev` and visually verify layout in at least mobile and desktop widths.
- [ ] 5.3 Run `openspec validate landing-page --strict` and ensure spec formatting passes.
- [ ] 5.4 When implementation is complete and deployed, archive the change:
  - `openspec archive landing-page --yes`
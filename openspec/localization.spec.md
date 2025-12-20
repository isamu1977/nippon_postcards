# Project Context

## Purpose
Nippon Postcards is a SvelteKit web app for browsing and purchasing Japanese postcard **collections**. Users can select one of 3 collections (Mount Fuji / Castles / World Heritage), add cards to cart, enter recipient info, apply discounts, and proceed to Stripe checkout.

A key requirement is **site localization**: all copy must be translated via i18n, language choice must persist, and the UI must expose a language selector (Footer required, Header recommended).

## Tech Stack
- **Frontend Framework**: SvelteKit (Svelte)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Localization**: `sveltekit-i18n`
- **Package Manager**: npm

## Important Constraints
- The codebase currently has hardcoded English strings in many pages/components.
- Navigation must not “lose” the selected language.
- Language selector must work on desktop and mobile.
- Keep implementation straightforward; avoid introducing a second i18n system.

---

# Task: Implement Localization Using `sveltekit-i18n` + Language Selector

## High-Level Requirements (Do Not Skip)
1) **Single source of truth** for translations using `sveltekit-i18n`.
2) Add **3 locales**: `en`, `pt`, `ja`.
3) Implement a **locale routing strategy** that is consistent across the app:
   - Choose **ONE**: locale prefix in URL (recommended) OR cookie-only routing.
4) Provide a language selector:
   - **Footer: required**
   - **Header: recommended** (implement if header exists; if not, create a minimal one only if the project already has a top nav component).
5) Persist language selection across refresh and future visits.
6) Update internal links so that they keep the current locale.
7) Replace hardcoded strings with translation keys on:
   - Home
   - Shop list `/shop`
   - Shop detail `/shop/[id]`
   - Cart `/cart`
   - Checkout `/checkout`
   - Header/Footer components that contain text

---

# Implementation Instructions (Detailed, Direct)

## Step 0 — Inspect Existing i18n Setup (Before Editing)
1) Search the repo for existing i18n files:
   - Look for paths like:
     - `src/lib/i18n/*`
     - `src/lib/i18n.ts`
     - `src/lib/locales/*`
     - `messages/*.json`
2) Identify how `sveltekit-i18n` is currently initialized:
   - Where `new i18n(...)` is created
   - How `loadTranslations` is called (usually in `+layout.ts` or `hooks`)
3) Identify if there is already:
   - locale detection logic
   - cookie storage
   - route prefixing

**Output expectation:** you must be able to point to the existing i18n entry file and loader code path.

If no i18n exists yet (despite dependency present), create it per Step 1.

---

## Step 1 — Choose and Implement Routing Strategy (Pick One)

### Strategy A (Recommended): Locale Prefix in URL
Target URLs:
- `/en/...` (default)
- `/pt/...`
- `/ja/...`

#### A1) Create a locale param matcher
Create:
- `src/params/lang.ts`

Behavior:
- Return `true` only for `en`, `pt`, `ja`.

Example logic:
- `['en','pt','ja'].includes(param)`

#### A2) Add a language-prefixed layout
Create a new route group:
- `src/routes/[lang=lang]/+layout.ts`
- `src/routes/[lang=lang]/+layout.svelte` (if needed)

In `+layout.ts`:
- Read `params.lang`
- Call `loadTranslations(lang, routeId)` per `sveltekit-i18n` recommended pattern
- Ensure returned `data` includes `lang` so the UI can show current language

#### A3) Redirect root `/` to default locale
Implement:
- `src/routes/+page.server.ts` or `src/hooks.server.ts`
- Redirect `/` → `/en` (or last selected cookie lang if present)

Also redirect non-prefixed routes:
- `/shop` → `/en/shop` (or cookie lang)

**Important:** pick one place (hooks OR route server load) and keep redirects centralized.

#### A4) Persist selection
On each request:
- if cookie `lang` exists and user hits `/en/...`, keep it as is (do not force change)
- if user visits `/` or non-prefixed route, redirect using cookie lang if available, else `en`

On language switch:
- set cookie `lang=<newLang>` (path `/`, long max-age)

---

### Strategy B (Simpler): Cookie-only (No URL change)
If you choose this:
- Do NOT add `[lang]` routes.
- Store chosen locale in cookie + in store.
- Ensure every page calls `loadTranslations(currentLang, routeId)`.

**But:** If you pick Strategy B, you must still ensure that deep links keep language and refresh works.

---

## Step 2 — Define Translation Files and Keys
Create translation dictionaries for:
- `en`
- `pt`
- `ja`

Use either JSON or TS objects depending on existing convention.

### Required namespaces/sections (minimum)
- `common`
- `nav`
- `footer`
- `home`
- `shop`
- `product` (shop detail)
- `cart`
- `checkout`

### Must include keys for (minimum)
- Global:
  - `nav.shop`, `nav.cart`, `nav.checkout` (if present)
  - `common.addToCart`, `common.backToShop`, `common.viewCollection`
  - `common.language`, `common.randomSelectionTitle`, `common.randomSelectionBody`
- Home:
  - `home.howItWorks.title`, `home.howItWorks.subtitle`
  - Step labels/descriptions (4 steps)
- Shop list:
  - title/subtitle
  - banner random selection text
  - per-card “Random design…” text
- Shop detail:
  - “Random selection” box content
  - “About this collection”
  - “What you’ll receive”
  - “Perfect for”
- Cart:
  - headings and placeholders
  - coupon UI (apply/remove)
  - validation alerts text (if you keep alerts)
- Checkout:
  - headings and any help text

**Rule:** No user-facing strings remain hardcoded in pages/components after this pass.

---

## Step 3 — Implement a Translation Helper Usage Pattern
Use the standard `sveltekit-i18n` store pattern (whatever the project already uses), typically:

- `import { t } from '$lib/i18n';`
- Use `$t('key.path')` in templates.

If the project uses `translations` store differently, follow the existing convention but ensure it is consistent across pages.

---

## Step 4 — Update Page Components to Use Translation Keys

### 4.1 Home: `HowItWorksSection.svelte`
Replace:
- hardcoded step titles/descriptions
with keys:
- `home.howItWorks.steps.chooseCollection.title`
- `home.howItWorks.steps.chooseCollection.description`
etc.

Ensure the Step 1 copy matches the “random within collection” rule:
- “Choose a collection… we pick a design at random…”

### 4.2 Shop list: `src/routes/shop/+page.svelte`
Replace:
- page title/subtitle
- banner text
- per-card line “Random design…”
- button labels “View”, “Add to cart”, “Go to cart”, etc.

Also ensure internal navigation uses localized paths:
- If Strategy A: links must become `/${currentLang}/shop/${p.id}` etc.

### 4.3 Shop detail: `src/routes/shop/[id]/+page.svelte`
Replace:
- “About this collection” section heading
- “Random selection” box
- “What you’ll receive”
- “Perfect for”
- Buttons (“Add to cart”, “Back to shop”)

For category-specific richer content:
- Either:
  - store the per-collection copy in translations (recommended), keyed by `product.collections.mount_fuji.*`
  - OR keep a minimal local mapping but translation strings must come from i18n

Do NOT hardcode English category descriptions in the Svelte file.

### 4.4 Cart: `src/routes/cart/+page.svelte`
Replace:
- “Your cart”, “Review items…”
- “Use same recipient…”
- “Coupon code”, “Apply”, “Remove”
- Field labels: recipient name/address/message
- “Proceed to checkout”, “Clear cart”
- Random selection disclosure
- Empty state text + button

### 4.5 Checkout: `src/routes/checkout/+page.svelte`
Replace all visible copy with i18n keys.

---

## Step 5 — Language Selector Component (Footer Required)
Create a reusable component:
- `src/lib/components/LanguageSelector.svelte`

### Requirements
- Displays available locales: `en`, `pt`, `ja`
- Shows current locale (from route params or i18n store)
- On change:
  - sets cookie `lang`
  - navigates to the same page but with new locale (Strategy A), preserving the remaining path

#### Strategy A behavior (locale prefix)
If current URL is:
- `/en/shop/mount-fuji`
and user selects `pt`:
- navigate to `/pt/shop/mount-fuji`

Edge cases:
- If path does not include locale (should not happen after redirects), fallback to `/${newLang}`.

### UI
- Use Tailwind styling
- Footer version: include label “Language” and show full names:
  - English, Português, 日本語
- Use `<select>` for simplicity and accessibility.

---

## Step 6 — Add Selector to Footer and (Optionally) Header
1) Find Footer component (or create one if missing) and place:
   - `<LanguageSelector variant="footer" />` (or similar prop)
2) Find Header component:
   - If exists, place a compact version:
     - `<LanguageSelector variant="header" />`
   - If no header exists, do NOT create a new global header unless the site already has a nav pattern; keep footer-only to avoid scope creep.

---

## Step 7 — Ensure Links Preserve Locale (Strategy A)
Search for all occurrences of:
- `href="/shop"`
- `goto("/shop")`
- `href="/cart"`
- `goto("/cart")`
etc.

Replace with locale-aware versions:
- `href="/{lang}/shop"` pattern via a helper.

Create a tiny helper:
- `src/lib/i18n/route.ts` (or similar)
- `localizePath(path, lang)` that returns `/${lang}${path.startsWith('/') ? '' : '/'}${path}`

Use it consistently across pages/components.

---

## Step 8 — Verification Checklist (Must Pass)
1) Visiting `/` redirects to `/<savedLang>` or `/en`.
2) Visiting `/shop` redirects to `/<lang>/shop`.
3) Switching language in Footer updates:
   - URL (if Strategy A)
   - text on the page
   - persists after refresh
4) Internal navigation keeps locale.
5) No console errors for missing translation keys.
6) `pnpm check` / `svelte-check` passes.

---

# Deliverables
1) Working i18n implementation using `sveltekit-i18n` with locales: `en`, `pt`, `ja`.
2) Footer language selector implemented and styled.
3) Header language selector implemented if header exists.
4) All major routes/pages migrated from hardcoded strings to translation keys.
5) Locale-aware navigation and persisted language selection.

---

# Notes / Non-Goals (Do Not Implement Now)
- Do not implement currency switching.
- Do not implement automatic geo-detection beyond basic cookie fallback.
- Do not rewrite the entire routing unless required for Strategy A.
- Do not introduce a second i18n library.

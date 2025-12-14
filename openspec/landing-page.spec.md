# Landing Page – Nippon Postcards

## 🎯 Goal

Create a single-page landing for Nippon Postcards, in **English as the primary language**, that clearly explains the service:

> The user chooses a Japanese postcard, we print the address (for safety/legibility), print or write the message, stamp it and post it from **Aichi Prefecture, Japan**.

The page must be:
- Minimalist, with subtle **red accents**
- Focused on **conversion**: lead the user to “Choose a postcard” / start a purchase flow
- Ready to be internationalized via the existing `sveltekit-i18n` setup in `src/lib/translations`, but **without** changing the current i18n implementation.

---

## 📁 Existing Structure (must be respected)

- Layout: `src/routes/+layout.svelte`
- Landing route: `src/routes/+page.svelte`
- i18n:
  - `src/lib/translations/index.ts`
  - `src/lib/translations/translations.ts`
  - `src/lib/translations/utils.ts`
  - `src/lib/translations/{en,fr,de,es,it,pt}/common.json`

Do **not**:
- Introduce `[lang]` segments in routes.
- Replace or significantly refactor the current i18n mechanism.
- Move `+layout.svelte` or `+page.svelte` out of `src/routes/`.

The landing should be implemented **inside this structure**.

---

## 🧱 Page Sections & Content

### 1. HeroSection

**File**: `src/lib/components/landing/HeroSection.svelte`

**Purpose**: Immediately explain the service and push the user to action.

**Content (English, base copy):**
- Headline:
  - `"Japanese postcards mailed from Aichi to the world"`
- Subheadline:
  - `"You choose the postcard, we print the address, add your message, stamp it and mail it from Japan."`
- Primary CTA button:
  - `"Choose a postcard"`
- Secondary CTA link/button:
  - `"See how it works"`
- Small line about origin:
  - `"All postcards are mailed from Aichi Prefecture, Japan."`

**Visual:**
- Minimal layout on a light background.
- 1–3 postcard images (placeholder for now), arranged neatly.
- Red accent on the primary button and a few small UI elements (border, underline, etc.).

**Tech notes:**
- No hard dependency on i18n here yet, but the text should be structured so that later it can be replaced with `{$t('landing.hero.title')}`, etc.

---

### 2. TrustStrip

**File**: `src/lib/components/landing/TrustStrip.svelte`

**Purpose**: Reinforce key selling points right under the Hero.

**Content:**
Three short items in a horizontal (or responsive) strip:

1. `"US$ 15 per postcard"`
2. `"Mailed within 24 hours (business days) from Aichi, Japan"`
3. `"Secure payments with Stripe"`

**Design:**
- Very minimal, small icons or simple badges.
- Background slightly different (e.g. very light gray) from the main background.

---

### 3. HowItWorksSection

**File**: `src/lib/components/landing/HowItWorksSection.svelte`

**Purpose**: Explain the unusual service model in a **visual, step-by-step** way.

**Layout:**
- 4 "cards" in a row (or vertical on mobile), each representing one step.

**Steps (title + description):**

1. **"You choose the postcard"**  
   `"Pick a design from our categories: Japanese Castles, Japan World Heritage Sites or Mount Fuji."`

2. **"We print the address for you"**  
   `"You provide the recipient's address and we print it for maximum legibility and safety."`

3. **"Your message, personal or suggested"**  
   `"Write your own message or let us use one of our suggested texts."`

4. **"Stamped and mailed from Japan"**  
   `"We stamp the postcard and mail it from Aichi Prefecture, Japan."`

**Visual:**
- Each card can use a placeholder image (e.g. blank postcard, postcard with printed address, postcard with text, postcard with stamp).
- Red accents kept subtle (e.g. underline or step number).

---

### 4. CategoriesSection

**File**: `src/lib/components/landing/CategoriesSection.svelte`

**Purpose**: Showcase the three current categories.

**Categories:**

1. **"Japanese Castles"**  
   `"Postcards featuring historic castles across Japan."`

2. **"Japan World Heritage Sites"**  
   `"Scenes from UNESCO World Heritage sites in Japan."`

3. **"Mount Fuji"**  
   `"Iconic views of Mount Fuji in different seasons and moods."`

Each category card should include:
- Title
- Short description
- Space for an image (placeholder now)
- Optional button: `"View postcards in this category"` (even if it scrolls to a future section or is not fully wired yet).

---

### 5. PricingSection

**File**: `src/lib/components/landing/PricingSection.svelte`

**Purpose**: Make the pricing model extremely clear.

**Content:**

- Main title:
  - `"Simple, transparent pricing"`
- Text:
  - `"Each postcard costs US$ 15 with mailing included."`
- Highlight box for first purchase:
  - `"20% off your first order"`
  - `"The discount is applied automatically at checkout."` (copy can be adjusted depending on the future implementation)
- Additional notes (small text):
  - `"Postcards are mailed within 24 business hours from Aichi Prefecture, Japan."`
  - `"Delivery time depends on the destination country and local postal services."`

Design: subtle background, maybe a card-style central box.

---

### 6. WhyPhysicalSection

**File**: `src/lib/components/landing/WhyPhysicalSection.svelte`

**Purpose**: Sell the emotional/experiential value.

**Suggested bullets:**

- `"A real physical gesture in a digital world."`
- `"Real Japanese postage and cancellation marks."`
- `"Perfect for Japan lovers, collectors and special occasions."`

Layout: a short section with 3 columns/bullets.

---

### 7. FaqSection

**File**: `src/lib/components/landing/FaqSection.svelte`

**Purpose**: Address main doubts/objections.

**Questions & answers (English):**

1. **"Is the postcard sent directly to the recipient?"**  
   `"Yes. You provide the recipient's address and we mail the postcard directly from Japan."`

2. **"Can I send the postcard to myself?"**  
   `"Yes. You can enter your own address and receive the postcard at home."`

3. **"Is the address handwritten or printed?"**  
   `"We print the address to ensure maximum legibility and reduce delivery errors."`

4. **"Who writes the message?"**  
   `"You can write your own message or choose to use one of our suggested texts."`

5. **"How long does delivery take?"**  
   `"It depends on the destination country and postal services, but typically ranges from X to Y weeks."`  
   (replace X/Y later with actual estimates)

6. **"Does the US$ 15 price include mailing?"**  
   `"Yes. The price is per postcard, with mailing included."`

FAQ layout: simple accordion or list of Q&A.

---

### 8. FinalCtaSection

**File**: `src/lib/components/landing/FinalCtaSection.svelte`

**Purpose**: Last strong push to action.

**Content:**

- Title:
  - `"Ready to send a postcard from Japan?"`
- Text:
  - `"Choose a design, write your message and we will mail it from Aichi, Japan."`
- CTA button:
  - `"Choose a postcard now"`

---

## 🧩 Composition in `+page.svelte`

**File to update**: `src/routes/+page.svelte`

Replace the current placeholder content with imports and usage of the landing components, in the following order:

1. `HeroSection`
2. `TrustStrip`
3. `HowItWorksSection`
4. `CategoriesSection`
5. `PricingSection`
6. `WhyPhysicalSection`
7. `FaqSection`
8. `FinalCtaSection`

Example (pseudocode):

```svelte
<script lang="ts">
  import HeroSection from "$lib/components/landing/HeroSection.svelte";
  import TrustStrip from "$lib/components/landing/TrustStrip.svelte";
  import HowItWorksSection from "$lib/components/landing/HowItWorksSection.svelte";
  import CategoriesSection from "$lib/components/landing/CategoriesSection.svelte";
  import PricingSection from "$lib/components/landing/PricingSection.svelte";
  import WhyPhysicalSection from "$lib/components/landing/WhyPhysicalSection.svelte";
  import FaqSection from "$lib/components/landing/FaqSection.svelte";
  import FinalCtaSection from "$lib/components/landing/FinalCtaSection.svelte";
</script>

<HeroSection />
<TrustStrip />
<HowItWorksSection />
<CategoriesSection />
<PricingSection />
<WhyPhysicalSection />
<FaqSection />
<FinalCtaSection />
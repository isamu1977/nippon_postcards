## ADDED Requirements

### Requirement: Landing Page Hero Section
The frontend SHALL display a hero section on the root route `/` introducing Nippon Postcards.

#### Scenario: Default language
- **WHEN** a user visits `/` with the default locale
- **THEN** the page shows a localized hero title and subtitle using the i18n system
- **AND** a primary CTA button is visible above the fold

#### Scenario: Small viewport
- **WHEN** the viewport width is less than 640px
- **THEN** the hero content is stacked vertically
- **AND** text remains readable without horizontal scrolling

### Requirement: Featured Postcard Grid
The landing page SHALL display a grid of featured postcards.

#### Scenario: Desktop viewport
- **WHEN** the viewport width is at least 1024px
- **THEN** at least 6 featured postcards are visible in a multi‑column grid
- **AND** each postcard shows an image (or placeholder), a localized title, and a price

#### Scenario: Mobile viewport
- **WHEN** the viewport width is less than 640px
- **THEN** postcards are displayed in a single‑column layout
- **AND** tap targets are large enough for comfortable interaction

### Requirement: Landing Page Footer
The landing page SHALL include a footer with basic navigation and language context.

#### Scenario: Footer content
- **WHEN** a user scrolls to the bottom of the landing page
- **THEN** they see localized “About” and “Contact” entries
- **AND** a label indicating the language selector or current language

### Requirement: Landing Page Localization
The landing page SHALL use the project’s i18n system for all user‑visible text.

#### Scenario: Translation keys defined
- **WHEN** the landing page is rendered
- **THEN** all visible strings are sourced from translation keys
- **AND** at minimum the `en` locale contains values for these keys:
  - `common.heroTitle`
  - `common.heroSubtitle`
  - `common.heroCtaPrimary`
  - `landing.featuredSectionTitle`
  - `landing.featuredSectionSubtitle`
  - `landing.footerAbout`
  - `landing.footerContact`
  - `landing.footerLanguageLabel`
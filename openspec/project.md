# Project Context

## Purpose
Nippon Postcards is a web application dedicated to Japanese postcards, likely serving as an e-commerce platform or digital gallery. It aims to provide a seamless experience for browsing and potentially purchasing postcards.

## Tech Stack
- **Frontend Framework**: SvelteKit (Svelte 5)
- **Styling**: Tailwind CSS 4, Tailwind Variants, Lucide Svelte (Icons)
- **Language**: TypeScript
- **Backend / BaaS**: Supabase (Auth, Database, Storage, Edge Functions)
- **Runtime**: Node.js (Dev), Deno (Supabase Edge Functions)
- **Package Manager**: pnpm
- **Build Tool**: Vite

## Project Conventions

### Code Style
- **Formatting**: Prettier
- **Linting**: ESLint, svelte-check
- **Svelte**: Usage of Svelte 5 Runes syntax is expected given the version.
- **CSS**: Utility-first with Tailwind CSS 4.

### Architecture Patterns
- **Monorepo-like Structure**:
    - `web/`: Frontend SvelteKit application.
    - `supabase/`: Backend configuration, migrations, and edge functions.
- **Edge Functions**: Business logic often resides in Supabase Edge Functions (Deno).

### Testing Strategy
- `svelte-check` for type checking.
- `vitest` (implied standard for Vite projects, though not explicitly seen in top-level deps yet, usually good practice to assume or add).

### Git Workflow
- Standard feature-branch workflow.

## Domain Context
- **Product**: "Nippon Postcards" implies a focus on Japanese culture and imagery.
- **Entities**: Users, Postcards, Orders (implied by checkout session function).

## Important Constraints
- **Supabase**: Relies heavily on Supabase ecosystem (Auth, Postgres, Realtime).
- **TypeScript**: Strict mode is enabled.

## External Dependencies
- **Supabase**: Core infrastructure.
- **Stripe**: Implied by `create-checkout-session` function name.

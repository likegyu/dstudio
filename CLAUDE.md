# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start dev server (Next.js on port 3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework is configured. Deployed on Vercel.

## Architecture

**Next.js 16 App Router** marketing website for dstudio, an app studio that builds "to dot" (a habit heatmap calendar app). Uses React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

### Routing & i18n

All pages live under `src/app/[locale]/`. The middleware (`src/middleware.ts`) detects the browser's Accept-Language header and redirects bare paths to a locale-prefixed version.

- Locales: `ko` (default), `en`, `ja` — defined in `src/i18n/config.ts`
- Translation files: `src/i18n/dictionaries/{ko,en,ja}.json`
- Dictionary loading: `src/i18n/getDictionary.ts` — async dynamic import per locale
- The `Dictionary` type is inferred from the Korean JSON structure

### Server vs Client Components

- `src/app/[locale]/page.tsx` and `src/app/[locale]/layout.tsx` are **server components** that load dictionaries and pass them as props
- All components in `src/components/` are **client components** (`"use client"`) that receive a `dict` prop for i18n content
- Async `params` in server components are awaited (Next.js 16 pattern: `params` is a Promise)

### Styling

- Tailwind CSS v4 with custom theme defined via CSS custom properties in `src/app/globals.css` (not a JS config)
- Color tokens: `--color-primary`, `--color-cream-white`, `--color-text-primary`, etc. — used as Tailwind classes like `bg-primary`, `text-text-secondary`
- Fonts: Zilla Slab (Google Fonts via `next/font`), Nanum Square Round (CDN)
- Custom keyframe animations: `blink`, `bounce-gentle`, `underline-expand`
- Responsive breakpoint: primarily `md:` (mobile-first)

### Key Patterns

- `src/hooks/useScrollAnimation.ts` — Intersection Observer hook for scroll-triggered fade-in effects
- Framer Motion is used for scroll-triggered section animations
- `prefers-reduced-motion` is respected (disables typing animation, shows final state)
- No API routes, no database, no external state management — purely a static marketing site

## Design System

Detailed design spec lives in `DESIGN.md` (Korean). Key references:
- Color palette, typography scale, spacing tokens
- Section-by-section layout specs with exact spacing values
- Hero typing animation sequence (D → Daily/Dot/Diary/Design → dstudio)
- Interaction specs (hover effects, scroll animations, timing)
- Tone & voice: 해요체 (friendly but polite Korean), warm, no exaggeration

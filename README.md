## Velas & Aroma

E-commerce experience for handcrafted soy candles made in Quito. Built with the Next.js App Router and a custom dark/light theme that matches the brand identity.

### Highlights
- Centralized content in `src/data` (products, collections, site info) that feeds the storefront pages.
- Global providers for cart persistence (`localStorage`) and theme toggling.
- Responsive navigation with a mobile drawer menu and theme switcher.
- Tailwind CSS (v4) design tokens mapped in `globals.css` for quick styling adjustments.

### Tech Stack
- Next.js 15 (App Router) + React 19
- Tailwind CSS v4 via `@tailwindcss/postcss`
- TypeScript with strict settings and path aliases (`@/*`)
- Vitest + Testing Library for unit tests

### Project Structure
```
src/
  app/            # App Router pages and layout
  components/     # UI building blocks and providers
  data/           # JSON/TS data sources
  app/tienda/     # Store page + filter logic
  components/__tests__/  # Unit tests for providers
```

### Scripts
- `npm run dev` – start the dev server (Turbopack)
- `npm run build` – production build
- `npm run start` – serve the built app
- `npm run lint` – run ESLint
- `npm run test` – execute Vitest suite (jsdom)

### Development Setup
```bash
npm install
npm run dev
# visit http://localhost:3000
```

### Testing
```bash
npm test          # watch mode by default
npm test -- --run # single run
```

The tests cover cart behaviour (quantity merges, persistence), theme persistence, and product filtering logic.

### Deployment Notes
- Update environment variables in `next.config.ts` if needed (currently default config).
- Static assets live under `public/` (including product imagery and branding).
- Since the cart relies on `localStorage`, ensure pages that use the provider remain client components (`"use client"`).
